export default function AIAgentsWebsite() {
  const services = [
    {
      title: "Classification des mails",
      description:
        "Tri automatique des emails, catégorisation des demandes et priorisation des messages pour gagner du temps.",
    },
    {
      title: "Réponse automatique support client",
      description:
        "Réponses automatiques aux messages clients et support, avec orientation vers la bonne action ou la bonne personne.",
    },
    {
      title: "Agent IA tchat box et WhatsApp",
      description:
        "Mise en place d'un agent IA sur votre site ou via WhatsApp pour répondre aux questions et qualifier les besoins.",
    },
  ];

  const steps = [
    "Analyse de vos besoins",
    "Création de votre solution IA sur mesure",
    "Tests, ajustements et déploiement",
    "Suivi et optimisation continue",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">GALT</div>
            <div className="text-sm text-slate-500">
              Solutions d'agents IA pour simplifier le quotidien des PME
            </div>
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
            Je propose des solutions d'agents IA pour simplifier le quotidien des entreprises.
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-8">
            Je crée des solutions d'agents IA pour la classification des mails, les réponses automatiques
            au support client, les agents IA pour tchat box sur site ou WhatsApp, et l'automatisation
            des tâches internes.
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
              Découvrir les solutions
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 p-8 shadow-sm bg-slate-50">
          <div className="text-sm text-slate-500 mb-3">Exemple de besoin client</div>
          <div className="rounded-2xl bg-white p-5 border border-slate-200 space-y-4">
            <div>
              <div className="text-sm text-slate-500">Client</div>
              <div className="font-medium">
                "Je veux mieux gérer mes emails, mon support client et les demandes reçues sur mon site."
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Agent IA</div>
              <div className="font-medium">
                Classification des demandes, réponses automatiques, qualification des besoins et transmission au bon interlocuteur.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-slate-500">Support simplifié</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                <div className="text-2xl font-bold">+ simple</div>
                <div className="text-sm text-slate-500">Gain de temps</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-4 text-slate-600 leading-7">
            Des solutions concrètes pour faire gagner du temps, mieux organiser les demandes et simplifier le quotidien.
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
              J'aide les entreprises à utiliser l'intelligence artificielle de façon simple, utile et concrète.
              Mon objectif est de proposer des solutions qui simplifient le quotidien, réduisent les tâches répétitives
              et améliorent le traitement des demandes.
            </p>
            <p className="mt-4 text-slate-600 leading-8">
              Je me forme en continu à l'automatisation, aux outils no-code et à l'intelligence artificielle appliquée
              aux besoins concrets des entreprises. Mon approche est simple : comprendre votre besoin, proposer une
              solution claire, puis mettre en place un agent IA utile, fiable et facile à utiliser.
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
                <div className="text-slate-600">
                  Solutions d'agents IA pour simplifier le quotidien des PME
                </div>
              </div>
              <div>
                <div className="font-semibold">Objectif</div>
                <div className="text-slate-600">
                  Simplifier le quotidien des entreprises grâce à des solutions IA utiles, claires et concrètes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold">Comment ça se passe</h2>
          <p className="mt-4 text-slate-600 leading-7">
            Une méthode simple pour passer d'un besoin métier à une solution IA opérationnelle.
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
