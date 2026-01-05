import Link from "next/link"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background selection:bg-foreground selection:text-background">
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
                    <div className="mr-4 flex">
                        <Link className="mr-6 flex items-center space-x-2 font-bold uppercase tracking-widest text-sm" href="/dashboard">
                            <span>Passive Drop</span>
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        {/* Add User Menu later */}
                        <span className="text-xs text-muted-foreground uppercase tracking-widest">Interface Utilisateur</span>
                    </div>
                </div>
            </header>
            <main className="flex-1 space-y-4 p-8 pt-6">
                {children}
            </main>
        </div>
    )
}
