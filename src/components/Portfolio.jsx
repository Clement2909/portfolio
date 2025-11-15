import { useState, useEffect, useRef } from "react";
import { Globe, User, Code, Mail, Linkedin, ExternalLink, Sun, Moon, MessageCircle, Monitor, Database, Zap, Check, HelpCircle, Menu, X, ArrowUp, Send, Briefcase, Search, Palette, Cog, TestTube, Rocket, Wrench, Clock, MapPin } from "lucide-react";
import { FaDiscord, FaFacebook, FaFacebookMessenger, FaInstagram, FaTelegram, FaMicrosoft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Portfolio = ({ isDark: propIsDark, setIsDark: propSetIsDark, currentLang: propCurrentLang, setCurrentLang: propSetCurrentLang }) => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [currentLang, setCurrentLang] = useState(propCurrentLang || 'fr');
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [isDark, setIsDark] = useState(propIsDark !== undefined ? propIsDark : true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentValueIndex, setCurrentValueIndex] = useState(0);
  const [currentPhilosophyIndex, setCurrentPhilosophyIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    sector: '',
    budget: '',
    currency: 'EUR',
    deadline: '',
    description: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

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
        process: "Processus",
        projects: "Projets",
        blog: "Blog",
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
        description: "Développeur passionné avec plusieurs expériences dans le développement web/logiciel. J'aime créer des solutions innovantes et user-friendly en utilisant les dernières technologies.",
        location: "Localisation",
        locationValue: "Antananarivo, Madagascar",
        locationDetail: "Disponible en remote ou sur place (préférence remote)",
        languages: "Langues",
        languagesList: {
          french: "Français - Natif",
          malagasy: "Malgache - Maternel",
          english: "Anglais - Moyen"
        },
        interests: "Centres d'intérêt professionnels",
        interestsList: [
          "Architecture logicielle & Design Patterns",
          "Performance & Optimisation",
          "Sécurité Web"
        ],
        values: "Mes Valeurs",
        valuesList: [
          "Excellence & Qualité - Livrer un code propre et des solutions pérennes",
          "Communication transparente - Tenir informé le client à chaque étape",
          "Engagement & Fiabilité - Respecter les délais et promesses",
          "Innovation & Créativité - Proposer des solutions modernes et efficaces",
          "Simplicité & Pragmatisme - Solutions simples et fonctionnelles avant tout",
          "Apprentissage continu - Se former aux nouvelles technologies",
          "Collaboration - Travailler en équipe de manière constructive",
          "Écoute active - Comprendre les besoins réels du client"
        ],
        philosophy: "Ma Philosophie",
        philosophyList: [
          "Le code doit être écrit pour être lu par des humains, pas seulement des machines",
          "Mieux vaut une solution simple qui fonctionne qu'une solution complexe qui impressionne",
          "Automatiser ce qui est répétitif, se concentrer sur ce qui a de la valeur"
        ]
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
      process: {
        title: "Mon Processus de Travail",
        subtitle: "Une méthodologie éprouvée pour la réussite de vos projets",
        step1: {
          title: "Découverte & Analyse",
          description: "Comprendre vos besoins, analyser vos objectifs et définir ensemble la solution idéale."
        },
        step2: {
          title: "Design & Prototypage",
          description: "Concevoir l'interface utilisateur et créer des maquettes interactives pour validation."
        },
        step3: {
          title: "Développement",
          description: "Coder votre solution avec les meilleures pratiques et technologies adaptées."
        },
        step4: {
          title: "Tests & Qualité",
          description: "Tester rigoureusement chaque fonctionnalité pour garantir la fiabilité."
        },
        step5: {
          title: "Déploiement",
          description: "Mettre en production votre application de manière sécurisée et optimisée."
        },
        step6: {
          title: "Maintenance & Support",
          description: "Assurer le suivi, les mises à jour et le support technique continu."
        }
      },
      contact: {
        title: "Me Contacter",
        description: "Intéressé par une collaboration ? N'hésitez pas à me contacter !",
        email: "randrianasolo.clementvictorin@gmail.com",
        quickContact: "Contact Rapide",
        quoteForm: "Demande de Devis",
        availability: "Disponibilité",
        openingHours: {
          title: "Heures d'ouverture",
          weekdays: "Lundi - Samedi",
          hours: "07h00 - 20h00",
          sunday: "Dimanche",
          closed: "Fermé"
        },
        form: {
          name: "Nom complet",
          email: "Email",
          phone: "Téléphone",
          company: "Entreprise",
          projectType: "Type de projet",
          sector: "Secteur d'activité",
          budget: "Budget estimé",
          currency: "Devise",
          deadline: "Délai souhaité",
          description: "Description du projet",
          send: "Envoyer la demande",
          sending: "Envoi en cours...",
          projectTypes: {
            web: "Site Web",
            ecommerce: "E-commerce",
            webapp: "Application Web",
            mobile: "Application Mobile",
            database: "Base de données",
            automation: "Automatisation",
            other: "Autre"
          },
          sectors: {
            health: "Santé/Médecine",
            education: "Éducation",
            finance: "Finance",
            retail: "Commerce",
            technology: "Technologie",
            hospitality: "Hôtellerie/Restauration",
            agriculture: "Agriculture",
            other: "Autre"
          },
          deadlines: {
            urgent: "Urgent (< 1 mois)",
            short: "Court terme (1-3 mois)",
            medium: "Moyen terme (3-6 mois)",
            long: "Long terme (> 6 mois)",
            flexible: "Flexible"
          },
          success: "Votre demande a été envoyée avec succès ! Je vous répondrai dans les plus brefs délais.",
          error: "Une erreur s'est produite. Veuillez réessayer ou me contacter directement."
        }
      }
    },
    en: {
      nav: {
        about: "About",
        services: "Services",
        skills: "Skills",
        process: "Process",
        projects: "Projects",
        blog: "Blog",
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
        description: "Passionate developer with several experience in web/software development. I love creating innovative and user-friendly solutions using the latest technologies.",
        location: "Location",
        locationValue: "Antananarivo, Madagascar",
        locationDetail: "Available remote or on-site (remote preferred)",
        languages: "Languages",
        languagesList: {
          french: "French - Native",
          malagasy: "Malagasy - Native",
          english: "English - Intermediate"
        },
        interests: "Professional Interests",
        interestsList: [
          "Software Architecture & Design Patterns",
          "Performance & Optimization",
          "Web Security"
        ],
        values: "My Values",
        valuesList: [
          "Excellence & Quality - Deliver clean code and sustainable solutions",
          "Transparent Communication - Keep clients informed at every step",
          "Commitment & Reliability - Meet deadlines and promises",
          "Innovation & Creativity - Propose modern and efficient solutions",
          "Simplicity & Pragmatism - Simple and functional solutions first",
          "Continuous Learning - Stay updated with new technologies",
          "Collaboration - Work constructively as a team",
          "Active Listening - Understand clients' real needs"
        ],
        philosophy: "My Philosophy",
        philosophyList: [
          "Code should be written to be read by humans, not just machines",
          "Better a simple solution that works than a complex one that impresses",
          "Automate what is repetitive, focus on what has value"
        ]
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
      process: {
        title: "My Work Process",
        subtitle: "A proven methodology for the success of your projects",
        step1: {
          title: "Discovery & Analysis",
          description: "Understanding your needs, analyzing your goals and defining the ideal solution together."
        },
        step2: {
          title: "Design & Prototyping",
          description: "Designing the user interface and creating interactive mockups for validation."
        },
        step3: {
          title: "Development",
          description: "Coding your solution with best practices and adapted technologies."
        },
        step4: {
          title: "Testing & Quality",
          description: "Rigorously testing every feature to ensure reliability."
        },
        step5: {
          title: "Deployment",
          description: "Putting your application into production in a secure and optimized way."
        },
        step6: {
          title: "Maintenance & Support",
          description: "Providing ongoing monitoring, updates and technical support."
        }
      },
      contact: {
        title: "Contact Me",
        description: "Interested in collaboration? Feel free to reach out!",
        email: "randrianasolo.clementvictorin@gmail.com",
        quickContact: "Quick Contact",
        quoteForm: "Request a Quote",
        availability: "Availability",
        openingHours: {
          title: "Opening Hours",
          weekdays: "Monday - Saturday",
          hours: "07:00 AM - 08:00 PM",
          sunday: "Sunday",
          closed: "Closed"
        },
        form: {
          name: "Full Name",
          email: "Email",
          phone: "Phone",
          company: "Company",
          projectType: "Project Type",
          sector: "Business Sector",
          budget: "Estimated Budget",
          currency: "Currency",
          deadline: "Desired Timeline",
          description: "Project Description",
          send: "Send Request",
          sending: "Sending...",
          projectTypes: {
            web: "Website",
            ecommerce: "E-commerce",
            webapp: "Web Application",
            mobile: "Mobile App",
            database: "Database",
            automation: "Automation",
            other: "Other"
          },
          sectors: {
            health: "Health/Medicine",
            education: "Education",
            finance: "Finance",
            retail: "Retail",
            technology: "Technology",
            hospitality: "Hospitality/Restaurant",
            agriculture: "Agriculture",
            other: "Other"
          },
          deadlines: {
            urgent: "Urgent (< 1 month)",
            short: "Short term (1-3 months)",
            medium: "Medium term (3-6 months)",
            long: "Long term (> 6 months)",
            flexible: "Flexible"
          },
          success: "Your request has been sent successfully! I will get back to you as soon as possible.",
          error: "An error occurred. Please try again or contact me directly."
        }
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

  // PROCESSUS DE TRAVAIL
  const workProcess = [
    {
      icon: Search,
      step: "1",
      titleKey: "step1",
      color: "#3B82F6",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      step: "2",
      titleKey: "step2",
      color: "#8B5CF6",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Cog,
      step: "3",
      titleKey: "step3",
      color: "#10B981",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: TestTube,
      step: "4",
      titleKey: "step4",
      color: "#F59E0B",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: Rocket,
      step: "5",
      titleKey: "step5",
      color: "#EF4444",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Wrench,
      step: "6",
      titleKey: "step6",
      color: "#6366F1",
      gradient: "from-indigo-500 to-purple-500"
    }
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
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Rotation des valeurs et philosophies
  useEffect(() => {
    const valueInterval = setInterval(() => {
      setCurrentValueIndex((prev) => (prev + 1) % t.about.valuesList.length);
    }, 4000); // Change toutes les 4 secondes

    const philosophyInterval = setInterval(() => {
      setCurrentPhilosophyIndex((prev) => (prev + 1) % t.about.philosophyList.length);
    }, 5000); // Change toutes les 5 secondes

    return () => {
      clearInterval(valueInterval);
      clearInterval(philosophyInterval);
    };
  }, [t.about.valuesList.length, t.about.philosophyList.length]);

  // Gestion du formulaire de contact
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'sending', message: '' });

    try {
      await emailjs.sendForm(
        'service_68iqopf',
        'template_fd4kibz',
        formRef.current,
        'zdktpGXKNobTcjCmc'
      );

      setFormStatus({ type: 'success', message: t.contact.form.success });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        sector: '',
        budget: '',
        currency: 'EUR',
        deadline: '',
        description: ''
      });
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      setFormStatus({ type: 'error', message: t.contact.form.error });
    }
  };

  // Gestion du scroll pour les animations et le bouton retour en haut
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Afficher le bouton retour en haut après 300px de scroll
      setShowScrollTop(scrollPosition > 300);

      // Animation des compétences
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setSkillsVisible(true);
        }
      }

      // Animation unique au scroll pour les sections
      const sections = ['about', 'services', 'skills', 'process', 'professional-projects', 'games', 'contact'];
      const newVisibleSections = new Set(visibleSections);

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section && !visibleSections.has(sectionId)) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            newVisibleSections.add(sectionId);
          }
        }
      });

      if (newVisibleSections.size !== visibleSections.size) {
        setVisibleSections(newVisibleSections);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérifier au chargement
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[200] backdrop-blur-md shadow-sm transition-all duration-300 ${
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
              <button onClick={() => scrollToSection('process')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.nav.process}
              </button>
              <button onClick={() => scrollToSection('professional-projects')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.projects.professionalTitle}
              </button>
              <button onClick={() => scrollToSection('games')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.projects.gamesTitle}
              </button>
              <button onClick={() => navigate('/blog')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.nav.blog}
              </button>
              <button onClick={() => scrollToSection('contact')} className={`transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                {t.nav.contact}
              </button>
              <button onClick={() => navigate('/faq')} className={`flex items-center transition-colors ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                <HelpCircle className="h-4 w-4 mr-1" />
                {t.nav.faq}
              </button>
            </div>

            <div className="flex items-center space-x-2">
              {/* Desktop: afficher thème et langue */}
              <button
                onClick={() => handleThemeChange(!isDark)}
                className={`hidden md:flex items-center px-3 py-2 rounded-md transition-colors ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                }`}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => handleLangChange(currentLang === 'fr' ? 'en' : 'fr')}
                className={`hidden md:flex items-center px-3 py-2 rounded-md transition-colors ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                }`}
              >
                <Globe className="h-4 w-4 mr-1" />
                {currentLang.toUpperCase()}
              </button>

              {/* Bouton menu hamburger (visible uniquement sur mobile) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden flex items-center p-2 rounded-md transition-colors ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                }`}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className={`md:hidden fixed left-0 right-0 top-[73px] bottom-0 z-[100] ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="h-full overflow-y-auto pb-safe">
              <div className={`px-4 pt-4 pb-8 space-y-3 min-h-full ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}>
                {/* Boutons thème et langue dans le menu mobile */}
                <div className={`flex gap-2 pb-3 border-b ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <button
                    onClick={() => handleThemeChange(!isDark)}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md transition-colors ${
                      isDark
                        ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                    }`}
                  >
                    {isDark ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                    <span className="text-sm font-medium">{isDark ? 'Clair' : 'Sombre'}</span>
                  </button>
                  <button
                    onClick={() => handleLangChange(currentLang === 'fr' ? 'en' : 'fr')}
                    className={`flex-1 flex items-center justify-center px-4 py-3 rounded-md transition-colors ${
                      isDark
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                    }`}
                  >
                    <Globe className="h-5 w-5 mr-2" />
                    <span className="text-sm font-medium">{currentLang === 'fr' ? 'EN' : 'FR'}</span>
                  </button>
                </div>

                <button
                  onClick={() => scrollToSection('about')}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t.nav.about}
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t.nav.services}
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t.nav.skills}
                </button>
                <button
                  onClick={() => scrollToSection('process')}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t.nav.process}
                </button>
                <button
                  onClick={() => scrollToSection('professional-projects')}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t.projects.professionalTitle}
                </button>
                <button
                  onClick={() => scrollToSection('games')}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t.projects.gamesTitle}
                </button>
                <button
                  onClick={() => { navigate('/blog'); setMobileMenuOpen(false); }}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t.nav.blog}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {t.nav.contact}
                </button>
                <button
                  onClick={() => { navigate('/faq'); setMobileMenuOpen(false); }}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-md transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  {t.nav.faq}
                </button>
              </div>
            </div>
          </div>
        )}
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
      <section id="about" className={`py-16 transition-all duration-1000 ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } ${
        visibleSections.has('about')
          ? 'opacity-100 translate-x-0 rotate-0'
          : 'opacity-0 -translate-x-20 -rotate-2'
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Localisation et Langues */}
            <div className={`rounded-xl shadow-lg p-8 ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-100'
            }`}>
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-4 flex items-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  <MapPin className="h-6 w-6 mr-2 text-blue-500" />
                  {t.about.location}
                </h3>
                <p className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>{t.about.locationValue}</p>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>{t.about.locationDetail}</p>
              </div>

              <div className="border-t pt-6 border-gray-200 dark:border-gray-700">
                <h3 className={`text-2xl font-bold mb-4 flex items-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  <Globe className="h-6 w-6 mr-2 text-green-500" />
                  {t.about.languages}
                </h3>
                <ul className="space-y-2">
                  <li className={`flex items-center ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    {t.about.languagesList.french}
                  </li>
                  <li className={`flex items-center ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    {t.about.languagesList.malagasy}
                  </li>
                  <li className={`flex items-center ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Check className="h-5 w-5 mr-2 text-green-500" />
                    {t.about.languagesList.english}
                  </li>
                </ul>
              </div>
            </div>

            {/* Centres d'intérêt professionnels */}
            <div className={`rounded-xl shadow-lg p-8 ${
              isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-100'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 flex items-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                <Code className="h-6 w-6 mr-2 text-purple-500" />
                {t.about.interests}
              </h3>
              <ul className="space-y-3">
                {t.about.interestsList.map((interest, index) => (
                  <li key={index} className={`flex items-start ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Zap className="h-5 w-5 mr-2 mt-0.5 text-yellow-500 flex-shrink-0" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Valeurs et Philosophie avec rotation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Valeurs avec rotation */}
            <div className={`rounded-xl shadow-lg p-8 min-h-[200px] flex flex-col justify-center ${
              isDark ? 'bg-gradient-to-br from-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-100 to-purple-100'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{t.about.values}</h3>
              <div className="relative h-24 flex items-center">
                <p className={`text-lg leading-relaxed transition-all duration-500 ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  <span className="inline-block animate-pulse mr-2">✨</span>
                  {t.about.valuesList[currentValueIndex]}
                </p>
              </div>
            </div>

            {/* Philosophie avec rotation */}
            <div className={`rounded-xl shadow-lg p-8 min-h-[200px] flex flex-col justify-center ${
              isDark ? 'bg-gradient-to-br from-green-900 to-teal-900' : 'bg-gradient-to-br from-green-100 to-teal-100'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{t.about.philosophy}</h3>
              <div className="relative h-24 flex items-center">
                <p className={`text-lg leading-relaxed italic transition-all duration-500 ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  <span className="inline-block mr-2">💡</span>
                  "{t.about.philosophyList[currentPhilosophyIndex]}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-16 transition-all duration-1000 ${
        isDark ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
      } ${
        visibleSections.has('services')
          ? 'opacity-100 translate-x-0 rotate-0'
          : 'opacity-0 translate-x-20 rotate-2'
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
      <section id="skills" className={`py-16 transition-all duration-1000 ${
        isDark ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
      } ${
        visibleSections.has('skills')
          ? 'opacity-100 translate-x-0 rotate-0'
          : 'opacity-0 -translate-x-20 -rotate-1'
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

      {/* Process Section */}
      <section id="process" className={`py-16 transition-all duration-1000 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } ${
        visibleSections.has('process')
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>{t.process.title}</h2>
            <p className={`text-lg transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>{t.process.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProcess.map((step, index) => {
              const stepData = t.process[step.titleKey];
              const IconComponent = step.icon;

              return (
                <div
                  key={index}
                  className={`relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
                  }`}
                >
                  <div className="p-8">
                    {/* Step Number Badge */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-xl font-bold">{step.step}</span>
                    </div>

                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Step Title */}
                    <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stepData.title}
                    </h3>

                    {/* Step Description */}
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {stepData.description}
                    </p>
                  </div>

                  {/* Connection Line (not on last item in row) */}
                  {index < workProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Projects Section */}
      <section id="professional-projects" className={`py-16 transition-all duration-1000 ${
        isDark ? 'bg-gradient-to-r from-gray-700 to-gray-800' : 'bg-gradient-to-r from-blue-50 to-purple-50'
      } ${
        visibleSections.has('professional-projects')
          ? 'opacity-100 translate-x-0 rotate-0'
          : 'opacity-0 translate-x-20 rotate-1'
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
      <section id="games" className={`py-16 transition-all duration-1000 ${
        isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-purple-50 to-pink-50'
      } ${
        visibleSections.has('games')
          ? 'opacity-100 translate-x-0 rotate-0'
          : 'opacity-0 -translate-x-20 -rotate-2'
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
      <section id="contact" className={`py-16 transition-all duration-1000 ${
        isDark ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'
      } ${
        visibleSections.has('contact')
          ? 'opacity-100 translate-x-0 rotate-0'
          : 'opacity-0 translate-x-20 rotate-1'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
            <p className={`text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-blue-100'
            }`}>
              {t.contact.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Partie gauche : Liens de contact */}
            <div className={`rounded-xl shadow-2xl p-8 ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{t.contact.quickContact}</h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${t.contact.email}`}
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span className="font-medium">Email</span>
                </a>
                <a
                  href="https://wa.me/261326312603"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/clément-victorin-randrianasolo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <Linkedin className="h-5 w-5 mr-3" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://discordapp.com/users/nacl29094368"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <FaDiscord className="h-5 w-5 mr-3" />
                  <span className="font-medium">Discord</span>
                </a>
                <a
                  href="https://teams.microsoft.com/l/chat/0/0?users=clement.randria@outlook.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <FaMicrosoft className="h-5 w-5 mr-3" />
                  <span className="font-medium">Teams</span>
                </a>
                <a
                  href="https://www.facebook.com/fanyah.rabemanantsoa.90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <FaFacebook className="h-5 w-5 mr-3" />
                  <span className="font-medium">Facebook</span>
                </a>
                <a
                  href="https://m.me/fanyah.rabemanantsoa.90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <FaFacebookMessenger className="h-5 w-5 mr-3" />
                  <span className="font-medium">Messenger</span>
                </a>
                <a
                  href="https://www.instagram.com/clement_randrianasolo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <FaInstagram className="h-5 w-5 mr-3" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://t.me/+261344557927"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <FaTelegram className="h-5 w-5 mr-3" />
                  <span className="font-medium">Telegram</span>
                </a>
                <a
                  href="https://www.malt.com/profile/clementvictorinmarierandrianasolo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 ${
                    isDark ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  <Briefcase className="h-5 w-5 mr-3" />
                  <span className="font-medium">Malt</span>
                </a>
              </div>

              {/* Heures d'ouverture */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className={`text-xl font-bold mb-4 flex items-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  <Clock className="h-5 w-5 mr-2" />
                  {t.contact.openingHours.title}
                </h3>
                <div className={`space-y-3 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{t.contact.openingHours.weekdays}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                    }`}>{t.contact.openingHours.hours}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{t.contact.openingHours.sunday}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                    }`}>{t.contact.openingHours.closed}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partie droite : Formulaire de devis */}
            <div className={`rounded-xl shadow-2xl p-8 ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>{t.contact.quoteForm}</h3>

              <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
                {/* Nom complet */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{t.contact.form.name} *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>

                {/* Email et Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{t.contact.form.email} *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{t.contact.form.phone} *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                </div>

                {/* Entreprise */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{t.contact.form.company} *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>

                {/* Type de projet et Secteur */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{t.contact.form.projectType} *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleFormChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">-- {currentLang === 'fr' ? 'Sélectionner' : 'Select'} --</option>
                      {Object.entries(t.contact.form.projectTypes).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{t.contact.form.sector} *</label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleFormChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">-- {currentLang === 'fr' ? 'Sélectionner' : 'Select'} --</option>
                      {Object.entries(t.contact.form.sectors).map(([key, value]) => (
                        <option key={key} value={key}>{value}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget et Devise */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{t.contact.form.budget} *</label>
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleFormChange}
                      required
                      min="0"
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{t.contact.form.currency} *</label>
                    <select
                      name="currency"
                      value={formData.currency}
                      onChange={handleFormChange}
                      required
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="EUR">EUR (€)</option>
                      <option value="USD">USD ($)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="MGA">MGA (Ar)</option>
                    </select>
                  </div>
                </div>

                {/* Délai */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{t.contact.form.deadline} *</label>
                  <select
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="">-- {currentLang === 'fr' ? 'Sélectionner' : 'Select'} --</option>
                    {Object.entries(t.contact.form.deadlines).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{t.contact.form.description} *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    required
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>

                {/* Message de statut */}
                {formStatus.message && (
                  <div className={`p-4 rounded-lg ${
                    formStatus.type === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-300'
                      : formStatus.type === 'error'
                      ? 'bg-red-100 text-red-800 border border-red-300'
                      : 'bg-blue-100 text-blue-800 border border-blue-300'
                  }`}>
                    {formStatus.message}
                  </div>
                )}

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={formStatus.type === 'sending'}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {formStatus.type === 'sending' ? t.contact.form.sending : t.contact.form.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-2xl transition-all duration-300 z-50 ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16 pointer-events-none'
        } ${
          isDark
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
        } hover:scale-110 active:scale-95`}
        aria-label="Retour en haut"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

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
