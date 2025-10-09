import { useTranslation } from "react-i18next";
import SwitchLang from "../../components/Switch-lang/SwitchLang";
function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <div className="title">
        <h1>Sotib olish </h1>
      </div>
    </main>
  );
}

export default Home;
