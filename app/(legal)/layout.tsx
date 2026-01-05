import Link from "next/link"

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background text-foreground">
            <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
                <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
                    <Link className="mr-6 flex items-center space-x-2 font-bold uppercase tracking-widest text-sm" href="/">
                        <span>Passive Drop</span>
                    </Link>
                </div>
            </header>
            <main className="flex-1 container max-w-4xl py-12 px-6">
                {children}
            </main>
            <footer className="w-full border-t border-white/5 py-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
                    <div>© 2026 Passive Drop Protocol</div>
                    <div className="flex gap-6">
                        <Link href="/legal/privacy" className="hover:text-zinc-400 transition-colors">Confidentialité</Link>
                        <Link href="/legal/terms" className="hover:text-zinc-400 transition-colors">CGU</Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
