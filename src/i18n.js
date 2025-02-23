import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import kr from "./locales/kr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    kr: { translation: kr },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
