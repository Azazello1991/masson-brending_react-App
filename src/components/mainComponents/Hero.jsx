import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="section hero">
      <div className="container hero__contain">
        <div className="hero__wrapper">
          <h1 className="hero__title">
            masons <span className="hero__title-slice">branding </span>wordshop
          </h1>
          <p className="hero__text tr">
            {t("hero.subtitle")}
          </p>
          <Link className="btn hero__link tr" to='/gallery'>
            {t("hero.buttonCatalog")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
