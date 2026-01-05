import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-foreground selection:text-background">

      {/* Header Minimaliste */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
            Passive Drop
          </div>
          <Link
            href="/login"
            className="text-xs font-medium text-muted hover:text-foreground transition-colors uppercase tracking-wider"
          >
            Connexion
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center relative px-6">

        {/* Glow Effect ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl w-full text-center space-y-12">

          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-balance">
              Infrastructure de<br />
              <span className="text-white/40">diffusion passive.</span>
            </h1>

            <p className="text-sm md:text-base text-muted max-w-md mx-auto leading-relaxed">
              Accès privé. Aucune maintenance. Revenus attribués.<br />
              Une architecture pensée pour le silence.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />

            <Link
              href="/register"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-sm bg-foreground px-8 font-medium text-background transition-all hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              <span className="text-xs uppercase tracking-widest mr-2">Initialiser un accès</span>
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>

            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
              Disponibilité immédiate · Aucun abonnement
            </p>
          </div>

        </div>
      </main>

      <footer className="w-full border-t border-white/5 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
          <div>© 2026 Passive Drop Protocol</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-400 transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-zinc-400 transition-colors">CGU</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
