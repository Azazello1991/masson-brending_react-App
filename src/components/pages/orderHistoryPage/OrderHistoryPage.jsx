import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  changeFavoriteStorage,
  changeHistoryStorage,
} from "../../../redux/slices/favoriteSlice";

import Header from "../../Header";
import Footer from "../../Footer";
import styles from "./orderHistoryPage.module.scss";
import HistoryItem from "./components/HistoryItem";
import BreadCrumbsHistory from "./components/BreadCrumbsHistory";

const OrderHistoryPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { historyItems, favoriteItems } = useSelector(
    (state) => state.favoriteSlice
  );

  // Перевірка localStorage при першому рендері
  useEffect(() => {
    const dataFavoriteStorage = localStorage.getItem("favoriteItems");
    const dataHistoryStorage = localStorage.getItem("historyItems");

    if (dataFavoriteStorage) {
      const parsedItemsF = JSON.parse(dataFavoriteStorage);
      dispatch(changeFavoriteStorage(parsedItemsF));
    }

    if (dataHistoryStorage) {
      const parsedItemsH = JSON.parse(dataHistoryStorage);
      dispatch(changeHistoryStorage(parsedItemsH));
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <main className="main">
        <div className="container">
          <section className={styles.profile}>

            <BreadCrumbsHistory />
            
            <h1 className={styles.profile__title}>{ t('historyPage.title')}</h1>
            <Link className={styles.profile__link_exit} to={"/logIn"}>
              { t('historyPage.out')}
            </Link>
            <div className={styles.profile__flex}>
              <div className={styles.history}>
                <h2 className={styles.history__title}>{ t('historyPage.history')}</h2>

                <ul className={styles.history__list}>
                  {historyItems && historyItems.length > 0 ? (
                    historyItems.map((product) =>
                      product.order.map((item) => (
                        <li className={styles.favorites__item}>
                          <HistoryItem product={product} item={item} />
                        </li>
                      ))
                    )
                  ) : (
                    <div className="cart__message-text">
                      { t('historyPage.emptyHistory')}
                      <Link to={"/gallery"} className="cart__message-transfer">
                        { t('historyPage.transferLink')}
                      </Link>
                    </div>
                  )}
                </ul>
              </div>

              <div className={styles.favorites}>
                <h2 className={styles.favorites__title}>{ t('historyPage.favorite')}</h2>

                <ul className={styles.favorites__list}>
                  {favoriteItems && favoriteItems.length > 0 ? (
                    favoriteItems.map((product) => (
                      <li className={styles.favorites__item}>
                        <HistoryItem product={product} />
                      </li>
                    ))
                  ) : (
                    <div className="cart__message-text">
                      { t('historyPage.emptyFavorite')}
                      <Link to={"/gallery"} className="cart__message-transfer">
                        { t('historyPage.transferLink')}
                      </Link>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;
