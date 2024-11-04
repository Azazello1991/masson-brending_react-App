import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
// redux
import { useSelector, useDispatch } from "react-redux";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/css/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default () => {
  const { t } = useTranslation();
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
            <div className="sale-slide">
                  <div className="sale-slide__content">
                <h3>"{t("sale.slider.title") }"</h3>
                    <p className="tr">
                      {t('sale.slider.description')}
                    </p>
                    <a className="btn sale-slide__btn tr" href="#">
                      {t('sale.slider.button')}
                    </a>
                  </div>
                  <div className="sale-slide__photo-wrapper">
                    <div className="sale-slide__photo">
                      <img
                        src="./images/sale-photo.png"
                        width="420"
                        height="420"
                        alt={t('sale.slider.altPhoto')}
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
