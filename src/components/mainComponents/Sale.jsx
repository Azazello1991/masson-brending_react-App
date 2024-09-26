import React from "react";
import SwiperSale from "./SwiperSale";

const Sale = () => {
  return (
    <section class="section sale">
      <div class="container">
        <h2 class="sale__title">
          <span class="section-title-slice example__title-slice tr">Акції</span>
          <span class="tr">та пропозиції</span>
        </h2>
        <p class="sale__text tr">Встигни вирвати собі</p>
      </div>

      <div class="sale__wrapper">
        <div class="container">
          <SwiperSale/>
        </div>
      </div>
    </section>
  );
};

export default Sale;
