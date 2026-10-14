import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactCta } from '../components/ContactCta';
import { Lightbox } from '../components/Lightbox';
import { PageHero } from '../components/PageHero';
import { galleries, prestations, produits } from '../data/site';

const ALL = 'tout';

export function Realisations() {
  const { hash } = useLocation();
  const [filter, setFilter] = useState<string>(ALL);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const slug = hash.replace('#', '');
    if (galleries.some((g) => g.slug === slug)) setFilter(slug);
  }, [hash]);

  const visible = filter === ALL ? galleries : galleries.filter((g) => g.slug === filter);
  const photos = visible.flatMap((g) => g.photos);

  return (
    <>
      <PageHero eyebrow="Réalisations" title="Nos réalisations">
        <p>Chaque pièce est dessinée, fabriquée et posée par notre équipe, selon vos attentes.</p>
      </PageHero>

      <section className="section">
        <div className="container offer">
          <div>
            <h2 className="h3">Nos prestations</h2>
            <ul className="checklist">
              {prestations.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="h3">Nos produits</h2>
            <ul className="checklist checklist--cols">
              {produits.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Filtrer les réalisations">
            {[{ slug: ALL, title: 'Tout' }, ...galleries].map((g) => (
              <button
                key={g.slug}
                role="tab"
                aria-selected={filter === g.slug}
                className={`filter ${filter === g.slug ? 'filter--active' : ''}`}
                onClick={() => setFilter(g.slug)}
              >
                {g.title}
              </button>
            ))}
          </div>

          {visible.map((g) => {
            const offset = photos.indexOf(g.photos[0]);
            return (
              <div key={g.slug} id={g.slug} className="gallery-block">
                <h2 className="h3">{g.title}</h2>
                <p className="muted">{g.description}</p>
                <div className="gallery">
                  {g.photos.map((p, i) => (
                    <button key={p.src} className="gallery__item" onClick={() => setCurrent(offset + i)}>
                      <img src={p.src} alt={p.alt} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Lightbox photos={photos} index={current} onChange={setCurrent} />
      <ContactCta />
    </>
  );
}
