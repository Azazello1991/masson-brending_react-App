import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useNavigate } from "react-router-dom";

const Card = ({ url, price, rating, category, id, title, description }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate(`/gallery/product/${id}`); // Переходимо на сторінку товару
  };

  let curentTitle = '';
  let curentDescription = ''

  if (useTranslation()[1].language === "en") {
    curentTitle = title ? title.en : t(`top.mixCarts.title_${id}`);
    curentDescription = description
      ? description.en
      : t(`top.mixCarts.description_${id}`);
  } else {
    curentTitle = title ? title.ua : t(`top.mixCarts.title_${id}`);
    curentDescription = description
      ? description.ua
      : t(`top.mixCarts.description_${id}`);
  }

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
        <h3 className="card__title tr">{curentTitle}</h3>
        <span className="card__deskription">{curentDescription}</span>
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
