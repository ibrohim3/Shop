// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { useState } from "react";
// import "./Header.css";
// import SwitchLang from "../Switch-lang/SwitchLang";

// function Header() {
//   const { t } = useTranslation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   // --- menyu yopilishi uchun nav ichidagi link bosilganda
//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <header>
//       {/* === LOGO === */}
//       <div className="logo">
//         <NavLink className="gradient-text" to="/" onClick={closeMenu}>
//           {t("company")}
//           {/* <i className="fa-solid fa-industry"></i> */}
//         </NavLink>
//       </div>

//       {/* === BURGER === */}
//       <div
//         className={`burger ${menuOpen ? "open" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* === NAVIGATION === */}
//       <nav className={`nav ${menuOpen ? "active" : ""}`}>
//         {/* === CATALOG BTN === */}
//         <div className="catalog-container">
//           <p className="catalog login-btn">{t("products")}</p>
//         </div>

//         {/* === SEARCH === */}
//         <div className="search">
//           <input
//             type="text"
//             placeholder={t("search_placeholder") || "Search..."}
//           />
//           <i className="fa-solid fa-magnifying-glass search-icon"></i>
//         </div>

//         {/* === LINKS === */}
//         <ul className={`links ${menuOpen ? "active" : ""}`}>
//           <li>
//             <NavLink
//               to="/home"
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={closeMenu}
//             >
//               {t("home")}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about-us"
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={closeMenu}
//             >
//               {t("about")}
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/contact"
//               className={({ isActive }) => (isActive ? "active" : "")}
//               onClick={closeMenu}
//             >
//               {t("contact")}
//             </NavLink>
//           </li>
//         </ul>

//         {/* === LOGIN + LANG SWITCH === */}
//         <div className="btns">
//           <button className="login-btn">{t("login")}</button>
//           <div className="lang-switcher">
//             <SwitchLang />
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Header.css";
import SwitchLang from "../Switch-lang/SwitchLang";

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { to: "/home", label: t("home") },
    { to: "/about-us", label: t("about") },
    { to: "/contact", label: t("contact") },
  ];

  return (
    <>
      <header>
        {/* TOP ROW: LOGO + LANG */}
        <div className="header-top">
          <div className="logo">
            <NavLink className="gradient-text" to="/" onClick={closeMenu}>
              {t("company")}
            </NavLink>
          </div>

          {/* Lang always visible */}
          <div className="lang-switcher">
            <SwitchLang />
          </div>

          {/* Burger visible on desktop breakpoints only (kept for larger screens) */}
          <div
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* SEARCH: stays inside header, but layout changes via CSS */}
        <div className="search">
          <input
            type="text"
            placeholder={t("search_placeholder") || "Search..."}
            aria-label={t("search_placeholder") || "Search"}
          />
          <i className="fa-solid fa-magnifying-glass search-icon" />
        </div>

        {/* DESKTOP NAV: visible on larger screens */}
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <div className="catalog-container">
            <p className="catalog login-btn">{t("products")}</p>
          </div>

          <ul className={`links ${menuOpen ? "active" : ""}`}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="btns">
            <button className="login-btn">{t("login")}</button>
          </div>
        </nav>
      </header>

      {/* MOBILE BOTTOM NAV: visible only on small screens (CSS controls display) */}
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;
