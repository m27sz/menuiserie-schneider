# Menuiserie Schneider

Site vitrine de la **Menuiserie Schneider Fils (SARL)** — menuisiers ébénistes à Rexingen (67) depuis 1885.
Refonte du site [menuiserie-schneider.e-monsite.com](https://menuiserie-schneider.e-monsite.com/).

## Stack

- [Vite](https://vite.dev) + React + **TypeScript**
- React Router (Accueil, Réalisations, Entreprise, Actualités, Contact)
- CSS natif, aucune dépendance UI
- Déploiement automatique sur GitHub Pages (`.github/workflows/deploy.yml`)

## Développement

```bash
npm install
npm run dev      # http://localhost:5173/menuiserie-schneider/
npm run build    # vérification TypeScript + build de production
```

## Modifier le contenu

Tout le contenu (coordonnées, horaires, historique, galeries photo, actualités) est centralisé et typé dans
[`src/data/site.ts`](src/data/site.ts). Les photos sont dans `public/images/`.

Pour ajouter une actualité : ajouter une entrée au tableau `news`.
Pour ajouter une photo de réalisation : déposer l'image dans `public/images/` puis l'ajouter à la galerie voulue dans `galleries`.

## Domaine personnalisé

Pour servir le site à la racine d'un domaine, builder avec `BASE_PATH=/ npm run build`.
