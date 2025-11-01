import { useTranslation } from "react-i18next";
import "../ComingSoon.css";
import { useNavigate } from "react-router-dom";

const MoneyBack = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="coming-soon">
      <div className="coming-soon-content">
        <h1 className="coming-title">
          {t("moneyTitle") || "Money Back Guarantee"}
        </h1>
        <p className="coming-text">
          {t("moneyText") ||
            "Our refund policy will be available soon. Stay tuned!"}
        </p>
        <div className="loader"></div>
        <button className="home-btn" onClick={() => navigate("/")}>
          ⬅️ {t("goHome") || "Go Home"}
        </button>
      </div>
    </div>
  );
};

export default MoneyBack;
