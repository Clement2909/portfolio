import { FileText } from "lucide-react";
import { SiteFooter, SiteHeader } from './SiteChrome';

const LegalNotice = ({ isDark, setIsDark, currentLang }) => {
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
      <SiteHeader currentLang={currentLang} isDark={isDark} setIsDark={setIsDark} activePage="legal" />
      <main className="max-w-4xl mx-auto px-4 pt-28 pb-16">
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
      <SiteFooter currentLang={currentLang} isDark={isDark} activePage="legal" />
    </div>
  );
};

export default LegalNotice;
