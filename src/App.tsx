const navigation = ["Produit", "Comment ça marche", "Valeur", "Preuves", "FAQ"];

const problemItems = [
  "Perte de temps à publier sur plusieurs plateformes",
  "Photos, textes et formats à refaire à chaque fois",
  "Gestion du stock et des messages dispersée",
  "Manque de visibilité sans budget marketing",
];

const solutionItems = [
  "Une fiche produit unique, déclinée partout",
  "Modèles de descriptions et aide à la mise en page",
  "Stock, commandes et messagerie centralisés",
  "Mise en avant intelligente auprès d’acheteurs ciblés",
];

const steps = [
  {
    title: "Créez votre profil",
    text: "Ajoutez votre univers, vos matières, vos délais. L’app construit une page vitrine claire et pro.",
  },
  {
    title: "Importez vos créations",
    text: "Photos, modèles de fiches, suggestions de descriptions. Vous publiez en minutes, pas en heures.",
  },
  {
    title: "Publiez et matchez",
    text: "Diffusion multi-canaux, recommandations et mise en avant selon vos catégories.",
  },
  {
    title: "Suivez vos ventes",
    text: "Messages, commandes, statistiques et factures dans un seul espace.",
  },
];

const creatorValue = [
  {
    metric: "12 min",
    label: "pour mettre en ligne 5 produits",
  },
  {
    metric: "-35 %",
    label: "de temps administratif par semaine",
  },
  {
    metric: "+48 %",
    label: "de visibilité moyenne sur 30 jours",
  },
];

const buyerValue = [
  "Artisans vérifiés et profils transparents",
  "Pièces uniques avec histoire et matériaux",
  "Achat fluide, paiements sécurisés, suivi clair",
  "Découverte guidée selon les goûts",
];

const features = [
  {
    title: "Catalogue intelligent",
    text: "Organisation automatique par collection, matière, prix et disponibilité.",
  },
  {
    title: "Photos & médias",
    text: "Guides de prise de vue et recadrage automatique pour un rendu homogène.",
  },
  {
    title: "Messagerie intégrée",
    text: "Centralisez vos échanges clients, sans perdre le fil des commandes.",
  },
  {
    title: "Paiements & logistique",
    text: "Encaissement sécurisé, options de livraison et suivi en un clic.",
  },
  {
    title: "Statistiques claires",
    text: "Ventes, vues, conversion et produits favoris, sans jargon.",
  },
  {
    title: "Vitrine personnalisée",
    text: "Page marque élégante, partageable, optimisée pour les réseaux.",
  },
];

const v2Ideas = [
  "Recommandations automatiques selon les tendances",
  "Mise en avant intelligente par saison",
  "Mini-campagnes email prêtes à l’emploi",
  "Matching B2B pour boutiques partenaires",
];

const testimonials = [
  {
    name: "Clara, céramiste",
    quote:
      "J’ai mis mes collections en ligne en une matinée. Les messages et commandes sont enfin au même endroit.",
  },
  {
    name: "Sami, maroquinier",
    quote:
      "Les fiches produits sont propres et rapides à faire. Je gagne un temps fou chaque semaine.",
  },
  {
    name: "Maison Lune, studio textile",
    quote:
      "On a doublé nos demandes sans passer nos soirées à poster partout.",
  },
];

const segments = [
  {
    title: "Artisans indépendants",
    text: "Un outil simple pour vendre sans complexité technique.",
  },
  {
    title: "Créateurs en atelier",
    text: "Un flux clair entre production, stock et commandes.",
  },
  {
    title: "Petites marques",
    text: "Une vitrine premium et des mises en avant ciblées.",
  },
  {
    title: "Studios collectifs",
    text: "Un espace partagé pour plusieurs créateurs et collections.",
  },
];

