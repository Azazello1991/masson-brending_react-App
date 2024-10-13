import React from "react";
import { useRef, useEffect } from "react";
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
  const sortQuantity = useSelector(
    (state) => state.filterSlice.params.quantity.name
  );
  // закриття фільтру кліком поза ним
  const sortRef = useRef(null);
  const quantityRef = useRef(null);
  const [openPopupSort, setOpenPopupSort] = React.useState(false);
  const [openPopupQuantity, setOpenPopupQuantity] = React.useState(false);

  // функція що закрива фільтри
  const handleClose = () => {
    setOpenPopupSort(false);
    setOpenPopupQuantity(false);
  };

  // функція що перевіря евент
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !sortRef.current.contains(event.target) &&
        !quantityRef.current.contains(event.target)
      ) {
        handleClose(); // Закрываем модальное окно, если клик был вне него
      }
    };

    // Добавляем обработчик события клика
    document.addEventListener("click", handleClickOutside);

    // Убираем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sortRef]);

  // При натиску на єлемент фільтрації:
  const openSortListSelected = (obj) => {
    dispatch(sortByData({ obj }));
    setOpenPopupSort(!openPopupSort);
  };

  // При натиску на єлемент кількості:
  const openQuantityListSelected = (obj) => {
    dispatch(sortByQuantity({ obj }));
    setOpenPopupQuantity(!openPopupQuantity);
  };

  return (
    <ul class="filter catalog-page__filter">
      <li class="filter__item">
        <span class="filter__subtitle">Сортування:</span>
        <div class="filter__inner">
          <h3 class="sr-only">Сортування по категоріям</h3>

          <button
            ref={sortRef}
            onClick={() => setOpenPopupSort(!openPopupSort)}
            class={openPopupSort ? "filter__result active" : "filter__result"}
            type="button"
          >
            {sortName}
          </button>
          <ul
            class={
              openPopupSort ? "filter__parameters" : "filter__parameters hidden"
            }
          >
            {sortBy.map((obj, i) => {
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
            ref={quantityRef}
            onClick={() => setOpenPopupQuantity(!openPopupQuantity)}
            class={
              openPopupQuantity ? "filter__result active" : "filter__result"
            }
            type="button"
          >
            {sortQuantity}
          </button>
          <ul
            class={
              openPopupQuantity
                ? "filter__parameters"
                : "filter__parameters hidden"
            }
          >
            {quantity.map((obj, i) => {
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
