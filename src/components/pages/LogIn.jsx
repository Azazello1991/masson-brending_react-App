import React from "react";

const LogIn = () => {
  return (
    <section class="sectioon log-in hidden">
      <div class="log-in__container">
        <div class="log-in__inner">
          <div class="log-in__content">
            <h1 class="log-in__title">Вхід</h1>
            <button class="log-in__regist" type="button">
              У мене ще немає облікового запису
            </button>

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
