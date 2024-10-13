import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Catalog = () => {
  const cardsCatalog = useSelector((state) => state.catalogSlice.catalogItems);

  return (
    <section class="section catalog" id="catalog">
      <div class="container">
        <h2 class="section-title">
          Ката<span class="section-title-slice">лог</span>
        </h2>
        <p class="section-text">Вибирай все, що до душі</p>

        <ul class="catalog__list">
          {cardsCatalog.map((card, id) => {
            return (
              <li className="catalog__item">
                <article class="card" key={id}>
                  <Link class="card__wrapper" to={'/gallery'}>
                    <div class="card__img">
                      <img
                        class="card__pictur"
                        src={card.url}
                        width="250"
                        height="250"
                        alt="продукт"
                      />
                    </div>
                    <h2 class="card__title">{card.title}</h2>
                    <span class="card__deskription">{card.description}</span>
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
