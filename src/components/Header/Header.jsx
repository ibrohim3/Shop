import { Link } from "react-router-dom";
import "./Header.css";
import SwitchLang from "../Switch-lang/SwitchLang";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <header>
      <div className="logo  ">
        <Link className="gradient-text" to="/">
          {t("company")}
        </Link>
      </div>
      <nav className="nav">
        <ul className="links">
          <li>
            <Link to="/home">{t("home")}</Link>
          </li>
          <li>
            <Link to="/catalog">{t("products")}</Link>
          </li>
          <li>
            <Link to="/about-us">{t("about")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("contact")}</Link>
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
