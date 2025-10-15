import { useTranslation } from "react-i18next";
import "./Footer.css";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO & CONTACT */}
        <div className="footer-col">
          <h2 className="footer-logo gradient-text">
            <i className="fa-solid fa-industry"></i> {t("company")}
          </h2>
          <p className="footer-title">{t("address")}</p>
          <p className="addres">O‘zbekiston, Nmangan Shaxar</p>

          <p className="footer-title">{t("have_question")}</p>
          <p className="phone-number">
            <i className="fa-solid fa-phone"></i> +998 93 335 55 66
          </p>
          <p className="email">
            <i className="fa-solid fa-envelope"></i> info@turonmetall.uz
          </p>
        </div>

        {/* INFORMATION */}
        <div className="footer-col">
          <h3>{t("info")}</h3>
          <ul>
            <li>FAQ</li>
            <li>{t("how_to_buy")}</li>
            <li>{t("payment_delivery")}</li>
            <li>{t("user_agreement")}</li>
          </ul>
        </div>

        {/* ADDITIONAL */}
        <div className="footer-col">
          <h3>{t("additional")}</h3>
          <ul>
            <li>{t("feedback")}</li>
            <li>{t("sitemap")}</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div className="footer-col subscribe">
          <h3>{t("subscribe_news")}</h3>
          <p>{t("no_spam")}</p>
          <div className="subscribe-form">
            <input type="email" placeholder={t("enter_email")} />
            <button className="gradient-btn">{t("subscribe")}</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Turon Metall. {t("all_rights")}</p>
        <div className="social-icons">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
