import React from "react";
import logo from "../images/logo-masons-shop.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__wrapper">
          <div className="footer__networks">
            <a className="logo footer__logo" href="#">
              <img
                className="logo__icon"
                src={logo}
                width="184"
                height="63"
                alt="логотип"
              />
            </a>

            <ul className="networks">
              <li className="networks__btn">
                <span className="sr-only">Перейти на сторінку телеграма</span>
                <a
                  className="networks__network networks__network--telegram"
                  href="#"
                  target="_blank"
                  title="Telegram"
                ></a>
              </li>

              <li className="networks__btn">
                <span className="sr-only">Перейти на сторінку інстаграма</span>
                <a
                  className="networks__network networks__network--instagram"
                  href="#"
                  target="_blank"
                  title="Viber"
                ></a>
              </li>
            </ul>
          </div>

          <div className="footer__data">
            <div className="footer__data-block">
              <h2 className="footer__block-titel">{t("footer.titleLeft")}</h2>

              <ul className="footer__data-list">
                <li className="footer__data-item">
                  <a href="#" className="link footer__data-link" target="_blank">
                    {t("footer.link_1")}
                  </a>
                </li>
                <li className="footer__data-item">
                  <a href="#" className="link footer__data-link" target="_blank">
                    {t("footer.link_2")}
                  </a>
                </li>
                <li className="footer__data-item">
                  <a href="#" className="link footer__data-link" target="_blank">
                    {t("footer.link_3")}
                  </a>
                </li>
                <li className="footer__data-item">
                  <a href="#" className="link footer__data-link" target="_blank">
                    {t("footer.link_4")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__data-block">
              <h2 className="footer__block-titel">{t("footer.titleRight")}</h2>

              <ul className="footer__data-list">
                <li className="footer__data-item">
                  <a href="#" className="link footer__data-link" target="_blank">
                    {t("footer.link_1")}
                  </a>
                </li>
                <li className="footer__data-item">
                  <a href="#" className="link footer__data-link" target="_blank">
                    {t("footer.link_2")}
                  </a>
                </li>
                <li className="footer__data-item">
                  <a href="#" className="link footer__data-link" target="_blank">
                    {t("footer.link_3")}
                  </a>
                </li>
                <li className="footer__data-item">
                  <a href="#" className="link footer__data-link" target="_blank">
                    {t("footer.link_4")}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="email footer__email">
            <h2 className="email__title">{t("footer.formTitle")}</h2>

            <p className="email__text">{t("footer.formDescription")}</p>
            <form className="email__registr" action="#" method="post">
              <div>
                <input
                  className="input email__fild"
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <label className="sr-only" for="email">
                  Введіть свій Email
                </label>
              </div>
              <div className="email__submit">
                <button className="btn email__btn" type="submit">
                  {t("footer.formButton")}
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
