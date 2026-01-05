import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité de Passive Drop",
}

export default function PrivacyPage() {
    return (
        <div className="prose prose-invert prose-zinc max-w-none">
            <h1 className="text-3xl font-light tracking-tight mb-8">Politique de Confidentialité</h1>
            <p className="text-sm text-muted mb-8">Dernière mise à jour : 5 janvier 2026</p>

            <section className="space-y-6">
                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">1. Introduction</h2>
                    <p className="text-muted leading-relaxed">
                        Passive Drop (ci-après "nous", "notre" ou "la Plateforme") s'engage à protéger la confidentialité de vos données personnelles.
                        Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations conformément
                        au Règlement Général sur la Protection des Données (RGPD) et aux lois applicables.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">2. Données Collectées</h2>
                    <p className="text-muted leading-relaxed mb-3">
                        Nous collectons les données suivantes lorsque vous utilisez notre Plateforme :
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                        <li><strong>Données d'identification :</strong> Adresse email, mot de passe (hashé)</li>
                        <li><strong>Données financières :</strong> Solde de commission, historique des transactions</li>
                        <li><strong>Données d'affiliation :</strong> Code de parrainage unique, liens générés</li>
                        <li><strong>Données de paiement :</strong> Traitées par Stripe (nous ne stockons pas les informations de carte bancaire)</li>
                        <li><strong>Données techniques :</strong> Adresse IP, cookies, données de navigation</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">3. Finalité du Traitement</h2>
                    <p className="text-muted leading-relaxed mb-3">
                        Vos données sont utilisées pour les finalités suivantes :
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                        <li>Création et gestion de votre compte utilisateur</li>
                        <li>Traitement des paiements et des commissions d'affiliation</li>
                        <li>Attribution des ventes via votre lien de parrainage</li>
                        <li>Communication concernant votre compte et les transactions</li>
                        <li>Prévention de la fraude et sécurité de la Plateforme</li>
                        <li>Amélioration de nos services</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">4. Base Légale du Traitement</h2>
                    <p className="text-muted leading-relaxed">
                        Le traitement de vos données personnelles repose sur les bases légales suivantes :
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4 mt-3">
                        <li><strong>Exécution du contrat :</strong> Pour fournir les services d'affiliation</li>
                        <li><strong>Consentement :</strong> Pour l'utilisation de cookies non essentiels</li>
                        <li><strong>Intérêt légitime :</strong> Pour la prévention de la fraude et la sécurité</li>
                        <li><strong>Obligation légale :</strong> Pour la conformité fiscale et réglementaire</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">5. Partage des Données</h2>
                    <p className="text-muted leading-relaxed mb-3">
                        Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos données avec :
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                        <li><strong>Stripe :</strong> Pour le traitement des paiements (soumis à leur propre politique de confidentialité)</li>
                        <li><strong>Fournisseurs de services :</strong> Hébergement (Vercel), base de données (Supabase)</li>
                        <li><strong>Autorités légales :</strong> Si requis par la loi ou pour protéger nos droits</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">6. Cookies et Technologies Similaires</h2>
                    <p className="text-muted leading-relaxed mb-3">
                        Nous utilisons des cookies pour :
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                        <li><strong>Cookies essentiels :</strong> Authentification et sécurité (obligatoires)</li>
                        <li><strong>Cookies d'attribution :</strong> Suivi des ventes via liens de parrainage (30 jours)</li>
                        <li><strong>Cookies de session :</strong> Maintien de votre connexion</li>
                    </ul>
                    <p className="text-muted leading-relaxed mt-3">
                        Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">7. Durée de Conservation</h2>
                    <p className="text-muted leading-relaxed">
                        Nous conservons vos données personnelles aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales :
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4 mt-3">
                        <li><strong>Données de compte :</strong> Jusqu'à la suppression de votre compte + 1 an</li>
                        <li><strong>Données financières :</strong> 10 ans (obligation légale comptable)</li>
                        <li><strong>Cookies d'attribution :</strong> 30 jours maximum</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">8. Vos Droits (RGPD)</h2>
                    <p className="text-muted leading-relaxed mb-3">
                        Conformément au RGPD, vous disposez des droits suivants :
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4">
                        <li><strong>Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                        <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                        <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                        <li><strong>Droit à la limitation :</strong> Restreindre le traitement de vos données</li>
                        <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                        <li><strong>Droit d'opposition :</strong> S'opposer au traitement de vos données</li>
                        <li><strong>Droit de retrait du consentement :</strong> À tout moment, sans affecter la licéité du traitement antérieur</li>
                    </ul>
                    <p className="text-muted leading-relaxed mt-3">
                        Pour exercer ces droits, contactez-nous à : <span className="text-foreground">privacy@passivedrop.com</span>
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">9. Sécurité des Données</h2>
                    <p className="text-muted leading-relaxed">
                        Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données :
                    </p>
                    <ul className="list-disc list-inside text-muted space-y-2 ml-4 mt-3">
                        <li>Chiffrement des mots de passe (bcrypt)</li>
                        <li>Connexions HTTPS sécurisées</li>
                        <li>Hébergement sur des serveurs sécurisés</li>
                        <li>Accès limité aux données personnelles</li>
                        <li>Surveillance et détection des activités suspectes</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">10. Transferts Internationaux</h2>
                    <p className="text-muted leading-relaxed">
                        Vos données peuvent être transférées et stockées en dehors de l'Espace Économique Européen (EEE).
                        Dans ce cas, nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, Privacy Shield, etc.).
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">11. Modifications de la Politique</h2>
                    <p className="text-muted leading-relaxed">
                        Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications importantes seront notifiées
                        par email. La version à jour sera toujours disponible sur cette page avec la date de dernière mise à jour.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">12. Réclamations</h2>
                    <p className="text-muted leading-relaxed">
                        Si vous estimez que vos droits en matière de protection des données ne sont pas respectés, vous avez le droit de déposer
                        une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) en France.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-medium mt-8 mb-4">13. Contact</h2>
                    <p className="text-muted leading-relaxed">
                        Pour toute question concernant cette politique de confidentialité ou vos données personnelles :<br />
                        Email : <span className="text-foreground">privacy@passivedrop.com</span><br />
                        Responsable de la protection des données : DPO Passive Drop
                    </p>
                </div>
            </section>
        </div>
    )
}
