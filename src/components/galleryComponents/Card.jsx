import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

const Card = ({ url, title, price, description, rating, category, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/gallery/product/${id}`); // Переходимо на сторінку товару
  };

  return (
    <article class={`card ${category}`}>
      <Link  class="card__wrapper" onClick={handleClick}>
        <div class="card__img">
          <img
            class="card__pictur"
            src={url}
            width="230"
            height="240"
            alt="Фото товару"
          />
        </div>
        <StarRatings
          rating={rating}
          starRatedColor="gold" // колір заповнених зірок
          starHoverColor="yellow" // колір при наведенні
          starDimension="24px" // розмір
          starSpacing="2px" // дистанція між зірками
          numberOfStars={5} // кількість
          name="rating" // ім'я рейтинга (необов'язково)
        />
        <h3 class="card__title tr">{title}</h3>
        <span class="card__deskription">{description}</span>
        <span class="card__pric">
          {price} <span>₴</span>
        </span>
      </Link>
    </article>
  );
};

export default Card;
