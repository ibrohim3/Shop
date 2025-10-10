import { useTranslation } from "react-i18next";
import "./Catalog.css";
import metalImg from "../../assets/images/metal.png";
import mebelImg from "../../assets/images/mebel.png";
import yogochImg from "../../assets/images/yogoch.png";
import listImg from "../../assets/images/list.png";
function Catalog() {
  const { t } = useTranslation();
  const catalog = [
    {
      img: metalImg,
      name: t("metal"),
      button: t("view"),
    },
    {
      img: mebelImg,
      name: t("furniture"),
      button: t("view"),
    },
    {
      img: listImg,
      name: t("list"),
      button: t("view"),
    },
    {
      img: yogochImg,
      name: t("wood"),
      button: t("view"),
    },
    {
      img: listImg,
      name: t("list"),
      button: t("view"),
    },
  ];

  return (
    <div className="wrapper">
      {catalog.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.name} loading="lazy" />
          <h3>{item.name}</h3>
          <button className="view-btn">{item.button}</button>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
