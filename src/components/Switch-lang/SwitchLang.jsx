import "./SwitchLang.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const languages = [
  { code: "uz", name: "UZ", flag: "🇺🇿" },
  { code: "en", name: "ENG", flag: "🇬🇧" },
  { code: "ru", name: "RU", flag: "🇷🇺" },
];

function SwitchLang() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // --- URL va localStorage bo‘yicha tilni aniqlash ---
  useEffect(() => {
    const currentLangFromURL = location.pathname.split("/")[1];
    const savedLang = localStorage.getItem("language");

    if (languages.some((l) => l.code === currentLangFromURL)) {
      // URL dan oladi
      if (i18n.language !== currentLangFromURL) {
        i18n.changeLanguage(currentLangFromURL);
        localStorage.setItem("language", currentLangFromURL);
      }
    } else if (savedLang) {
      // localStorage dan oladi
      i18n.changeLanguage(savedLang);
    } else {
      // default til
      i18n.changeLanguage("uz");
      localStorage.setItem("language", "uz");
    }
  }, [location, i18n]);

  // --- Til tanlanganda ---
  const handleSelect = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);

    const pathParts = location.pathname.split("/").filter(Boolean);

    if (pathParts.includes("admin")) {
      // admin yo‘nalishini saqlab qolish
      const adminIndex = pathParts.indexOf("admin");
      const restPath = pathParts.slice(adminIndex + 1).join("/");
      navigate(`/${lng}/admin/${restPath}`);
    } else {
      // oddiy foydalanuvchi yo‘nalishi
      const restPath = pathParts.slice(1).join("/");
      navigate(`/${lng}/${restPath}`);
    }

    setOpen(false);
  };

  const selected =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <div className="switch-lang-container">
      <button
        aria-label="Tilni o‘zgartirish"
        className="lang-btn"
        onClick={() => setOpen(!open)}
      >
        {selected.flag} {selected.code.toUpperCase()}
      </button>

      {open && (
        <ul className="lang-dropdown">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`lang-item ${
                lang.code === i18n.language ? "active" : ""
              }`}
            >
              <span className="flag">{lang.flag}</span>{" "}
              <span className="lang-text">{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SwitchLang;
