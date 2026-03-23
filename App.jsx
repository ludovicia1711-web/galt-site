import React from "react";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <div>
            <a href="/" className="text-xl font-bold">GALT</a>
            <div className="text-sm text-slate-500">
              Solutions d'agents IA pour simplifier le quotidien des entreprises
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="/#services" className="hover:underline">Services</a>
            <a href="/#apropos" className="hover:underline">À propos</a>
            <a href="/#process" className="hover:underline">Méthode</a>
            <a href="/#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-10">Mentions légales</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Éditeur du site</h2>
          <div className="text-slate-600 leading-8 space-y-1">
            <p><span className="font-medium text-slate-900">Nom :</span> Stéphanie Hu</p>
            <p><span className="font-medium text-slate-900">Nom commercial :</span> GALT</p>
            <p><span className="font-medium text-slate-900">Statut :</span> Micro-entreprise (auto-entrepreneur)</p>
            <p><span className="font-medium text-slate-900">SIRET :</span> 948 685 896 00011</p>
            <p><span className="font-medium text-slate-900">Ville :</span> Drancy (93700)</p>
            <p>
              <span className="font-medium text-slate-900">Email :</span>{" "}
              <a href="mailto:ludovic.ia1711@gmail.com" className="underline hover:text-slate-900">
                ludovic.ia1711@gmail.com
              </a>
            </p>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Non soumis à la TVA — article 293 B du CGI (régime de franchise en base de TVA).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Hébergeur</h2>
          <div className="text-slate-600 leading-8 space-y-1">
            <p><span className="font-medium text-slate-900">Société :</span> Vercel Inc.</p>
            <p><span className="font-medium text-slate-900">Adresse :</span> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
            <p>
              <span className="font-medium text-slate-900">Site :</span>{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900">
                vercel.com
              </a>
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Propriété intellectuelle</h2>
          <p className="text-slate-600 leading-8">
            L'ensemble du contenu de ce site (textes, visuels, structure) est la propriété exclusive de GALT — Stéphanie Hu, sauf mentions contraires. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Responsabilité</h2>
          <p className="text-slate-600 leading-8">
            Les informations présentes sur ce site sont fournies à titre indicatif. GALT s'efforce de les maintenir à jour mais ne saurait être tenu responsable d'éventuelles erreurs ou omissions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Données personnelles</h2>
          <p className="text-slate-600 leading-8">
            Ce site collecte des données personnelles via son formulaire de contact. Pour en savoir plus,{" "}
            <a href="/politique-de-confidentialite" className="underline hover:text-slate-900">
              consultez notre politique de confidentialité
            </a>.
          </p>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© 2026 GALT - Agents IA pour PME</div>
          <div className="flex gap-4">
            <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
            <a href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
