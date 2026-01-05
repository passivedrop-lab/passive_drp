import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, CreditCard, DollarSign, MousePointer2 } from "lucide-react"
import { WithdrawalButton } from "@/components/withdrawal-button"

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        redirect("/login")
    }

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
        include: {
            _count: {
                select: { orders: true }
            }
        }
    })

    if (!user) {
        redirect("/login")
    }

    // Construct the referral link
    // In production, use process.env.NEXT_PUBLIC_APP_URL
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
    const referralLink = `${appUrl}/ref/${user.referralCode}`

    return (
        <div className="flex flex-col space-y-8">

            {/* Header Section */}
            <div className="flex flex-col space-y-2">
                <h2 className="text-3xl font-light tracking-tight text-foreground">Dashboard</h2>
                <p className="text-muted text-sm">Vue d'ensemble de vos performances.</p>
            </div>

            {/* Referral Link Card */}
            <Card className="bg-surface/50 border-white/5">
                <CardHeader className="pb-2">
                    <CardTitle className="text-xs font-medium uppercase tracking-widest text-muted">Votre lien d'accès</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 p-3 bg-background rounded-sm border border-border text-sm font-mono text-zinc-400 select-all">
                            {referralLink}
                        </div>
                        <Button variant="outline" size="icon" className="shrink-0">
                            <Copy className="h-4 w-4" />
                        </Button>
                    </div>
                    <p className="mt-2 text-[10px] text-zinc-600 uppercase tracking-widest">
                        Partagez ce lien unique. Les commissions sont automatiques.
                    </p>
                </CardContent>
            </Card>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-3">

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Solde Disponible</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{Number(user.balance).toFixed(2)} €</div>
                        <p className="text-xs text-muted mb-4">Prêt à être retiré</p>
                        <WithdrawalButton balance={Number(user.balance)} />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Ventes Générées</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{user._count.orders}</div>
                        <p className="text-xs text-muted">Transactions validées</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Trafic</CardTitle>
                        <MousePointer2 className="h-4 w-4 text-muted" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">--</div>
                        <p className="text-xs text-muted">Clics uniques (Bientôt disponible)</p>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
