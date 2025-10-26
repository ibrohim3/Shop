import "./About.css";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h1>{t("about")}</h1>
          <div className="underline"></div>
          <p>{t("about_description")}</p>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <h2>10+</h2>
            <span> {t("years_experience")} </span>
          </div>
          <div className="stat-card">
            <h2>500+</h2>
            <span> {t("happy_clients")} </span>
          </div>
          <div className="stat-card">
            <h2>1000+</h2>
            <span> {t("product_types")} </span>
          </div>
          <div className="stat-card">
            <h2>24/7</h2>
            <span> {t("service_three")} </span>
          </div>
        </div>

        <div className="about-mission">
          <h3> {t("our_mission_title")} </h3>
          <p>{t("description")}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
