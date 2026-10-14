import { useState } from 'react';
import { Lightbox } from '../components/Lightbox';
import { PageHero } from '../components/PageHero';
import { certificates, company, images, partners, press, team, timeline, videoUrl } from '../data/site';

export function Entreprise() {
  const [current, setCurrent] = useState<number | null>(null);
  const years = new Date().getFullYear() - company.founded;

  return (
    <>
      <PageHero eyebrow="Entreprise" title={`Menuiserie Schneider depuis ${company.founded}`}>
        <p>
          5<sup>e</sup> génération de menuisiers · {years} ans de savoir-faire transmis de père en fils.
        </p>
      </PageHero>

      <section className="section">
        <div className="container split split--top">
          <div>
            <p className="eyebrow">Histoire</p>
            <h2>Une histoire de famille</h2>
            <p>
              Fondée en {company.founded} à Rexingen, la menuiserie a été reprise en 1962 par
              Charles Schneider, puis en 1996 par son fils Pascal, maître ébéniste, qui crée la
              SARL Schneider Fils l'année suivante. L'atelier n'a cessé de s'équiper pour offrir
              un travail soigné et durable.
            </p>
            <img className="badge-1885" src={images.since1885} alt={`Depuis ${company.founded}`} />
          </div>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.year}>
                <span className="timeline__year">{t.year}</span>
                <div>
                  <h3>{t.title}</h3>
                  {t.items && (
                    <ul>
                      {t.items.map((i) => <li key={i}>{i}</li>)}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow">L'équipe</p>
          <h2>3 personnes à temps plein</h2>
          <div className="team">
            {team.map((m) => (
              <div key={m.name} className="team__member">
                <span className="team__avatar" aria-hidden="true">{m.name[0]}</span>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
          <p className="muted">
            La SARL Schneider accueille et forme des stagiaires et des apprentis tout au long de l'année.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Qualifications</p>
          <h2>Certificats</h2>
          <div className="certs">
            {certificates.map((c, i) => (
              <button key={c.src} className="certs__item" onClick={() => setCurrent(i)}>
                <img src={c.src} alt={c.alt} loading="lazy" />
                <span>{c.alt}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container media-links">
          <a href={press.url} target="_blank" rel="noreferrer" className="media-link">
            <span className="eyebrow">Presse · {press.date}</span>
            <strong>{press.title}</strong>
          </a>
          <a href={videoUrl} target="_blank" rel="noreferrer" className="media-link">
            <span className="eyebrow">Vidéo</span>
            <strong>Découvrir la menuiserie Schneider en vidéo</strong>
          </a>
          {partners.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="media-link media-link--logo">
              <span className="eyebrow">Partenaire</span>
              <img src={p.logo} alt={p.name} loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      <Lightbox photos={certificates} index={current} onChange={setCurrent} />
    </>
  );
}
