import { useState, useEffect } from "react";
import { Globe, User, Code, Mail, Linkedin, ExternalLink, Sun, Moon, MessageCircle, Monitor, Database, Zap, Check, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Portfolio = ({ isDark: propIsDark, setIsDark: propSetIsDark, currentLang: propCurrentLang, setCurrentLang: propSetCurrentLang }) => {
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState(propCurrentLang || 'fr');
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [isDark, setIsDark] = useState(propIsDark !== undefined ? propIsDark : true);

  // Sync with parent props
  useEffect(() => {
    if (propCurrentLang !== undefined) setCurrentLang(propCurrentLang);
  }, [propCurrentLang]);

  useEffect(() => {
    if (propIsDark !== undefined) setIsDark(propIsDark);
  }, [propIsDark]);

  // Update parent state when local state changes
  const handleLangChange = (newLang) => {
    setCurrentLang(newLang);
    if (propSetCurrentLang) propSetCurrentLang(newLang);
  };

  const handleThemeChange = (newIsDark) => {
    setIsDark(newIsDark);
    if (propSetIsDark) propSetIsDark(newIsDark);
  };

  const translations = {
    fr: {
      nav: {
        about: "À propos",
        services: "Services",
        skills: "Compétences",
        projects: "Projets",
        contact: "Contact",
        faq: "FAQ"
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
      services: {
        title: "Mes Services",
        subtitle: "Des solutions adaptées à vos besoins",
        contactButton: "Me contacter",
        service1: {
          title: "Développement Web & Logiciel Sur Mesure",
          description: "Création de sites web et d'applications adaptés à vos besoins spécifiques : sites vitrine, plateformes e-commerce, systèmes de gestion interne, ou tout autre outil digital dont votre entreprise a besoin.",
          features: [
            "Sites web professionnels et modernes",
            "Applications web pour gérer votre activité",
            "Plateformes e-commerce pour vendre en ligne",
            "Systèmes de gestion sur mesure",
            "Interface intuitive et facile à utiliser",
            "Compatible mobile, tablette et ordinateur"
          ]
        },
        service2: {
          title: "Gestion & Organisation de Vos Données",
          description: "Conception et organisation de vos bases de données pour stocker, gérer et exploiter efficacement toutes vos informations : clients, produits, transactions, historiques, etc.",
          features: [
            "Stockage sécurisé de vos données",
            "Organisation optimale de vos informations",
            "Accès rapide et fiable à vos données",
            "Sauvegarde et protection des informations sensibles",
            "Amélioration des performances",
            "Migration et consolidation de données existantes"
          ]
        },
        service3: {
          title: "Solutions Personnalisées & Automatisation",
          description: "Développement de solutions sur mesure pour automatiser vos tâches répétitives, optimiser vos processus métier et créer des outils adaptés aux besoins uniques de votre entreprise.",
          features: [
            "Automatisation des tâches répétitives",
            "Outils métier adaptés à votre activité",
            "Systèmes de pointage et suivi du personnel",
            "Génération automatique de rapports et statistiques",
            "Intégration avec vos outils existants",
            "Gain de temps et réduction des erreurs"
          ]
        }
      },
      skills: {
        title: "Mes Compétences",
        subtitle: "Technologies que je maîtrise"
      },
      projects: {
        title: "Mes Projets",
        professionalTitle: "Projets Professionnels",
        gamesTitle: "Jeux",
        viewSite: "Voir le site",
        private: "Privé"
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
        services: "Services",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        faq: "FAQ"
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
      services: {
        title: "My Services",
        subtitle: "Solutions tailored to your needs",
        contactButton: "Contact me",
        service1: {
          title: "Custom Web & Software Development",
          description: "Creation of websites and applications tailored to your specific needs: showcase websites, e-commerce platforms, internal management systems, or any other digital tool your business needs.",
          features: [
            "Professional and modern websites",
            "Web applications to manage your business",
            "E-commerce platforms to sell online",
            "Custom management systems",
            "Intuitive and user-friendly interface",
            "Mobile, tablet and desktop compatible"
          ]
        },
        service2: {
          title: "Data Management & Organization",
          description: "Design and organization of your databases to efficiently store, manage and utilize all your information: customers, products, transactions, history, etc.",
          features: [
            "Secure storage of your data",
            "Optimal organization of your information",
            "Fast and reliable access to your data",
            "Backup and protection of sensitive information",
            "Performance improvements",
            "Migration and consolidation of existing data"
          ]
        },
        service3: {
          title: "Custom Solutions & Automation",
          description: "Development of custom solutions to automate your repetitive tasks, optimize your business processes and create tools adapted to your company's unique needs.",
          features: [
            "Automation of repetitive tasks",
            "Business tools tailored to your activity",
            "Time tracking and staff monitoring systems",
            "Automatic generation of reports and statistics",
            "Integration with your existing tools",
            "Time savings and error reduction"
          ]
        }
      },
      skills: {
        title: "My Skills",
        subtitle: "Technologies I master"
      },
      projects: {
        title: "My Projects",
        professionalTitle: "Professional Projects",
        gamesTitle: "Games",
        viewSite: "View Site",
        private: "Private"
      },
      contact: {
        title: "Contact Me",
        description: "Interested in collaboration? Feel free to reach out!",
        email: "randrianasolo.clementvictorin@gmail.com"
      }
    }
  };

  // PERSONNALISATION DES SERVICES
  const services = [
    {
      icon: Monitor,
      iconColor: "#3B82F6",
      titleKey: "service1",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      iconColor: "#10B981",
      titleKey: "service2",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      iconColor: "#F59E0B",
      titleKey: "service3",
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  // PERSONNALISATION DES COMPÉTENCES
  const skills = [
    { name: "Laravel", percentage: 90, color: "#9966CC" },
    { name: "PHP", percentage: 90, color: "#777BB4" },
    { name: "CSS/SCSS", percentage: 90, color: "#1572B6" },
    { name: "Postgres,Mysql,Oracle", percentage: 85, color: "#9fb6a0ff" },
    { name: "JavaScript", percentage: 80, color: "#F7DF1E" },
    { name: "TypeScript", percentage: 80, color: "#3178C6" },
    { name: "Vue.js", percentage: 70, color: "#4FC08D" },
    { name: "Python", percentage: 60, color: "#3776AB" },
    { name: "Java", percentage: 60, color: "#339933" },
    { name: "React", percentage: 60, color: "#61DAFB" },
    { name: "NoSQL (Firebase)", percentage: 60, color: "#2E8B57" }
  ];

  // PERSONNALISATION DES PROJETS PROFESSIONNELS
  const professionalProjects = [
    {
      title: "Website overhaul",
      description: {
        fr: "Refonte de site web en PHP brut en Laravel + Vue.js",
        en: "Replatforming a raw PHP site to Laravel + Vue.js"
      },
      tech: ["Vue.js", "Laravel", "Postgres"],
      isPrivate: true, // Projet confidentiel d'entreprise
      image: "/portfolio/images/dgi_logo.png"
    },
    {
      title: "Automated attendance tracking",
      description: {
        fr: "Automatisation du pointage en temps réel",
        en: "Real-time attendance tracking automation"
      },
      tech: ["Laravel", "Vue.js", "Mysql","Python","Javascript"],
      isPrivate: true, // Projet confidentiel d'entreprise
      image: "/portfolio/images/pointage_logo.png"
    },
    {
      title: "Architect's portfolio website",
      description: {
        fr: "Site web pour le portfolio d'un architecte",
        en: "Website for an architect"
      },
      tech: ["React", "Javascript", "HTML","CSS","Netlify","Tailwind CSS","EmailJS"],
      isPrivate: false,
      siteUrl: "http://maconcept.netlify.app",
      image: "/portfolio/images/ma_logo.jpg"
    },
    {
      title: "Scandale Bouffe",
      description: {
        fr: "Site web pour un projet de restaurant",
        en: "Website for a restaurant project"
      },
      tech: ["React", "Javascript", "HTML", "CSS", "Netlify", "Firebase"],
      isPrivate: false,
      siteUrl: "https://scandalebouffe.netlify.app/",
      image: "/portfolio/images/scandale_logo.jpg"
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

  // PERSONNALISATION DES JEUX
  const games = [
    {
      title: "Puzzle Game",
      description: {
        fr: "Jeu de puzzle interactif développé en JavaScript avec interface HTML/CSS et Python",
        en: "Interactive puzzle game developed in JavaScript with HTML/CSS interface and Python"
      },
      tech: ["JavaScript", "HTML", "CSS", "Python"],
      isPrivate: false,
      siteUrl: "https://babypuzzlegasy.vercel.app",
      image: "/portfolio/images/puzzle_logo.png"
    },
    {
      title: "Domy - Malagasy Rules",
      description: {
        fr: "Domino aux règles malgaches développé avec React",
        en: "Malagasy rules domino game developed with React"
      },
      tech: ["React", "JavaScript", "Vercel", "Firebase"],
      isPrivate: false,
      siteUrl: "https://domy-delta.vercel.app",
      image: "/portfolio/images/logo_domy.png"
    }
  ];

  const t = translations[currentLang];

  const CircularProgress = ({ percentage, color, name, size = 120, isDark }) => {
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
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {skillsVisible ? percentage : 0}%
            </span>
          </div>
        </div>
        <h3 className={`mt-3 text-lg font-semibold transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>{name}</h3>
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
    <div className={`min-h-screen transition-all duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm transition-all duration-300 ${
        isDark ? 'bg-gray-800/90' : 'bg-white/90'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600 mr-2" />
              <span className={`text-xl font-bold transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>Portfolio</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('services')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('skills')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection('professional-projects')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.projects.professionalTitle}
              </button>
              <button onClick={() => scrollToSection('games')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.projects.gamesTitle}
              </button>
              <button onClick={() => navigate('/faq')} className={`flex items-center transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                <HelpCircle className="h-4 w-4 mr-1" />
                {t.nav.faq}
              </button>
              <button onClick={() => scrollToSection('contact')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.nav.contact}
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleThemeChange(!isDark)}
                className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                }`}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => handleLangChange(currentLang === 'fr' ? 'en' : 'fr')}
                className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                }`}
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
                  alt="Clément Randrianasolo, développeur Full Stack"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback si l'image n'existe pas
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"><svg class="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                  }}
                />
              </div>
              <h1 className={`text-5xl md:text-6xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {t.hero.title}
              </h1>
              <p className={`text-xl mb-8 max-w-3xl mx-auto transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {t.hero.subtitle}
              </p>
              <button
                onClick={() => scrollToSection('professional-projects')}
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
      <section id="about" className={`py-16 transition-all duration-300 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t.about.title}</h2>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-16 transition-all duration-300 ${
        isDark ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t.services.title}</h2>
            <p className={`text-lg transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const serviceData = t.services[service.titleKey];
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  className={`rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
                  }`}
                >
                  <div className="p-8">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Service Title */}
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {serviceData.title}
                    </h3>

                    {/* Service Description */}
                    <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {serviceData.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {serviceData.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className={`flex items-start transition-colors duration-300 ${
                            isDark ? 'text-gray-300' : 'text-gray-700'
                          }`}
                        >
                          <Check className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5`} style={{ color: service.iconColor }} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Contact Button */}
                    <button
                      onClick={() => scrollToSection('contact')}
                      className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg bg-gradient-to-r ${service.gradient} text-white`}
                    >
                      {t.services.contactButton}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 transition-all duration-300 ${
        isDark ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t.skills.title}</h2>
            <p className={`text-lg transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>{t.skills.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white'
              }`}>
                <CircularProgress
                  percentage={skill.percentage}
                  color={skill.color}
                  name={skill.name}
                  isDark={isDark}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Projects Section */}
      <section id="professional-projects" className={`py-16 transition-all duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t.projects.professionalTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <div key={index} className={`rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
              }`}>
                {project.image && (
                  <div className="h-48 overflow-hidden rounded-t-xl bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src={project.image}
                      alt={`Logo du projet ${project.title} - ${project.description[currentLang]}`}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{project.title}</h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>{project.description[currentLang]}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                        isDark
                          ? 'bg-gradient-to-r from-blue-900 to-purple-900 text-blue-300'
                          : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    {project.isPrivate ? (
                      <span className={`flex items-center px-4 py-2 rounded-lg cursor-not-allowed transition-colors duration-300 ${
                        isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <User className="h-4 w-4 mr-2" />
                        {t.projects.private}
                      </span>
                    ) : (
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t.projects.viewSite}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className={`py-16 transition-all duration-300 ${
        isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-purple-50 to-pink-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t.projects.gamesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div key={index} className={`rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
              }`}>
                {game.image && (
                  <div className="h-48 overflow-hidden rounded-t-xl bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src={game.image}
                      alt={`Capture d'écran du jeu ${game.title} - ${game.description[currentLang]}`}
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{game.title}</h3>
                  <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>{game.description[currentLang]}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                        isDark
                          ? 'bg-gradient-to-r from-purple-900 to-pink-900 text-purple-300'
                          : 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    {game.isPrivate ? (
                      <span className={`flex items-center px-4 py-2 rounded-lg cursor-not-allowed transition-colors duration-300 ${
                        isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'
                      }`}>
                        <User className="h-4 w-4 mr-2" />
                        {t.projects.private}
                      </span>
                    ) : (
                      <a
                        href={game.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-4 py-2 text-white rounded-lg transition-colors shadow-md hover:shadow-lg ${
                          isDark ? 'bg-purple-700 hover:bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'
                        }`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t.projects.viewSite}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 transition-all duration-300 ${
        isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-blue-100'
            }`}>
              {t.contact.description}
            </p>
            
            <div className="flex justify-center space-x-6 flex-wrap gap-4">
              <a
                href={`mailto:${t.contact.email}`}
                className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-white text-blue-600 hover:bg-gray-100'
                }`}
              >
                <Mail className="h-5 w-5 mr-2" />
                Email
              </a>
              <a
                href="https://wa.me/261326312603"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-white text-blue-600 hover:bg-gray-100'
                }`}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/clément-victorin-randrianasolo" // LINKEDIN
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                  isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-white text-blue-600 hover:bg-gray-100'
                }`}
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
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

export default Portfolio;
