import { useTranslation, Trans } from "react-i18next";
import SwitchLang from "../../components/Switch-lang/SwitchLang";
import "./Home.css";
import Catalog from "../Catalog/Catalog";
function Home() {
  const { t } = useTranslation();

  return (
    <main className="home">
      <div className="text">
        <h1 className="title gradient-text">
          <Trans i18nKey="homeTitle">
            <span className="highlight gradient-text"></span>
          </Trans>
        </h1>
        <p className="info">{t("homeSubtitle")}</p>
      </div>
      <Catalog />
    </main>
  );
}

export default Home;
