import { ArrowLeft, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { localizedPath } from "../routes";

const LegalNotice = ({ isDark, currentLang }) => {
  const navigate = useNavigate();
  const isFrench = currentLang === "fr";
  const content = isFrench
    ? {
        title: "Mentions légales",
        back: "Retour à l'accueil",
        sections: [
          ["Éditeur du site", "Clément Randrianasolo, développeur Full Stack indépendant."],
          ["Contact", "Email : randrianasolo.clementvictorin@gmail.com"],
          ["Hébergement", "Ce site est hébergé par GitHub Pages, un service de GitHub, Inc."],
          ["Propriété intellectuelle", "Les contenus, textes et éléments graphiques de ce site sont protégés par le droit applicable. Toute reproduction non autorisée est interdite."],
          ["Données personnelles", "Les informations envoyées via le formulaire de contact sont utilisées uniquement pour répondre aux demandes. Elles ne sont pas vendues ni transmises à des tiers sans nécessité légale."]
        ]
      }
    : {
        title: "Legal notice",
        back: "Back to home",
        sections: [
          ["Site publisher", "Clément Randrianasolo, independent Full Stack developer."],
          ["Contact", "Email: randrianasolo.clementvictorin@gmail.com"],
          ["Hosting", "This site is hosted by GitHub Pages, a service provided by GitHub, Inc."],
          ["Intellectual property", "The content, text, and graphic elements of this site are protected by applicable law. Unauthorized reproduction is prohibited."],
          ["Personal data", "Information sent through the contact form is used only to answer requests. It is not sold or shared with third parties without a legal necessity."]
        ]
      };

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"}`}>
      <header className={`sticky top-0 z-10 border-b ${isDark ? "bg-gray-800/95 border-gray-700" : "bg-white/95 border-gray-200"}`}>
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button onClick={() => navigate(localizedPath(currentLang))} className="flex items-center text-blue-500 hover:text-blue-400">
            <ArrowLeft className="h-5 w-5 mr-2" />
            {content.back}
          </button>
          <button
            onClick={() => navigate(localizedPath(isFrench ? 'en' : 'fr', 'legal'))}
            className="ml-4 text-sm font-medium text-blue-500 hover:text-blue-400"
          >
            {isFrench ? 'EN' : 'FR'}
          </button>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-10">
          <FileText className="h-8 w-8 text-blue-500" />
          <h1 className="text-4xl font-bold">{content.title}</h1>
        </div>
        <div className="space-y-8">
          {content.sections.map(([heading, text]) => (
            <section key={heading}>
              <h2 className="text-xl font-semibold mb-2">{heading}</h2>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>{text}</p>
            </section>
          ))}
        </div>
      </main>
      <footer className={`py-8 text-center ${isDark ? "bg-black text-gray-400" : "bg-gray-900 text-white"}`}>
        <p>&copy; {new Date().getFullYear()} Portfolio. {isFrench ? "Tous droits réservés" : "All rights reserved"}.</p>
      </footer>
    </div>
  );
};

export default LegalNotice;
