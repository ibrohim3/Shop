import { useTranslation } from "react-i18next";
import SwitchLang from "../../../components/Switch-lang/SwitchLang";
import "./Dashboard.css";
import StatsLien from "../../../components/admin/StatsLien/StatsLien";

function Dashboard() {
  const { t } = useTranslation();

  const tableArr = [
    {
      id: 1,
      name: t("all_products"),
      sold: 120,
      icon: "fa-solid fa-boxes-stacked", // 📦
      color: "#FFD700",
    },
    {
      id: 2,
      name: t("all_sold"),
      sold: 80,
      icon: "fa-solid fa-cart-arrow-down", // 🛒
      color: "#27AE60",
    },
    {
      id: 3,
      name: t("all_bought"),
      sold: 50,
      icon: "fa-solid fa-cart-shopping", // 🛍️
      color: "#3498DB",
    },
    {
      id: 4,
      name: t("debtors"),
      sold: 25.0,
      icon: "fa-solid fa-hand-holding-dollar", // 💰
      color: "#E74C3C",
    },
  ];

  return (
    <section className="dashboard">
      <div className="dashboard-head">
        <h1>{t("dashboard")}</h1>
        <SwitchLang />
      </div>

      <div className="dashboard-content">
        {tableArr.map((item) => (
          <div className="dashboard-card" key={item.id}>
            <h2 className="card-title">{item.name}</h2>
            <div className="card-bottom">
              <i
                className={`${item.icon} card-icon`}
                style={{ color: item.color }}
              ></i>
              <p className="card-value">{item.sold}</p>
            </div>
          </div>
        ))}
      </div>

      <StatsLien />
    </section>
  );
}

export default Dashboard;
