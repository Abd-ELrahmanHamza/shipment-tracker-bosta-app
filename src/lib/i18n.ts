import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import global_en from "../../public/locales/en/translation.json";
import global_ar from "../../public/locales/ar/translation.json";

i18n
  .use(LanguageDetector) // Detects user language.
  .use(initReactI18next) // Initializes the react-i18next plugin.
  .init({
    supportedLngs: ["en", "ar"], // Languages we're supporting.
    fallbackLng: "en", // Fallback language if user's language isn't supported.
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"], // Order of language detection.
      caches: ["cookie"], // Cache the detected language in cookies.
    },
    resources: {
      en: {
        translation: global_en,
      },
      ar: {
        translation: global_ar,
      },
    },
  });

export default i18n;
