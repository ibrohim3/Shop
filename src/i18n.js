import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    uz: {
        translation: {
            company: "Turon Metal",
            home: "Bosh Sahifa",
            products: "Mahsulotlar",
            about: "Biz haqimizda",
            contact: "Biz bilan bog‘laning",
            login: "Kirish",

            // Catalog section
            catalog_title: "Sotib olishni osonlashtiring — har xil mahsulotlar bir joyda!",
            catalog_subtitle: "Metall, yog‘och, mebel va boshqa tovarlarni onlayn xarid qiling.",
            explore_btn: "Katalogni ko‘rish",
            metal: "Metal",
            furniture: "Mebel",
            wood: "Yog‘och",
            tech: "Texnika",
            view: "Ko‘rish"
        }
    },
    en: {
        translation: {
            company: "Turon Metal",
            home: "Home",
            products: "Products",
            about: "About Us",
            contact: "Contact Us",
            login: "Login",

            // Catalog section
            catalog_title: "Make purchasing easier — all kinds of products in one place!",
            catalog_subtitle: "Buy metal, wood, furniture and other goods online.",
            explore_btn: "Explore Catalog",
            metal: "Metal",
            furniture: "Furniture",
            wood: "Wood",
            tech: "Technology",
            view: "View"
        }
    },
    ru: {
        translation: {
            company: "Турон Металл",
            home: "Главная",
            products: "Продукты",
            about: "О нас",
            contact: "Связаться с нами",
            login: "Вход",

            // Catalog section
            catalog_title: "Упростите покупки — все товары в одном месте!",
            catalog_subtitle: "Покупайте металл, дерево, мебель и другие товары онлайн.",
            explore_btn: "Посмотреть каталог",
            metal: "Металл",
            furniture: "Мебель",
            wood: "Дерево",
            tech: "Техника",
            view: "Смотреть"
        }
    }
};

const savedLang = localStorage.getItem("language")?.toLowerCase() || "uz";

i18n.use(initReactI18next).init({
    resources,
    lng: savedLang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});

export default i18n;