// import { useParams, Outlet } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import Header from "../components/Header/Header";
// import SkeletonCard from "../components/loading/SkeletonCard";
// import "./MainLayout.css";
// import Footer from "../components/Footer/Footer";

// function MainLayout() {
//   const { lang } = useParams();
//   const { i18n } = useTranslation();
//   const [loading, setLoading] = useState(true);

//   // Tilni almashtirish
//   useEffect(() => {
//     if (lang && i18n.language !== lang.toLowerCase()) {
//       i18n.changeLanguage(lang.toLowerCase());
//     }
//   }, [lang, i18n]);

//   // Skeleton holatini ko‘rsatish
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <div className="content">
//           {loading ? (
//             <div className="skeleton-container">
//               {[1, 2, 3].map((n) => (
//                 <SkeletonCard count={5} key={n} />
//               ))}
//             </div>
//           ) : (
//             <Outlet />
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default MainLayout;

import { useParams, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import SkeletonCard from "../components/loading/SkeletonCard";
import "./MainLayout.css";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (lang && i18n.language !== lang.toLowerCase()) {
      i18n.changeLanguage(lang.toLowerCase());
    }
  }, [lang, i18n]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header onSearch={setSearchQuery} />
      <div className="container">
        <div className="content">
          {loading ? (
            <div className="skeleton-container">
              {[1, 2, 3].map((n) => (
                <SkeletonCard count={5} key={n} />
              ))}
            </div>
          ) : (
            <Outlet context={{ searchQuery }} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
