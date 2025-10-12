import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./Header.css";
import SwitchLang from "../Switch-lang/SwitchLang";

function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="logo">
        <NavLink className="gradient-text" to="/">
          {t("company")}
        </NavLink>
      </div>
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <div className="catalog-container">
          <p className="catalog login-btn ">{t("products")}</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        <ul className="links">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/home"
            >
              {t("home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about-us"
            >
              {t("about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              {t("contact")}
            </NavLink>
          </li>
        </ul>
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
