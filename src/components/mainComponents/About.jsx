import React from "react";
import AboutCard from "./AboutCard";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title about__title">
          <span className="tr">{t("about.titleOne")}</span>
          <span className="section-title-slice about__title-slice tr">{t("about.titleTwo") }</span>
        </h2>
        <p className="section-text about__text tr">{t("about.subtitle") }</p>
        <AboutCard />
      </div>
    </section>
  );
};

export default About;
