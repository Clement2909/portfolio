import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [currentLang, setCurrentLang] = useState('fr');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Portfolio
                isDark={isDark}
                setIsDark={setIsDark}
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
              />
            }
          />
          <Route
            path="/faq"
            element={
              <FAQ
                isDark={isDark}
                setIsDark={setIsDark}
                currentLang={currentLang}
                setCurrentLang={setCurrentLang}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;