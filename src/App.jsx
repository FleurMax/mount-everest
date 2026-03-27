import React, { useState, useEffect } from 'react';
import './App.css';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = new Date(targetDate).getTime() - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <span className="countdown-value">{timeLeft.days}</span>
        <span className="countdown-label">Jours</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{timeLeft.hours}</span>
        <span className="countdown-label">Heures</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-value">{timeLeft.minutes}</span>
        <span className="countdown-label">Min</span>
      </div>
      <div className="countdown-item seconds-item">
        <span className="countdown-value">{timeLeft.seconds}</span>
        <span className="countdown-label">Sec</span>
      </div>
    </div>
  );
};

function App() {
  const targetDate = "2027-04-01T00:00:00";

  return (
    <div className="app">
      <header id="main-header">
        <div className="container header-content">
          <h1 id="site-title">Georges : Objectif Everest</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#hero">Accueil</a></li>
              <li><a href="#journal">Journal</a></li>
              <li><a href="#bio">Georges</a></li>
              <li><a href="#guide">Guide de Vie</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <span className="hero-tagline">Expédition 2027</span>
            <h2 className="hero-title">La Quête de l'Everest</h2>
            <p className="hero-age-tagline">« L’âge est un chiffre »</p>
            <p className="hero-description">À 81 ans, mon plus grand sommet m'attend encore. Rejoignez-moi dans cette préparation hors du commun.</p>
            
            <Countdown targetDate={targetDate} />

            <div className="hero-cta-wrapper">
              <button className="btn btn-primary" id="support-btn">
                Soutenir l'ascension <span className="goal">(Objectif 150 000€)</span>
              </button>
            </div>
          </div>
        </section>

        <section id="message" className="section message-section" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', textAlign: 'center' }}>
          <div className="container">
            <blockquote className="inspire-quote">
              <p>« Donner envie et espoir à ceux qui en ont vraiment besoin. »</p>
              <cite>— Georges, 81 ans</cite>
            </blockquote>
          </div>
        </section>

        {/* Journal & Programme */}
        <section id="journal" className="section journal-section">
          <div className="container">
            <h2 className="section-title">Journal & Programme</h2>
            <p className="section-subtitle" style={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 700, marginBottom: '3rem', color: 'var(--primary-blue)' }}>
              « 60 publications à venir : Suivez mon programme détaillé »
            </p>
            
            <div className="journal-grid">
              <article className="journal-card">
                <div className="card-img-wrapper">
                  <img src="/img/Other/WhatsApp Image 2026-03-27 at 18.30.59 (2).jpeg" alt="Entraînement de Georges" className="card-img" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3>Le Programme</h3>
                  <p>Découvrez prochainement mon cursus d'entraînement complet en 60 étapes.</p>
                </div>
              </article>

              <article className="journal-card">
                <div className="card-img-wrapper">
                  <img src="/img/Other/WhatsApp Image 2026-03-27 at 18.30.59.jpeg" alt="Nutrition de Georges" className="card-img" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3>Nutrition</h3>
                  <p>L'énergie nécessaire pour les sommets : diététique équilibrée et hydratation.</p>
                </div>
              </article>

              <article className="journal-card">
                <div className="card-img-wrapper">
                  <img src="/img/Other/WhatsApp Image 2026-03-27 at 18.31.00.jpeg" alt="Stretching et mobilité" className="card-img" loading="lazy" />
                </div>
                <div className="card-content">
                  <h3>Stretching</h3>
                  <p>Mobilité et souplesse : clés essentielles pour éviter les blessures à 81 ans.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section id="bio" className="section bio-section text-left">
          <div className="container bio-flex">
            <div className="bio-image-wrapper">
              <img src="/img/Dernière expédition  Gokio/bf65b2e2-5f02-411f-a027-23cce196f2da.jpg" alt="Georges en montagne" className="bio-img" loading="lazy" />
            </div>
            <div className="bio-text-content">
              <h2 className="section-title text-left">Mon Parcours Sportif</h2>
              <p className="bio-intro">« L'âge est un chiffre, le parcours est une leçon de vie. »</p>
              <div className="bio-details">
                <p>Découvrez prochainement le récit complet de mon parcours : mes exploits sportifs récents à plus de 6000 mètres, mais aussi les périodes de ma vie où le sport n'était pas au centre de mon quotidien.</p>
                <p>À travers ce partage, je souhaite donner envie et espoir à ceux qui en ont vraiment besoin.</p>
                <p>« Mon objectif n'est pas de battre un record, mais de vivre pleinement chaque mètre gravi. »</p>
              </div>
            </div>
          </div>
        </section>

        {/* Guide de Vie */}
        <section id="guide" className="section guide-section">
          <div className="container">
            <h2 className="section-title">Le Guide de Vie</h2>
            <div className="guide-grid">
              <div className="guide-item">
                <div className="guide-icon">🍎</div>
                <h3>Nutrition</h3>
                <p>Aliments naturels et locaux pour une vitalité durable.</p>
              </div>
              <div className="guide-item">
                <div className="guide-icon">💤</div>
                <h3>Sommeil</h3>
                <p>Une récupération optimale est le secret de la longévité.</p>
              </div>
              <div className="guide-item">
                <div className="guide-icon">🧘</div>
                <h3>Mobilité</h3>
                <p>Garder le corps en mouvement, chaque jour, sans exception.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="main-footer">
        <div className="container footer-content">
          <div className="footer-info">
            <h3>Contact</h3>
            <p>Email: contact@georges-everest.fr</p>
            <p>Besançon, France</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Georges : Objectif Everest. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
