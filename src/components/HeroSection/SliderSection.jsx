import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { itemSlider } from "../../constants/itemSlider";
import ScrollAnimation from "../ScrollAnimation";

export default function SliderSection() {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {itemSlider.map((iSlider) => {
        return (
          <SwiperSlide key={iSlider.id}>
            <ScrollAnimation
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={iSlider.src}
                className="transition-all hover:rotate-3"
                alt={iSlider.name}
              />
            </ScrollAnimation>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
