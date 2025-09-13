import { useState, useEffect } from "react";
import { Globe, User, Code, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [currentLang, setCurrentLang] = useState('fr');
  const [skillsVisible, setSkillsVisible] = useState(false);

  const translations = {
    fr: {
      nav: {
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact"
      },
      hero: {
        title: "Développeur Full Stack",
        subtitle: "Passionné par la création d'applications web/logiciel modernes et performantes",
        cta: "Voir mes projets"
      },
      about: {
        title: "À propos de moi",
        description: "Développeur passionné avec plusieurs expériences dans le développement web/logiciel. J'aime créer des solutions innovantes et user-friendly en utilisant les dernières technologies."
      },
      skills: {
        title: "Mes Compétences",
        subtitle: "Technologies que je maîtrise"
      },
      projects: {
        title: "Mes Projets",
        viewProject: "Voir le projet",
        viewCode: "Voir le code"
      },
      contact: {
        title: "Me Contacter",
        description: "Intéressé par une collaboration ? N'hésitez pas à me contacter !",
        email: "randrianasolo.clementvictorin@gmail.com"
      }
    },
    en: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        title: "Full Stack Developer",
        subtitle: "Passionate about creating modern and performant web/software applications",
        cta: "View my projects"
      },
      about: {
        title: "About Me",
        description: "Passionate developer with several  experience in web/software development  . I love creating innovative and user-friendly solutions using the latest technologies."
      },
      skills: {
        title: "My Skills",
        subtitle: "Technologies I master"
      },
      projects: {
        title: "My Projects",
        viewProject: "View Project",
        viewCode: "View Code"
      },
      contact: {
        title: "Contact Me",
        description: "Interested in collaboration? Feel free to reach out!",
        email: "randrianasolo.clementvictorin@gmail.com"
      }
    }
  };

  // PERSONNALISATION DES COMPÉTENCES 
  const skills = [
    { name: "Laravel", percentage: 90, color: "#61DAFB" },
    { name: "PHP", percentage: 90, color: "#47A248" },
    { name: "CSS/SCSS", percentage: 90, color: "#1572B6" },
    { name: "Postgres,Mysql,Oracle", percentage: 85, color: "#9fb6a0ff" },
    { name: "JavaScript", percentage: 80, color: "#F7DF1E" },
    { name: "TypeScript", percentage: 80, color: "#3178C6" },
    { name: "Vue.js", percentage: 70, color: "#4FC08D" },
    { name: "Python", percentage: 60, color: "#3776AB" },
    { name: "Java", percentage: 60, color: "#339933" }
  ];

  // PERSONNALISATION DES PROJETS 
  const projects = [
    {
      title: "Website overhaul",
      description: {
        fr: "Refonte de site web en PHP natif en Laravel + Vue.js",
        en: "Replatforming a native PHP site to Laravel + Vue.js"
      },
      tech: ["Vue.js", "Laravel", "Postgres"],
      //demo: "https://votre-demo.com", // 🔧 REMPLACEZ PAR VOS VRAIS LIENS
      //code: "https://github.com/votre-username/projet"
    },
    {
      title: "Automated attendance tracking",
      description: {
        fr: "Automatisation du pointage en temps réel",
        en: "Real-time attendance tracking automation"
      },
      tech: ["Laravel", "Vue.js", "Mysql","Python","Javascript"],
      //demo: "https://votre-demo.com",
      //code: "https://github.com/votre-username/projet"
    }
/*{
      title: "Weather Dashboard",
      description: {
        fr: "Dashboard météo avec visualisation de données et prévisions",
        en: "Weather dashboard with data visualization and forecasts"
      },
      tech: ["Vue.js", "Chart.js", "API REST"],
      demo: "https://votre-demo.com",
      code: "https://github.com/votre-username/projet"
    }*/
  ];

  const t = translations[currentLang];

  const CircularProgress = ({ percentage, color, name, size = 120 }) => {
    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="flex flex-col items-center p-4">
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            width={size}
            height={size}
            className="transform -rotate-90"
          >
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={skillsVisible ? strokeDashoffset : circumference}
              className="transition-all duration-2000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-700">
              {skillsVisible ? percentage : 0}%
            </span>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    );
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setSkillsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-800">Portfolio</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.nav.projects}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
                {t.nav.contact}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setCurrentLang(currentLang === 'fr' ? 'en' : 'fr')}
                className="flex items-center px-3 py-2 rounded-md bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                <Globe className="h-4 w-4 mr-1" />
                {currentLang.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="mb-8">
              {/* 🔧 AJOUTEZ VOTRE PHOTO ICI */}
              <div className="w-64 h-64 mx-auto rounded-full mb-6 shadow-2xl overflow-hidden border-4 border-white">
                <img 
                  src="/portfolio/images/profile.jpg" 
                  alt="Photo de profil"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback si l'image n'existe pas
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"><svg class="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                  }}
                />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {t.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {t.hero.subtitle}
              </p>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl"
              >
                {t.hero.cta}
                <ExternalLink className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.skills.title}</h2>
            <p className="text-lg text-gray-600">{t.skills.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CircularProgress
                  percentage={skill.percentage}
                  color={skill.color}
                  name={skill.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.projects.title}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description[currentLang]}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {t.projects.viewProject}
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t.projects.viewCode}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
            
            <div className="flex justify-center space-x-6 flex-wrap gap-4">
              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email
              </a>
              <a
                href="https://github.com/Clement2909" //  GITHUB
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/clément-victorin-randrianasolo" // LINKEDIN
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Portfolio. {currentLang === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
