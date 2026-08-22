import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';
import LegalNotice from './components/LegalNotice';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navigate to="/fr" replace />} />
          <Route path="/:lang" element={<LocalizedPage page="home" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/about" element={<LocalizedPage page="about" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/services" element={<LocalizedPage page="services" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/skills" element={<LocalizedPage page="skills" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/process" element={<LocalizedPage page="process" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/projects" element={<LocalizedPage page="projects" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/cv" element={<LocalizedPage page="cv" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/contact" element={<LocalizedPage page="contact" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/faq" element={<LocalizedPage page="faq" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/blog" element={<LocalizedPage page="blog" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/blog/:id" element={<LocalizedPage page="article" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="/:lang/mentions-legales" element={<LocalizedPage page="legal" isDark={isDark} setIsDark={setIsDark} />} />
          <Route path="*" element={<Navigate to="/fr" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

function LocalizedPage({ page, isDark, setIsDark }) {
  const { lang } = useParams();
  const location = useLocation();
  const currentLang = lang === 'en' ? 'en' : lang === 'fr' ? 'fr' : null;

  useEffect(() => {
    document.documentElement.lang = currentLang || 'fr';
  }, [currentLang, location.pathname]);

  if (!currentLang) return <Navigate to="/fr" replace />;

  const props = { isDark, setIsDark, currentLang };

  if (page === 'faq') return <FAQ {...props} />;
  if (page === 'blog') return <Blog {...props} />;
  if (page === 'article') return <BlogArticle {...props} />;
  if (page === 'legal') return <LegalNotice {...props} />;
  return <Portfolio {...props} page={page} />;
}

export default App;