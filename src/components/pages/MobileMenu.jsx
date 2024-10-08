import React from "react";

const MobileMenu = () => {
  return (
    <section class="mobile-menu-index menu-hidden">
      <div class="mobile-menu-index__wrapper">
        <div class="mobile-menu-index__head">
          <a class="logo" href="index.html">
            <img
              class="logo__icon"
              src="./images/logo-masons-shop.svg"
              width="184"
              height="63"
              alt="логотип"
            ></img>
          </a>

          <button
            class="burger burger--active burger-index--close"
            type="button"
          >
            <span class="burger__line"></span>
            <span class="sr-only">Відкрити меню</span>
          </button>
        </div>

        <div class="mobile-menu-index__nav">
          <div class="header__cabinet">
            <a
              class="btn-icon header__cabinet-btn header__cart-btn"
              href="./cart-page.html"
              aria-label="Кошик"
            >
              <span
                class="header__quantity"
                aria-label="Килькисть товару в кошику"
              >
                3
              </span>
            </a>

            <a
              href="#"
              class="btn-icon header__cabinet-btn header__lickes-btn"
              type="button"
            ></a>
            <button
              class="header__log-in header__mobile-log-in"
              type="button"
              aria-label="Реєстрація"
            >
              Log
            </button>
          </div>
          <div class="header__languages mobile-menu-index__languages">
            <button
              class="header__language-btn active"
              data-lg="en"
              type="button"
            >
              EN
            </button>
            <button class="header__language-btn" data-lg="ua" type="button">
              UA
            </button>
          </div>
        </div>

        <nav class="nav">
          <ul class="nav__list mobile-nav">
            <li class="nav__category-item mobile__category">
              <a class="nav__category" href="#about">
                <span class="nav__category-name">Послуги</span>
              </a>
            </li>

            <li class="nav__category-item mobile__category">
              <a class="nav__category" href="#example">
                <span class="nav__category-name">Приклад</span>
              </a>
            </li>

            <li class="nav__category-item mobile__category">
              <a class="nav__category" href="#top">
                <span class="nav__category-name">Топ</span>
              </a>
            </li>

            <li class="nav__category-item mobile__category">
              <a class="nav__category" href="#catalog">
                <span class="nav__category-name">Каталог</span>
              </a>
            </li>

            <li class="nav__category-item mobile__category">
              <a class="nav__category" href="#comments">
                <span class="nav__category-name">Відгуки</span>
              </a>
            </li>

            <li class="nav__category-item mobile__category">
              <a class="nav__category" href="#video">
                <span class="nav__category-name">Про нас</span>
              </a>
            </li>

            <li class="nav__category-item mobile__category">
              <a class="nav__category" href="#contacts">
                <span class="nav__category-name">Контакти</span>
              </a>
            </li>
          </ul>
        </nav>

        <div class="section-form__data">
          <form class="form mobile-form" action="#" method="post">
            <ul class="form__list">
              <li class="form__item">
                <input
                  class="fild form__fild"
                  id="name-ph"
                  type="text"
                  placeholder="Ваше ім'я"
                  required
                ></input>
                <label class="sr-only" for="name-ph">
                  Введіть Ваше ім'я
                </label>
              </li>

              <li class="form__item">
                <input
                  class="fild form__fild"
                  id="email-ph"
                  type="email"
                  placeholder="Email"
                  required
                ></input>
                <label class="sr-only" for="email-ph">
                  Введіть Ваш email
                </label>
              </li>

              <li class="form__item">
                <input
                  class="fild form__fild"
                  id="tel-ph"
                  type="tel"
                  placeholder="Телефон"
                  required
                ></input>
                <label class="sr-only" for="tel-ph">
                  Введіть Ваш телефон
                </label>
              </li>

              <li class="form__item">
                <textarea
                  class="fild form__fild form__textarea"
                  name="comment"
                  id="comment-ph"
                  placeholder="Примітка"
                ></textarea>
                <label class="sr-only" for="comment-ph">
                  Введіть Вашу примітку
                </label>
              </li>
            </ul>
            <button class="btn form__btn-ph" type="submit">
              Надіслати
            </button>
          </form>

          <ul class="networks section-form__networks">
            <li class="networks__btn">
              <a
                href="#"
                class="networks__network networks__network--telegram"
              ></a>
              <span class="sr-only">Зв'язатися через телеграм</span>
            </li>

            <li class="networks__btn">
              <a
                href="#"
                class="networks__network networks__network--viber"
              ></a>
              <span class="sr-only">Зв'язатися через вайбер</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobileMenu;
