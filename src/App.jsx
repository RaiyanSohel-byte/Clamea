import { useEffect, useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import ProblemSolution from "./components/ClameaValue";
import TrustSecurity from "./components/TrustSecurity";
import ClameaValue from "./components/ClameaValue";
import ProcessSection from "./components/ProcessSection";
import AISection from "./components/AISection";

const App = () => {
  const getLang = () =>
    localStorage.getItem("lang") ||
    (navigator.language.startsWith("sv") ? "sv" : "en");

  const [lang, setLang] = useState(getLang());

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <div className="min-h-screen bg-base-100 text-base-content antialiased">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <ClameaValue />
        <Features />
        <ProcessSection />
        <AISection />
        <TrustSecurity lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
