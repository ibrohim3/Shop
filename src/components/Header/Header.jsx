import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";
import SwitchLang from "../Switch-lang/SwitchLang";

function Header() {
  const { t } = useTranslation();
  const { lang } = useParams();

  const links = [
    {
      to: "home",
      label: t("home"),
      icon: <i className="fa-solid fa-house nav-icon"></i>,
    },
    {
      to: "about-us",
      label: t("about"),
      icon: <i className="fa-solid fa-circle-info nav-icon"></i>,
    },
    {
      to: "contact",
      label: t("contact"),
      icon: <i className="fa-solid fa-envelope nav-icon"></i>,
    },
  ];

  return (
    <>
      <header>
        {/* TOP ROW */}
        <div className="header-top">
          <div className="logo">
            <NavLink className="gradient-text" to={`/${lang}`}>
              {t("company")}
            </NavLink>
          </div>

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

        {/* NAV */}
        <nav className="nav">
          {/* <div className="catalog-container">
            <p className="catalog login-btn">{t("products")}</p>
          </div> */}

          <ul className="links">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={`/${lang}/${l.to}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="btns">
            <NavLink to={`/${lang}/login`} className="login-btn">
              {t("login")}
            </NavLink>
          </div>
        </nav>
      </header>

      {/* MOBILE NAV */}
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <ul>
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={`/${lang}/${l.to}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {l.icon}
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
