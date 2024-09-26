import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section class="section hero">
      <div class="container hero__contain">
        <div class="hero__wrapper">
          <h1 class="hero__title">
            masons <span class="hero__title-slice">branding </span>wordshop
          </h1>
          <p class="hero__text tr">
            Високоякісний друк Брендування одягу та аксесуарів
          </p>
          <Link class="btn hero__link tr" to='/gallery'>
            Каталог
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