const faqs = [
  {
    q: "Quel est le prix ?",
    a: "Une formule gratuite pour démarrer, puis un abonnement mensuel simple et sans engagement.",
  },
  {
    q: "Puis-je garder mes contenus ?",
    a: "Oui. Toutes vos photos, textes et données restent votre propriété.",
  },
  {
    q: "Comment sont vérifiés les artisans ?",
    a: "Chaque créateur passe une validation humaine et fournit des preuves d’activité.",
  },
  {
    q: "L’app gère-t-elle les commandes ?",
    a: "Oui, de la prise de commande au suivi de livraison, tout est centralisé.",
  },
  {
    q: "Puis-je publier sur plusieurs canaux ?",
    a: "Oui, la publication multi-canaux est incluse dans toutes les formules.",
  },
  {
    q: "L’assistance est-elle incluse ?",
    a: "Support humain par chat et ressources guidées pour améliorer vos fiches.",
  },
];

const storyboard = [
  {
    step: "0–10%",
    text: "Comprendre instantanément la promesse pour les créateurs.",
  },
  {
    step: "10–30%",
    text: "S’identifier aux problèmes actuels, puis voir la solution directe.",
  },
  {
    step: "30–55%",
    text: "Voir comment ça marche et la valeur concrète.",
  },
  {
    step: "55–80%",
    text: "Être rassuré par les preuves, les segments et la fiabilité acheteurs.",
  },
  {
    step: "80–100%",
    text: "Lire la FAQ et passer à l’action via un CTA clair.",
  },
];

