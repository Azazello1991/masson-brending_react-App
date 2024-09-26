import React from "react";
import TopMixItUp from "./TopMixItUp";

const Top = () => {
  return (
    <section class="section top" id="top">
      <div class="container">
        <h2 class="section-title">
          <span class="tr">Топ</span>
          <span class="section-title-slice tr">продаж</span>
        </h2>
        <p class="section-text tr">Те, що вам сподобається</p>
        <TopMixItUp/>
      </div>
    </section>
  );
};

export default Top;
