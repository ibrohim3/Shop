import React from "react";
import { useNavigate } from "react-router-dom";
import "./Forbidden.css";

function Forbidden() {
  const navigate = useNavigate();

  return (
    <div className="forbidden-container">
      <div className="forbidden-card">
        <h1>🚫 Kirish taqiqlangan!</h1>
        <p>Sizda bu sahifaga kirish huquqi yo‘q.</p>
        <button onClick={() => navigate(-1)} className="back-btn">
          Orqaga qaytish
        </button>
      </div>
    </div>
  );
}

export default Forbidden;
