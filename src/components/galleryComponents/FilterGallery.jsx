import React from "react";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import {
  sortByQuantity,
  setTranslations,
  sortByData
} from "../../redux/slices/filterSlice";

const FilterGallery = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const sortByDataState = useSelector((state) => state.filterSlice.params.sortBy);
  const sortQuantity = useSelector(
    (state) => state.filterSlice.params.quantity.name
  );

  const sortBy = [
    {
      name: t("gallery.sortBy.all"),
      "": "",
    },
    {
      name: t("gallery.sortBy.lessMore"),
      price: "-price",
    },
    {
      name: t("gallery.sortBy.moreLess"),
      price: "price",
    },
    {
      name: t("gallery.sortBy.popular"),
      rating: "rating",
    },
    {
      name: t("gallery.sortBy.Mens"),
      gender: "male1",
    },
    {
      name: t("gallery.sortBy.Womens"),
      gender: "female",
    },
  ];

  const quantity = [
    { name: `${t("gallery.quantity.prefix")} 16`, quantity: 16 },
    { name: `${t("gallery.quantity.prefix")} 8`, quantity: 8 },
    { name: `${t("gallery.quantity.prefix")} 4`, quantity: 4 },
  ];

  // закриття фільтру кліком поза ним
  const sortRef = useRef(null);
  const quantityRef = useRef(null);
  const [openPopupSort, setOpenPopupSort] = React.useState(false);
  const [openPopupQuantity, setOpenPopupQuantity] = React.useState(false);

  // Перекладаємо на актуальну мову початковій стейт:
  useEffect(() => {
    dispatch(
      setTranslations({
        name: t("gallery.sortBy.all"),
        quantity: t("gallery.quantity.prefix") + " 16",
      })
    );
  }, [t, dispatch]);

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
        handleClose(); // Закриваєм модальне вікно, якщо клік був поза ним
      }
    };

    // Додаєм обробник клика
    document.addEventListener("click", handleClickOutside);

    // Видаляєм обробник при размонтуванні компонента
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
    <ul className="filter catalog-page__filter">
      <li className="filter__item">
        <span className="filter__subtitle">{t("gallery.filterSortBy")}</span>
        <div className="filter__inner">
          <h3 className="sr-only">Сортування по категоріям</h3>

          <button
            ref={sortRef}
            onClick={() => setOpenPopupSort(!openPopupSort)}
            className={openPopupSort ? "filter__result active" : "filter__result"}
            type="button"
          >
            {sortByDataState.name}
          </button>
          <ul
            className={
              openPopupSort ? "filter__parameters" : "filter__parameters hidden"
            }
          >
            {sortBy.map((obj, i) => {
              return (
                <li
                  onClick={() => openSortListSelected(obj)}
                  className="filter__parameter js-parameter"
                  key={i}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      </li>

      <li className="filter__item">
        <span className="filter__subtitle">{t("gallery.filterQuantity")}</span>
        <div className="filter__inner">
          <h3 className="sr-only">Сортувати за кількістю на сторінці</h3>

          <button
            ref={quantityRef}
            onClick={() => setOpenPopupQuantity(!openPopupQuantity)}
            className={
              openPopupQuantity ? "filter__result active" : "filter__result"
            }
            type="button"
          >
            {sortQuantity}
          </button>
          <ul
            className={
              openPopupQuantity
                ? "filter__parameters"
                : "filter__parameters hidden"
            }
          >
            {quantity.map((obj, i) => {
              return (
                <li
                  onClick={() => openQuantityListSelected(obj)}
                  className="filter__parameter js-parameter"
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
