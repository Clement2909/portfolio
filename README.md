# Portfolio de Clément Randrianasolo

Portfolio personnel multilingue (français/anglais) présentant les services, les compétences, les projets et les articles techniques de Clément Randrianasolo.

## Stack technique

- React 19 et React Router 7
- Vite 8
- Tailwind CSS 4
- Vitest et Testing Library
- ESLint 10
- EmailJS, Lucide React et React Icons
- GitHub Pages

## Prérequis

- Node.js 22 ou version plus récente
- npm 10 ou version plus récente

## Commandes

```bash
npm install
npm start
```

Le serveur de développement est disponible sur `http://localhost:5173/portfolio/`.

```bash
npm run lint
npm test
npm run build
```

La version de production est générée dans `dist/`. Pour GitHub Pages :

```bash
npm run deploy
```

## Structure

```text
src/
  App.jsx                 Routes et état global
  components/             Pages et composants UI
  routes.js               Générateur d’URLs localisées
public/
  images/                 Images et logos
  documents/              CV et documents téléchargeables
  404.html                Fallback des routes GitHub Pages
```

Les projets sont définis dans `src/components/Portfolio.jsx`. Définir `isPrivate: true` masque leur lien externe.
