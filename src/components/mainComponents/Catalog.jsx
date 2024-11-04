import React from "react";
import { useTranslation } from "react-i18next";
// redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Catalog = () => {
  const { t } = useTranslation();
  const cardsCatalog = useSelector((state) => state.catalogSlice.catalogItems);

  return (
    <section className="section catalog" id="catalog">
      <div className="container">
        <h2 className="section-title">
          {t("catalog.titleOne")}
          <span className="section-title-slice">{t("catalog.titleTwo")}</span>
        </h2>
        <p className="section-text">{t("catalog.subtitle")}</p>

        <ul className="catalog__list">
          {cardsCatalog.map((card, id) => {
            return (
              <li className="catalog__item">
                <article className="card" key={id}>
                  <Link className="card__wrapper" to={"/gallery"}>
                    <div className="card__img">
                      <img
                        className="card__pictur"
                        src={card.url}
                        width="250"
                        height="250"
                        alt="продукт"
                      />
                    </div>
                    <h2 className="card__title">{t(`catalog.catalogCards.title_${id}`)}</h2>
                    <span className="card__deskription">{t(`catalog.catalogCards.description_${id}`)}</span>
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
