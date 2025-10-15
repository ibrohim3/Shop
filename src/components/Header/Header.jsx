import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Header.css";
import SwitchLang from "../Switch-lang/SwitchLang";

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // --- menyu yopilishi uchun nav ichidagi link bosilganda
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      {/* === LOGO === */}
      <div className="logo">
        <NavLink className="gradient-text" to="/" onClick={closeMenu}>
          <i className="fa-solid fa-industry"></i> {t("company")}
        </NavLink>
      </div>

      {/* === BURGER === */}
      <div
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* === NAVIGATION === */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        {/* === CATALOG BTN === */}
        <div className="catalog-container">
          <p className="catalog login-btn">{t("products")}</p>
        </div>

        {/* === SEARCH === */}
        <div className="search">
          <input
            type="text"
            placeholder={t("search_placeholder") || "Search..."}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        {/* === LINKS === */}
        <ul className={`links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {t("about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {t("contact")}
            </NavLink>
          </li>
        </ul>

        {/* === LOGIN + LANG SWITCH === */}
        <div className="btns">
          <button className="login-btn">{t("login")}</button>
          <div className="lang-switcher">
            <SwitchLang />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
