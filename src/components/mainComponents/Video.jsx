import React from "react";
import VideoLightbox from "./LightVideo";

const Video = () => {
  return (
    <section class="section video" id="video">
      <div class="container">
        <h2 class="vide__title">
          <span class="section-title-slice">Ще є </span>сумніви?
        </h2>
        <p class="video__text">Тоді подивися це відео і сам все зрозумієш</p>

        <VideoLightbox />
        
      </div>
    </section>
  );
};

export default Video;
