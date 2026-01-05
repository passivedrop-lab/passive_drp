export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background selection:bg-foreground selection:text-background">
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <div className="mr-4 flex">
                        <a className="mr-6 flex items-center space-x-2 font-bold uppercase tracking-widest text-sm" href="/admin">
                            <span>Admin Control</span>
                        </a>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <nav className="flex items-center space-x-6 text-sm font-medium">
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/admin/users">Users</a>
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/admin/payouts">Payouts</a>
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/admin/settings">Settings</a>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="flex-1 space-y-4 p-8 pt-6">
                {children}
            </main>
        </div>
    )
}
