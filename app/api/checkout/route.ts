import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-12-15.clover",
});

export async function POST(req: Request) {
    try {
        const { offerId, price, name } = await req.json();

        // Retrieve tracking cookie
        const cookieStore = await cookies();
        const referrerCode = cookieStore.get("passive_ref")?.value || "organic";

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "eur",
                        product_data: {
                            name: name,
                        },
                        unit_amount: Math.round(parseFloat(price) * 100),
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/dashboard?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/offer/${offerId}?canceled=true`,
            metadata: {
                referrerCode: referrerCode, // CRITICAL: This links the sale to the partner
                offerId: offerId,
                type: "digital_product"
            },
        });

        return NextResponse.json({ url: session.url });
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
