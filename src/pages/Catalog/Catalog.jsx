import { useTranslation } from "react-i18next";
import "./Catalog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import metalImg from "../../assets/images/metal.png";
import mebelImg from "../../assets/images/mebel.png";
import yogochImg from "../../assets/images/yogoch.png";
import listImg from "../../assets/images/list.png";

function Catalog() {
  const { t } = useTranslation();
  const catalog = [
    { img: metalImg, name: t("metal"), button: t("view") },
    { img: mebelImg, name: t("furniture"), button: t("view") },
    { img: listImg, name: t("list"), button: t("view") },
    { img: yogochImg, name: t("wood"), button: t("view") },
    { img: listImg, name: t("list"), button: t("view") },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={25}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1200: { slidesPerView: 4 },
          992: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 }, // 580 px dan kichik uchun to‘liq 1ta card
        }}
      >
        {catalog.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card">
              <img src={item.img} alt={item.name} loading="lazy" />
              <h3>{item.name}</h3>
              <button className="view-btn">{item.button}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Catalog;
