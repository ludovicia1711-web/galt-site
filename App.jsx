import React, { useState, useEffect, useRef } from "react";

function MentionsLegales({ navigateTo }) {
  return (
    <div style={{ minHeight: "100vh", background: "#fafaf9", color: "#1a1a18", fontFamily: "'DM Sans', sans-serif" }}>
      <header style={{ borderBottom: "1px solid #e5e4e0", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => navigateTo('home')} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "#1a1a18", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>G</span>
            </div>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#1a1a18" }}>GALT</span>
          </button>
          <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
            <button onClick={() => navigateTo('home')} style={{ background: "none", border: "none", cursor: "pointer", color: "#666", fontFamily: "inherit" }}>Accueil</button>
            <button onClick={() => navigateTo('politique')} style={{ background: "none", border: "none", cursor: "pointer", color: "#666", fontFamily: "inherit" }}>Politique de confidentialité</button>
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 32px" }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 40 }}>Mentions légales</h1>
        {[
          { title: "Éditeur du site", content: [
            ["Nom", "Stéphanie Hu"],
            ["Nom commercial", "GALT"],
            ["Statut", "Micro-entreprise (auto-entrepreneur)"],
            ["SIRET", "948 685 896 00011"],
            ["Ville", "Drancy (93700)"],
            ["Email", "ludovic.ia1711@gmail.com"],
          ], note: "Non soumis à la TVA — article 293 B du CGI." },
          { title: "Hébergeur", content: [
            ["Société", "Vercel Inc."],
            ["Adresse", "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis"],
            ["Site", "vercel.com"],
          ]},
          { title: "Propriété intellectuelle", text: "L'ensemble du contenu de ce site est la propriété exclusive de GALT — Stéphanie Hu. Toute reproduction, même partielle, est interdite sans autorisation préalable." },
          { title: "Responsabilité", text: "Les informations présentes sur ce site sont fournies à titre indicatif. GALT s'efforce de les maintenir à jour mais ne saurait être tenu responsable d'éventuelles erreurs ou omissions." },
          { title: "Données personnelles", text: "Ce site collecte des données via son formulaire de contact.", link: { label: "Consultez notre politique de confidentialité", page: 'politique' } },
        ].map((section, i) => (
          <section key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid #e5e4e0" }}>{section.title}</h2>
            {section.content && (
              <div style={{ background: "#fff", border: "1px solid #e5e4e0", borderRadius: 16, padding: "20px 24px" }}>
                {section.content.map(([k, v]) => (
                  <div key={k} style={{ display: "flex", gap: 16, padding: "8px 0", borderBottom: "1px solid #f0efeb" }}>
                    <span style={{ fontWeight: 600, minWidth: 160, color: "#1a1a18" }}>{k}</span>
                    <span style={{ color: "#555" }}>{v}</span>
                  </div>
                ))}
                {section.note && <p style={{ marginTop: 12, fontSize: 13, color: "#888" }}>{section.note}</p>}
              </div>
            )}
            {section.text && <p style={{ color: "#555", lineHeight: 1.8 }}>{section.text} {section.link && <button onClick={() => navigateTo(section.link.page)} style={{ background: "none", border: "none", cursor: "pointer", color: "#1a1a18", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit", padding: 0 }}>{section.link.label}</button>}.</p>}
          </section>
        ))}
      </main>
      <footer style={{ borderTop: "1px solid #e5e4e0", padding: "24px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: 13, color: "#888" }}>
          <span>© 2026 GALT</span>
          <div style={{ display: "flex", gap: 20 }}>
            <button onClick={() => navigateTo('home')} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontFamily: "inherit", fontSize: 13 }}>Accueil</button>
            <button onClick={() => navigateTo('politique')} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontFamily: "inherit", fontSize: 13 }}>Politique de confidentialité</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PolitiqueConfidentialite({ navigateTo }) {
  const sections = [
    { title: "Qui est responsable de vos données ?", text: "Les données collectées sur ce site sont traitées par Stéphanie Hu, sous le nom commercial GALT, micro-entreprise immatriculée sous le SIRET 948 685 896 00011, domiciliée à Drancy (93700). Contact : ludovic.ia1711@gmail.com." },
    { title: "Quelles données sont collectées ?", text: "Lors de l'utilisation du formulaire de contact : votre nom, votre adresse email, et le contenu de votre message. Ces données transitent via Formspree (formspree.io)." },
    { title: "Pourquoi ces données sont-elles collectées ?", text: "Ces informations sont utilisées uniquement pour répondre à vos demandes de contact ou de devis. Elles ne sont jamais vendues ni transmises à des tiers en dehors de Formspree." },
    { title: "Combien de temps sont-elles conservées ?", text: "Vos données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 12 mois." },
    { title: "Service tiers — Formspree", text: "Le formulaire utilise Formspree, un service américain. Les données saisies transitent par leurs serveurs. Leur politique est consultable sur formspree.io." },
    { title: "Cookies", text: "Ce site n'utilise pas de cookies de tracking ou de publicité. Aucun outil d'analyse d'audience n'est actif sur ce site." },
    { title: "Vos droits", text: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et d'effacement de vos données. Contactez-nous à ludovic.ia1711@gmail.com ou auprès de la CNIL (cnil.fr)." },
  ];
  return (
    <div style={{ minHeight: "100vh", background: "#fafaf9", color: "#1a1a18", fontFamily: "'DM Sans', sans-serif" }}>
      <header style={{ borderBottom: "1px solid #e5e4e0", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => navigateTo('home')} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "#1a1a18", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>G</span>
            </div>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#1a1a18" }}>GALT</span>
          </button>
          <nav style={{ display: "flex", gap: 24, fontSize: 14 }}>
            <button onClick={() => navigateTo('home')} style={{ background: "none", border: "none", cursor: "pointer", color: "#666", fontFamily: "inherit" }}>Accueil</button>
            <button onClick={() => navigateTo('mentions')} style={{ background: "none", border: "none", cursor: "pointer", color: "#666", fontFamily: "inherit" }}>Mentions légales</button>
          </nav>
        </div>
      </header>
      <main style={{ maxWidth: 760, margin: "0 auto", padding: "64px 32px" }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 8 }}>Politique de confidentialité</h1>
        <p style={{ color: "#888", fontSize: 14, marginBottom: 40 }}>Dernière mise à jour : janvier 2026</p>
        {sections.map((s, i) => (
          <section key={i} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, paddingBottom: 10, borderBottom: "1px solid #e5e4e0" }}>{s.title}</h2>
            <p style={{ color: "#555", lineHeight: 1.8 }}>{s.text}</p>
          </section>
        ))}
      </main>
      <footer style={{ borderTop: "1px solid #e5e4e0", padding: "24px 32px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", fontSize: 13, color: "#888" }}>
          <span>© 2026 GALT</span>
          <div style={{ display: "flex", gap: 20 }}>
            <button onClick={() => navigateTo('home')} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontFamily: "inherit", fontSize: 13 }}>Accueil</button>
            <button onClick={() => navigateTo('mentions')} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontFamily: "inherit", fontSize: 13 }}>Mentions légales</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function AIAgentsWebsite() {
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Des agents IA pour simplifier le quotidien des entreprises.";

  const navigateTo = (target) => {
    setPage(target);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (page !== "home") return;
    let i = 0;
    setTypedText("");
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [page]);

  if (page === 'mentions') return <MentionsLegales navigateTo={navigateTo} />;
  if (page === 'politique') return <PolitiqueConfidentialite navigateTo={navigateTo} />;

  const services = [
    {
      icon: "✉",
      title: "Classification des mails",
      description: "Tri automatique, catégorisation et priorisation de vos emails. Fini les boîtes mail débordantes — chaque message arrive au bon endroit.",
      tag: "Gain de temps",
    },
    {
      icon: "💬",
      title: "Support client automatisé",
      description: "Réponses automatiques aux questions fréquentes, qualification des demandes et transmission intelligente aux bonnes personnes.",
      tag: "Disponible 24/7",
    },
    {
      icon: "🤖",
      title: "Agent IA site & WhatsApp",
      description: "Un assistant IA sur votre site ou WhatsApp qui répond, qualifie les besoins et facilite la prise de contact en temps réel.",
      tag: "Sans friction",
    },
  ];

  const steps = [
    { num: "01", title: "Analyse de vos besoins", desc: "On échange sur vos processus, vos points de friction et ce que vous voulez automatiser." },
    { num: "02", title: "Solution sur mesure", desc: "Je conçois une solution IA adaptée à votre activité, pas un template générique." },
    { num: "03", title: "Tests & déploiement", desc: "On teste ensemble, on ajuste jusqu'à ce que ce soit parfait, puis on déploie." },
    { num: "04", title: "Suivi continu", desc: "Je reste disponible pour optimiser et faire évoluer la solution avec votre activité." },
  ];

  const tools = [
    { name: "n8n", color: "#ea4b71" },
    { name: "Make", color: "#6d00cc" },
    { name: "OpenAI", color: "#10a37f" },
  ];

  const stats = [
    { value: "24/7", label: "Disponibilité des agents" },
    { value: "< 2s", label: "Temps de réponse moyen" },
    { value: "80%", label: "Tâches automatisables" },
    { value: "100%", label: "Sur mesure" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#fafaf9", color: "#1a1a18", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        .nav-link { color: #555; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #1a1a18; }
        .btn-primary { background: #1a1a18; color: #fff; border: none; border-radius: 100px; padding: 14px 28px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; text-decoration: none; display: inline-block; }
        .btn-primary:hover { background: #333; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,0,0,0.15); }
        .btn-secondary { background: transparent; color: #1a1a18; border: 1.5px solid #d4d3cf; border-radius: 100px; padding: 14px 28px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; text-decoration: none; display: inline-block; }
        .btn-secondary:hover { border-color: #1a1a18; transform: translateY(-1px); }
        .service-card { background: #fff; border: 1px solid #e5e4e0; border-radius: 24px; padding: 32px; transition: all 0.3s; }
        .service-card:hover { border-color: #1a1a18; transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.08); }
        .step-card { background: #fff; border: 1px solid #e5e4e0; border-radius: 20px; padding: 28px; }
        .tag { display: inline-block; background: #f0efeb; color: #555; border-radius: 100px; padding: 4px 12px; font-size: 12px; font-weight: 600; letter-spacing: 0.02em; }
        .tool-badge { display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 1px solid #e5e4e0; border-radius: 100px; padding: 8px 18px; font-size: 13px; font-weight: 600; }
        .stat-card { text-align: center; padding: 32px 24px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor { display: inline-block; animation: pulse 1s infinite; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: #fff; border: 1px solid #e5e4e0; border-radius: 100px; padding: 8px 16px; font-size: 13px; font-weight: 500; margin-bottom: 32px; animation: fadeUp 0.6s ease both; }
        .dot-live { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; animation: pulse 2s infinite; }
        input, textarea { font-family: 'DM Sans', sans-serif; }
        input:focus, textarea:focus { outline: 2px solid #1a1a18; outline-offset: 0; }
      `}</style>

      {/* Header */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(250,250,249,0.95)" : "#fafaf9",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e5e4e0" : "1px solid transparent",
        transition: "all 0.3s"
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "#1a1a18", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>G</span>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1 }}>GALT</div>
              <div style={{ fontSize: 11, color: "#888", lineHeight: 1.2 }}>Agents IA pour entreprises</div>
            </div>
          </div>
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="#services" className="nav-link">Services</a>
            <a href="#methode" className="nav-link">Méthode</a>
            <a href="#apropos" className="nav-link">À propos</a>
            <a href="#contact" className="btn-primary" style={{ padding: "10px 20px" }}>Nous contacter</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 32px 64px", animation: "fadeUp 0.6s ease both" }}>
        <div className="hero-badge">
          <span className="dot-live"></span>
          Disponible pour de nouveaux projets
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 24, minHeight: 180 }}>
              {typedText}<span className="cursor">|</span>
            </h1>
            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.7, marginBottom: 36, maxWidth: 440 }}>
              Je conçois des agents IA sur mesure pour automatiser vos emails, votre support client et vos processus répétitifs — avec n8n, Make et OpenAI.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
              <a href="#contact" className="btn-primary">Parler de mon projet</a>
              <a href="#services" className="btn-secondary">Voir les solutions</a>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 13, color: "#888", marginRight: 4 }}>Outils utilisés :</span>
              {tools.map(t => (
                <span key={t.name} className="tool-badge">
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.color, flexShrink: 0 }}></span>
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Demo card */}
          <div style={{ background: "#fff", border: "1px solid #e5e4e0", borderRadius: 28, padding: 28, boxShadow: "0 24px 64px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <div style={{ display: "flex", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }}></div>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }}></div>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }}></div>
              </div>
              <span style={{ fontSize: 12, color: "#aaa", marginLeft: 8, fontFamily: "'DM Mono', monospace" }}>agent-galt.js</span>
            </div>
            <div style={{ background: "#f8f8f7", borderRadius: 16, padding: 20, marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>→ Email entrant détecté</div>
              <div style={{ background: "#fff", border: "1px solid #e5e4e0", borderRadius: 12, padding: 14, marginBottom: 10 }}>
                <div style={{ fontSize: 12, color: "#aaa", marginBottom: 4 }}>De : client@exemple.fr</div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Demande de devis urgent</div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>Bonjour, nous avons besoin d'un agent IA...</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {["Priorité haute", "Devis", "À traiter"].map(tag => (
                  <span key={tag} style={{ background: "#1a1a18", color: "#fff", borderRadius: 100, padding: "3px 10px", fontSize: 11, fontWeight: 600 }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 12, color: "#16a34a", fontWeight: 600, marginBottom: 4 }}>✓ Agent IA — Réponse envoyée automatiquement</div>
              <div style={{ fontSize: 12, color: "#555" }}>Email classifié, priorité assignée, réponse type envoyée en 1.2s</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#1a1a18", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-card" style={{ borderRight: i < 3 ? "1px solid #333" : "none" }}>
              <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#888" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ maxWidth: 520, marginBottom: 56 }}>
          <div className="tag" style={{ marginBottom: 16 }}>Services</div>
          <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16 }}>Ce que je construis pour vous</h2>
          <p style={{ color: "#666", fontSize: 16, lineHeight: 1.7 }}>Des solutions concrètes, pas des promesses. Chaque agent est conçu pour votre activité spécifique.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
              <span className="tag" style={{ marginBottom: 16 }}>{s.tag}</span>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, marginTop: 12 }}>{s.title}</h3>
              <p style={{ color: "#666", lineHeight: 1.7, fontSize: 15 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" style={{ background: "#f0efeb" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 32px" }}>
          <div style={{ maxWidth: 520, marginBottom: 56 }}>
            <div className="tag" style={{ marginBottom: 16 }}>Méthode</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16 }}>Comment ça se passe</h2>
            <p style={{ color: "#666", fontSize: 16, lineHeight: 1.7 }}>Un processus simple et transparent, du premier échange jusqu'au déploiement.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {steps.map((s, i) => (
              <div key={i} className="step-card">
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#aaa", marginBottom: 20, fontWeight: 500 }}>{s.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="apropos" style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="tag" style={{ marginBottom: 20 }}>À propos</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 24 }}>Une approche simple, des résultats concrets</h2>
            <p style={{ color: "#666", lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
              Je propose des solutions d'agents IA pour aider les entreprises à gagner du temps et automatiser leurs tâches répétitives. Mon objectif : des systèmes utiles, pratiques et faciles à utiliser.
            </p>
            <p style={{ color: "#666", lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
              Je me forme en continu aux derniers outils d'automatisation — n8n, Make, OpenAI — pour vous proposer les solutions les plus adaptées à vos besoins réels.
            </p>
            <a href="#contact" className="btn-primary">Discutons de votre projet</a>
          </div>
          <div style={{ background: "#fff", border: "1px solid #e5e4e0", borderRadius: 28, padding: 36 }}>
            <div style={{ fontSize: 12, color: "#aaa", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>Profil</div>
            {[
              ["Fondatrice", "Stéphanie Hu"],
              ["Nom commercial", "GALT"],
              ["Spécialité", "Agents IA & automatisation"],
              ["Outils", "n8n · Make · OpenAI"],
              ["Localisation", "Drancy, Île-de-France"],
              ["Contact", "ludovic.ia1711@gmail.com"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid #f0efeb", fontSize: 14 }}>
                <span style={{ color: "#888", fontWeight: 500 }}>{k}</span>
                <span style={{ fontWeight: 600, textAlign: "right", maxWidth: 200 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: "#1a1a18", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "96px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.1)", borderRadius: 100, padding: "4px 14px", fontSize: 13, fontWeight: 600, marginBottom: 24 }}>Contact</div>
            <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>Parlons de votre projet</h2>
            <p style={{ color: "#888", lineHeight: 1.8, fontSize: 16, marginBottom: 40 }}>
              Vous avez une tâche répétitive à automatiser, un support client à améliorer ou un agent IA à mettre en place ? Échangeons.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a href="mailto:ludovic.ia1711@gmail.com" style={{ display: "flex", alignItems: "center", gap: 14, color: "#fff", textDecoration: "none", padding: "16px 20px", background: "rgba(255,255,255,0.07)", borderRadius: 16, transition: "background 0.2s" }}>
                <span style={{ fontSize: 20 }}>✉</span>
                <div>
                  <div style={{ fontSize: 12, color: "#666", marginBottom: 2 }}>Email</div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>ludovic.ia1711@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/33768709739?text=Bonjour%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20solutions%20IA" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, color: "#fff", textDecoration: "none", padding: "16px 20px", background: "rgba(255,255,255,0.07)", borderRadius: 16, transition: "background 0.2s" }}>
                <span style={{ fontSize: 20 }}>💬</span>
                <div>
                  <div style={{ fontSize: 12, color: "#666", marginBottom: 2 }}>WhatsApp</div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>07 68 70 97 39</div>
                </div>
              </a>
            </div>
          </div>

          <div style={{ background: "#fff", color: "#1a1a18", borderRadius: 28, padding: 36 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24 }}>Envoyer un message</h3>
            <form action="https://formspree.io/f/xpqynkod" method="POST" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 8 }}>Nom</label>
                <input name="name" required placeholder="Votre nom" style={{ width: "100%", border: "1.5px solid #e5e4e0", borderRadius: 12, padding: "12px 16px", fontSize: 14, background: "#fafaf9" }} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 8 }}>Email</label>
                <input type="email" name="email" required placeholder="Votre email" style={{ width: "100%", border: "1.5px solid #e5e4e0", borderRadius: 12, padding: "12px 16px", fontSize: 14, background: "#fafaf9" }} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: "#555", display: "block", marginBottom: 8 }}>Votre besoin</label>
                <textarea name="message" required placeholder="Décrivez ce que vous souhaitez automatiser..." style={{ width: "100%", border: "1.5px solid #e5e4e0", borderRadius: 12, padding: "12px 16px", fontSize: 14, background: "#fafaf9", minHeight: 120, resize: "vertical" }} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", textAlign: "center", padding: "14px" }}>
                Envoyer ma demande →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #e5e4e0", background: "#fafaf9" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 24, height: 24, background: "#1a1a18", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>G</span>
            </div>
            <span style={{ fontSize: 13, color: "#888" }}>© 2026 GALT — Agents IA pour entreprises</span>
          </div>
          <div style={{ display: "flex", gap: 24, fontSize: 13 }}>
            <button onClick={() => navigateTo('mentions')} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontFamily: "inherit", fontSize: 13 }}>Mentions légales</button>
            <button onClick={() => navigateTo('politique')} style={{ background: "none", border: "none", cursor: "pointer", color: "#888", fontFamily: "inherit", fontSize: 13 }}>Politique de confidentialité</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
