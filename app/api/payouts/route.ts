import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const user = await prisma.user.findUnique({
            where: { email: session.user.email },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const amount = Number(user.balance);

        if (amount < 50) {
            return NextResponse.json({ message: "Minimum withdrawal is 50€" }, { status: 400 });
        }

        // Create Payout Request
        const payout = await prisma.payout.create({
            data: {
                amount: amount,
                status: "PENDING",
                method: "BANK_TRANSFER",
                userId: user.id
            }
        });

        // Reset User Balance
        await prisma.user.update({
            where: { id: user.id },
            data: {
                balance: 0
            }
        });

        return NextResponse.json({ message: "Payout requested successfully", payout });

    } catch (error) {
        console.error("Payout error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
