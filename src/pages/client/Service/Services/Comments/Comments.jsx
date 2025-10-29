import React from "react";
import { useTranslation } from "react-i18next";
import "../ComingSoon.css";
import { useNavigate } from "react-router-dom";

const Comments = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="coming-soon">
      <div className="coming-soon-content">
        <h1 className="coming-title">
          {t("commentsTitle") || "User Comments"}
        </h1>
        <p className="coming-text">
          {t("commentsText") ||
            "We’re working on an awesome comment system. Coming soon!"}
        </p>
        <div className="loader"></div>
        <button className="home-btn" onClick={() => navigate("/")}>
          ⬅️ {t("goHome") || "Go Home"}
        </button>
      </div>
    </div>
  );
};

export default Comments;
