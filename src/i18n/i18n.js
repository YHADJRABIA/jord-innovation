import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translationEN.json";
import translationSV from "../locales/sv/translationSV.json";

const resources = {
  en: {
    translation: translationEN,
  },
  sv: {
    translation: translationSV,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "sv",
  keyseparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
