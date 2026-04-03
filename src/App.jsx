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
          <h1 id="site-title">Georges : Le chemin du toit du monde</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#hero">Accueil</a></li>
              <li><a href="#programme">Le Chemin</a></li>
              <li><a href="#methode">La Méthode</a></li>
              <li><a href="#bio">Georges</a></li>
              <li><a href="#sponsor">Sponsors</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <span className="hero-tagline">Expédition 2026-2027</span>
            <h2 className="hero-title">Le chemin du toit du monde</h2>
            <p className="hero-age-tagline">« Arrêter le vieillissement et retrouver un tonus d'enfer »</p>
            <p className="hero-description">
              Une discipline accessible, un programme ni oppressant ni sacrificiel. 
              Même si vous n'avez jamais fait de sport de votre vie, le sommet est à votre portée.
            </p>
            
            <Countdown targetDate={targetDate} />

            <div className="hero-cta-wrapper">
              <a href="#sponsor" className="btn btn-primary">
                Devenir Sponsor <span className="goal">(Objectif 150 000€)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Message de Georges */}
        <section id="message" className="section message-section">
          <div className="container">
            <blockquote className="inspire-quote">
              <p>« Je ne suis pas un surhomme aux muscles énormes. C’est une discipline avec un programme accessible que chacun peut appliquer. »</p>
              <cite>— Georges, 81 ans</cite>
            </blockquote>
          </div>
        </section>

        {/* Programme Timeline */}
        <section id="programme" className="section timeline-section">
          <div className="container">
            <h2 className="section-title">Le Chemin vers l'Everest</h2>
            <p className="section-subtitle">Mon programme pour les 24 prochains mois</p>
            
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Juillet 2026</span>
                  <h3>Grandes Jorasses (4000m)</h3>
                  <p>Alpes françaises : Une ascension mythique et technique pour forger l'expérience.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Novembre 2026</span>
                  <h3>Népal : Sommet de 7000m</h3>
                  <p>Première immersion en très haute altitude dans l'Himalaya.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Février 2027</span>
                  <h3>Préparation intensive</h3>
                  <p>Affinage physique et mental avant le bouquet final.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Octobre 2027</span>
                  <h3>Cho Oyu (8201m)</h3>
                  <p>L'épreuve ultime face à l'oxygène rare avant l'Everest.</p>
                </div>
              </div>

              <div className="timeline-item highlight">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">À suivre...</span>
                  <h3>Mont Everest (8848m)</h3>
                  <p>L'aboutissement d'une vie, le Toit du Monde.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section id="bio" className="section bio-section text-left">
          <div className="container bio-flex">
            <div className="bio-image-wrapper">
              <img src="/img/Dernière expédition  Gokio/bf65b2e2-5f02-411f-a027-23cce196f2da.jpg" alt="Georges en montagne" className="bio-img" loading="lazy" />
            </div>
            <div className="bio-text-content">
              <h2 className="section-title text-left">Georges, Octogénaire Passionné</h2>
              <p className="bio-intro">« Je n'ai pas toujours été sportif. »</p>
              <div className="bio-details">
                <p>Mon parcours est celui d'un homme qui a connu des périodes sédentaires. Mes exploits sportifs récents à plus de 6000m prouvent qu'avec de la méthode, on peut se refaire un tonus d'enfer.</p>
                <p>Mon parcours n'est pas sacrificiel. C'est une discipline qui redonne goût et sens à la vie.</p>
              </div>
            </div>
          </div>
        </section>

        {/* La Méthode Section */}
        <section id="methode" className="section guide-section bg-light">
          <div className="container">
            <h2 className="section-title">Les 4 Piliers de la Longévité</h2>
            <div className="guide-grid">
              <div className="guide-item">
                <div className="guide-icon">🏔️</div>
                <h3>Sport approprié</h3>
                <p>Adapté à chaque octogénaire, même sans passé sportif préalable.</p>
              </div>
              <div className="guide-item">
                <div className="guide-icon">🧠</div>
                <h3>Comportement</h3>
                <p>Une discipline mentale claire et bienveillante envers soi-même.</p>
              </div>
              <div className="guide-item">
                <div className="guide-icon">🥗</div>
                <h3>Alimentation</h3>
                <p>L’énergie vitale indispensable pour nourrir le corps et l’effort.</p>
              </div>
              <div className="guide-item">
                <div className="guide-icon">✨</div>
                <h3>Hygiène de vie</h3>
                <p>Un ensemble d’habitudes pour freiner durablement le vieillissement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsor" className="section sponsor-section">
          <div className="container">
            <div className="sponsor-card">
              <h2 className="section-title">Devenir Partenaire</h2>
              <p className="sponsor-description">Réaliser ce projet nécessite des fonds importants. J'invite les marques et partenaires qui partagent ces valeurs de persévérance et de longévité à me rejoindre.</p>
              <div className="sponsor-goal">
                <span className="goal-current">Objectif : 150 000€</span>
              </div>
              <button className="btn btn-primary">Nous Contacter pour un Sponsoring</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="main-footer">
        <div className="container footer-content">
          <div className="footer-info">
            <h3>Georges : Le chemin du toit du monde</h3>
            <p>Email: contact@georges-everest.fr</p>
            <p>Besançon, France</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Georges. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
