import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
// redux
import { useSelector, useDispatch } from "react-redux";
//swiper
import "swiper/scss";
import "swiper/css/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default () => {
  const dispatch = useDispatch();
  const dataSlider = useSelector((state) => state.saleSlice.dataSlider);
 /*  const productsExample = useSelector((state) => state.productsSlice.slidesExample); */

  return (
    <Swiper
      className="sale-slider"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      o/* nSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)} */
      pagination={{ clickable: true }}
      navigation={true}
    >
      {dataSlider.map((products, i) => {
        return (
          <SwiperSlide key = {i}>
            <div class="sale-slide">
                  <div class="sale-slide__content">
                    <h3>"Русский корабль..."</h3>
                    <p class="tr">
                      Купи футболку і 10% з кожної покупки піде на потреби ЗСУ,
                      купи стильну футболку і підтримай свого брата на фронті
                    </p>
                    <a class="btn sale-slide__btn tr" href="#">
                      Детальніше
                    </a>
                  </div>
                  <div class="sale-slide__photo-wrapper">
                    <div class="sale-slide__photo">
                      <img
                        src="./images/sale-photo.png"
                        width="420"
                        height="420"
                        alt="фото продукта"
                      />
                    </div>
                  </div>
                </div>
          </SwiperSlide>
        );
      })}
      
    </Swiper>
  );
};
