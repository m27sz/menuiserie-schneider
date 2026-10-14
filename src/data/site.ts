// Contenu repris du site d'origine : https://menuiserie-schneider.e-monsite.com/

export interface Company {
  name: string;
  legalName: string;
  tagline: string;
  founded: number;
  address: { street: string; postalCode: string; city: string };
  phone: string;
  phoneHref: string;
  email: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export interface Gallery {
  slug: string;
  title: string;
  description: string;
  photos: Photo[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  items?: string[];
}

export interface NewsItem {
  title: string;
  text: string;
  image: Photo;
}

export interface Partner {
  name: string;
  url: string;
  logo: string;
}

const img = (file: string) => `${import.meta.env.BASE_URL}images/${file}`;

export const company: Company = {
  name: 'Menuiserie Schneider',
  legalName: 'Menuiserie Schneider Fils (SARL)',
  tagline: 'Menuisiers ébénistes de père en fils depuis 1885',
  founded: 1885,
  address: { street: '9 rue Principale', postalCode: '67320', city: 'Rexingen' },
  phone: '03 88 01 71 29',
  phoneHref: 'tel:+33388017129',
  email: 'contact@menuiserie-schneider.com',
};

export const openingHours: OpeningHours[] = [
  { days: 'Lundi – Jeudi', hours: '7h – 12h · 13h – 18h' },
  { days: 'Vendredi', hours: '7h – 12h' },
  { days: 'Samedi – Dimanche', hours: 'Fermé' },
];

export const prestations: string[] = [
  "Agencement d'intérieur",
  'Agencement de magasin',
  'Agencement de crèche',
];

export const produits: string[] = [
  'Bibliothèques avec échelle',
  'Dressings',
  'Fenêtres de toit',
  'Parquets',
  'Plafonds',
  'Salles de bains',
  'Cuisines',
  'Escaliers',
  'Fenêtres',
  'Placards',
  'Portes',
  'Salons',
];

export const galleries: Gallery[] = [
  {
    slug: 'agencements',
    title: 'Agencements',
    description: 'Meubles et rangements sur mesure, pensés pour chaque pièce.',
    photos: [
      { src: img('dsc01975.jpg'), alt: "Agencement d'intérieur sur mesure" },
      { src: img('mauvais-057-a.jpg'), alt: 'Meuble TV et vitrines laqués noirs' },
    ],
  },
  {
    slug: 'bars',
    title: 'Bars',
    description: 'Comptoirs et bars conçus et fabriqués dans notre atelier.',
    photos: [
      { src: img('20180710-150933.jpg'), alt: 'Bar réalisé sur mesure' },
      { src: img('img-20181030-105103.jpg'), alt: 'Comptoir de bar en bois' },
    ],
  },
  {
    slug: 'cuisines',
    title: 'Cuisines',
    description: 'Des cuisines fonctionnelles, adaptées à vos volumes, même sous combles.',
    photos: [
      { src: img('20180727-165639.jpg'), alt: 'Cuisine noire avec plan de travail bois et table haute' },
      { src: img('img-20181212-152436.jpg'), alt: 'Cuisine en décor chêne' },
      { src: img('img-20181212-153422.jpg'), alt: 'Détail de cuisine sur mesure' },
      { src: img('img-20181212-155545.jpg'), alt: 'Colonne de cuisine en décor bois' },
      { src: img('img-20151006-115831.jpg'), alt: 'Cuisine équipée' },
      { src: img('img-20181212-152449.jpg'), alt: 'Cuisine sous pente' },
      { src: img('img-20181212-155530.jpg'), alt: 'Cuisine sous combles avec îlot et poutres apparentes' },
      { src: img('img-20190304-151709.jpg'), alt: 'Cuisine moderne sur mesure' },
    ],
  },
  {
    slug: 'dressings',
    title: 'Dressings',
    description: 'Rangements optimisés au centimètre près.',
    photos: [
      { src: img('img-20160602-170505.jpg'), alt: 'Dressing sur mesure' },
      { src: img('img-20190325-164815.jpg'), alt: 'Dressing avec penderies' },
      { src: img('img-20190325-164849.jpg'), alt: 'Intérieur de dressing' },
      { src: img('img-20181105-152814.jpg'), alt: 'Placard dressing' },
      { src: img('img-20190325-164825.jpg'), alt: 'Dressing avec étagères' },
    ],
  },
  {
    slug: 'portes',
    title: 'Portes',
    description: "Portes d'entrée et portes intérieures en bois massif.",
    photos: [
      { src: img('2007-09070709clients110020.jpg'), alt: "Porte d'entrée en bois" },
      { src: img('2007-11090911070005.jpg'), alt: 'Porte en bois massif' },
      { src: img('dsc03247.jpg'), alt: 'Porte intérieure' },
      { src: img('2007-11090911070001.jpg'), alt: "Porte d'entrée vitrée" },
      { src: img('dsc02838.jpg'), alt: 'Porte réalisée en atelier' },
    ],
  },
  {
    slug: 'salles-de-bains',
    title: 'Salles de bains',
    description: 'Meubles de salle de bains personnalisés, finitions au choix.',
    photos: [
      { src: img('20161215-075304.jpg'), alt: 'Meuble de salle de bains' },
      { src: img('img-20151016-111806.jpg'), alt: 'Salle de bains sur mesure' },
      { src: img('img-2465-1-.jpg'), alt: 'Meuble vasque en bois' },
    ],
  },
];

export const timeline: TimelineEntry[] = [
  { year: '1885', title: 'Création de la menuiserie familiale à Rexingen' },
  {
    year: '1962',
    title: 'Charles Schneider (père) reprend la menuiserie familiale',
  },
  {
    year: '1970',
    title: 'Construction de la menuiserie actuelle',
    items: ['Mobilier', 'Chambres à coucher', 'Fenêtres et portes', 'Cercueils'],
  },
  { year: '1996', title: 'Reprise de la menuiserie par Pascal Schneider (fils)' },
  { year: '1997', title: 'Création de la SARL Schneider Fils' },
  {
    year: '1998',
    title: 'Formation du premier apprenti, aujourd’hui salarié de l’entreprise',
  },
  {
    year: '2001',
    title: "Agrandissement de l'atelier",
    items: [
      "Construction d'une cabine de vernissage",
      "Achat d'une ponceuse à bande large",
      "Achat d'une plaqueuse de chant",
    ],
  },
  {
    year: '2003',
    title: 'Mise en conformité de la menuiserie et des machines',
    items: ['Participation au recyclage des déchets'],
  },
  {
    year: '2006',
    title: '10 ans de la reprise · 120 ans de la menuiserie familiale',
    items: [
      'Formation du deuxième apprenti, aujourd’hui salarié',
      "Accueil et formation de stagiaires toute l'année",
    ],
  },
  {
    year: '2015',
    title: "Acquisition d'une machine à commande numérique",
    items: ['Optimisation de la production'],
  },
  {
    year: 'Projet',
    title: 'Optimiser techniquement et économiquement la structure',
    items: [
      "Chauffage de l'atelier par recyclage des déchets de bois de la menuiserie",
    ],
  },
];

export const team: { name: string; role: string }[] = [
  { name: 'Pascal', role: 'Maître ébéniste, gérant' },
  { name: 'Mathieu', role: 'Menuisier' },
  { name: 'Un apprenti', role: 'En formation' },
];

export const certificates: Photo[] = [
  { src: img('certificat-qualibat.jpg'), alt: 'Certificat Qualibat' },
  { src: img('certificat-qualibat-rge.jpg'), alt: 'Certificat Qualibat RGE' },
  { src: img('img-20190524-144723-ab.jpg'), alt: "Brevet de maîtrise en ébénisterie — Chambre de Métiers d'Alsace" },
];

export const news: NewsItem[] = [
  {
    title: 'Salle de bains rouge pompier',
    text: 'Réalisation personnalisée suivant les attentes du client, finition laquée rouge pompier.',
    image: { src: img('actualite.jpg'), alt: 'Salle de bains laquée rouge pompier' },
  },
];

export const press = {
  title: 'DNA — « Menuiserie Schneider : 120 ans de savoir-faire »',
  date: 'Samedi 17 juin 2006',
  url: 'http://sitemap.dna.fr/articles/200606/17/menuiserie-schneider-120-ans-de-savoir-faire,sarre-union,000008895.php',
};

export const videoUrl = 'https://drive.google.com/open?id=1vXiSZ93Nd4CqpmzSgMPm2fbgRWBnueFA';

export const partners: Partner[] = [
  { name: 'Hettich', url: 'https://www.hettich.com/fr-fr', logo: img('partenaire-3.jpg') },
  { name: 'AB5', url: 'http://www.ab5.fr/titres_engagements.html', logo: img('ab5.jpg') },
];

export const images = {
  hero: img('img-20181212-155530.jpg'),
  since1885: img('depuis-1885.jpg'),
  logo: img('logo-3.jpg'),
};
