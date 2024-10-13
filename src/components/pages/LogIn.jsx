import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Перенаправляем на главную страницу
  };



  useEffect(() => {
    // Обработчик кликов на всем документе
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(); // Закрываем модальное окно, если клик был вне него
      }
    };

    // Добавляем обработчик события клика
    document.addEventListener("mousedown", handleClickOutside);

    // Убираем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section class="sectioon log-in">
      <div class="log-in__container">
        <div class="log-in__inner" ref={modalRef}>
          <div class="log-in__content">
            <h1 class="log-in__title">Вхід</h1>
            <Link class="log-in__regist" to={"/registration"}>
              У мене ще немає облікового запису
            </Link>

            <form class="form-log log-in__form" action="#" method="post">
              <div class="form-log__item">
                <label class="sr-only" for="logMail">
                  Введіть Ваш email
                </label>
                <input
                  class="fild form-log__fild"
                  id="logMail"
                  type="email"
                  placeholder="Email"
                  required
                ></input>
              </div>

              <div class="form-log__item form-log__item--password">
                <label class="sr-only" for="logPassword">
                  Введіть Ваш пароль
                </label>
                <input
                  class="fild form-log__fild form-log__fild--password"
                  type="password"
                  id="logPassword"
                  name="password"
                  placeholder="Введіть пароль"
                  required
                ></input>
                <button class="show-password" type="button"></button>
              </div>

              <div class="form-log__box-check">
                <input
                  class="form-log__check sr-only"
                  type="checkbox"
                  id="remember"
                  name="remember"
                ></input>
                <label class="form-log__check-lable" for="remember">
                  Запам'ятати мене
                </label>{" "}
              </div>

              <button class="form-log__btn" type="submit">
                Вхід
              </button>
              <a class="form-log__forgat-link" href="#">
                Забули пароль?
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
