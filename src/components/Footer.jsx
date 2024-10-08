import React from "react";
import Logo from "../images/logo-masons-shop.svg";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container footer__container">
        <div class="footer__wrapper">
          <div class="footer__networks">
            <a class="logo footer__logo" href="#">
              <img
                class="logo__icon"
                src={Logo}
                width="184"
                height="63"
                alt="логотип"
              />
            </a>

            <ul class="networks">
              <li class="networks__btn">
                <span class="sr-only">Перейти на сторінку телеграма</span>
                <a
                  class="networks__network networks__network--telegram"
                  href="#"
                  target="_blank"
                  title="Telegram"
                ></a>
              </li>

              <li class="networks__btn">
                <span class="sr-only">Перейти на сторінку інстаграма</span>
                <a
                  class="networks__network networks__network--instagram"
                  href="#"
                  target="_blank"
                  title="Viber"
                ></a>
              </li>
            </ul>
          </div>

          <div class="footer__data">
            <div class="footer__data-block">
              <h2 class="footer__block-titel">Інформація</h2>

              <ul class="footer__data-list">
                <li class="footer__data-item">
                  <a href="#" class="link footer__data-link" target="_blank">
                    Каталог
                  </a>
                </li>
                <li class="footer__data-item">
                  <a href="#" class="link footer__data-link" target="_blank">
                    Про нас
                  </a>
                </li>
                <li class="footer__data-item">
                  <a href="#" class="link footer__data-link" target="_blank">
                    Доставка та оплата
                  </a>
                </li>
                <li class="footer__data-item">
                  <a href="#" class="link footer__data-link" target="_blank">
                    Повернення
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer__data-block">
              <h2 class="footer__block-titel">Контакти</h2>

              <ul class="footer__data-list">
                <li class="footer__data-item">
                  <a href="#" class="link footer__data-link" target="_blank">
                    Каталог
                  </a>
                </li>
                <li class="footer__data-item">
                  <a href="#" class="link footer__data-link" target="_blank">
                    Про нас
                  </a>
                </li>
                <li class="footer__data-item">
                  <a href="#" class="link footer__data-link" target="_blank">
                    Доставка та оплата
                  </a>
                </li>
                <li class="footer__data-item">
                  <a href="#" class="link footer__data-link" target="_blank">
                    Повернення
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="email footer__email">
            <h2 class="email__title">Дізнавайся про новинки першим</h2>

            <p class="email__text">Отримуй від нас смс із сюрпризами</p>
            <form class="email__registr" action="#" method="post">
              <div>
                <input
                  class="input email__fild"
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <label class="sr-only" for="email">
                  Введіть свій Email
                </label>
              </div>
              <div class="email__submit">
                <button class="btn email__btn" type="submit">
                  Надіслати
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
