import { useTranslation } from "react-i18next";
import "./Cervice.css";

function Cervice() {
  const { t } = useTranslation();

  const cervices = [
    {
      id: 1,
      icon: "fa-solid fa-truck",
      name: t("cervice1"),
      desc: t("cervice1_desc"),
    },
    {
      id: 2,
      icon: "fa-solid fa-rotate-left",
      name: t("cervice2"),
      desc: t("cervice2_desc"),
    },
    {
      id: 3,
      icon: "fa-solid fa-comments",
      name: t("cervice3"),
      desc: t("cervice3_desc"),
    },
  ];

  return (
    <div className="cervice">
      {cervices.map((item) => (
        <div key={item.id} className="cervice-item">
          <div className="icon">
            <i className={item.icon}></i>
          </div>
          <h3 className="item-name">{item.name}</h3>
          <p className="item-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Cervice;
