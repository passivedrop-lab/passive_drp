import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ referralCode: string }> }
) {
    const referralCode = (await params).referralCode
    const cookieStore = await cookies()

    // Logic: Attribution
    // Set the referral code in a cookie for 30 days
    cookieStore.set("passive_ref", referralCode, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
        httpOnly: true,
        sameSite: "lax",
    })

    // Logic: Rotation / Selection
    // Check if user has visited before
    const visits = cookieStore.get("passive_visits")
    let visitCount = visits ? parseInt(visits.value) : 0

    // Increment visit count
    cookieStore.set("passive_visits", (visitCount + 1).toString(), {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
    })

    // Determine Offer
    let targetOffer = "offer-1" // Default: Impulse (19€)

    if (visitCount >= 1) {
        targetOffer = "offer-2" // Second visit: Analysis (39€)
    }

    // Random Jitter (10% chance for Offer 3)
    if (Math.random() > 0.9) {
        targetOffer = "offer-3"
    }

    const url = request.nextUrl.clone()
    url.pathname = `/offer/${targetOffer}`

    return NextResponse.redirect(url)
}
