// import AppRoute from "../routes/AppRoute";
// import Header from "../components/Header/Header";

// function MainLayout() {
//   return (
//     <>
//       <Header />
//       <div className="content"></div>
//       <AppRoute />
//     </>
//   );
// }

// export default MainLayout;
import { useParams, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import "./MainLAyout.css";
function MainLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang.toLowerCase()) {
      i18n.changeLanguage(lang.toLowerCase());
    }
  }, [lang, i18n]);

  return (
    <>
      <Header />
      <div className="content">
        <Home />
        {/* Bu joyda ichki sahifalar (Home, About va boshqalar) chiqadi */}
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
