import { Code, ExternalLink, Globe, Menu, Moon, Star, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { localizedPath } from '../routes';

const pageLinks = [
  ['about', 'À propos', 'About'],
  ['services', 'Services', 'Services'],
  ['skills', 'Compétences', 'Skills'],
  ['process', 'Processus', 'Process'],
  ['projects', 'Projets', 'Projects'],
  ['contact', 'Contact', 'Contact']
];

export const SiteHeader = ({ currentLang, isDark, setIsDark, activePage = 'home', pageId }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isFrench = currentLang === 'fr';
  const goTo = (page) => {
    const target = page === 'blog' && pageId
      ? localizedPath(currentLang, 'article', pageId)
      : localizedPath(currentLang, page === 'home' ? 'portfolio' : page);
    navigate(target);
    setMobileMenuOpen(false);
  };
  const switchLanguage = () => {
    const nextLanguage = currentLang === 'fr' ? 'en' : 'fr';
    const targetPage = activePage === 'home' ? 'portfolio' : activePage;
    const target = activePage === 'blog' && pageId
      ? localizedPath(nextLanguage, 'article', pageId)
      : localizedPath(nextLanguage, targetPage);
    navigate(target);
    setMobileMenuOpen(false);
  };
  const linkClass = (page) => `transition-colors ${
    activePage === page
      ? 'text-blue-500 font-semibold border-b-2 border-blue-500 pb-1'
      : isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
  }`;
  const mobileLinkClass = (page) => `block w-full text-left px-4 py-3 rounded-md transition-colors ${
    activePage === page
      ? isDark ? 'bg-gray-700 text-blue-400 font-semibold' : 'bg-blue-50 text-blue-600 font-semibold'
      : isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
  }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[200] backdrop-blur-md shadow-sm ${isDark ? 'bg-gray-800/90' : 'bg-white/90'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button onClick={() => goTo('home')} className="flex items-center">
            <Code className="h-8 w-8 text-blue-600 mr-2" />
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>Portfolio</span>
          </button>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => goTo('home')} className={linkClass('home')}>{isFrench ? 'Accueil' : 'Home'}</button>
            {pageLinks.map(([page, french, english]) => (
              <button key={page} onClick={() => goTo(page)} className={linkClass(page)}>
                {isFrench ? french : english}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={() => setIsDark(!isDark)} className={`hidden md:flex items-center px-3 py-2 rounded-md ${isDark ? 'bg-gray-700 text-yellow-400' : 'bg-blue-100 text-blue-600'}`} aria-label={isFrench ? 'Changer de thème' : 'Change theme'}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button onClick={switchLanguage} className={`hidden md:flex items-center px-3 py-2 rounded-md ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-600'}`} aria-label={isFrench ? 'Passer en anglais' : 'Switch to French'}>
              <Globe className="h-4 w-4 mr-1" />
              {currentLang.toUpperCase()}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden p-2 rounded-md ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-blue-100 text-blue-600'}`} aria-label={isFrench ? 'Ouvrir le menu' : 'Open menu'}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pb-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex gap-2 py-3">
            <button onClick={() => setIsDark(!isDark)} className="flex-1 flex items-center justify-center px-4 py-3 rounded-md bg-gray-700 text-yellow-400">
              {isDark ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
              {isFrench ? 'Clair' : 'Light'}
            </button>
            <button onClick={switchLanguage} className="flex-1 flex items-center justify-center px-4 py-3 rounded-md bg-gray-700 text-gray-300">
              <Globe className="h-5 w-5 mr-2" />{currentLang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
          <div className="space-y-2">
            <button onClick={() => goTo('home')} className={mobileLinkClass('home')}>{isFrench ? 'Accueil' : 'Home'}</button>
            {pageLinks.map(([page, french, english]) => (
              <button key={page} onClick={() => goTo(page)} className={mobileLinkClass(page)}>{isFrench ? french : english}</button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const SiteFooter = ({ currentLang, isDark, activePage }) => {
  const navigate = useNavigate();
  const isFrench = currentLang === 'fr';
  const footerLinks = [
    ['blog', isFrench ? 'Blog' : 'Blog'],
    ['cv', isFrench ? 'CV' : 'Resume'],
    ['faq', 'FAQ'],
    ['legal', isFrench ? 'Mentions légales' : 'Legal notice']
  ];

  return (
    <footer className={`py-8 ${isDark ? 'bg-black text-gray-300' : 'bg-gray-900 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4" aria-label="Footer">
          {footerLinks.map(([page, label]) => (
            <button key={page} onClick={() => navigate(localizedPath(currentLang, page))} className={activePage === page ? 'text-blue-400 font-semibold' : 'hover:text-blue-400 transition-colors'}>
              {label}
            </button>
          ))}
          <a
            href="https://g.page/r/CYFgrr67vcwGEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-500 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:border-yellow-400 hover:bg-white/10"
          >
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>
              <span className="text-blue-400">G</span>
              <span className="text-red-400">o</span>
              <span className="text-yellow-400">o</span>
              <span className="text-blue-400">g</span>
              <span className="text-green-400">l</span>
              <span className="text-red-400">e</span>
              {' · '}
              {isFrench ? 'Donner votre avis' : 'Leave a review'}
            </span>
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
          <a
            href="https://devis-calculateur-estimation.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            {isFrench ? 'Estimer un devis' : 'Estimate a quote'}
          </a>
        </nav>
        <p className="text-center">&copy; {new Date().getFullYear()} Portfolio. {isFrench ? 'Tous droits réservés' : 'All rights reserved'}.</p>
      </div>
    </footer>
  );
};
