import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
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
    <section class="section registration">
      <div class="registration__container">
        <div class="registration__inner" ref={modalRef}>
          <div class="registration__content">
            <h1 class="registration__title">Реєстрація</h1>
            <Link class="registration__log-in" to={'/logIn'}>
              У мене є обліковий запис
            </Link>

            <form class="registration-form" action="#" method="post">
              <div class="registration-form__item">
                <label class="sr-only" for="regMail">
                  Введіть Ваш email
                </label>
                <input
                  class="fild registration-form__fild"
                  id="regMail"
                  type="email"
                  placeholder="Email"
                  required
                ></input>
              </div>

              <div class="registration-form__item registration-form__first-pass">
                <label class="sr-only" for="regPassFirst">
                  Введіть Ваш пароль
                </label>
                <input
                  class="fild registration-form__fild registration-form__first-password"
                  type="password"
                  id="regPassFirst"
                  name="password"
                  placeholder="Введіть пароль"
                  required
                ></input>
                <button class="show-password" type="button"></button>
              </div>

              <div class="registration-form__item registration-form__second-pass">
                <label class="sr-only" for="regPassSecond">
                  Повторіть пароль
                </label>
                <input
                  class="fild registration-form__fild registration-form__second-password"
                  type="password"
                  id="regPassSecond"
                  name="password"
                  placeholder="Повторіть пароль"
                  required
                ></input>
                <button class="show-password" type="button"></button>
              </div>

              <div class="registration-form__item">
                <label class="sr-only" for="regTel">
                  Введіть Ваш email
                </label>
                <input
                  class="fild registration-form__fild"
                  id="regTel"
                  type="tel"
                  placeholder="Телефон"
                  required
                ></input>
              </div>

              <div class="registration-form__box-check">
                <input
                  class="registration-form__check sr-only"
                  type="checkbox"
                  id="igree"
                ></input>
                <label class="registration-form__check-lable" for="igree">
                  Я приймаю умови користування
                </label>
              </div>

              <button class="registration-form__btn" type="submit">
                Зареєструватися
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
