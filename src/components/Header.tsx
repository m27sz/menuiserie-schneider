import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { company } from '../data/site';

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/entreprise', label: 'Entreprise' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="brand" aria-label={`${company.name} — accueil`}>
          <span className="brand__mark" aria-hidden="true">S</span>
          <span className="brand__text">
            <strong>Menuiserie Schneider</strong>
            <small>Ébénisterie depuis {company.founded}</small>
          </span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="nav-toggle__bar" />
        </button>

        <nav id="main-nav" className={`nav ${open ? 'nav--open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav__link">
              {l.label}
            </NavLink>
          ))}
          <a href={company.phoneHref} className="btn btn--small nav__cta">
            {company.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
