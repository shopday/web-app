import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import i18n from "i18next";

const useLanguage = () => {
  const currentLanguage = Cookies.get("language");

  const [language, setLanguage] = useState(currentLanguage);

  let nextLanguage = language === "vi" ? "en" : "vi";

  const toggleLanguage = () => {
    nextLanguage = language === "vi" ? "en" : "vi";
    setLanguage(nextLanguage);
  };

  useEffect(() => {
    Cookies.set("language", language);
    i18n.changeLanguage(language);
  }, [language]);

  return { nextLanguage, toggleLanguage };
};

export default useLanguage;
