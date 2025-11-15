import { useState } from "react";
import { ArrowLeft, Calendar, Clock, BookOpen, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Blog = ({ isDark, setIsDark, currentLang, setCurrentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const translations = {
    fr: {
      title: "Blog & Articles",
      subtitle: "Partage de connaissances et d'expériences",
      backButton: "Retour au portfolio",
      allCategories: "Tous",
      readTime: "min de lecture",
      readMore: "Lire la suite",
      categories: {
        all: "Tous",
        tutorial: "Tutoriels",
        tips: "Astuces & Conseils",
        tech: "Technologies",
        case: "Études de cas"
      },
      articles: [
        {
          id: 1,
          title: "Optimisation des performances Laravel",
          excerpt: "Découvrez comment améliorer les performances de vos applications Laravel en utilisant la mise en cache, l'optimisation des requêtes et les bonnes pratiques.",
          category: "tips",
          readTime: 8,
          date: "2025-01-10",
          image: "/portfolio/images/blog/laravel-perf.jpg"
        },
        {
          id: 2,
          title: "Introduction à Vue.js 3 : Guide complet",
          excerpt: "Un guide complet pour démarrer avec Vue.js 3, de l'installation aux concepts avancés comme Composition API et les composables.",
          category: "tutorial",
          readTime: 15,
          date: "2025-01-05",
          image: "/portfolio/images/blog/vue3-guide.jpg"
        },
        {
          id: 3,
          title: "Sécurité Web : Les essentiels à connaître",
          excerpt: "Protégez vos applications contre les vulnérabilités courantes : XSS, CSRF, injection SQL et autres menaces. Guide pratique avec exemples.",
          category: "tech",
          readTime: 12,
          date: "2024-12-28",
          image: "/portfolio/images/blog/security.jpg"
        },
        {
          id: 4,
          title: "Refonte complète d'un système de gestion",
          excerpt: "Comment nous avons transformé une application PHP en une solution moderne avec Laravel et Vue.js, améliorant les performances de 60%.",
          category: "case",
          readTime: 10,
          date: "2024-12-20",
          image: "/portfolio/images/blog/refonte.jpg"
        },
        {
          id: 5,
          title: "React vs Vue.js : Quel framework choisir ?",
          excerpt: "Comparaison détaillée des deux frameworks populaires, leurs avantages, inconvénients et cas d'usage pour vous aider à choisir.",
          category: "tech",
          readTime: 10,
          date: "2024-12-15",
          image: "/portfolio/images/blog/react-vs-vue.jpg"
        },
        {
          id: 6,
          title: "Automatisation avec Python : Cas pratiques",
          excerpt: "Exemples concrets d'automatisation de tâches répétitives avec Python : scraping, traitement de données, génération de rapports.",
          category: "tutorial",
          readTime: 12,
          date: "2024-12-08",
          image: "/portfolio/images/blog/python-auto.jpg"
        }
      ]
    },
    en: {
      title: "Blog & Articles",
      subtitle: "Sharing knowledge and experiences",
      backButton: "Back to portfolio",
      allCategories: "All",
      readTime: "min read",
      readMore: "Read more",
      categories: {
        all: "All",
        tutorial: "Tutorials",
        tips: "Tips & Advice",
        tech: "Technologies",
        case: "Case Studies"
      },
      articles: [
        {
          id: 1,
          title: "Laravel Performance Optimization",
          excerpt: "Discover how to improve your Laravel application performance using caching, query optimization and best practices.",
          category: "tips",
          readTime: 8,
          date: "2025-01-10",
          image: "/portfolio/images/blog/laravel-perf.jpg"
        },
        {
          id: 2,
          title: "Introduction to Vue.js 3: Complete Guide",
          excerpt: "A complete guide to getting started with Vue.js 3, from installation to advanced concepts like Composition API and composables.",
          category: "tutorial",
          readTime: 15,
          date: "2025-01-05",
          image: "/portfolio/images/blog/vue3-guide.jpg"
        },
        {
          id: 3,
          title: "Web Security: The Essentials",
          excerpt: "Protect your applications against common vulnerabilities: XSS, CSRF, SQL injection and other threats. Practical guide with examples.",
          category: "tech",
          readTime: 12,
          date: "2024-12-28",
          image: "/portfolio/images/blog/security.jpg"
        },
        {
          id: 4,
          title: "Complete Management System Overhaul",
          excerpt: "How we transformed a PHP application into a modern solution with Laravel and Vue.js, improving performance by 60%.",
          category: "case",
          readTime: 10,
          date: "2024-12-20",
          image: "/portfolio/images/blog/refonte.jpg"
        },
        {
          id: 5,
          title: "React vs Vue.js: Which Framework to Choose?",
          excerpt: "Detailed comparison of two popular frameworks, their pros, cons and use cases to help you choose.",
          category: "tech",
          readTime: 10,
          date: "2024-12-15",
          image: "/portfolio/images/blog/react-vs-vue.jpg"
        },
        {
          id: 6,
          title: "Automation with Python: Practical Cases",
          excerpt: "Concrete examples of repetitive task automation with Python: scraping, data processing, report generation.",
          category: "tutorial",
          readTime: 12,
          date: "2024-12-08",
          image: "/portfolio/images/blog/python-auto.jpg"
        }
      ]
    }
  };

  const t = translations[currentLang];

  const filteredArticles = selectedCategory === "all"
    ? t.articles
    : t.articles.filter(article => article.category === selectedCategory);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/')}
            className={`flex items-center transition-colors ${
              isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t.backButton}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className={`p-4 rounded-full ${
                isDark ? 'bg-blue-900/30' : 'bg-blue-100'
              }`}>
                <BookOpen className={`h-12 w-12 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {t.title}
            </h1>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(t.categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className={`rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
                }`}
              >
                {/* Article Image */}
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(article.category)} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white/50" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-sm flex items-center`}>
                      <Tag className="h-3 w-3 mr-1" />
                      {t.categories[article.category]}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Date and Read Time */}
                  <div className={`flex items-center gap-4 mb-3 text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime} {t.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {article.excerpt}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={() => navigate(`/blog/${article.id}`)}
                    className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${getCategoryColor(article.category)} text-white shadow-md hover:shadow-lg`}
                  >
                    {t.readMore}
                    <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* No Articles Message */}
          {filteredArticles.length === 0 && (
            <div className={`text-center py-16 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">
                {currentLang === 'fr' ? 'Aucun article dans cette catégorie' : 'No articles in this category'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-all duration-300 ${
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

export default Blog;
