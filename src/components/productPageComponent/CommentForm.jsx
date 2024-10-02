import React from 'react'

const CommentForm = () => {
  return (
    <form class="product__form hidden" action="#" method="post">
          <div class="product__form-wrapper">
            <h2 class="product__form-subtitle">
              Напишіть що Ви думаєте про нас
            </h2>

            <div class="product__stars-wrapper">
              <span class="product__rating-title">Оцініть продукцію*</span>
              <div class="stars product__form-stars"></div>
            </div>

            <div class="product__inner">
              <label class="sr-only" for="comName">
                Введіть ім'я
              </label>
              <input
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
              >
                Додати
              </button>
              <button
                class="btn product__btn-form product__form-btn--cansel"
                type="button"
              >
                Вийти
              </button>
            </div>
          </div>
        </form>
  )
}

export default CommentForm