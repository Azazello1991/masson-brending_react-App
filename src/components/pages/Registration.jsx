import React from "react";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../redux/slices/logInSlice";

const Registration = () => {
  const { t } = useTranslation();
  const lg = useTranslation()[1].language; // мова перекладу en|ua
  const dispatch = useDispatch();
  const { dataUsers } = useSelector((state) => state.logInSlice);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({
    password: "",
    passwordChecked: "",
    mail: "",
    phone: "",
    iAgree: false,
  });
  const [type, setType] = React.useState("password");

  // Патерни для фільтрації
  const patterns = {
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    phonePattern: /^0\d{9}$/,
    passwordPattern: /^(?!.*\s).{8,}$/,
  };

  // Стейт для виведення помилок вводу даних
  const [errors, setErrors] = React.useState({
    password: "",
    passwordChecked: "",
    mail: "",
    phone: "",
  });

  // Показати/сховати пароль
  const showPassword = () => {
    type === "password" ? setType("text") : setType("password");
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
            ? "Не вірно вказаний mail. Він повинен мати *@mail.**"
            : "The specified email is incorrect. It must have *@mai",
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

  /* passwordChecked */
  const checkedPassword = (e) => {
    const { value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      passwordChecked: value.trim(),
    }));

    if (value.trim() !== userData.password) {
      e.target.style.border = "1px solid red";

      setErrors((prevState) => ({
        ...prevState,
        passwordChecked:
          lg === "uk" ? "Паролі повинні співпадати!" : "Passwords must match!",
      }));
    } else {
      e.target.style.border = "1px solid #FFC700";
      setErrors((prevState) => ({
        ...prevState,
        passwordChecked: "",
      }));
    }
  };

  /* phone*/
  const onChangePhone = (e) => {
    const { value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      phone: value.trim(),
    }));

    if (!patterns.phonePattern.test(value)) {
      e.target.style.border = "1px solid red";
      setErrors((prevState) => ({
        ...prevState,
        phone:
          lg === "uk"
            ? "Не вірно вказаний номер"
            : "The specified number is incorrect",
      }));
    } else {
      e.target.style.border = "1px solid #FFC700";
      setErrors((prevState) => ({
        ...prevState,
        phone: "",
      }));
    }
  };

  useEffect(() => {
    if (
      !errors.password &&
      !errors.passwordChecked &&
      !errors.mail &&
      !errors.phone &&
      userData.iAgree
    ) {
      modalRef.current.classList.remove("error");
      modalRef.current.classList.add("success");
    }
  }, [errors, userData.iAgree]);

  const changeIGree = () => {
    setUserData((prevState) => ({
      ...prevState,
      iAgree: !userData.iAgree,
    }));
  };

  const addDataUser = (event) => {
    event.preventDefault();
    if (
      userData.password.length > 7 &&
      !errors.password &&
      !errors.passwordChecked &&
      !errors.mail &&
      !errors.phone &&
      userData.iAgree
    ) {
      dispatch(
        addData({
          password: userData.password,
          mail: userData.mail,
          phone: userData.phone,
        })
      );
      navigate("/logIn");
      modalRef.current.classList.remove("error");
      modalRef.current.classList.add("success");
    } else {
      modalRef.current.classList.remove("success");
      modalRef.current.classList.add("error");
    }
  };

  const handleClose = () => {
    navigate("/");
  };

  useEffect(() => {
    // Обробник кліків на всьому документі
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose(); // Закрываем модальное окно, если клик был вне него
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="section registration">
      <div className="registration__container">
        <div className="registration__inner" ref={modalRef}>
          <div className="registration__content">
            <h1 className="registration__title">{t("registrPage.title")}</h1>
            <Link className="registration__log-in" to={"/logIn"}>
              {t("registrPage.linkTransfer")}
            </Link>

            <form className="registration-form" action="#" method="post">
              <p className="form__error">{errors.mail}</p>
              <div className="registration-form__item">
                <label className="sr-only" for="regMail">
                  Введіть Ваш email
                </label>
                <input
                  className="fild registration-form__fild"
                  onChange={onChangeMail}
                  value={userData.mail}
                  id="regMail"
                  type="email"
                  placeholder="Email"
                  required
                ></input>
              </div>

              <p className="form__error">{errors.password}</p>
              <div className="registration-form__item registration-form__first-pass">
                <label className="sr-only" for="regPassFirst">
                  Введіть Ваш пароль
                </label>
                <input
                  className="fild registration-form__fild registration-form__first-password"
                  value={userData.password}
                  type={type}
                  onChange={onChangePassword}
                  id="regPassFirst"
                  name="password"
                  placeholder={t("loginPage.password")}
                  required
                ></input>
                <button
                  className={
                    type === "text" ? "show-password active" : "show-password"
                  }
                  onClick={showPassword}
                  type="button"
                ></button>
              </div>

              <p className="form__error">{errors.passwordChecked}</p>
              <div className="registration-form__item registration-form__second-pass">
                <label className="sr-only" for="regPassSecond">
                  Повторіть пароль
                </label>
                <input
                  className="fild registration-form__fild registration-form__second-password"
                  value={userData.passwordChecked}
                  onChange={checkedPassword}
                  type={type}
                  id="regPassSecond"
                  name="password"
                  placeholder={t("registrPage.RepeatPassword")}
                  required
                ></input>
                <button
                  className={
                    type === "text" ? "show-password active" : "show-password"
                  }
                  onClick={showPassword}
                  type="button"
                ></button>
              </div>

              <p className="form__error">{errors.phone}</p>
              <div className="registration-form__item">
                <label className="sr-only" for="regTel">
                  Введіть Ваш телефон
                </label>
                <input
                  onChange={onChangePhone}
                  value={userData.phone}
                  className="fild registration-form__fild"
                  id="regTel"
                  type="tel"
                  placeholder={t("registrPage.tel")}
                  required
                ></input>
              </div>

              <div className="registration-form__box-check">
                <input
                  className="registration-form__check sr-only"
                  type="checkbox"
                  id="agree"
                  name="adree"
                  value={userData.iAgree}
                  onChange={changeIGree}
                ></input>
                <label className="registration-form__check-lable" for="agree">
                  {t("registrPage.agree")}
                </label>
              </div>

              <button
                className="registration-form__btn"
                type="submit"
                onClick={(event) => addDataUser(event)}
              >
                {t("registrPage.button")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
