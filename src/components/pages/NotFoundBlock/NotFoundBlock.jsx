import React from "react";
import style from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={style.wrapper}>
      <span>😕</span>
      <h1 className={style.title}>Нічого не знайшлось</h1>
      <p className={style.description}>
        Спробуте зробити інший запит.
      </p>
    </div>
  );
};
export default NotFoundBlock;
