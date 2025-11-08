import { useState } from "react";
import { ChevronDown, ArrowLeft, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FAQ = ({ isDark, setIsDark, currentLang, setCurrentLang }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const translations = {
    fr: {
      title: "Questions Fréquentes",
      subtitle: "Tout ce que vous devez savoir",
      backButton: "Retour au portfolio",
      faqs: [
        {
          category: "Services & Projets",
          questions: [
            {
              q: "Quels types de projets réalisez-vous ?",
              a: "Je réalise des sites vitrine, applications web, plateformes e-commerce, systèmes de gestion, automatisation de processus, bases de données, et solutions sur mesure pour entreprises et particuliers. Chaque projet est adapté à vos besoins spécifiques."
            },
            {
              q: "Travaillez-vous avec des clients à distance ?",
              a: "Oui, je travaille avec des clients partout à Madagascar et à l'international. Nous communiquons via email, WhatsApp, visioconférence ou tout autre moyen qui vous convient. La distance n'est pas un obstacle à une collaboration efficace."
            },
            {
              q: "Combien de temps prend un projet ?",
              a: "Les délais varient selon la complexité : Site vitrine simple (1-2 semaines), Application web moyenne (3-6 semaines), Système complexe (2-4 mois). Les délais exacts sont définis ensemble lors du devis après analyse de vos besoins."
            },
            {
              q: "Puis-je voir des exemples de votre travail ?",
              a: "Oui, consultez la section 'Projets' de mon portfolio pour voir mes réalisations publiques. Pour les projets professionnels confidentiels, je peux vous montrer des exemples similaires lors de notre discussion."
            }
          ]
        },
        {
          category: "Tarifs & Paiement",
          questions: [
            {
              q: "Combien coûtent vos services ?",
              a: "Les tarifs varient selon la complexité du projet, les technologies utilisées et le temps nécessaire. Je propose toujours un devis gratuit et détaillé après avoir discuté de vos besoins. Contactez-moi pour obtenir une estimation personnalisée."
            },
            {
              q: "Proposez-vous un devis gratuit ?",
              a: "Oui ! Le premier échange et le devis sont totalement gratuits et sans engagement. Cela me permet de bien comprendre votre projet et de vous proposer la meilleure solution adaptée à vos besoins et votre budget."
            },
            {
              q: "Comment s'effectue le paiement ?",
              a: "Pour tous les projets, je demande 50% d'acompte au démarrage du projet, et les 50% restants après la livraison finale et votre validation. Ce système garantit un engagement mutuel et une relation de confiance."
            }
          ]
        },
        {
          category: "Technologies & Développement",
          questions: [
            {
              q: "Quelles technologies utilisez-vous ?",
              a: "Je travaille principalement avec Laravel, PHP, Vue.js, React, JavaScript/TypeScript, Python, et différentes bases de données (MySQL, PostgreSQL, Firebase). Je choisis toujours les technologies les mieux adaptées à votre projet pour garantir performance et pérennité."
            },
            {
              q: "Les sites sont-ils responsive (mobile) ?",
              a: "Oui, absolument ! Tous mes projets sont conçus pour fonctionner parfaitement sur mobile, tablette et ordinateur. L'expérience utilisateur sur tous les appareils est une priorité dans chacune de mes créations."
            },
            {
              q: "Comment se déroule le processus de développement ?",
              a: "Le processus se déroule en 7 étapes : 1) Consultation - Discussion de vos besoins, 2) Devis - Proposition détaillée, 3) Conception - Maquettes et design, 4) Développement - Création de la solution, 5) Tests - Vérifications et corrections, 6) Livraison - Mise en ligne, 7) Support - Suivi et maintenance. Vous êtes informé à chaque étape."
            }
          ]
        },
        {
          category: "Après-Livraison & Support",
          questions: [
            {
              q: "Proposez-vous une maintenance après la livraison ?",
              a: "Oui, je propose des contrats de maintenance pour assurer la sécurité, les mises à jour et le bon fonctionnement de votre solution. Nous pouvons définir ensemble la formule qui convient le mieux à vos besoins."
            },
            {
              q: "Que se passe-t-il en cas de bug après livraison ?",
              a: "Je propose une période de garantie pendant laquelle je corrige gratuitement tout bug ou dysfonctionnement lié au développement initial. La durée de cette garantie est définie dans le contrat selon le type de projet."
            },
            {
              q: "Vais-je recevoir le code source ?",
              a: "Oui, à la fin du projet vous recevez l'intégralité du code source et tous les accès nécessaires (hébergement, base de données, etc.). Vous êtes entièrement propriétaire de votre solution."
            }
          ]
        },
        {
          category: "Communication & Pratique",
          questions: [
            {
              q: "Comment puis-je vous contacter ?",
              a: "Vous pouvez me contacter par email (randrianasolo.clementvictorin@gmail.com), WhatsApp ou LinkedIn. Je réponds généralement sous 24h maximum."
            },
            {
              q: "Proposez-vous une formation pour utiliser mon site/application ?",
              a: "Oui, je vous forme à l'utilisation de votre solution et je peux créer une documentation complète si nécessaire. L'objectif est que vous soyez totalement autonome dans la gestion de votre site ou application."
            }
          ]
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know",
      backButton: "Back to portfolio",
      faqs: [
        {
          category: "Services & Projects",
          questions: [
            {
              q: "What types of projects do you work on?",
              a: "I create showcase websites, web applications, e-commerce platforms, management systems, process automation, databases, and custom solutions for businesses and individuals. Each project is tailored to your specific needs."
            },
            {
              q: "Do you work with remote clients?",
              a: "Yes, I work with clients throughout Madagascar and internationally. We communicate via email, WhatsApp, video calls, or any means that suits you. Distance is not an obstacle to effective collaboration."
            },
            {
              q: "How long does a project take?",
              a: "Timelines vary by complexity: Simple showcase site (1-2 weeks), Medium web application (3-6 weeks), Complex system (2-4 months). Exact timelines are defined together during the quote after analyzing your needs."
            },
            {
              q: "Can I see examples of your work?",
              a: "Yes, check the 'Projects' section of my portfolio to see my public work. For confidential professional projects, I can show you similar examples during our discussion."
            }
          ]
        },
        {
          category: "Pricing & Payment",
          questions: [
            {
              q: "How much do your services cost?",
              a: "Rates vary based on project complexity, technologies used, and time required. I always provide a free detailed quote after discussing your needs. Contact me for a personalized estimate."
            },
            {
              q: "Do you offer a free quote?",
              a: "Yes! The first consultation and quote are completely free with no obligation. This allows me to understand your project well and propose the best solution tailored to your needs and budget."
            },
            {
              q: "How does payment work?",
              a: "For all projects, I require a 50% deposit at project start, and the remaining 50% after final delivery and your approval. This system ensures mutual commitment and a trust-based relationship."
            }
          ]
        },
        {
          category: "Technologies & Development",
          questions: [
            {
              q: "What technologies do you use?",
              a: "I primarily work with Laravel, PHP, Vue.js, React, JavaScript/TypeScript, Python, and various databases (MySQL, PostgreSQL, Firebase). I always choose the technologies best suited to your project to ensure performance and longevity."
            },
            {
              q: "Are sites responsive (mobile-friendly)?",
              a: "Yes, absolutely! All my projects are designed to work perfectly on mobile, tablet, and desktop. User experience across all devices is a priority in each of my creations."
            },
            {
              q: "What is the development process?",
              a: "The process has 7 steps: 1) Consultation - Discuss your needs, 2) Quote - Detailed proposal, 3) Design - Mockups and design, 4) Development - Solution creation, 5) Testing - Checks and corrections, 6) Delivery - Go live, 7) Support - Follow-up and maintenance. You're informed at each step."
            }
          ]
        },
        {
          category: "Post-Delivery & Support",
          questions: [
            {
              q: "Do you offer maintenance after delivery?",
              a: "Yes, I offer maintenance contracts to ensure security, updates, and proper functioning of your solution. We can define together the plan that best suits your needs."
            },
            {
              q: "What happens if there's a bug after delivery?",
              a: "I offer a warranty period during which I fix any bugs or malfunctions related to the initial development for free. The duration of this warranty is defined in the contract based on the project type."
            },
            {
              q: "Will I receive the source code?",
              a: "Yes, at the end of the project you receive all the source code and necessary access (hosting, database, etc.). You are the complete owner of your solution."
            }
          ]
        },
        {
          category: "Communication & Practice",
          questions: [
            {
              q: "How can I contact you?",
              a: "You can contact me by email (randrianasolo.clementvictorin@gmail.com), WhatsApp, or LinkedIn. I usually respond within 24 hours maximum."
            },
            {
              q: "Do you provide training to use my site/application?",
              a: "Yes, I train you to use your solution and can create complete documentation if needed. The goal is for you to be fully autonomous in managing your site or application."
            }
          ]
        }
      ]
    }
  };

  const t = translations[currentLang];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionCounter = 0;

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
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              isDark
                ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-700'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t.backButton}
          </button>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              isDark ? 'bg-blue-900/50' : 'bg-blue-100'
            }`}>
              <HelpCircle className={`h-8 w-8 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
          </div>
          <h1 className={`text-5xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>{t.title}</h1>
          <p className={`text-xl transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>{t.subtitle}</p>
        </div>

        {/* FAQ Sections */}
        {t.faqs.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>{section.category}</h2>

            <div className="space-y-4">
              {section.questions.map((faq, faqIndex) => {
                const currentIndex = questionCounter++;
                const isOpen = openIndex === currentIndex;

                return (
                  <div
                    key={currentIndex}
                    className={`rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${
                      isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
                    }`}
                  >
                    <button
                      onClick={() => toggleQuestion(currentIndex)}
                      className={`w-full px-6 py-5 flex items-center justify-between transition-colors duration-300 ${
                        isDark
                          ? 'hover:bg-gray-700 text-white'
                          : 'hover:bg-gray-50 text-gray-900'
                      }`}
                    >
                      <span className="text-left font-semibold text-lg pr-4">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'transform rotate-180' : ''
                        } ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                      />
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className={`px-6 pb-5 pt-2 transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <p className="leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className={`mt-16 rounded-2xl p-8 text-center shadow-xl transition-all duration-300 ${
          isDark
            ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-gray-700'
            : 'bg-gradient-to-r from-blue-100 to-purple-100'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {currentLang === 'fr' ? "Vous avez d'autres questions ?" : "Have more questions?"}
          </h3>
          <p className={`mb-6 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {currentLang === 'fr'
              ? "N'hésitez pas à me contacter directement. Je serai ravi de discuter de votre projet !"
              : "Feel free to contact me directly. I'll be happy to discuss your project!"}
          </p>
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl font-semibold"
          >
            {currentLang === 'fr' ? "Me Contacter" : "Contact Me"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
