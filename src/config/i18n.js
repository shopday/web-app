import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "js-cookie";
import translationEN from "./locales/en/translation.json";
import translationVN from "./locales/vn/translation.json";
import config from "./config";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVN,
  },
};

const language = Cookies.get("language") || "vi";

if (!Cookies.get("language")) {
  Cookies.set("language", config.defaultLanguage);
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language,
    fallbackLng: config.secondLanguage,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    debug: true,
  });

export default i18n;
