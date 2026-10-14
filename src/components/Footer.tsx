import { Link } from 'react-router-dom';
import { company, openingHours, partners } from '../data/site';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3 className="footer__title">{company.legalName}</h3>
          <p>{company.tagline}.</p>
          <p className="footer__partners">
            {partners.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer">
                {p.name}
              </a>
            ))}
          </p>
        </div>
        <div>
          <h3 className="footer__title">Coordonnées</h3>
          <address>
            {company.address.street}
            <br />
            {company.address.postalCode} {company.address.city}
            <br />
            <a href={company.phoneHref}>{company.phone}</a>
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </address>
        </div>
        <div>
          <h3 className="footer__title">Horaires</h3>
          <ul className="hours">
            {openingHours.map((h) => (
              <li key={h.days}>
                <span>{h.days}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {year} {company.legalName}</span>
        <Link to="/contact">Demander un devis</Link>
      </div>
    </footer>
  );
}
