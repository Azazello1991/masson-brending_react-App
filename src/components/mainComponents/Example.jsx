import React from "react";
import SwiperExample from "../mainComponents/SwiperExample";
import { useTranslation } from 'react-i18next';

const Example = () => {
  const { t } = useTranslation();
  
  return (
    <section className="section example" id="example">
      <div className="container">
        <h2 className="example__title">
          <span className="section-title-slice example__title-slice tr">
            {t("example.titleOne")}
          </span>
          <span className="tr">{t("example.titleTwo")}</span>
        </h2>
        <span className="example__text tr">{t("example.subtitle")}</span>
        <SwiperExample/>
      </div>
    </section>
  );
};

export default Example;
