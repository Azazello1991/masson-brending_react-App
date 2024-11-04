import React from "react";
import SwiperComments from "./SwiperComments";
import { useTranslation } from "react-i18next";

const Comments = () => {
  const { t } = useTranslation();

  return (
    <section className="section comments" id="comments">
      <div className="container">
        <h2 className="section-title">
          {t("comments.titleOne")}
          <span className="section-title-slice">{t("comments.titleTwo")}</span>{t("comments.titleThree")}
        </h2>
        <p className="section-text comments__text">
          {t("comments.subtitle")}
        </p>
      </div>

      <div className="comments__slider-wrapper">
        <SwiperComments />
      </div>
    </section>
  );
};

export default Comments;
