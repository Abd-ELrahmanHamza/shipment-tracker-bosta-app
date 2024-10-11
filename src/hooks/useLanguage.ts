import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const toggleString = i18n.language === "ar" ? "ENG" : "عربي";
  const toggleLanguage = () => {
    console.log("currentLanguage", currentLanguage);
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(currentLanguage === "ar" ? "en" : "ar");
  };

  const init = () => {
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  };

  return { toggleLanguage, currentLanguage, t, toggleString, init };
}
