import React from "react";
import VideoLightbox from "./LightVideo";
import { useTranslation } from 'react-i18next';

const Video = () => {
  const { t } = useTranslation();

  return (
    <section className="section video" id="video">
      <div className="container">
        <h2 className="vide__title">
          <span className="section-title-slice">{t("video.titleOne")}</span>{t("video.titleTwo")}
        </h2>
        <p className="video__text">{t("video.subtitle")}</p>

        <VideoLightbox />
        
      </div>
    </section>
  );
};

export default Video;
