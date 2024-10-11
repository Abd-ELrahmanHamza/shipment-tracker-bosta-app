import Language from "@/models/language.enum";
import { useTranslation } from "react-i18next";

export function useLanguage() {
  const { t, i18n } = useTranslation();
  const currentLanguage: Language =
    i18n.language === "ar" ? Language.Arabic : Language.ENGLISH;
  const toggleString = i18n.language === "ar" ? "ENG" : "عربي";
  const toggleLanguage = () => {
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(currentLanguage === "ar" ? "en" : "ar");
  };

  const init = () => {
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  };

  return { toggleLanguage, currentLanguage, t, toggleString, init };
}
