# Getting Started with Create React App

# Portfolio de Clément Randrianasolo

Portfolio personnel de Clément Randrianasolo, développeur Full Stack. Le site présente son parcours, ses compétences, ses services, ses projets professionnels et ses articles techniques.

## Fonctionnalités

- Interface en français et en anglais
- URLs propres avec la langue incluse
- Pages dédiées pour chaque rubrique
- Header et footer communs à toutes les pages
- Navigation active indiquant la page courante
- Mode sombre et mode clair
- Responsive sur ordinateur, tablette et mobile
- Page Blog avec catégories et articles détaillés
- Formulaire de demande de devis avec EmailJS
- Liens vers Google Maps, les avis Google et l'outil d'estimation de devis
- Page des mentions légales
- Déploiement prévu sur GitHub Pages

## Pages disponibles

Toutes les pages sont disponibles en français et en anglais :

| Page | Français | English |
| --- | --- | --- |
| Accueil | `/portfolio/fr` | `/portfolio/en` |
| À propos | `/portfolio/fr/about` | `/portfolio/en/about` |
| Services | `/portfolio/fr/services` | `/portfolio/en/services` |
| Compétences | `/portfolio/fr/skills` | `/portfolio/en/skills` |
| Processus | `/portfolio/fr/process` | `/portfolio/en/process` |
| Projets | `/portfolio/fr/projects` | `/portfolio/en/projects` |
| CV | `/portfolio/fr/cv` | `/portfolio/en/cv` |
| Contact | `/portfolio/fr/contact` | `/portfolio/en/contact` |
| Blog | `/portfolio/fr/blog` | `/portfolio/en/blog` |
| FAQ | `/portfolio/fr/faq` | `/portfolio/en/faq` |
| Mentions légales | `/portfolio/fr/mentions-legales` | `/portfolio/en/mentions-legales` |

Les articles utilisent le format `/portfolio/fr/blog/1` ou `/portfolio/en/blog/1`.

## Technologies

- React 18
- React Router DOM
- Create React App
- Tailwind CSS
- Lucide React et React Icons
- EmailJS
- GitHub Pages

## Installation

Pré-requis : Node.js et npm.

```bash
npm install
```

## Développement

Lancer le serveur de développement :

```bash
npm start
```

Le site est ensuite disponible à l'adresse [http://localhost:3000](http://localhost:3000).

## Vérification et production

Lancer les tests :

```bash
npm test
```

Créer une version de production :

```bash
npm run build
```

La version compilée est générée dans le dossier `build/`.

## Déploiement GitHub Pages

Le projet utilise l'URL de base `/portfolio/`, définie dans `package.json`.

Pour compiler et publier le site :

```bash
npm run deploy
```

Cette commande lance automatiquement la compilation avant de publier le dossier `build/` sur GitHub Pages.

Le fichier `public/404.html` permet de restaurer les URLs profondes lors d'un accès direct à une page GitHub Pages.

## Ajouter ou modifier un projet

Les projets professionnels sont définis dans :

```text
src/components/Portfolio.jsx
```

Chaque projet peut contenir :

```js
{
	title: "Nom du projet",
	description: {
		fr: "Description française",
		en: "English description"
	},
	tech: ["React", "Vercel"],
	isPrivate: false,
	siteUrl: "https://exemple.com",
	image: "/portfolio/images/logo-projet.png"
}
```

Pour un projet privé, utiliser `isPrivate: true` et ne pas ajouter de lien public.

## Images

Les logos et images locales sont placés dans :

```text
public/images/
```

Par exemple :

```text
public/images/aurora_logo.jpeg
public/images/habby.jpg
public/images/Chez.jpg
```

Dans le code, ces fichiers sont référencés avec le préfixe `/portfolio/images/`.

## Organisation principale

```text
public/
	images/              Images et logos locaux
	documents/           CV et documents téléchargeables
	404.html             Fallback GitHub Pages
src/
	App.js               Routes et gestion des langues
	routes.js            Générateur d'URLs localisées
	components/
		Portfolio.jsx      Accueil, rubriques et projets
		SiteChrome.jsx     Header et footer communs
		Blog.jsx           Liste des articles
		BlogArticle.jsx    Détail d'un article
		FAQ.jsx            Questions fréquentes
		LegalNotice.jsx    Mentions légales
```

## Liens externes

- Site Habby no Teryouri : <https://habby-no.vercel.app/>
- Outil d'estimation de devis : <https://devis-calculateur-estimation.vercel.app/>
- Localisation Google Maps : <https://share.google/px4gEl4yoEWp36c4C>
- Avis Google : <https://g.page/r/CYFgrr67vcwGEAI/review>

## Auteur

Clément Randrianasolo  
Email : randrianasolo.clementvictorin@gmail.com

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
