import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// components
import FilterGallery from "../galleryComponents/FilterGallery";
import Card from "../galleryComponents/Card";
import Header from "../Header";
import Footer from "../Footer";
import SkiletonProdukt from "../galleryComponents/SkiletonProdukt";
import PaginationGallery from "../galleryComponents/PaginationGallery";
import NotFoundBlock from "../pages/NotFoundBlock/NotFoundBlock";
// redux
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsRes } from "../../redux/slices/asyncProductsSlice";

const Gallery = () => {
  const dispatch = useDispatch();
  const { sortBy, quantity, currentPage, categoryId, searchValue } =
    useSelector((state) => state.filterSlice.params);

  // ===================== функція асинхронного запиту на бек енд:
  // - імпортуємо параметри запиту для відслідковування в useEffect
  // - формуємо патерни, передаем в константи
  // - передаємо через параметри в функцію fetchProductsRes

  const fetchProducts = async () => {
    const gender = sortBy.gender ? sortBy.gender : '';
    const limit = quantity.quantity;
    const page = currentPage;
    const order = sortBy.price === '-price' ? 'asc' : 'desc';
    const sort = sortBy.price ? 'price' : sortBy.rating? 'rating': ''
    console.log(sort, order)

    dispatch(
      fetchProductsRes({
        gender,
        limit,
        order,
        page,
        sort,
        /* category,
        search,
        currentPage, */
      })
    );
  };
  
    // ================== useEffect который делает axios запрос при изменении даных:
  React.useEffect(() => {
    fetchProducts();

    window.scrollTo(0, 0); // будет скролить сразу вверх
  }, [sortBy, quantity, currentPage, categoryId, searchValue ]);

  // Витягуем з слайсу стан асинхронної функції:
  const { products, isLoading } = useSelector(
    (state) => state.asyncProductsSlice
  );

  //  Мапінг скілетонів:
  const skeletons = [...new Array(8)].map((_, i) => (
    <SkiletonProdukt key={i} />
  ));

  // Мапінг блоків карток:
  const arrProducts =
    products &&
    products.map((card, i) => (
      <Link to={`product/${card.id}`} key={card.id}>
        <Card {...card} />
      </Link>
    ));

  // Запуск асинхронної функції при першому рендері
  useEffect(() => {
    dispatch(fetchProductsRes());
    window.scrollTo(0, 0);
  }, [dispatch]);

  // Якщо помилка, то рендерим помилку
  if (isLoading === "error") {
    return (
      <div>
        <NotFoundBlock />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main class="main">
        <section class="section catalog-page">
          <div class="container">
            <div class="catalog-page__head">
              <div class="catalog-page__title">
                <h2 class="catalog-page__title">
                  <span class="section-title-slice">Фут</span>болки
                </h2>
                <p class="catalog-page__text">Будь-які розміри та форми</p>
              </div>

              <FilterGallery />
            </div>

            <ul class="catalog-page__catalog catalog-list">
              {isLoading === "loading" ? skeletons : arrProducts}
            </ul>

            <PaginationGallery />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
