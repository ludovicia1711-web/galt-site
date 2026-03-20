export default function AIAgentsWebsite() {
  const services = [
    {
      title: "Agent IA service client",
      description:
        "Automatise les réponses aux questions fréquentes, le suivi client et la qualification des demandes 24h/24.",
    },
    {
      title: "Agent IA commercial",
      description:
        "Capture les prospects, pose les bonnes questions et aide à convertir plus de demandes en rendez-vous.",
    },
    {
      title: "Agent IA interne",
      description:
        "Centralise les informations de l'entreprise et aide les équipes à retrouver rapidement procédures, documents et réponses.",
    },
  ];

  const steps = [
    "Analyse rapide de votre besoin",
    "Création de votre agent IA sur mesure",
    "Tests, ajustements et mise en place",
    "Suivi et amélioration continue",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">GALT</div>
            <div className="text-sm text-slate-500">Création d'agents IA pour automatiser les tâches.</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#apropos" className="hover:underline">À propos</a>
            <a href="#process" className="hover:underline">Méthode</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm mb-6">
            Solutions IA simples pour les entreprises
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            J'aide les PME à gagner du temps avec des agents IA utiles et concrets.
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-8">
            Je crée des agents IA pour automatiser le support client, la gestion des prospects,
            les réponses aux questions fréquentes et certaines tâches internes de votre entreprise.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm"
            >
              Demander un échange
            </a>
            <a
              href="#services"
              className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium"
            >
              Voir les services
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 p-8 shadow-sm bg-slate-50">
          <div className="text-sm text-slate-500 mb-3">Exemple d'utilisation</div>
          <div className="rounded-2xl bg-white p-5 border border-slate-200 space-y-4">
            <div>
              <div className="text-sm text-slate-500">Client</div>
              <div className="font-medium">"Je veux automatiser les demandes reçues sur mon site."</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Agent IA</div>
              <div className="font-medium">
                Qualification automatique, réponses instantanées, prise de rendez-vous et transmission au bon interlocuteur.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-slate-500">Réponses automatiques</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                <div className="text-2xl font-bold">+ simple</div>
                <div className="text-sm text-slate-500">Mise en place claire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-4 text-slate-600 leading-7">
            Des solutions IA pensées pour des besoins concrets, sans complexité inutile.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-slate-600 leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="apropos" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">À propos</h2>
            <p className="mt-5 text-slate-600 leading-8">
              Je travaille avec les PME qui veulent utiliser l'intelligence artificielle de manière pratique.
              Mon objectif est de mettre en place des agents IA simples, utiles et adaptés au fonctionnement réel de l'entreprise.
            </p>
            <p className="mt-4 text-slate-600 leading-8">
              Je me forme en continu à l'automatisation, aux outils no-code et à l'intelligence artificielle appliquée aux besoins concrets des entreprises. Mon approche est simple : comprendre votre besoin, proposer une solution claire, puis construire un agent IA utile, fiable et facile à utiliser.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm text-slate-500 mb-4">Profil</div>
            <div className="space-y-4">
              <div>
                <div className="font-semibold">Nom</div>
                <div className="text-slate-600">Ludovic Su</div>
              </div>
              <div>
                <div className="font-semibold">Spécialité</div>
                <div className="text-slate-600">Création d'agents IA pour PME</div>
              </div>
              <div>
                <div className="font-semibold">Objectif</div>
                <div className="text-slate-600">Aider les PME à gagner du temps, structurer leurs processus et automatiser les tâches répétitives.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold">Comment ça se passe</h2>
          <p className="mt-4 text-slate-600 leading-7">
            Une méthode simple pour passer d'un besoin métier à un agent IA opérationnel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-slate-200 p-6 shadow-sm">
              <div className="text-sm text-slate-500">Étape {index + 1}</div>
              <div className="mt-3 text-lg font-semibold">{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Parlons de votre projet</h2>
            <p className="mt-4 text-slate-300 leading-8">
              Vous voulez automatiser une partie de votre activité avec un agent IA ?
              Contactez-moi pour échanger sur votre besoin.
            </p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>Email : ludovic.ia1711@gmail.com</div>
              <div>Téléphone : À ajouter</div>
              <div>LinkedIn : À ajouter plus tard</div>
            </div>
          </div>

          <div className="rounded-3xl bg-white text-slate-900 p-8">
            <form action="https://formspree.io/f/xpqynkod" method="POST" className="space-y-4">
              <div>
                <label className="text-sm font-medium">Nom</label>
                <input
                  name="name"
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none"
                  placeholder="Votre email"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium">Besoin</label>
                <textarea
                  name="message"
                  className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none min-h-[130px]"
                  placeholder="Décrivez votre besoin"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-medium"
              >
                Envoyer ma demande
              </button>
              <p className="text-xs text-slate-500 leading-6">
                Les demandes envoyées via ce formulaire seront reçues par email après connexion du formulaire à un service gratuit comme Formspree.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© 2026 GALT - Agents IA pour PME</div>
          <div>Site vitrine simple et professionnel</div>
        </div>
      </footer>
    </div>
  );
}
