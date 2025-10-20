import AdSwiper from "../../../Swiper/AdSwiper";
import SwitchLang from "../../../components/Switch-lang/SwitchLang";
import "./Home.css";
import Catalog from "../Catalog/Catalog";
import Service from "../Service/Service";
function Home() {
  return (
    <main className="home">
      <AdSwiper />
      <Catalog />
      <Service />
    </main>
  );
}

export default Home;
