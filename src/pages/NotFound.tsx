import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export function NotFound() {
  return (
    <PageHero eyebrow="Erreur 404" title="Page introuvable">
      <p>Cette page n'existe pas ou a été déplacée.</p>
      <Link to="/" className="btn">Retour à l'accueil</Link>
    </PageHero>
  );
}
