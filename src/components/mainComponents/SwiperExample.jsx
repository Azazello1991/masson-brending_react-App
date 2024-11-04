import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// redux
import { useSelector, useDispatch } from "react-redux";
//swiper
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default () => {
  const productsExample = useSelector(
    (state) => state.productsSlice.slidesExample
  );

  return (
    <Swiper
      className="example-slider"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation={true}
      scrollbar={{
        hide: false, // если true, то scrollbar будет скрыт, когда прокрутка не используется
        draggable: true, // возможность перетаскивать ползунок вручную
      }}
    >
      {productsExample.map((products, i) => {
        return (
          <SwiperSlide key={products.id}>
            <div className="example__slide swiper-slide">
              <a className="example__slide-link" href="#">
                <div className="example__slide-wrapper">
                  <img src={products.url} alt="Продукт"></img>
                </div>
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
