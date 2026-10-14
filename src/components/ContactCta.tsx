import { Link } from 'react-router-dom';
import { company } from '../data/site';

export function ContactCta() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>Un projet de menuiserie sur mesure ?</h2>
          <p>Parlons-en : nous étudions chaque demande et établissons un devis personnalisé.</p>
        </div>
        <div className="cta__actions">
          <Link to="/contact" className="btn">Demander un devis</Link>
          <a href={company.phoneHref} className="btn btn--ghost">{company.phone}</a>
        </div>
      </div>
    </section>
  );
}
