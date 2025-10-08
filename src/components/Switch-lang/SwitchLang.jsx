import { useState } from "react";
import { useTranslation } from "react-i18next";
const languages = [
  { code: "UZ", name: "Uzbek", flag: "🇺🇿" },
  { code: "EN", name: "English", flag: "🇬🇧" },
  { code: "RU", name: "Russian", flag: "🇷🇺" },
];
function SwitchLang() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleSelect = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setOpen(false);
  };
  const selected =
    languages.find((l) => l.code === i18n.language) || languages[0];
  return (
    <>
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        {selected.flag} {selected.code}
      </button>
      {open && (
        <ul className="lang-dropdown">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="lang-item"
            >
              <span className="flag">{lang.flag}</span>{" "}
              <span className="lang-text">{lang.code}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SwitchLang;
