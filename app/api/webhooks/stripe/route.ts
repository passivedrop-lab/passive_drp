import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe"; // Need to create lib/stripe to export the instance
import { prisma } from "@/lib/db";
import Stripe from "stripe";

// Create lib/stripe.ts first or instantiate here
const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-12-18.acacia",
});

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get("Stripe-Signature") as string;

    let event: Stripe.Event;

    try {
        event = stripeInstance.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET as string
        );
    } catch (error: any) {
        return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
    }

    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed") {
        // 1. Create Order
        const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
        const referrerCode = session.metadata?.referrerCode;
        const offerId = session.metadata?.offerId || "unknown";

        // Find Referrer
        let referrerUser = null;
        if (referrerCode && referrerCode !== "organic") {
            referrerUser = await prisma.user.findUnique({
                where: { referralCode: referrerCode }
            });
        }

        // Create Order Record
        const order = await prisma.order.create({
            data: {
                amount: amountTotal,
                status: "COMPLETED",
                paymentMethod: "STRIPE",
                paymentId: session.id,
                customerEmail: session.customer_details?.email,
                productId: offerId,
                referrerId: referrerUser?.id, // Link if exists
                product: {
                    connect: { id: offerId } // Ensure product exists in DB seed!
                }
            }
        });

        // 2. Attribution Logic (50% Commission)
        if (referrerUser && amountTotal > 0) {
            const commission = amountTotal * 0.50;

            await prisma.user.update({
                where: { id: referrerUser.id },
                data: {
                    balance: { increment: commission },
                    totalEarned: { increment: commission }
                }
            });

            console.log(`[Commission] Credited ${commission}€ to user ${referrerUser.id}`);
        }
    }

    return new NextResponse(null, { status: 200 });
}
