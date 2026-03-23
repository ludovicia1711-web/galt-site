import React, { useState } from "react";

function MentionsLegales({ navigateTo }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <button onClick={() => navigateTo('home')} className="text-xl font-bold cursor-pointer">GALT</button>
            <div className="text-sm text-slate-500">Solutions d'agents IA pour simplifier le quotidien des entreprises</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <button onClick={() => navigateTo('home')} className="hover:underline">Accueil</button>
            <button onClick={() => navigateTo('politique')} className="hover:underline">Politique de confidentialité</button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-10">Mentions légales</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Éditeur du site</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm space-y-2">
            <p className="text-slate-600"><span className="font-medium text-slate-900">Nom :</span> Stéphanie Hu</p>
            <p className="text-slate-600"><span className="font-medium text-slate-900">Nom commercial :</span> GALT</p>
            <p className="text-slate-600"><span className="font-medium text-slate-900">Statut :</span> Micro-entreprise (auto-entrepreneur)</p>
            <p className="text-slate-600"><span className="font-medium text-slate-900">SIRET :</span> 948 685 896 00011</p>
            <p className="text-slate-600"><span className="font-medium text-slate-900">Ville :</span> Drancy (93700)</p>
            <p className="text-slate-600"><span className="font-medium text-slate-900">Email :</span> <a href="mailto:ludovic.ia1711@gmail.com" className="underline hover:text-slate-900">ludovic.ia1711@gmail.com</a></p>
            <p className="text-sm text-slate-500 pt-2">Non soumis à la TVA — article 293 B du CGI (franchise en base de TVA).</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Hébergeur</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm space-y-2">
            <p className="text-slate-600"><span className="font-medium text-slate-900">Société :</span> Vercel Inc.</p>
            <p className="text-slate-600"><span className="font-medium text-slate-900">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p className="text-slate-600"><span className="font-medium text-slate-900">Site :</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900">vercel.com</a></p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Propriété intellectuelle</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">L'ensemble du contenu de ce site est la propriété exclusive de GALT — Stéphanie Hu. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Responsabilité</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">Les informations présentes sur ce site sont fournies à titre indicatif. GALT s'efforce de les maintenir à jour mais ne saurait être tenu responsable d'éventuelles erreurs ou omissions.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Données personnelles</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">Ce site collecte des données via son formulaire de contact. <button onClick={() => navigateTo('politique')} className="underline hover:text-slate-900">Consultez notre politique de confidentialité</button>.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© 2026 GALT - Agents IA pour PME</div>
          <div className="flex gap-4">
            <button onClick={() => navigateTo('home')} className="hover:underline">Accueil</button>
            <button onClick={() => navigateTo('politique')} className="hover:underline">Politique de confidentialité</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PolitiqueConfidentialite({ navigateTo }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <button onClick={() => navigateTo('home')} className="text-xl font-bold cursor-pointer">GALT</button>
            <div className="text-sm text-slate-500">Solutions d'agents IA pour simplifier le quotidien des entreprises</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <button onClick={() => navigateTo('home')} className="hover:underline">Accueil</button>
            <button onClick={() => navigateTo('mentions')} className="hover:underline">Mentions légales</button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Politique de confidentialité</h1>
        <p className="text-slate-500 text-sm mb-10">Dernière mise à jour : janvier 2026</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Qui est responsable de vos données ?</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">Les données collectées sur ce site sont traitées par Stéphanie Hu, sous le nom commercial GALT, micro-entreprise immatriculée sous le SIRET 948 685 896 00011, domiciliée à Drancy (93700). Contact : <a href="mailto:ludovic.ia1711@gmail.com" className="underline hover:text-slate-900">ludovic.ia1711@gmail.com</a>.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Quelles données sont collectées ?</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">Lors de l'utilisation du formulaire de contact, les informations suivantes sont collectées : votre nom, votre adresse email, et le contenu de votre message. Ces données transitent via Formspree (formspree.io).</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Pourquoi ces données sont-elles collectées ?</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">Ces informations sont utilisées uniquement pour répondre à vos demandes de contact ou de devis. Elles ne sont jamais vendues ni transmises à des tiers en dehors de Formspree.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Combien de temps sont-elles conservées ?</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 12 mois.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Service tiers — Formspree</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">Le formulaire utilise Formspree, un service américain. Les données saisies transitent par leurs serveurs. Leur politique est consultable sur <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900">formspree.io</a>.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Cookies</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">Ce site n'utilise pas de cookies de tracking ou de publicité. Aucun outil d'analyse d'audience n'est actif sur ce site.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Vos droits</h2>
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <p className="text-slate-600 leading-8">Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Contactez-nous à <a href="mailto:ludovic.ia1711@gmail.com" className="underline hover:text-slate-900">ludovic.ia1711@gmail.com</a> ou auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900">CNIL</a>.</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© 2026 GALT - Agents IA pour PME</div>
          <div className="flex gap-4">
            <button onClick={() => navigateTo('home')} className="hover:underline">Accueil</button>
            <button onClick={() => navigateTo('mentions')} className="hover:underline">Mentions légales</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function AIAgentsWebsite() {
  const [page, setPage] = useState("home");

  const navigateTo = (target) => {
    setPage(target);
    window.scrollTo(0, 0);
  };

  const services = [
    { title: "Classification des mails", description: "Tri automatique des emails, catégorisation des demandes et priorisation des messages pour faire gagner du temps aux entreprises." },
    { title: "Réponse automatique support client", description: "Réponses automatiques aux messages clients et support pour améliorer le suivi, gagner du temps et mieux orienter les demandes." },
    { title: "Agent IA site et WhatsApp", description: "Mise en place d'un agent IA sur votre site ou via WhatsApp pour répondre aux questions, qualifier les besoins et faciliter la prise de contact." },
  ];

  const steps = [
    "Analyse de vos besoins",
    "Création de votre solution IA sur mesure",
    "Tests, ajustements et déploiement",
    "Suivi et optimisation continue",
  ];

  if (page === 'mentions') return <MentionsLegales navigateTo={navigateTo} />;
  if (page === 'politique') return <PolitiqueConfidentialite navigateTo={navigateTo} />;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">GALT</div>
            <div className="text-sm text-slate-500">Solutions d'agents IA pour simplifier le quotidien des entreprises</div>
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
          <div className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm mb-6">Solutions IA simples pour les entreprises</div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Des agents IA pour simplifier le quotidien des entreprises.</h1>
          <p className="mt-6 text-lg text-slate-600 leading-8">Je crée des solutions d'agents IA pour la classification des mails, les réponses automatiques au support client, les agents IA sur site ou WhatsApp, et l'automatisation des tâches internes.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-sm">Parler de votre besoin</a>
            <a href="#services" className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium">Découvrir les solutions</a>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 p-8 shadow-sm bg-slate-50">
          <div className="text-sm text-slate-500 mb-3">Exemple de besoin client</div>
          <div className="rounded-2xl bg-white p-5 border border-slate-200 space-y-4">
            <div>
              <div className="text-sm text-slate-500">Client</div>
              <div className="font-medium">"Je veux mieux gérer mes emails, mon support client et les demandes reçues sur mon site."</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">Agent IA</div>
              <div className="font-medium">Classification des demandes, réponses automatiques, qualification des besoins et transmission au bon interlocuteur.</div>
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
          <p className="mt-4 text-slate-600 leading-7">Des solutions concrètes pour mieux gérer les demandes, automatiser certaines tâches répétitives et simplifier le quotidien.</p>
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
            <p className="mt-5 text-slate-600 leading-8">Je propose des solutions d'agents IA concrètes pour aider les entreprises à gagner du temps, mieux traiter leurs demandes et automatiser certaines tâches répétitives.</p>
            <p className="mt-4 text-slate-600 leading-8">Je me forme en continu à l'automatisation, aux outils no-code et à l'intelligence artificielle appliquée aux besoins concrets des entreprises. Mon approche est simple : comprendre votre besoin, concevoir une solution claire, puis mettre en place un système utile, pratique et facile à utiliser.</p>
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
                <div className="text-slate-600">Solutions d'agents IA pour simplifier le quotidien des entreprises</div>
              </div>
              <div>
                <div className="font-semibold">Objectif</div>
                <div className="text-slate-600">Simplifier le quotidien des entreprises grâce à des solutions IA utiles, claires et concrètes.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold">Comment ça se passe</h2>
          <p className="mt-4 text-slate-600 leading-7">Une méthode simple pour passer d'un besoin métier à une solution IA utile et opérationnelle.</p>
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
            <p className="mt-4 text-slate-300 leading-8">Vous voulez automatiser une partie de votre activité, mieux gérer vos demandes ou mettre en place un agent IA adapté à votre entreprise ? Contactez-moi pour échanger sur votre besoin.</p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>Email : ludovic.ia1711@gmail.com</div>
              <div>WhatsApp : 07 68 70 97 39</div>
              <a href="https://wa.me/33768709739?text=Bonjour%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20solutions%20IA" target="_blank" rel="noopener noreferrer" className="inline-block rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium">Me contacter sur WhatsApp</a>
            </div>
          </div>
          <div className="rounded-3xl bg-white text-slate-900 p-8">
            <form action="https://formspree.io/f/xpqynkod" method="POST" className="space-y-4">
              <div>
                <label className="text-sm font-medium">Nom</label>
                <input name="name" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="Votre nom" required />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input type="email" name="email" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none" placeholder="Votre email" required />
              </div>
              <div>
                <label className="text-sm font-medium">Besoin</label>
                <textarea name="message" className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none min-h-[130px]" placeholder="Décrivez votre besoin" required />
              </div>
              <button type="submit" className="w-full rounded-2xl bg-slate-900 text-white px-6 py-3 text-sm font-medium">Demander un devis ou un échange</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© 2026 GALT - Agents IA pour PME</div>
          <div className="flex gap-4">
            <button onClick={() => navigateTo('mentions')} className="hover:underline">Mentions légales</button>
            <button onClick={() => navigateTo('politique')} className="hover:underline">Politique de confidentialité</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
