import React from "react";
import SwiperExample from "../mainComponents/SwiperExample";

const Example = () => {
  return (
    <section class="section example" id="example">
      <div class="container">
        <h2 class="example__title">
          <span class="section-title-slice example__title-slice tr">
            Приклад{" "}
          </span>
          <span class="tr">друку</span>
        </h2>
        <span class="example__text tr">Це може бути на тобі</span>
        <SwiperExample/>
      </div>
    </section>
  );
};

export default Example;
