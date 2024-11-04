import React from "react";
import { useTranslation } from "react-i18next";
import FilterProduct from "./FilterProduct";
import BreadCrumbs from "./BreadCrumbs";
import StarRatings from "react-star-ratings";
import CommentForm from "./CommentForm";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addPurchases } from "../../redux/slices/CartSlice";
import {
  setProductColor,
  setProductSize,
} from "../../redux/slices/filterSlice";
import {
  addFavoriteItem,
} from "../../redux/slices/favoriteSlice";

const Product = ({ product }) => {
  const { t } = useTranslation();
  const lg = useTranslation()[1].language;
  const [openFormComment, setOpenFormComment] = React.useState(false);
  const dispatch = useDispatch();
  const { productQuantity, productSize, productColor } = useSelector(
    (state) => state.filterSlice.params
  );

  if (!productSize) {
    dispatch(setProductSize(product.sizes[0].toUpperCase()));
  }

  if (!productColor) {
    dispatch(setProductColor(product.color[0]));
  }

  // Додаємо продукт в обране
  const handlerClickFavorite = (e) => {
    dispatch(addFavoriteItem(product));
  };

  const curentTitle = lg === "en" ? product.title.en : product.title.ua;
  const curentDescription = lg === "en" ? product.description.en : product.description.ua;

  // Формуємо об'єкт для покупки
  const buy = () => {
    const buyObj = {
      name: product.title,
      price: product.price,
      quantity: productQuantity,
      size: productSize.toUpperCase(),
      color: productColor,
      id: product.id,
      url: product.url,
      settings: {
        colors: product.color,
        sizes: product.sizes,
      },
    };
    dispatch(addPurchases(buyObj));
    /* dispatch(addHistoryItem(buyObj)); */
  };

  return (
    <section className="product">
      <div className="container product__container">
        <h1 className="sr-only">Опис продукту</h1>
        <BreadCrumbs title={curentTitle} />

        <div className="product__inner">
          <Swiper
            modules={[Navigation, Pagination, Zoom]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            zoom={true} // Включение увеличения
            className="swiper-product"
          >
            {product.url.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                  <img
                    className="product__photo"
                    src={imgSrc}
                    alt={`Product image ${index + 1}`}
                    width="535"
                    height="530"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="product__description">
            <StarRatings
              rating={product.rating}
              starRatedColor="gold" // колір заповнених зірок
              starHoverColor="yellow" // колір при наведенні
              starDimension="40px" // розмір
              starSpacing="2px" // дистанція між зірками
              numberOfStars={5} // кількість
              name="rating" // ім'я рейтинга (необов'язково)
            />
            <h2 className="product__title">{curentTitle}</h2>
            <span className="product__subtitle">
              {t("productPage.category")}
            </span>

            <div
              className="stars static-stars product__stars"
              data-stars="4"
            ></div>

            <div className="product__price-box">
              <span className="product__price">{product.price} </span>
              <span className="product__currency">{t('productPage.currency') }</span>
            </div>

            <FilterProduct {...product} />

            <div className="product__buy-wrapper">
              <button onClick={() => buy()} className="btn product__btn-buy">
                {t("productPage.buttonBy")}
              </button>

              <div>
                <span className="sr-only">Кнопка "додати в обране"</span>
                <input
                  className="product__checkbox sr-only"
                  onClick={(event) => handlerClickFavorite(event)}
                  type="checkbox"
                  id="like"
                  name="like"
                  title="Додати в обране"
                />
                <label className="product__label-like" for="like"></label>
              </div>
            </div>
          </div>
        </div>

        <h2 className="product__title-description">{t('productPage.subtitle') }</h2>

        <div className="product__about">
          <p>{curentDescription}</p>
        </div>

        <div className="product__add-comments">
          <h2 className="product__title-comments">{t('productPage.commentsTitle') }</h2>
          <button
            className="btn product__btn-add"
            onClick={() => setOpenFormComment(!openFormComment)}
            type="button"
          >
            {t('productPage.commentsButton') }
          </button>
        </div>
        {openFormComment && (
          <CommentForm
            openFormComment={openFormComment}
            setOpenFormComment={setOpenFormComment}
          />
        )}
      </div>
    </section>
  );
};

export default Product;
