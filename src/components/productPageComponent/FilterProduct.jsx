import React from "react";
import { useEffect } from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setProductQuantityMore,
  setProductQuantityLess,
  setChangeProductQuantity,
  setProductSize,
  setProductColor,
} from "../../redux/slices/filterSlice";

const FilterProduct = ({ color, sizes }) => {
  const productQuantity = useSelector(
    (state) => state.filterSlice.params.productQuantity
  );
  const dispatch = useDispatch();
  const [openPopupSize, setOpenPopupSize] = React.useState(false);
  const [openPopupColor, setOpenPopupColor] = React.useState(false);
  const [indexSize, setIndexSize] = React.useState(0);
  const [indexColor, setIndexColor] = React.useState(0);

  const getMoreQuantity = () => {
    dispatch(setProductQuantityMore());
  };

  const getLessQuantity = () => {
    if (productQuantity > 1) {
      dispatch(setProductQuantityLess());
    }
  };

  const changeQuantity = (event) => {
    const value = event.target.value;
    dispatch(setChangeProductQuantity(value));
  };

  const getColor = (i, colorItem) => {
    console.log(colorItem)
    dispatch(setProductColor(colorItem));
    setIndexColor(i);
    setOpenPopupColor(!openPopupColor);
  };

  const getSize = (i, size) => {
    dispatch(setProductSize(size));
    setIndexSize(i);
    setOpenPopupSize(!openPopupSize);
  };

  /* дописать функции для обновления color, size */

  return (
    <ul class="filter product__filter">
      <li class="filter__item product__item">
        <span class="filter__subtitle product__filter-subtitle">
          Кількість:
        </span>

        <div class="filter__inner-order">
          <div class="filter__order-item">
            <button
              class="filter__btn btn--lass"
              onClick={() => getLessQuantity()}
              type="button"
              id="btn-less"
            >
              -
            </button>
            <span class="sr-only">Кнопка "мінус одна одиниця товару"</span>
          </div>

          <div class="filter__order-item">
            <input
              onChange={(event) => changeQuantity(event)}
              class="filter__input"
              type="text"
              id="quantity"
              value={productQuantity}
            />
            <label class="sr-only" for="quantity">
              Кількість продукту
            </label>
          </div>

          <div class="filter__order-item">
            <button
              class="filter__btn btn--more"
              onClick={() => getMoreQuantity()}
              type="button"
              id="btn-more"
            >
              +
            </button>
            <span class="sr-only">Кнопка "плюс одна одиниця товару"</span>
          </div>
        </div>
      </li>

      <li class="filter__item product__item">
        <span class="filter__subtitle product__filter-subtitle">Розмір:</span>
        <div class="filter__inner">
          <h3 class="sr-only">Сортувати по разміру</h3>
          <button
            class="filter__result js-result"
            onClick={() => {
              setOpenPopupSize(!openPopupSize);
            }}
            id="size"
            type="button"
          >
            {sizes[indexSize].toUpperCase()}
          </button>
          {openPopupSize && (
            <ul class="filter__parameters">
              {sizes.map((size, i) => (
                <li
                  onClick={() => getSize(i, size)}
                  key={i}
                  class="filter__parameter js-parameter"
                >
                  {size.toUpperCase()}
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>

      <li class="filter__item product__item">
        <span class="filter__subtitle product__filter-subtitle">Колір:</span>
        <div class="filter__inner">
          <h3 class="sr-only">Сортувати по кольору</h3>
          <button
            class="filter__result js-result"
            onClick={() => {
              setOpenPopupColor(!openPopupColor);
            }}
            id="color"
            type="button"
          >
            {color[indexColor]}
          </button>
          {openPopupColor && (
            <ul class="filter__parameters">
              {color.map((colorItem, i) => (
                <li
                  class="filter__parameter js-parameter"
                  onClick={() => getColor(i, colorItem)}
                  key={i}
                >
                  {colorItem}
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    </ul>
  );
};

export default FilterProduct;
