import { ArrowLeft, Calendar, Clock, Tag, User, BookOpen } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const BlogArticle = ({ isDark, currentLang }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const articles = {
    fr: {
      1: {
        id: 1,
        title: "Optimisation des performances Laravel",
        excerpt: "Découvrez comment améliorer les performances de vos applications Laravel.",
        category: "tips",
        categoryLabel: "Astuces & Conseils",
        readTime: 8,
        date: "2025-01-10",
        author: "Clément Randrianasolo",
        content: `
# Optimisation des performances Laravel

Laravel est un framework PHP puissant, mais comme toute application web, il nécessite une optimisation pour offrir les meilleures performances possibles.

## 1. Mise en cache des configurations

La première étape consiste à mettre en cache vos fichiers de configuration :

\`\`\`bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
\`\`\`

Cela peut réduire considérablement le temps de chargement de vos pages.

## 2. Optimisation des requêtes Eloquent

Évitez le problème N+1 en utilisant le eager loading :

\`\`\`php
// ❌ Mauvais : Problème N+1
$users = User::all();
foreach ($users as $user) {
    echo $user->posts->count();
}

// ✅ Bon : Eager loading
$users = User::with('posts')->get();
foreach ($users as $user) {
    echo $user->posts->count();
}
\`\`\`

## 3. Utilisation de Redis pour le cache

Redis est beaucoup plus rapide que le cache fichier par défaut :

\`\`\`env
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
\`\`\`

## 4. Optimisation des assets

Utilisez Laravel Mix pour compiler et minifier vos assets :

\`\`\`javascript
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .version();
\`\`\`

## 5. Utilisation des index de base de données

N'oubliez pas d'ajouter des index sur les colonnes fréquemment recherchées :

\`\`\`php
Schema::table('users', function (Blueprint $table) {
    $table->index('email');
    $table->index('created_at');
});
\`\`\`

## Conclusion

Ces optimisations peuvent améliorer les performances de votre application Laravel de 40 à 60%. N'oubliez pas de toujours mesurer l'impact de vos optimisations avec des outils comme Laravel Debugbar ou Telescope.
        `
      },
      2: {
        id: 2,
        title: "Introduction à Vue.js 3 : Guide complet",
        excerpt: "Un guide complet pour démarrer avec Vue.js 3.",
        category: "tutorial",
        categoryLabel: "Tutoriels",
        readTime: 15,
        date: "2025-01-05",
        author: "Clément Randrianasolo",
        content: `
# Introduction à Vue.js 3 : Guide complet

Vue.js 3 apporte de nombreuses améliorations par rapport à la version 2, notamment la Composition API qui change la façon dont nous écrivons nos composants.

## Installation

Créez un nouveau projet Vue.js 3 avec Vite :

\`\`\`bash
npm create vite@latest mon-projet -- --template vue
cd mon-projet
npm install
npm run dev
\`\`\`

## La Composition API

La Composition API est la nouvelle façon recommandée d'écrire des composants Vue.js 3 :

\`\`\`vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    Count: {{ count }} (Double: {{ doubleCount }})
  </button>
</template>
\`\`\`

## Réactivité avec ref et reactive

Vue.js 3 offre deux façons principales de créer des données réactives :

### ref()
Utilisé pour les valeurs primitives :

\`\`\`javascript
const count = ref(0)
count.value++ // Accès avec .value
\`\`\`

### reactive()
Utilisé pour les objets :

\`\`\`javascript
const state = reactive({
  count: 0,
  message: 'Hello'
})
state.count++ // Accès direct
\`\`\`

## Lifecycle Hooks

Les hooks de cycle de vie dans la Composition API :

\`\`\`javascript
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Component is mounted!')
})

onUpdated(() => {
  console.log('Component is updated!')
})

onUnmounted(() => {
  console.log('Component is unmounted!')
})
\`\`\`

## Composables

Les composables sont des fonctions réutilisables qui utilisent la Composition API :

\`\`\`javascript
// useCounter.js
import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  return { count, increment, decrement }
}
\`\`\`

Utilisation :

\`\`\`vue
<script setup>
import { useCounter } from './composables/useCounter'

const { count, increment, decrement } = useCounter()
</script>
\`\`\`

## Conclusion

Vue.js 3 avec la Composition API offre une meilleure organisation du code et une meilleure réutilisabilité. C'est un excellent choix pour vos nouveaux projets !
        `
      },
      3: {
        id: 3,
        title: "Sécurité Web : Les essentiels à connaître",
        excerpt: "Protégez vos applications contre les vulnérabilités courantes.",
        category: "tech",
        categoryLabel: "Technologies",
        readTime: 12,
        date: "2024-12-28",
        author: "Clément Randrianasolo",
        content: `
# Sécurité Web : Les essentiels à connaître

La sécurité web est un aspect crucial du développement d'applications. Voici les principales vulnérabilités à connaître et comment les prévenir.

## 1. XSS (Cross-Site Scripting)

Le XSS permet à un attaquant d'injecter du code JavaScript malveillant.

### Protection :
\`\`\`javascript
// ❌ Dangereux
element.innerHTML = userInput

// ✅ Sécurisé
element.textContent = userInput
// Ou utilisez une bibliothèque de sanitization
\`\`\`

## 2. CSRF (Cross-Site Request Forgery)

Protégez vos formulaires avec des tokens CSRF :

\`\`\`php
// Laravel
<form method="POST">
    @csrf
    <!-- formulaire -->
</form>
\`\`\`

## 3. Injection SQL

Utilisez toujours des requêtes préparées :

\`\`\`php
// ❌ Vulnérable
$query = "SELECT * FROM users WHERE id = " . $_GET['id'];

// ✅ Sécurisé
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$_GET['id']]);
\`\`\`

## 4. Validation des données

Ne faites jamais confiance aux données utilisateur :

\`\`\`javascript
// Validation côté serveur obligatoire
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}
\`\`\`

## 5. HTTPS obligatoire

Toujours utiliser HTTPS pour protéger les données en transit :

\`\`\`nginx
server {
    listen 443 ssl;
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
}
\`\`\`

## 6. Headers de sécurité

Configurez les headers HTTP de sécurité :

\`\`\`
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
\`\`\`

## 7. Gestion des mots de passe

Utilisez des algorithmes de hachage modernes :

\`\`\`php
// ✅ Bcrypt avec Laravel
$hashed = Hash::make($password);

// ✅ Vérification
if (Hash::check($input, $hashed)) {
    // Mot de passe correct
}
\`\`\`

## Conclusion

La sécurité est un processus continu. Restez informé des nouvelles vulnérabilités et mettez à jour régulièrement vos dépendances. Utilisez des outils comme OWASP ZAP pour tester la sécurité de vos applications.
        `
      },
      4: {
        id: 4,
        title: "Refonte complète d'un système de gestion",
        excerpt: "Comment nous avons transformé une application PHP en solution moderne.",
        category: "case",
        categoryLabel: "Études de cas",
        readTime: 10,
        date: "2024-12-20",
        author: "Clément Randrianasolo",
        content: `
# Refonte complète d'un système de gestion

## Le contexte

Notre client utilisait une application de gestion développée il y a 10 ans en PHP brut. L'application était devenue difficile à maintenir et présentait de sérieux problèmes de performance.

## Les problèmes identifiés

- **Performance** : Temps de chargement de 5-8 secondes
- **Maintenabilité** : Code non structuré, pas de framework
- **Sécurité** : Nombreuses vulnérabilités identifiées
- **UX** : Interface datée et peu intuitive

## La solution proposée

Nous avons proposé une refonte complète avec :
- **Backend** : Laravel 10
- **Frontend** : Vue.js 3
- **Base de données** : PostgreSQL (migration depuis MySQL)
- **Cache** : Redis
- **API** : RESTful API

## Étapes de migration

### 1. Analyse de l'existant
- Audit complet du code
- Cartographie des fonctionnalités
- Identification des dépendances

### 2. Conception de la nouvelle architecture
\`\`\`
Client (Vue.js 3)
    ↓
API Laravel
    ↓
PostgreSQL + Redis
\`\`\`

### 3. Migration progressive
- Migration des données par modules
- Tests parallèles ancien/nouveau système
- Formation des utilisateurs

## Résultats

### Performance
- **Avant** : 5-8 secondes de chargement
- **Après** : 0.8-1.2 secondes
- **Amélioration** : 85%

### Maintenance
- Code structuré avec Laravel
- Tests automatisés (PHPUnit, Jest)
- Documentation complète

### Sécurité
- Toutes les vulnérabilités corrigées
- HTTPS obligatoire
- Authentification 2FA

### UX
- Interface moderne et responsive
- Feedback des utilisateurs : +90% de satisfaction
- Formation réduite grâce à l'intuitivité

## Technologies utilisées

**Backend :**
\`\`\`php
// Laravel avec repository pattern
class UserRepository implements UserRepositoryInterface
{
    public function findById($id)
    {
        return Cache::remember("user.{$id}", 3600, function () use ($id) {
            return User::with('roles')->find($id);
        });
    }
}
\`\`\`

**Frontend :**
\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const users = ref([])

onMounted(async () => {
  users.value = await userStore.fetchUsers()
})
</script>
\`\`\`

## Leçons apprises

1. **Communication** : Impliquer le client à chaque étape
2. **Tests** : Tester massivement avant la mise en production
3. **Formation** : Prévoir du temps pour former les utilisateurs
4. **Documentation** : Documenter le code et les processus

## Conclusion

Cette refonte a été un succès total. Le client a vu une amélioration immédiate de la productivité de ses équipes, et le système est maintenant prêt pour évoluer dans les années à venir.

**Budget** : Respecté à 95%
**Délais** : Livré avec 1 semaine d'avance
**Satisfaction client** : 5/5
        `
      },
      5: {
        id: 5,
        title: "React vs Vue.js : Quel framework choisir ?",
        excerpt: "Comparaison détaillée des deux frameworks populaires.",
        category: "tech",
        categoryLabel: "Technologies",
        readTime: 10,
        date: "2024-12-15",
        author: "Clément Randrianasolo",
        content: `
# React vs Vue.js : Quel framework choisir ?

Choisir entre React et Vue.js peut être difficile. Voici une comparaison objective pour vous aider.

## Courbe d'apprentissage

### Vue.js ✅
- Plus facile pour les débutants
- Syntaxe HTML-like
- Documentation excellente

### React
- Courbe d'apprentissage plus raide
- Nécessite de comprendre JSX
- Concepts plus abstraits

## Performance

Les deux sont très performants, mais :
- **React** : Virtual DOM, optimisations via React.memo
- **Vue.js** : Virtual DOM aussi, mais avec réactivité fine-grained

## Écosystème

### React
- Plus large communauté
- Plus de bibliothèques tierces
- Plus d'offres d'emploi

### Vue.js
- Écosystème officiel complet (Router, Store)
- Communauté très active
- Croissance rapide

## Syntaxe

**React (JSX) :**
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
\`\`\`

**Vue.js (SFC) :**
\`\`\`vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">
    Count: {{ count }}
  </button>
</template>
\`\`\`

## Quand choisir React ?

- Projet à grande échelle
- Équipe avec expérience React
- Besoin de bibliothèques spécifiques React
- Application mobile avec React Native

## Quand choisir Vue.js ?

- Projet de taille petite à moyenne
- Équipe débutante en frameworks
- Besoin de démarrer rapidement
- Intégration progressive dans projet existant

## Conclusion

**Les deux sont excellents !** Le choix dépend de :
- Votre équipe
- Votre projet
- Vos préférences personnelles

Mon conseil : **Essayez les deux** et choisissez celui avec lequel vous êtes le plus productif.
        `
      },
      6: {
        id: 6,
        title: "Automatisation avec Python : Cas pratiques",
        excerpt: "Exemples concrets d'automatisation de tâches répétitives.",
        category: "tutorial",
        categoryLabel: "Tutoriels",
        readTime: 12,
        date: "2024-12-08",
        author: "Clément Randrianasolo",
        content: `
# Automatisation avec Python : Cas pratiques

Python est excellent pour automatiser les tâches répétitives. Voici des exemples concrets.

## 1. Automatisation de rapports Excel

\`\`\`python
import pandas as pd
from datetime import datetime

# Lire les données
df = pd.read_csv('ventes.csv')

# Calculer les statistiques
rapport = df.groupby('produit').agg({
    'quantite': 'sum',
    'prix': 'mean',
    'total': 'sum'
})

# Exporter vers Excel
with pd.ExcelWriter(f'rapport_{datetime.now():%Y%m%d}.xlsx') as writer:
    rapport.to_excel(writer, sheet_name='Résumé')
\`\`\`

## 2. Web Scraping automatique

\`\`\`python
import requests
from bs4 import BeautifulSoup
import schedule
import time

def scrape_prix():
    url = "https://example.com/produits"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    produits = soup.find_all('div', class_='produit')

    for produit in produits:
        nom = produit.find('h2').text
        prix = produit.find('span', class_='prix').text
        print(f"{nom}: {prix}")

# Exécuter tous les jours à 9h
schedule.every().day.at("09:00").do(scrape_prix)

while True:
    schedule.run_pending()
    time.sleep(60)
\`\`\`

## 3. Traitement d'images en masse

\`\`\`python
from PIL import Image
import os

def redimensionner_images(dossier_source, dossier_dest, taille=(800, 600)):
    for fichier in os.listdir(dossier_source):
        if fichier.endswith(('.jpg', '.png')):
            img = Image.open(os.path.join(dossier_source, fichier))
            img.thumbnail(taille)
            img.save(os.path.join(dossier_dest, fichier), quality=85)
            print(f"Redimensionné: {fichier}")

redimensionner_images('images_source', 'images_mini')
\`\`\`

## 4. Envoi automatique d'emails

\`\`\`python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def envoyer_rapport(destinataire, sujet, contenu):
    expediteur = "rapport@monentreprise.com"
    mot_de_passe = "votre_mot_de_passe"

    message = MIMEMultipart()
    message['From'] = expediteur
    message['To'] = destinataire
    message['Subject'] = sujet

    message.attach(MIMEText(contenu, 'html'))

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(expediteur, mot_de_passe)
        server.send_message(message)

    print(f"Email envoyé à {destinataire}")
\`\`\`

## 5. Surveillance de fichiers

\`\`\`python
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time

class MonHandler(FileSystemEventHandler):
    def on_created(self, event):
        print(f"Nouveau fichier créé: {event.src_path}")
        # Traiter le fichier

    def on_modified(self, event):
        print(f"Fichier modifié: {event.src_path}")

observer = Observer()
observer.schedule(MonHandler(), path='./dossier_surveille', recursive=True)
observer.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()
\`\`\`

## 6. Génération de rapports PDF

\`\`\`python
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

def generer_facture(numero, client, montant):
    pdf = canvas.Canvas(f"facture_{numero}.pdf", pagesize=letter)

    pdf.setFont("Helvetica-Bold", 16)
    pdf.drawString(100, 750, f"Facture N° {numero}")

    pdf.setFont("Helvetica", 12)
    pdf.drawString(100, 700, f"Client: {client}")
    pdf.drawString(100, 680, f"Montant: {montant} €")

    pdf.save()
    print(f"Facture {numero} générée")

generer_facture("2024-001", "Entreprise XYZ", 1500.00)
\`\`\`

## Conclusion

Python permet d'automatiser pratiquement n'importe quelle tâche répétitive. Commencez petit et construisez progressivement vos scripts d'automatisation !

**Gains de temps observés :**
- Rapports Excel : 2h → 5min
- Traitement d'images : 30min → 2min
- Envoi d'emails : 1h → instantané
        `
      }
    },
    en: {
      // Articles en anglais (versions traduites)
      1: {
        id: 1,
        title: "Laravel Performance Optimization",
        excerpt: "Discover how to improve your Laravel application performance.",
        category: "tips",
        categoryLabel: "Tips & Advice",
        readTime: 8,
        date: "2025-01-10",
        author: "Clément Randrianasolo",
        content: `
# Laravel Performance Optimization

Laravel is a powerful PHP framework, but like any web application, it requires optimization to deliver the best possible performance.

## 1. Configuration Caching

The first step is to cache your configuration files:

\`\`\`bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
\`\`\`

This can significantly reduce your page load times.

## 2. Eloquent Query Optimization

Avoid the N+1 problem by using eager loading:

\`\`\`php
// ❌ Bad: N+1 Problem
$users = User::all();
foreach ($users as $user) {
    echo $user->posts->count();
}

// ✅ Good: Eager loading
$users = User::with('posts')->get();
foreach ($users as $user) {
    echo $user->posts->count();
}
\`\`\`

## 3. Using Redis for Cache

Redis is much faster than the default file cache:

\`\`\`env
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
\`\`\`

## 4. Asset Optimization

Use Laravel Mix to compile and minify your assets:

\`\`\`javascript
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .version();
\`\`\`

## 5. Database Indexes

Don't forget to add indexes on frequently searched columns:

\`\`\`php
Schema::table('users', function (Blueprint $table) {
    $table->index('email');
    $table->index('created_at');
});
\`\`\`

## Conclusion

These optimizations can improve your Laravel application performance by 40 to 60%. Always measure the impact of your optimizations with tools like Laravel Debugbar or Telescope.
        `
      },
      2: {
        id: 2,
        title: "Introduction to Vue.js 3: Complete Guide",
        excerpt: "A complete guide to getting started with Vue.js 3.",
        category: "tutorial",
        categoryLabel: "Tutorials",
        readTime: 15,
        date: "2025-01-05",
        author: "Clément Randrianasolo",
        content: `[Content similar to French version but in English...]`
      },
      3: {
        id: 3,
        title: "Web Security: The Essentials",
        excerpt: "Protect your applications against common vulnerabilities.",
        category: "tech",
        categoryLabel: "Technologies",
        readTime: 12,
        date: "2024-12-28",
        author: "Clément Randrianasolo",
        content: `[Content similar to French version but in English...]`
      },
      4: {
        id: 4,
        title: "Complete Management System Overhaul",
        excerpt: "How we transformed a PHP application into a modern solution.",
        category: "case",
        categoryLabel: "Case Studies",
        readTime: 10,
        date: "2024-12-20",
        author: "Clément Randrianasolo",
        content: `[Content similar to French version but in English...]`
      },
      5: {
        id: 5,
        title: "React vs Vue.js: Which Framework to Choose?",
        excerpt: "Detailed comparison of two popular frameworks.",
        category: "tech",
        categoryLabel: "Technologies",
        readTime: 10,
        date: "2024-12-15",
        author: "Clément Randrianasolo",
        content: `[Content similar to French version but in English...]`
      },
      6: {
        id: 6,
        title: "Automation with Python: Practical Cases",
        excerpt: "Concrete examples of repetitive task automation.",
        category: "tutorial",
        categoryLabel: "Tutorials",
        readTime: 12,
        date: "2024-12-08",
        author: "Clément Randrianasolo",
        content: `[Content similar to French version but in English...]`
      }
    }
  };

  const article = articles[currentLang][id];

  if (!article) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {currentLang === 'fr' ? 'Article non trouvé' : 'Article not found'}
          </h1>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {currentLang === 'fr' ? 'Retour au blog' : 'Back to blog'}
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'en-US', options);
  };

  const getCategoryColor = (category) => {
    const colors = {
      tutorial: "from-blue-500 to-cyan-500",
      tips: "from-green-500 to-emerald-500",
      tech: "from-purple-500 to-pink-500",
      case: "from-orange-500 to-yellow-500"
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Header */}
      <div className={`sticky top-0 z-50 backdrop-blur-md shadow-sm transition-all duration-300 ${
        isDark ? 'bg-gray-800/90' : 'bg-white/90'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/blog')}
            className={`flex items-center transition-colors ${
              isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {currentLang === 'fr' ? 'Retour aux articles' : 'Back to articles'}
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Image/Banner */}
        <div className={`h-64 rounded-xl bg-gradient-to-br ${getCategoryColor(article.category)} mb-8 flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20" />
          <BookOpen className="h-24 w-24 text-white/50 relative z-10" />

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/90 text-gray-800 backdrop-blur-sm flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              {article.categoryLabel}
            </span>
          </div>
        </div>

        {/* Article Meta */}
        <div className="mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {article.title}
          </h1>

          <div className={`flex flex-wrap items-center gap-4 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(article.date)}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {article.readTime} {currentLang === 'fr' ? 'min de lecture' : 'min read'}
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className={`prose prose-lg max-w-none ${
          isDark ? 'prose-invert' : ''
        }`}>
          <div
            className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            style={{ whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>').replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>').replace(/`([^`]+)`/g, '<code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">$1</code>').replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>').replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>').replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>') }}
          />
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => navigate('/blog')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${getCategoryColor(article.category)} text-white shadow-md hover:shadow-lg`}
          >
            <ArrowLeft className="h-5 w-5 inline mr-2" />
            {currentLang === 'fr' ? 'Retour aux articles' : 'Back to articles'}
          </button>
        </div>
      </article>

      {/* Footer */}
      <footer className={`py-8 mt-16 transition-all duration-300 ${
        isDark ? 'bg-black text-gray-300' : 'bg-gray-900 text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Portfolio. {currentLang === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogArticle;
