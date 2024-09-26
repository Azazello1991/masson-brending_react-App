import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Подключение стилей для навигации
import CommentScrin from "../../images/screenshot.png";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const dataSlider = [1, 2, 3, 4];

const CustomSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); // Реф для слайдера

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      // Обновление навигации после привязки кнопок
      swiperRef.current.navigation.destroy(); // Удаляем предыдущие кнопки
      swiperRef.current.navigation.init(); // Инициализируем снова с новыми кнопками
      swiperRef.current.navigation.update(); // Обновляем навигацию
    }
  }, [swiperRef.current]);

  return (
    <div>
      <div class="comments__swiper-arrows">
        <button
          ref={prevRef}
          class="comments__arrow comments__arrow--prev"
        ></button>
        <button
          ref={nextRef}
          class="comments__arrow comments__arrow--next"
        ></button>
      </div>

      <Swiper
        className="comments__slider"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={false}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.update(); // Обновляем навигацию
        }}
        pagination={{ clickable: true }}
        navigation={false} // Включаем навигацию для использования рефов
      >
        {dataSlider.map((comment, i) => (
          <SwiperSlide key={i}>
            <div className="comments__slide-wrapper">
              <img
                className="comments__screen"
                src={CommentScrin}
                alt="Коментарі"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
