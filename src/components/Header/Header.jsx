import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";
import SwitchLang from "../Switch-lang/SwitchLang";

function Header() {
  const { t } = useTranslation();

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
            <NavLink className="gradient-text" to="/">
              {t("company")}
            </NavLink>
          </div>

          {/* Language switcher */}
          <div className="lang-switcher">
            <SwitchLang />
          </div>
        </div>

        {/* SEARCH */}
        <div className="search">
          <input
            type="text"
            placeholder={t("search_placeholder") || "Search..."}
            aria-label={t("search_placeholder") || "Search"}
          />
          <i className="fa-solid fa-magnifying-glass search-icon" />
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav">
          <div className="catalog-container">
            <p className="catalog login-btn">{t("products")}</p>
          </div>

          <ul className="links">
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

          <div className="btns">
            <button className="login-btn">{t("login")}</button>
          </div>
        </nav>
      </header>

      {/* MOBILE BOTTOM NAV */}
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
