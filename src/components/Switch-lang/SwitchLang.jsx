// import "./SwitchLang.css";
// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// const languages = [
//   { code: "UZ", name: "Uzbek", flag: "🇺🇿" },
//   { code: "EN", name: "English", flag: "🇬🇧" },
//   { code: "RU", name: "Russian", flag: "🇷🇺" },
// ];
// function SwitchLang() {
//   const { i18n } = useTranslation();
//   const [open, setOpen] = useState(false);

//   const handleSelect = (lng) => {
//     i18n.changeLanguage(lng);
//     localStorage.setItem("language", lng);
//     setOpen(false);
//   };
//   const selected =
//     languages.find((l) => l.code === i18n.language) || languages[0];
//   return (
//     <>
//       <button
//         aria-label="Tilni o‘zgartirish"
//         className="lang-btn"
//         onClick={() => setOpen(!open)}
//       >
//         {selected.flag} {selected.code}
//       </button>
//       {open && (
//         <ul className="lang-dropdown">
//           {languages.map((lang) => (
//             <li
//               key={lang.code}
//               onClick={() => handleSelect(lang.code)}
//               className="lang-item"
//             >
//               <span className="flag">{lang.flag}</span>{" "}
//               <span className="lang-text">{lang.code}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

// export default SwitchLang;
import "./SwitchLang.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const languages = [
  { code: "uz", name: "Uzbek", flag: "🇺🇿" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
];

function SwitchLang() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);

    const pathParts = location.pathname.split("/").slice(2);
    navigate(`/${lng}/${pathParts.join("/")}`);
    setOpen(false);
  };

  const selected =
    languages.find((l) => l.code === i18n.language) || languages[0];

  return (
    <>
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
              className="lang-item"
            >
              <span className="flag">{lang.flag}</span>{" "}
              <span className="lang-text">{lang.code.toUpperCase()}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SwitchLang;
