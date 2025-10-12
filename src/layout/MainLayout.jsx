import { useParams, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import AdSwiper from "../Swiper/AdSwiper";
import SkeletonCard from "../components/loading/SkeletonCard";
import "./MainLayout.css";

function MainLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  // Tilni almashtirish
  useEffect(() => {
    if (lang && i18n.language !== lang.toLowerCase()) {
      i18n.changeLanguage(lang.toLowerCase());
    }
  }, [lang, i18n]);

  // Skeleton holatini ko‘rsatish (2s)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <AdSwiper />
      <div className="content">
        {loading ? (
          <div className="skeleton-container">
            {[1, 2, 3].map((n) => (
              <SkeletonCard key={n} />
            ))}
          </div>
        ) : (
          <>
            <Home />
            <Outlet />
          </>
        )}
      </div>
    </>
  );
}

export default MainLayout;
