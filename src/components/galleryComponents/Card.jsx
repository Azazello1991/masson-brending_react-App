import React from "react";

const Card = ({ url, title, price, description }) => {
  return (
    <article class="card">
      <a href="" class="card__wrapper">
        <div class="card__img">
          <img
            class="card__pictur"
            src={url}
            width="230"
            height="240"
            alt="Фото товару"
          />
        </div>
        <h3 class="card__title tr">{title}</h3>
        <span class="card__deskription">{description }</span>
        <span class="card__pric">
          {price} <span>₴</span>
        </span>
      </a>
    </article>
  );
};

export default Card;
