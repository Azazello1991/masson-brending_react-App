import React from "react";
import StarRatings from "react-star-ratings";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newComment } from "../../redux/slices/commentsProductSlice";
import { format } from "date-fns";

const CommentForm = ({ setOpenFormComment, openFormComment }) => {
  const dispatch = useDispatch();

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
    <form class="product__form hidden" action="#" method="post">
      <div class="product__form-wrapper">
        <h2 class="product__form-subtitle">Напишіть що Ви думаєте про нас</h2>

        <div class="product__stars-wrapper">
          <span class="product__rating-title">Оцініть продукцію*</span>

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

        <div class="product__inner">
          <label class="sr-only" for="comName">
            Введіть ім'я
          </label>
          <input
            onChange={(event) => inputName(event)}
            value={name}
            class="fild product__fild"
            type="text"
            name="comName"
            id="comName"
            placeholder="Введіть ім'я*"
            required
          />
        </div>

        <div class="product__inner">
          <label class="sr-only" for="comEmail">
            Введіть email
          </label>
          <input
            value={mail}
            onChange={(event) => inputMmail(event)}
            class="fild product__fild"
            type="email"
            name="comEmail"
            id="comEmail"
            placeholder="Введіть Email*"
            required
          />
        </div>

        <div class="product__inner">
          <label class="sr-only" for="comment1">
            Введіть коментар
          </label>
          <textarea
            value={comment}
            onChange={(event) => inputComment(event)}
            class="fild product__fild product__textarea"
            name="comment"
            id="comment1"
            cols="30"
            rows="5"
            placeholder="Введіть коментар"
          ></textarea>
        </div>

        <div class="product__btns">
          <button
            class="btn product__btn-form product__form-btn--add"
            type="submit"
            onClick={() => addComment()}
          >
            Додати
          </button>
          <button
            onClick={() => setOpenFormComment(false)}
            class="btn product__btn-form product__form-btn--cansel"
            type="button"
          >
            Вийти
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
