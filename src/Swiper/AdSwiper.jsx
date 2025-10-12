import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./AdSwiper.css";

import metalImg from "../assets/images/metal.png";
import listImg from "../assets/images/list.png";
import woodImg from "../assets/images/yogoch.png";

function AdSwiper() {
  const ads = [
    {
      id: 1,
      img: metalImg,
      title: "Yangi chegirmalar haftaligi!",
      desc: "Barcha mahsulotlarga 30% gacha chegirma!",
    },
    {
      id: 2,
      img: listImg,
      title: "2025 kolleksiyasi chiqdi!",
      desc: "Eng yangi mahsulotlarni hoziroq ko‘ring!",
    },
    {
      id: 3,
      img: woodImg,
      title: "Bepul yetkazib berish",
      desc: "Buyurtmangizni tez va bepul yetkazib beramiz.",
    },
  ];

  return (
    <section className="ad-swiper">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="ad-swiper-container"
      >
        {ads.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="slide-content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default AdSwiper;
