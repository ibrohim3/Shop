import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "../ComingSoon.css";

const Delivery = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="coming-soon">
      <div className="coming-soon-content">
        <h1 className="coming-title">
          {t("deliveryTitle") || "Delivery Page"}
        </h1>
        <p className="coming-text">
          {t("deliveryText") ||
            "We’re preparing the delivery service for you. Coming soon!"}
        </p>
        <div className="loader"></div>
        <button className="home-btn" onClick={() => navigate("/")}>
          ⬅️ {t("goHome") || "Go Home"}
        </button>
      </div>
    </div>
  );
};

export default Delivery;
