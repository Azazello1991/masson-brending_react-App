import React from "react";
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



const Product = ({ product }) => {
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
  };

  return (
    <section class="product">
      <div class="container product__container">
        <h1 class="sr-only">Опис продукту</h1>
        <BreadCrumbs title={product.title} />

        <div class="product__inner">
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

          <div class="product__description">
            <StarRatings
              rating={product.rating}
              starRatedColor="gold" // колір заповнених зірок
              starHoverColor="yellow" // колір при наведенні
              starDimension="40px" // розмір
              starSpacing="2px" // дистанція між зірками
              numberOfStars={5} // кількість
              name="rating" // ім'я рейтинга (необов'язково)
            />
            <h2 class="product__title">{product.title}</h2>
            <span class="product__subtitle">Футболки</span>

            <div class="stars static-stars product__stars" data-stars="4"></div>

            <div class="product__price-box">
              <span class="product__price">{product.price} </span>
              <span class="product__currency">грн.</span>
            </div>

            <FilterProduct {...product} />

            <div class="product__buy-wrapper">
              <button onClick={() => buy()} class="btn product__btn-buy">
                КУПИТИ
              </button>

              <div>
                <span class="sr-only">Кнопка "додати в обране"</span>
                <input
                  class="product__checkbox sr-only"
                  type="checkbox"
                  id="like"
                  name="like"
                  title="Додати в обране"
                />
                <label class="product__label-like" for="like"></label>
              </div>
            </div>
          </div>
        </div>

        <h2 class="product__title-description">Опис</h2>

        <div class="product__about">
          <p>{product.description}</p>
        </div>

        <div class="product__add-comments">
          <h2 class="product__title-comments">Відгуки</h2>
          <button
            class="btn product__btn-add"
            onClick={() => setOpenFormComment(!openFormComment)}
            type="button"
          >
            Залишити відгук
          </button>
        </div>
        {openFormComment && <CommentForm openFormComment={openFormComment} setOpenFormComment={setOpenFormComment} />}
      </div>
    </section>
  );
};

export default Product;
