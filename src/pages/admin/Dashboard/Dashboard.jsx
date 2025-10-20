import { useTranslation } from "react-i18next";
import SwitchLang from "../../../components/Switch-lang/SwitchLang";

function Dashboard() {
  const { t } = useTranslation();
  const tableArr = [
    {
      id: 1,
      name: t("all_products"),
      sold: 120,
    },
    {
      id: 2,
      name: t("all_sold"),
      sold: 80,
    },
    {
      id: 3,
      name: t("all_bought"),
      sold: 50,
    },
    {
      id: 4,
      name: t("debtors"),
      sold: 25.0,
    },
  ];
  return (
    <section>
      <div className="dashboard-head">
        <h1>{t("dashboard")}</h1>
        {/* <SwitchLang /> */}
      </div>
      <div className="dashboard-content">
        {tableArr.map((item) => (
          <div className="dashboard-card" key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.sold}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;
