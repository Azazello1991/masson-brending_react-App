import FilterProduct from "./FilterProduct";
import BreadCrumbs from "./BreadCrumbs";
import StarRatings from "react-star-ratings";
import CommentForm from "./CommentForm";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addPurchases } from "../../redux/slices/CartSlice";
import { useEffect } from "react";
import {
  setProductColor,
  setProductSize,
} from "../../redux/slices/filterSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { productQuantity, productSize, productColor } = useSelector(
    (state) => state.filterSlice.params
  );
  const { purchases } = useSelector((state) => state.cartSlice);

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

  useEffect(() => {
    console.log(purchases);
  }, [purchases]);

  return (
    <section class="product">
      <div class="container product__container">
        <h1 class="sr-only">Опис продукту</h1>
        <BreadCrumbs title={product.title} />

        <div class="product__inner">
          <div class="swiper-product swiper">
            <div class="product__slider-items swiper-wrapper">
              <a class="product__img">
                <img
                  class="product__photo"
                  src={product.url}
                  alt="фото продукта"
                  width="535"
                  height="530"
                />
              </a>
            </div>
          </div>

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
          <button class="btn product__btn-add" type="button">
            Залишити відгук
          </button>
        </div>

        <CommentForm />
      </div>
    </section>
  );
};

export default Product;
