import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";
import SwitchLang from "../Switch-lang/SwitchLang";

function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <div className="logo">
        <NavLink className="gradient-text" to="/">
          {t("company")}
        </NavLink>
      </div>
      <nav className="nav">
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
              to="/catalog"
            >
              {t("products")}
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
