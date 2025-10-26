import "./Contact.css";
import { useTranslation } from "react-i18next";
function Contact() {
  const { t } = useTranslation();
  return (
    <section className="contact">
      <div className="contact-container">
        <h1>{t("contact")} </h1>
        <div className="underline"></div>
        <p className="contact-sub">{t("contact_intro")}</p>

        <div className="contact-grid">
          <form className="contact-form">
            <input type="text" placeholder={t("your_name")} required />
            <input type="email" placeholder={t("your_email")} required />
            <textarea
              rows="5"
              placeholder={t("your_message")}
              required
            ></textarea>
            <button type="submit">{t("send_message")}</button>
          </form>

          <div className="contact-info">
            <h3>{t("title")}</h3>
            <p> {t("address2")} </p>
            <p>📞 +998 97 123 45 67</p>
            <p>✉️ info@turonmetall.uz</p>

            <div className="map">
              <iframe
                title="Turon Metall Location"
                src="https://www.google.com/maps?q=Namangan,+Uzbekistan&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
