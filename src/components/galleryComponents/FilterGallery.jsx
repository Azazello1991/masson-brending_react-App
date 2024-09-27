import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortByQuantity, sortByData } from "../../redux/slices/filterSlice";

const sortBy = [
  {
    name: "Усі товари",
    "": "",
  },
  {
    name: "Дешевше - Дорожче",
    price: "-price",
  },
  {
    name: "Дорожче - Дешевше",
    price: "price",
  },
  {
    name: "По популярності",
    rating: "rating",
  },
  {
    name: "Чоловічі",
    gender: "male1",
  },
  {
    name: "Жіночі",
    gender: "female",
  },
];
const quantity = [
  { name: "По 16", quantity: 16 },
  { name: "По 8", quantity: 8 },
  { name: "По 4", quantity: 4 },
];

const FilterGallery = () => {
  const dispatch = useDispatch();
  const sortName = useSelector((state) => state.filterSlice.params.sortBy.name);
  const sortQuantity = useSelector((state) => state.filterSlice.params.quantity.name);
  
  const sortRef = React.useRef(); // для логіки закриття попап
  const [openPopupSort, setOpenPopupSort] = React.useState(false);
  const [openPopupQuantity, setOpenPopupQuantity] = React.useState(false);

  // При натиску на єлемент фільтрації:
  const openSortListSelected = (obj) => {
    dispatch(sortByData({obj}))
    setOpenPopupSort(!openPopupSort);
  };

  // При натиску на єлемент кількості:
  const openQuantityListSelected = (obj) => {
    dispatch(sortByQuantity({obj}))
    setOpenPopupQuantity(!openPopupQuantity);
  };


  return (
    <ul class="filter catalog-page__filter">
      <li class="filter__item">
        <span class="filter__subtitle">Сортування:</span>
        <div class="filter__inner">
          <h3 class="sr-only">Сортування по категоріям</h3>

          <button
            onClick={() => setOpenPopupSort(!openPopupSort)}
            class="filter__result js-result"
            type="button"
          >
            {sortName}
          </button>
          <ul class="filter__parameters">
            {openPopupSort &&
              sortBy.map((obj, i) => {
                return (
                  <li
                    onClick={() => openSortListSelected(obj)}
                    class="filter__parameter js-parameter"
                    key={i}
                  >
                    {obj.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </li>

      <li class="filter__item">
        <span class="filter__subtitle">На сторінці:</span>
        <div class="filter__inner">
          <h3 class="sr-only">Сортувати за кількістю на сторінці</h3>

          <button
            onClick={() => setOpenPopupQuantity(!openPopupQuantity)}
            class="filter__result js-result"
            type="button"
          >
            {sortQuantity}
          </button>
          <ul class="filter__parameters">
            {openPopupQuantity &&
              quantity.map((obj, i) => {
                return (
                  <li
                    onClick={() => openQuantityListSelected(obj)}
                    class="filter__parameter js-parameter"
                    key={i}
                  >
                    {obj.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default FilterGallery;
