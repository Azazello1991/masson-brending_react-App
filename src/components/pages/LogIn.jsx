import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addPassword, addMail } from "../../redux/slices/logInSlice";

const LogIn = () => {
  const { t } = useTranslation();
  const lg = useTranslation()[1].language; // мова перекладу en|ua
  const [userData, setUserData] = React.useState({
    password: "",
    mail: "",
    remember: false,
  });
  const [type, setType] = React.useState("password");
  const { dataUsers } = useSelector((state) => state.logInSlice);
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const navigate = useNavigate();

  // Патерни для фільтрації
  const patterns = {
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    passwordPattern: /^(?!.*\s).{8,}$/,
  };

  // Стейт для виведення помилок вводу даних
  const [errors, setErrors] = React.useState({
    mail: "",
    password: "",
  });

  const handleClose = () => {
    navigate("/");
  };

  // Показати/сховати пароль
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
  };

  /* toggle check box */
  const changeRememberMy = () => {
    setUserData((prevState) => ({
      ...prevState,
      remember: !userData.remember,
    }));
  };

  /* mail */
  const onChangeMail = (e) => {
    const { value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      mail: value.trim(),
    }));

    if (!patterns.emailPattern.test(value.trim())) {
      e.target.style.border = "1px solid red";

      setErrors((prevState) => ({
        ...prevState,
        mail:
          lg === "uk"
            ? "Не вірно вказаний mail"
            : "The specified email is incorrect",
      }));
    } else {
      e.target.style.border = "1px solid #FFC700";
      setErrors((prevState) => ({
        ...prevState,
        mail: "",
      }));
    }
  };

  /* password */
  const onChangePassword = (e) => {
    const { value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      password: value.trim(),
    }));

    if (!patterns.passwordPattern.test(value.trim())) {
      e.target.style.border = "1px solid red";

      setErrors((prevState) => ({
        ...prevState,
        password:
          lg === "uk"
            ? "Має бути не менше 8 символів та складатись з літер та чисел"
            : "Must be at least 8 characters and consist of letters and numbers",
      }));
    } else {
      e.target.style.border = "1px solid #FFC700";
      setErrors((prevState) => ({
        ...prevState,
        password: "",
      }));
    }
  };

  const loginToProfile = (event) => {
    event.preventDefault();

    dataUsers.forEach((data) => {
      if (data.password === userData.password && data.mail === userData.mail) {
        modalRef.current.classNameList.remove("error");
        modalRef.current.classNameList.add("success");
        navigate("/");
      } else {
        modalRef.current.classNameList.remove("success");
        modalRef.current.classNameList.add("error");
      }
    });
  };

  useEffect(() => {
    // Обробник кліків на всьому документі
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(); // Закрываем модальное окно, если клик был вне него
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Прибираємо обробник при размонтуванні компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="section log-in">
      <div className="log-in__container">
        <div className="log-in__inner" ref={modalRef}>
          <div className="log-in__content">
            <h1 className="log-in__title">{t("loginPage.title")}</h1>
            <Link className="log-in__regist" to={"/registration"}>
              {t("loginPage.linkTransfer")}
            </Link>

            <form className="form-log log-in__form" action="#" method="post">
              <p className="form__error">{errors.mail}</p>
              <div className="form-log__item">
                <label className="sr-only" for="logMail">
                  Введіть Ваш email
                </label>
                <input
                  onChange={onChangeMail}
                  className="fild form-log__fild"
                  value={userData.mail}
                  id="logMail"
                  type="email"
                  placeholder={t("loginPage.mail")}
                  required
                ></input>
              </div>

              <p className="form__error">{errors.password}</p>
              <div className="form-log__item form-log__item--password">
                <label className="sr-only" for="logPassword">
                  Введіть Ваш пароль
                </label>
                <input
                  className="fild form-log__fild form-log__fild--password"
                  value={userData.password}
                  onChange={onChangePassword}
                  type={type}
                  id="logPassword"
                  name="password"
                  placeholder={t("loginPage.password")}
                  required
                ></input>

                <button
                  className={
                    type === "text" ? "show-password active" : "show-password"
                  }
                  type="button"
                  onClick={showPassword}
                ></button>
              </div>

              <div className="form-log__box-check">
                <input
                  className="form-log__check sr-only"
                  type="checkbox"
                  id="remember"
                  name="remember"
                  value={userData.remember}
                  onChange={changeRememberMy}
                ></input>
                <label className="form-log__check-lable" for="remember">
                  {t("loginPage.remember")}
                </label>
              </div>

              <button
                className="form-log__btn"
                type="submit"
                onClick={(event) => loginToProfile(event)}
              >
                {t("loginPage.exit")}
              </button>
              <a className="form-log__forgat-link" href="#">
                {t("loginPage.forgot")}
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
