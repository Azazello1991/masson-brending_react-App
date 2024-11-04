import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

const Card = ({ url, price, rating, category, id }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(`/gallery/product/${id}`); // Переходимо на сторінку товару
  };

  const title = t(`top.mixCarts.title_${id}`);
  const deskription = t(`top.mixCarts.description_${id}`);

  return (
    <article className={`card ${category}`}>
      <Link className="card__wrapper" onClick={handleClick}>
        <div className="card__img">
          <img
            className="card__pictur"
            src={url}
            width="230"
            height="240"
            alt="Фото товару"
          />
        </div>
        {rating && (
          <StarRatings
            rating={rating}
            starRatedColor="gold" // колір заповнених зірок
            starHoverColor="yellow" // колір при наведенні
            starDimension="24px" // розмір
            starSpacing="2px" // дистанція між зірками
            numberOfStars={5} // кількість
            name="rating" // ім'я рейтинга (необов'язково)
          />
        )}
        <h3 className="card__title tr">{title}</h3>
        <span className="card__deskription">
          {deskription}
        </span>
        {price && (
          <span className="card__pric">
            {price} <span>₴</span>
          </span>
        )}
      </Link>
    </article>
  );
};

export default Card;
