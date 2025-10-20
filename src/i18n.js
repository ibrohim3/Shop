import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    uz: {
        translation: {
            company: "Turon Metal",
            home: "Bosh Sahifa",
            products: "Katalog",
            about: "Biz haqimizda",
            contact: "Biz bilan bog‘laning",
            login: "Kirish",

            // Catalog section
            homeTitle: "<1>Sotib olishni</1> osonlashtiring — har xil mahsulotlar bir joyda!",
            homeSubtitle: "Metall, yog‘och, mebel va boshqa tovarlarni onlayn xarid qiling.",
            exploreBtn: "Katalogni ko‘rish",
            metal: "Metal",
            furniture: "Mebel",
            wood: "Yog‘och",
            tech: "Texnika",
            list: "Tunka / List",
            view: "Ko‘rish",
            search_placeholder: "Mahsulot qidiring...",


            // Cervice section
            cervice1: "Yetkazib Berish Xizmati",
            cervice2: "100% To'lov Qaytish Kafolati",
            cervice3: "Sharxlar Tizimi",
            cervice1_desc: "O'zbekiston bo'ylab",
            cervice2_desc: "Ikki hafta ichida",
            cervice3_desc: "Sharxlarni o'qing va bo'lishing",

            // Footer
            address: "Manzil",
            have_question: "Savolingiz bormi?",
            info: "Ma’lumot",
            how_to_buy: "Qanday harid qilay?",
            payment_delivery: "To‘lov va yetkazib berish usullari",
            user_agreement: "Foydalanuvchi shartnomasi",
            additional: "Qo‘shimcha",
            feedback: "Teskari aloqa",
            sitemap: "Sayt xaritasi",
            subscribe_news: "Yangiliklarga obuna bo‘lish",
            no_spam: "Biz sizning pochta manzilingizni uchinchi shaxslarga bermaymiz.",
            enter_email: "Pochta manzilingizni kiriting...",
            subscribe: "Obuna bo‘lish",
            all_rights: "Barcha huquqlar himoyalangan.",


            // Admin panel
            all_products: "Barcha mahsulotlar",
            all_sold: "Barcha sotilganlar",
            all_bought: "Barcha sotib olinganlar",
            debtors: "Nasiyalarning umumiy summasi",
            income_expense_chart: "Chiqim va daromad grafigi",
            revenue: "Daromad",
            expenses: "Chiqimlar",
            february: "Fevral",
            march: "Mart",
            april: "Aprel",
            may: "May",
            june: "Iyun",
            july: "Iyul",
            august: "Avgust",
            september: "Sentabr",
            october: "Oktabr",
            november: "Noyabr",
            december: "Dekabr",
            log_out: "Chiqish",


            // Admin panel side bar
            dashboard: "Dashboard",
            praducts: "Mahsulotlar",




        }
    },
    en: {
        translation: {
            company: "Turon Metal",
            home: "Home",
            products: "Catalog",
            about: "About Us",
            contact: "Contact Us",
            login: "Login",

            // Catalog section
            homeTitle: "Make <1>purchasing</1> easier — all kinds of products in one place!",
            homeSubtitle: "Buy metal, wood, furniture and other goods online.",
            exploreBtn: "Explore Catalog",
            metal: "Metal",
            furniture: "Furniture",
            wood: "Wood",
            tech: "Technology",
            list: "Lathing / Batten",
            view: "View",
            search_placeholder: "Search...",

            // Cervice section
            cervice1: "Delivery Service",
            cervice2: "100% Money-Back Guarantee",
            cervice3: "Review System",
            cervice1_desc: "Across Uzbekistan",
            cervice2_desc: "Within two weeks",
            cervice3_desc: "Read and share reviews",

            // Footer

            address: "Address",
            have_question: "Have a question?",
            info: "Information",
            how_to_buy: "How to buy?",
            payment_delivery: "Payment and delivery methods",
            user_agreement: "User agreement",
            additional: "Additional",
            feedback: "Feedback",
            sitemap: "Sitemap",
            subscribe_news: "Subscribe to news",
            no_spam: "We do not share your email address with third parties.",
            enter_email: "Enter your email address...",
            subscribe: "Subscribe",
            all_rights: "All rights reserved.",

            // Admin panel

            all_products: "All products",
            all_sold: "All sold items",
            all_bought: "All purchased items",
            debtors: "Total amount owed (on credit)",
            income_expense_chart: "Income and expense chart",
            revenue: "Revenue",
            expenses: "Expenses",
            february: "February",
            march: "March",
            april: "April",
            may: "May",
            june: "June",
            july: "July",
            august: "August",
            september: "September",
            october: "October",
            november: "November",
            december: "December",
            log_out: "Log Out",

            // Admin panel side bar
            dashboard: "Dashboard",
            praducts: "Products",
        }
    },
    ru: {
        translation: {
            company: "Турон Металл",
            home: "Главная",
            products: "Каталог",
            about: "О нас",
            contact: "Связаться с нами",
            login: "Вход",

            // Catalog section
            homeTitle: "Сделайте <1>покупки</1> проще — все товары в одном месте!",
            homeSubtitle: "Покупайте металл, дерево, мебель и другие товары онлайн.",
            exploreBtn: "Посмотреть каталог",
            metal: "Металл",
            furniture: "Мебель",
            wood: "Дерево",
            tech: "Техника",
            list: "обрешётка",
            view: "Смотреть",
            search_placeholder: "Найдите товар...",


            // Cervice section
            cervice1: "Служба доставки",
            cervice2: "100% Гарантия возврата денег",
            cervice3: "Система отзывов",
            cervice1_desc: "По всему Узбекистану",
            cervice2_desc: "В течение двух недель",
            cervice3_desc: "Читайте и делитесь отзывами",


            // Footer

            address: "Адрес",
            have_question: "Есть вопрос?",
            info: "Информация",
            how_to_buy: "Как купить?",
            payment_delivery: "Способы оплаты и доставки",
            user_agreement: "Пользовательское соглашение",
            additional: "Дополнительно",
            feedback: "Обратная связь",
            sitemap: "Карта сайта",
            subscribe_news: "Подписаться на новости",
            no_spam: "Мы не передаем ваш адрес электронной почты третьим лицам.",
            enter_email: "Введите ваш адрес электронной почты...",
            subscribe: "Подписаться",
            all_rights: "Все права защищены.",


            // Admin panel


            all_products: "Все товары",
            all_sold: "Все проданные товары",
            all_bought: "Все купленные товары",
            debtors: "Общая сумма задолженности (по кредитам/в рассрочку)",
            income_expense_chart: "График расходов и доходов",
            revenue: "Доход",
            expenses: "Расходы",
            february: "Февраль",
            march: "Март",
            april: "Апрель",
            may: "Май",
            june: "Июнь",
            july: "Июль",
            august: "Август",
            september: "Сентябрь",
            october: "Октябрь",
            november: "Ноябрь",
            december: "Декабрь",
            log_out: "Выход",

            // Admin panel side bar
            dashboard: "Панель управления",
            praducts: "Товары",
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