export function App() {
  return (
    <div className="min-h-screen bg-[#f6f3ee] text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#f6f3ee]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
              <span className="text-sm font-semibold">At</span>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Atelieria</p>
              <p className="text-xs text-slate-500">Plateforme artisans & créateurs</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navigation.map((item) => (
              <a key={item} className="transition hover:text-slate-900" href="#">
                {item}
              </a>
            ))}
          </nav>
          <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800">
            Demander une démo
          </button>
        </div>
      </header>

      <main className="space-y-24 pb-24">
        <section className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              App pour créateurs & acheteurs
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Vendez vos créations sans perdre vos soirées à tout publier.
            </h1>
            <p className="text-lg text-slate-600">
              Gagnez du temps, simplifiez la mise en ligne et vendez plus facilement grâce à une
              plateforme pensée pour l’artisanat moderne.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800">
                Découvrir la démo
              </button>
              <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400">
                Voir comment ça marche
              </button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <div>
                <p className="font-semibold text-slate-700">+2 400</p>
                <p>Créations publiées</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">98 %</p>
                <p>Satisfaction créateurs</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">24h</p>
                <p>Pour activer une boutique</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-700">Tableau de bord créateur</p>
                  <span className="text-xs text-slate-400">Aujourd’hui</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Ventes</p>
                    <p className="text-2xl font-semibold">€4 280</p>
                    <p className="text-xs text-slate-500">+18% ce mois-ci</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Commandes</p>
                    <p className="text-2xl font-semibold">36</p>
                    <p className="text-xs text-slate-500">12 en cours</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-dashed border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-700">Nouveaux produits</p>
                  <div className="mt-3 space-y-2">
                    {["Céramique brute", "Sac cuir", "Luminaires"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-sm"
                      >
                        <span>{item}</span>
                        <span className="text-xs text-slate-400">Publié</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4 text-white">
                  <p className="text-sm font-semibold">Conseil du jour</p>
                  <p className="text-sm text-slate-200">
                    Ajoutez 2 photos d’atelier pour améliorer la confiance acheteurs.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-6 hidden w-40 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-200 lg:block">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Note client</p>
              <p className="text-xl font-semibold">4.9/5</p>
              <p className="text-xs text-slate-500">Sur 320 avis</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Problème → Solution
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Vous créez. L’app gère le reste.
              </h2>
              <p className="mt-4 text-slate-600">
                Les créateurs passent trop de temps à publier, répondre, organiser. Atelieria
                simplifie l’opérationnel pour que vous restiez concentré sur la création.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-700">Animation suggérée</p>
              <p className="text-sm text-slate-500">
                Transition en fondu + slide gauche/droite pour comparer problème et solution.
              </p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-700">Douleurs actuelles</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {problemItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold">Ce que fait Atelieria</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {solutionItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Comment ça marche ?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Un flux clair en 4 étapes simples.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Étape {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.text}</p>
                <p className="mt-4 text-xs text-slate-500">
                  Animation suggérée : apparition en cascade + léger parallax sur les cartes.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Valeur pour les créateurs
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Moins d’administratif, plus de création.
              </h2>
              <p className="mt-4 text-slate-600">
                Atelieria réduit la charge mentale et vous permet de publier vite, avec des fiches
                produits cohérentes et une visibilité maîtrisée.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {creatorValue.map((item) => (
                <div key={item.metric} className="rounded-3xl border border-slate-200 bg-white p-5">
                  <p className="text-2xl font-semibold text-slate-900">{item.metric}</p>
                  <p className="mt-2 text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-slate-900 p-6 text-white">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="text-xl font-semibold">Exemple concret</h3>
                <p className="mt-3 text-sm text-slate-200">
                  « 28 produits mis en ligne en 50 minutes, sans refaire les textes. »
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-200">
                  Animation suggérée : compteur qui s’anime au scroll, puis apparition du témoignage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Valeur pour les acheteurs
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Une expérience d’achat sérieuse et rassurante.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <ul className="space-y-3 text-sm text-slate-600">
                {buyerValue.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-700">Visuel suggéré</p>
              <p className="mt-3 text-sm text-slate-500">
                Photo macro de matière + mockup mobile de la fiche produit, avec badges “Artisan
                vérifié” et “Pièce unique”.
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Animation : léger zoom au scroll et overlay de badges en fade-in.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Fonctionnalités clés
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Les briques essentielles pour vendre sereinement.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-slate-700">V2 en préparation</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
              {v2Ideas.map((idea) => (
                <span key={idea} className="rounded-full border border-slate-200 px-4 py-2">
                  {idea}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Preuves & crédibilité
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Un produit testé sur le terrain.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm text-slate-600">“{item.quote}”</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {["Marché des artisans", "Salon Design", "Collectif Studio"].map((logo) => (
              <div
                key={logo}
                className="flex items-center justify-center rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-500"
              >
                {logo}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Pour qui ?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Pensé pour chaque type de créateur.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {segments.map((segment) => (
              <div key={segment.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{segment.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{segment.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Direction visuelle
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Tech premium, artisanat moderne.
            </h2>
            <p className="mt-4 text-slate-600">
              Palette douce, contrastes nets, grands espaces blancs et photos matières pour
              équilibrer rigueur SaaS et chaleur artisanale.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-700">Palette</p>
              <div className="mt-4 flex gap-3">
                {["#f6f3ee", "#0f172a", "#e6d5c0", "#94a3b8"].map((color) => (
                  <span
                    key={color}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[10px] text-slate-500"
                    style={{ backgroundColor: color }}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-700">Typographie</p>
              <p className="mt-3 text-sm text-slate-600">
                Sans-serif moderne (Inter / SF Pro) + touche de sérif légère pour quelques titres
                forts.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-700">Mise en page</p>
              <p className="mt-3 text-sm text-slate-600">
                Grille nette, espaces généreux, sections respirées, peu de couleurs, focus sur les
                photos atelier.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Storyboard de scroll
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Une narration claire du premier au dernier écran.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {storyboard.map((item) => (
              <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.step}</p>
                <p className="mt-3 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl space-y-10 px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Les réponses simples aux questions clés.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-900">{faq.q}</p>
                <p className="mt-3 text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6">
          <div className="rounded-[32px] bg-slate-900 p-10 text-white">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Passez à l’action
                </p>
                <h2 className="mt-4 text-3xl font-semibold">Prêt à lancer votre boutique ?</h2>
                <p className="mt-4 text-sm text-slate-200">
                  Demandez une démo ou rejoignez la bêta. Nous accompagnons chaque créateur dans sa
                  mise en ligne.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
                  Demander une démo
                </button>
                <button className="rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-white">
                  S’inscrire à la bêta
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Atelieria</p>
            <p className="text-xs text-slate-500">Contact@atelieria.fr</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <span>CGU</span>
            <span>Confidentialité</span>
            <span>Support</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
