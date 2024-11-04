import React from "react";
import StarRatings from "react-star-ratings";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newComment } from "../../redux/slices/commentsProductSlice";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

const CommentForm = ({ setOpenFormComment, openFormComment }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [rating, setRating] = React.useState(0);
  const [name, setName] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [comment, setComment] = React.useState("");

  // ВІдображення дати через бібліотеку date-fns
  const now = new Date();
  const formattedDate = format(now, "dd.MM.yyyy");

  const inputName = (event) => {
    setName(event.target.value);
  };

  const inputMmail = (event) => {
    setMail(event.target.value);
  };

  const inputComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    if (rating && name && mail) {
      dispatch(
        newComment({ rating, name, mail, text: comment, time: formattedDate })
      );
      setRating(0);
      setName("");
      setMail("");
      setComment("");
    }
  };

  // Плавнисть появляння форми:
  useEffect(
    () => {
      if (openFormComment) {
        document.querySelector(".product__form").classList.remove("hidden");
      } else {
        document.querySelector(".product__form").classList.add("hidden");
      }
    },
    [openFormComment],
    rating
  );

  // Інтерактивний рейтинг:
  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <form className="product__form hidden" action="#" method="post">
      <div className="product__form-wrapper">
        <h2 className="product__form-subtitle">
          {t("productPage.commentsForm.title")}
        </h2>

        <div className="product__stars-wrapper">
          <span className="product__rating-title">
            {t("productPage.commentsForm.rating")}
          </span>

          <StarRatings
            rating={rating}
            starRatedColor="gold"
            starHoverColor="yellow"
            starDimension="24px"
            starSpacing="2px"
            changeRating={changeRating} // Функция изменения рейтинга
            numberOfStars={5}
            name="rating"
          />
        </div>

        <div className="product__inner">
          <label className="sr-only" for="comName">
            {t("productPage.commentsForm.name")}
          </label>
          <input
            onChange={(event) => inputName(event)}
            value={name}
            className="fild product__fild"
            type="text"
            name="comName"
            id="comName"
            placeholder={t("productPage.commentsForm.name")}
            required
          />
        </div>

        <div className="product__inner">
          <label className="sr-only" for="comEmail">
            {t("productPage.commentsForm.mail")}
          </label>
          <input
            value={mail}
            onChange={(event) => inputMmail(event)}
            className="fild product__fild"
            type="email"
            name="comEmail"
            id="comEmail"
            placeholder={t("productPage.commentsForm.mail")}
            required
          />
        </div>

        <div className="product__inner">
          <label className="sr-only" for="comment1">
            {t("productPage.commentsForm.comment")}
          </label>
          <textarea
            value={comment}
            onChange={(event) => inputComment(event)}
            className="fild product__fild product__textarea"
            name="comment"
            id="comment1"
            cols="30"
            rows="5"
            placeholder={t("productPage.commentsForm.comment")}
          ></textarea>
        </div>

        <div className="product__btns">
          <button
            className="btn product__btn-form product__form-btn--add"
            type="submit"
            onClick={() => addComment()}
          >
            {t("productPage.commentsForm.buttonAdd")}
          </button>
          <button
            onClick={() => setOpenFormComment(false)}
            className="btn product__btn-form product__form-btn--cansel"
            type="button"
          >
            {t("productPage.commentsForm.buttonOut")}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
