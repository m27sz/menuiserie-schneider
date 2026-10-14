import { ContactCta } from '../components/ContactCta';
import { PageHero } from '../components/PageHero';
import { news } from '../data/site';

export function Actualites() {
  return (
    <>
      <PageHero eyebrow="Actualités" title="Les nouvelles de l'atelier" />
      <section className="section">
        <div className="container news">
          {news.map((n) => (
            <article key={n.title} className="news__item">
              <img src={n.image.src} alt={n.image.alt} loading="lazy" />
              <div>
                <h2 className="h3">{n.title}</h2>
                <p>{n.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
