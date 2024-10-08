import React from "react";

const Comments = () => {
  return (
    <section class="comments product__comments">
      <div class="container">
        <ul class="comments__list">
          <li class="comments__item">
            <div class="comments__photo">
              <img
                class="comments__img"
                width="80"
                height="80"
                src="./images/comment-photo.webp"
                alt="photo"
              />
            </div>
            <div class="comments__inner">
              <figcaption class="comments__autor">Дмитро Вакуленко</figcaption>
              <div
                class="stars static-stars comments__stars-2"
                data-stars="5"
              ></div>

              <blockquote class="comments__comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                aenean enim, bibendum sed massa tellus in. In ultrices et
                egestas faucibus vestibulum in. Eget nunc leo, in pellentesque.
                Sed habitant a lectus velit neque. Sed in accumsan in dictum ac.
              </blockquote>
            </div>
          </li>

          <li class="comments__item">
            <div class="comments__photo">
              <img
                class="comments__img"
                width="80"
                height="80"
                src="./images/comment-photo.webp"
                alt="photo"
              />
            </div>
            <div class="comments__inner">
              <figcaption class="comments__autor">Дмитро Вакуленко</figcaption>
              <div
                class="stars static-stars comments__stars-2"
                data-stars="5"
              ></div>

              <blockquote class="comments__comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                aenean enim, bibendum sed massa tellus in. In ultrices et
                egestas faucibus vestibulum in. Eget nunc leo, in pellentesque.
                Sed habitant a lectus velit neque. Sed in accumsan in dictum ac.
              </blockquote>
            </div>
          </li>

          <li class="comments__item">
            <div class="comments__photo">
              <img
                class="comments__img"
                width="80"
                height="80"
                src="./images/comment-photo.webp"
                alt="photo"
              />
            </div>
            <div class="comments__inner">
              <figcaption class="comments__autor">Дмитро Вакуленко</figcaption>
              <div
                class="stars static-stars comments__stars-2"
                data-stars="5"
              ></div>

              <blockquote class="comments__comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                aenean enim, bibendum sed massa tellus in. In ultrices et
                egestas faucibus vestibulum in. Eget nunc leo, in pellentesque.
                Sed habitant a lectus velit neque. Sed in accumsan in dictum ac.
              </blockquote>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Comments;
