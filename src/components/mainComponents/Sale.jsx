import React from "react";
import SwiperSale from "./SwiperSale";
import { useTranslation } from 'react-i18next';

const Sale = () => {
  const { t } = useTranslation();

  return (
    <section className="section sale">
      <div className="container">
        <h2 className="sale__title">
          <span className="section-title-slice example__title-slice tr">{t("sale.titleOne")}</span>
          <span className="tr">{t("sale.titleTwo")}</span>
        </h2>
        <p className="sale__text tr">{t("sale.subtitle")}</p>
      </div>

      <div className="sale__wrapper">
        <div className="container">
          <SwiperSale/>
        </div>
      </div>
    </section>
  );
};

export default Sale;
