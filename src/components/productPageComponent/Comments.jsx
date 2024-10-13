import React from "react";
import StarRatings from "react-star-ratings";
// redux
import { useSelector, useDispatch } from "react-redux";

const Comments = () => {
  const { comments } = useSelector((state) => state.commentsProductSlice);
  const dispatch = useDispatch();

  return (
    <section class="comments product__comments">
      <div class="container">
        <ul class="comments__list">
          {comments.map((comment, i) => (
            
            <li key={comment.id ? comment.id + i : i} class="comments__item">
              <div class="comments__photo">
                <img
                  class="comments__img"
                  width="80"
                  height="80"
                  src={comment.photo ? comment.photo : "https://img.freepik.com/free-photo/skeleton-in-studio_23-2150891676.jpg"}
                  alt="photo"
                />
              <time className="comments__time">{ comment.time }</time>
              </div>
              <div class="comments__inner">
                <figcaption class="comments__autor">{comment.name}</figcaption>

                <StarRatings
                  rating={comment.rating}
                  starRatedColor="gold" // колір заповнених зірок
                  starHoverColor="yellow" // колір при наведенні
                  starDimension="16px" // розмір
                  starSpacing="2px" // дистанція між зірками
                  numberOfStars={5} // кількість
                  name="rating" // ім'я рейтинга (необов'язково)
                />

                <blockquote class="comments__comment">
                  {comment.text}
                </blockquote>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Comments;
