import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    UZ: {
        translation: {
            company: "Turon Metal",
            home: "Bosh Sahifa",
            products: "Maxsulotlar",
            about: "Biz haqimizda",
            contact: "Biz bilan bog‘laning",
            login: "Kirish"
        }
    },
    EN: {
        translation: {
            company: "Turon Metal",
            home: "Home",
            products: "Products",
            about: "About Us",
            contact: "Contact Us",
            login: "Login"
        }
    },
    RU: {
        translation: {
            company: "Турон Металл",
            home: "Главная",
            products: "Продукты",
            about: "О нас",
            contact: "Связаться с нами",
            login: "Вход"
        }
    }
};
const savedLang = localStorage.getItem('language') || 'UZ';
i18n.use(initReactI18next)
    .init({
        resources,
        lng: savedLang,
        fallbackLng: 'EN',
        interpolation: { escapeValue: false }
    })

export default i18n