import { Link } from 'react-router-dom';
import { ContactCta } from '../components/ContactCta';
import { company, galleries, images, news, prestations } from '../data/site';

export function Home() {
  const years = new Date().getFullYear() - company.founded;

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="eyebrow eyebrow--light">Rexingen · Alsace bossue</p>
          <h1>
            Le bois sur mesure,
            <br />
            <em>de père en fils depuis {company.founded}.</em>
          </h1>
          <p className="hero__lead">
            Bienvenue à la menuiserie Schneider Fils : cuisines, dressings, portes, salles de bains
            et agencements conçus et fabriqués dans notre atelier.
          </p>
          <div className="hero__actions">
            <Link to="/realisations" className="btn">Voir nos réalisations</Link>
            <Link to="/contact" className="btn btn--ghost-light">Nous contacter</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats__grid">
          <div><strong>{years}</strong><span>ans de savoir-faire</span></div>
          <div><strong>5<sup>e</sup></strong><span>génération de menuisiers</span></div>
          <div><strong>Maître</strong><span>ébéniste diplômé</span></div>
          <div><strong>Qualibat</strong><span>RGE certifié</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Notre métier</p>
            <h2>Un atelier familial, des réalisations uniques</h2>
            <p>
              Depuis {company.founded}, la menuiserie Schneider transmet son savoir-faire de
              génération en génération. Aujourd'hui dirigée par Pascal Schneider, maître ébéniste,
              l'entreprise allie gestes traditionnels et machine à commande numérique pour
              réaliser vos projets au millimètre.
            </p>
            <ul className="tags">
              {prestations.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <Link to="/entreprise" className="link-arrow">Découvrir notre histoire</Link>
          </div>
          <img
            className="split__img"
            src={galleries[3].photos[0].src}
            alt={galleries[3].photos[0].alt}
            loading="lazy"
          />
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="eyebrow">Réalisations</p>
              <h2>Ce que nous fabriquons</h2>
            </div>
            <Link to="/realisations" className="link-arrow">Toutes les réalisations</Link>
          </div>
          <div className="cards">
            {galleries.map((g) => (
              <Link key={g.slug} to={`/realisations#${g.slug}`} className="card">
                <img src={g.photos[0].src} alt={g.photos[0].alt} loading="lazy" />
                <div className="card__body">
                  <h3>{g.title}</h3>
                  <p>{g.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {news[0] && (
        <section className="section">
          <div className="container split split--reverse">
            <img className="split__img" src={news[0].image.src} alt={news[0].image.alt} loading="lazy" />
            <div>
              <p className="eyebrow">Dernière actualité</p>
              <h2>{news[0].title}</h2>
              <p>{news[0].text}</p>
              <Link to="/actualites" className="link-arrow">Toutes les actualités</Link>
            </div>
          </div>
        </section>
      )}

      <ContactCta />
    </>
  );
}
