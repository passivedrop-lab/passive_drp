"use client"

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Zap, Loader2 } from "lucide-react"
import { useState, use } from "react"

const OFFERS = {
    "offer-1": {
        id: "offer-1",
        name: "Pack Digital Essentiel",
        price: "19.00",
        description: "Récupérez le contrôle de votre flux de données. Indispensable pour l'initialisation.",
        features: ["Livraison Instantanée", "Guide PDF + Templates", "Licence Unique"],
        type: "Digital Download"
    },
    "offer-2": {
        id: "offer-2",
        name: "Audit Algorithmique IA",
        price: "39.00",
        description: "Laissez l'IA scanner vos opportunités manquées. Rapport détaillé en 3 minutes.",
        features: ["Analyse par IA", "Rapport PDF Personnalisé", "Score de Performance"],
        type: "Service IA"
    },
    "offer-3": {
        id: "offer-3",
        name: "Cercle Restreint (7 Jours)",
        price: "49.00",
        description: "Accès temporaire au canal privé. Aucune prolongation possible. Le savoir brut.",
        features: ["Accès Discord Privé", "Signaux Temps Réel", "Communauté Fermée"],
        type: "Membership"
    }
}

export default function OfferPage({
    params,
}: {
    params: Promise<{ offerId: string }>
}) {
    const { offerId } = use(params)
    // @ts-ignore
    const offer = OFFERS[offerId]
    const [loading, setLoading] = useState(false)

    if (!offer) {
        notFound()
    }

    const handleCheckout = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(offer),
            })
            const body = await res.json()
            if (body.url) {
                window.location.href = body.url
            }
        } catch (e) {
            console.error(e)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">

            <div className="max-w-md w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

                <div className="text-center space-y-2">
                    <div className="inline-block px-3 py-1 border border-border rounded-full text-[10px] uppercase tracking-widest text-muted">
                        Offre Limitée
                    </div>
                    <h1 className="text-3xl font-light tracking-tight text-white">{offer.name}</h1>
                    <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                        {offer.description}
                    </p>
                </div>

                <Card className="bg-surface/50 border-white/5 backdrop-blur-sm">
                    <CardContent className="p-8 space-y-8">
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-light text-white">{offer.price}</span>
                            <span className="text-sm text-muted">€</span>
                        </div>

                        <div className="space-y-4">
                            {offer.features.map((feature: string, i: number) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-zinc-400">
                                    <Check className="h-4 w-4 text-green-500/50" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 pt-4">
                            <Button
                                className="w-full h-12 text-sm uppercase tracking-widest bg-white text-black hover:bg-zinc-200"
                                onClick={handleCheckout}
                                disabled={loading}
                            >
                                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Payer avec Carte
                            </Button>
                            <Button variant="outline" className="w-full h-12 text-sm uppercase tracking-widest border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900">
                                Payer avec USDT
                            </Button>
                        </div>

                        <div className="flex justify-center gap-6 pt-2">
                            <div className="flex items-center gap-2 text-[10px] text-zinc-600 uppercase tracking-wider">
                                <Shield className="h-3 w-3" />
                                Sécurisé
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-zinc-600 uppercase tracking-wider">
                                <Zap className="h-3 w-3" />
                                Instantané
                            </div>
                        </div>

                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
