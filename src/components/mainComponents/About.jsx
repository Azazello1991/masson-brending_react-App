import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section class="section about" id="about">
      <div class="container">
        <h2 class="section-title about__title">
          <span class="tr">Наші</span>
          <span class="section-title-slice about__title-slice tr">послуги</span>
        </h2>
        <p class="section-text about__text tr">Головна діяльність масонств</p>
        <AboutCard />
      </div>
    </section>
  );
};

export default About;
