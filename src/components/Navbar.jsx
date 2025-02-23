import { useState, useEffect } from "react";
import translationsEn from "../locales/en.json";
import translationsKr from "../locales/kr.json";

const Navbar = () => {
  const [language, setLanguage] = useState("en");
  const translations = { en: translationsEn, kr: translationsKr };
  const [t, setT] = useState(translations[language]);

  useEffect(() => {
    setT(translations[language]);
  }, [language]);

  return (
    <nav>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="en">English</option>
        <option value="kr">Korean</option>
      </select>
      <ul>
        <li>{t.contactMe}</li>
        <li>{t.backToHome}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
