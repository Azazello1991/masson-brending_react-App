import React from "react";
import SwiperComments from "./SwiperComments";

const Comments = () => {
  return (
    <section class="section comments" id="comments">
      <div class="container">
        <h2 class="section-title">
          Від<span class="section-title-slice">гу</span>ки
        </h2>
        <p class="section-text comments__text">
          Тільки подивися, що про нас говорить твоя сусідка
        </p>
      </div>

      <div class="comments__slider-wrapper">
        <SwiperComments />
      </div>
    </section>
  );
};

export default Comments;
