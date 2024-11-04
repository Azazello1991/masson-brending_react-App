import React from "react";
import TopMixItUp from "./TopMixItUp";
import { useTranslation } from 'react-i18next';

const Top = () => {
  const { t } = useTranslation();

  return (
    <section className="section top" id="top">
      <div className="container">
        <h2 className="section-title">
          <span className="tr">{t("top.titleOne")}</span>
          <span className="section-title-slice tr">{t("top.titleTwo")}</span>
        </h2>
        <p className="section-text tr">{t("top.subtitle")}</p>
        <TopMixItUp/>
      </div>
    </section>
  );
};

export default Top;
