import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CartForm from "../cartComponents/CartForm";
// redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  changeColorProduct,
  changeSizeProduct,
  moreProduct,
  lessProduct,
  deletProduct,
} from "../../redux/slices/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  // Объекти для управління відкриття попапів
  const [openPopupSize, setOpenPopupSize] = React.useState({});
  const [openPopupColor, setOpenPopupColor] = React.useState({});
  const { purchases } = useSelector((state) => state.cartSlice);

  // Функціі для відкриття і закриття попапа для конкретного продукта
  // prevState - це попередній стан перед зміною (не важливо що це було), ми наказали передати всі стани, знайти за id, що треба нам і поміняти на протилежний булевий (можна так робити toggle)
  const toggleSizePopup = (id) => {
    setOpenPopupSize((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // якщо такого id немає в об'єкті, то передається id з його протилежним булевим значенням самого себе. Якщо є то міняеться на протилежне (true/ false)
    }));
  };

  const toggleColorPopup = (id) => {
    setOpenPopupColor((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // якщо такого id немає в об'єкті, то передається id з його протилежним булевим значенням самого себе. Якщо є то міняеться на протилежне (true/ false)
    }));
  };

  // Функції для зміни розміру та кольору продукту
  const changeSize = (size, product) => {
    dispatch(
      changeSizeProduct({
        size: size.toUpperCase(),
        id: product.id,
      })
    );
    toggleSizePopup(product.id);
  };

  const changeColor = (color, product) => {
    dispatch(
      changeColorProduct({
        color: color,
        id: product.id,
      })
    );
    toggleColorPopup(product.id);
  };

  // Функція для видалення продукту:
  const deleteProductById = (id) => {
    dispatch(deletProduct(id))
  }

  return (
    <>
      <Header />
      <main className="main">
        <section className="cart">
          <div className="container">
            <h1 className="cart__title">Кошик з товаром:</h1>

            <ul className="cart__products-list">
              {purchases && purchases.length > 0 ? (
                purchases.map((product) => (
                  <li
                    className="cart__product"
                    id={product.id}
                    key={product.id}
                  >
                    <div className="cart__flex">
                      <div className="cart__photo">
                        <img
                          className="cart__img"
                          src={product.url}
                          width="160"
                          height="165"
                          alt="фото продукта"
                        />
                      </div>

                      <div className="cart__text">
                        <a className="cart__subtitle">{product.name}</a>
                        <span className="cart__group">{"Футболки"}</span>
                      </div>
                    </div>

                    <div className="cart__filter-wrapper">
                      <ul className="filter product__filter">
                        <li className="filter__item product__item">
                          <div className="filter__inner-order">
                            <div className="filter__order-item">
                              <button
                                onClick={()=>dispatch(lessProduct(product.id))}
                                className="filter__btn btn--less"
                                type="button"
                                id="btn-less"
                              >
                                -
                              </button>
                              <span className="sr-only">
                                Кнопка "мінус одна одиниця товару"
                              </span>
                            </div>

                            <div className="filter__order-item">
                              <input
                                className="filter__input"
                                type="text"
                                id="quantity"
                                value={product.quantity}
                                readOnly
                              />
                              <label className="sr-only" htmlFor="quantity">
                                Кількість продукту
                              </label>
                            </div>

                            <div className="filter__order-item">
                              <button
                                onClick={()=>dispatch(moreProduct(product.id))}
                                className="filter__btn btn--more"
                                type="button"
                                id="btn-more"
                              >
                                +
                              </button>
                              <span className="sr-only">
                                Кнопка "плюс одна одиниця товару"
                              </span>
                            </div>
                          </div>
                        </li>

                        <li className="filter__item product__item">
                          <div className="filter__inner">
                            <h3 className="sr-only">Сортувати за розміром</h3>

                            <button
                              className="filter__result js-result"
                              type="button"
                              onClick={() => toggleSizePopup(product.id)}
                            >
                              {product.size.toUpperCase()}
                            </button>

                            {openPopupSize[product.id] && (
                              <ul className="filter__parameters">
                                {product.settings.sizes.map((size, i) => (
                                  <li
                                    onClick={() => changeSize(size, product)}
                                    key={`${product.id}-${i}`}
                                    className="filter__parameter js-parameter"
                                  >
                                    {size.toUpperCase()}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>

                        <li className="filter__item product__item">
                          <div className="filter__inner">
                            <h3 className="sr-only">Сортувати за кольором</h3>

                            <button
                              className="filter__result js-result"
                              type="button"
                              onClick={() => toggleColorPopup(product.id)}
                            >
                              {product.color}
                            </button>
                            {openPopupColor[product.id] && (
                              <ul className="filter__parameters">
                                {product.settings.colors.map((color, i) => (
                                  <li
                                    onClick={() => changeColor(color, product)}
                                    key={`${product.id}-${i}`}
                                    className="filter__parameter js-parameter"
                                  >
                                    {color}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="cart__price-wrapper">
                      <span className="cart__price">
                        {product.price * product.quantity}
                        <span className="cart__currency">{" грн"}</span>
                      </span>
                      <button onClick={()=>deleteProductById(product.id)} className="cart__delete" type="button"></button>
                    </div>
                  </li>
                ))
              ) : (
                <div className="cart__message-text">
                  У Вас немає товару в кошику.
                  <Link to={"/gallery"} className="cart__message-transfer">
                    Перейти до покупок...
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </section>

        <CartForm />
      </main>
      <Footer />
    </>
  );
};

export default Cart;
