import React from "react";

const MobileMenu = () => {
  return (
    <section className="mobile-menu-index menu-hidden">
      <div className="mobile-menu-index__wrapper">
        <div className="mobile-menu-index__head">
          <a className="logo" href="index.html">
            <img
              className="logo__icon"
              src="./images/logo-masons-shop.svg"
              width="184"
              height="63"
              alt="логотип"
            ></img>
          </a>

          <button
            className="burger burger--active burger-index--close"
            type="button"
          >
            <span className="burger__line"></span>
            <span className="sr-only">Відкрити меню</span>
          </button>
        </div>

        <div className="mobile-menu-index__nav">
          <div className="header__cabinet">
            <a
              className="btn-icon header__cabinet-btn header__cart-btn"
              href="./cart-page.html"
              aria-label="Кошик"
            >
              <span
                className="header__quantity"
                aria-label="Килькисть товару в кошику"
              >
                3
              </span>
            </a>

            <a
              href="#"
              className="btn-icon header__cabinet-btn header__lickes-btn"
              type="button"
            ></a>
            <button
              className="header__log-in header__mobile-log-in"
              type="button"
              aria-label="Реєстрація"
            >
              Log
            </button>
          </div>
          <div className="header__languages mobile-menu-index__languages">
            <button
              className="header__language-btn active"
              data-lg="en"
              type="button"
            >
              EN
            </button>
            <button className="header__language-btn" data-lg="ua" type="button">
              UA
            </button>
          </div>
        </div>

        <nav className="nav">
          <ul className="nav__list mobile-nav">
            <li className="nav__category-item mobile__category">
              <a className="nav__category" href="#about">
                <span className="nav__category-name">Послуги</span>
              </a>
            </li>

            <li className="nav__category-item mobile__category">
              <a className="nav__category" href="#example">
                <span className="nav__category-name">Приклад</span>
              </a>
            </li>

            <li className="nav__category-item mobile__category">
              <a className="nav__category" href="#top">
                <span className="nav__category-name">Топ</span>
              </a>
            </li>

            <li className="nav__category-item mobile__category">
              <a className="nav__category" href="#catalog">
                <span className="nav__category-name">Каталог</span>
              </a>
            </li>

            <li className="nav__category-item mobile__category">
              <a className="nav__category" href="#comments">
                <span className="nav__category-name">Відгуки</span>
              </a>
            </li>

            <li className="nav__category-item mobile__category">
              <a className="nav__category" href="#video">
                <span className="nav__category-name">Про нас</span>
              </a>
            </li>

            <li className="nav__category-item mobile__category">
              <a className="nav__category" href="#contacts">
                <span className="nav__category-name">Контакти</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="section-form__data">
          <form className="form mobile-form" action="#" method="post">
            <ul className="form__list">
              <li className="form__item">
                <input
                  className="fild form__fild"
                  id="name-ph"
                  type="text"
                  placeholder="Ваше ім'я"
                  required
                ></input>
                <label className="sr-only" for="name-ph">
                  Введіть Ваше ім'я
                </label>
              </li>

              <li className="form__item">
                <input
                  className="fild form__fild"
                  id="email-ph"
                  type="email"
                  placeholder="Email"
                  required
                ></input>
                <label className="sr-only" for="email-ph">
                  Введіть Ваш email
                </label>
              </li>

              <li className="form__item">
                <input
                  className="fild form__fild"
                  id="tel-ph"
                  type="tel"
                  placeholder="Телефон"
                  required
                ></input>
                <label className="sr-only" for="tel-ph">
                  Введіть Ваш телефон
                </label>
              </li>

              <li className="form__item">
                <textarea
                  className="fild form__fild form__textarea"
                  name="comment"
                  id="comment-ph"
                  placeholder="Примітка"
                ></textarea>
                <label className="sr-only" for="comment-ph">
                  Введіть Вашу примітку
                </label>
              </li>
            </ul>
            <button className="btn form__btn-ph" type="submit">
              Надіслати
            </button>
          </form>

          <ul className="networks section-form__networks">
            <li className="networks__btn">
              <a
                href="#"
                className="networks__network networks__network--telegram"
              ></a>
              <span className="sr-only">Зв'язатися через телеграм</span>
            </li>

            <li className="networks__btn">
              <a
                href="#"
                className="networks__network networks__network--viber"
              ></a>
              <span className="sr-only">Зв'язатися через вайбер</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileMenu;
