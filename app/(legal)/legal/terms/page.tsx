import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Conditions Générales d'Utilisation",
    description: "Conditions d'utilisation de Passive Drop",
}

export default function TermsPage() {
    return (
        <div className="prose prose-invert prose-zinc max-w-none">
            <h1 className="text-3xl font-light tracking-tight mb-8">Conditions Générales d'Utilisation</h1>
            <p className="text-sm text-muted mb-8">Dernière mise à jour : 5 janvier 2026</p>

            <section className="space-y-6">
                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">1. Acceptation des Conditions</h2>
                    <p className="text-muted leading-relaxed">
                        En accédant et en utilisant Passive Drop (ci-après "la Plateforme"), vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation.
                        Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser la Plateforme.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">2. Description du Service</h2>
                    <p className="text-muted leading-relaxed">
                        Passive Drop est une plateforme de distribution d'offres numériques permettant aux utilisateurs de générer des liens d'affiliation uniques.
                        Les utilisateurs peuvent partager ces liens et recevoir une commission de 50% sur les ventes générées via leur lien personnel.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">3. Inscription et Compte Utilisateur</h2>
                    <p className="text-muted leading-relaxed mb-3">
                        Pour utiliser la Plateforme, vous devez créer un compte en fournissant une adresse email valide et un mot de passe sécurisé.
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                        <li>Vous êtes responsable de la confidentialité de vos identifiants</li>
                        <li>Vous devez avoir au moins 18 ans pour créer un compte</li>
                        <li>Un seul compte par personne est autorisé</li>
                        <li>Toute activité frauduleuse entraînera la suspension immédiate du compte</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">4. Système d'Affiliation et Commissions</h2>
                    <p className="text-muted leading-relaxed mb-3">
                        Chaque utilisateur reçoit un lien d'affiliation unique lors de l'inscription. Les règles suivantes s'appliquent :
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                        <li>Commission de 50% sur chaque vente générée via votre lien</li>
                        <li>Les commissions sont créditées automatiquement après validation du paiement</li>
                        <li>Retrait minimum : 50€</li>
                        <li>Délai de traitement des retraits : 5-10 jours ouvrés</li>
                        <li>Auto-référencement et manipulation interdits</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">5. Paiements et Remboursements</h2>
                    <p className="text-muted leading-relaxed mb-3">
                        Les paiements sont traités via Stripe et/ou des solutions de paiement en cryptomonnaie (USDT).
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                        <li>Tous les prix sont en euros (€)</li>
                        <li>Les produits numériques ne sont pas remboursables après livraison</li>
                        <li>En cas de problème technique, contactez le support dans les 48h</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">6. Propriété Intellectuelle</h2>
                    <p className="text-muted leading-relaxed">
                        Tous les contenus, designs, logos et marques présents sur la Plateforme sont la propriété exclusive de Passive Drop.
                        Toute reproduction ou utilisation non autorisée est strictement interdite.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">7. Limitation de Responsabilité</h2>
                    <p className="text-muted leading-relaxed">
                        Passive Drop ne garantit pas de revenus spécifiques. Les résultats dépendent de l'effort et de la stratégie de chaque utilisateur.
                        La Plateforme est fournie "en l'état" sans garantie d'aucune sorte.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">8. Suspension et Résiliation</h2>
                    <p className="text-muted leading-relaxed">
                        Nous nous réservons le droit de suspendre ou de résilier votre compte en cas de violation des présentes conditions,
                        notamment en cas de fraude, spam, ou comportement abusif.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">9. Modifications des Conditions</h2>
                    <p className="text-muted leading-relaxed">
                        Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs seront notifiés par email
                        des changements importants. L'utilisation continue de la Plateforme après modification constitue une acceptation des nouvelles conditions.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">10. Loi Applicable et Juridiction</h2>
                    <p className="text-muted leading-relaxed">
                        Les présentes conditions sont régies par le droit français. Tout litige sera soumis à la juridiction exclusive des tribunaux français.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">11. Contact</h2>
                    <p className="text-muted leading-relaxed">
                        Pour toute question concernant ces conditions, veuillez nous contacter à : <span className="text-foreground">legal@passivedrop.com</span>
                    </p>
                </div>
            </section>
        </div>
    )
}
