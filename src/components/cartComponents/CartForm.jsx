import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeMail,
  changePhone,
  changeDelivery,
  getTotalPrice,
  getTotalData,
} from "../../redux/slices/formOrderSlice";
import { addHistoryItem } from "../../redux/slices/favoriteSlice";
import Notification from "../pages/notificationPage/Notification";

const CartForm = ({ purchasesData }) => {
  const { t } = useTranslation();
  const lg = useTranslation()[1].language; // мова перекладу en|ua
  // Форматування нинішньої дати
  const now = new Date();
  const formattedDate = format(now, "dd.MM.yyyy");

  const inputRefName = React.useRef();
  const dispatch = useDispatch();
  const priceDelivery = 150;
  const [sumOrder, setSumOrder] = useState(0);
  const [deliveryMethod, setDeliveryMethod] = useState({
    method: "pickup",
    methodPrice: 0,
  });

  // Патерни для фільтрації
  const patterns = {
    namePattern: /^[а-яА-ЯҐґЄєІіЇї'-]{2,}$/,
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    phonePattern: /^0\d{9}$/,
    passwordPattern: /^(?!.*\s).{8,}$/,
  };

  // Стейт для виведення помилок вводу даних
  const [errors, setErrors] = React.useState({
    name: "",
    mail: "",
    phone: "",
  });

  // Запит на відділення Нової Пошти:
  const [city, setCity] = useState("");
  const [warehouses, setWarehouses] = useState([]);
  const [warehousesPupap, setWarehousesPupap] = useState(true);
  const [curentWarehouses, setCurentWarehouses] = useState(
    t("cart.orderForm.warehouse")
  );

  const { totalPrice, orderFormData } = useSelector(
    (state) => state.formOrderSlice
  );

  // Вивести повідомлення
  const [notificationVisible, setNotificationVisible] = useState(false);

  const showNotification = () => {
    setNotificationVisible(true);
  };

  // Обробник даних форми замовлення
  const getTotalOrderData = (event) => {
    event.preventDefault();
    if (!errors.mail && !errors.name && !errors.phone) {
      if (
        +totalPrice > 0 &&
        orderFormData.name &&
        orderFormData.mail &&
        orderFormData.phone &&
        orderFormData.delivery
      ) {
        const orderData = {
          totalPrice: totalPrice,
          delivery:
            orderFormData.delivery.method === "pickup"
              ? { method: "pickup" }
              : orderFormData.delivery,
          name: orderFormData.name,
          phone: orderFormData.phone,
          mail: orderFormData.mail,
          order: purchasesData,
          date: formattedDate,
        };

        dispatch(getTotalData(orderData));
        dispatch(addHistoryItem(orderData));
        showNotification();
      }
    }
  };

  // Обробник зміни міста
  const handleCityChange = (event) => {
    setCity(event.target.value);
    fetchWarehouses(event.target.value);
    if (event.target.value.length > 2) {
      event.target.style.border = "1px solid #FFC700";
    }
  };

  // Обробник зміни відділення
  const changeWarehouse = (e) => {
    setCurentWarehouses(e.target.textContent);
    setWarehousesPupap(!warehousesPupap);
    dispatch(
      changeDelivery({
        city: city,
        curentWarehouses: e.target.textContent,
        deliveryMethod,
      })
    );
  };

  // Відкрити/закрити список відділень
  const togglePopup = (e) => {
    setWarehousesPupap(!warehousesPupap);
    e.target.style.border = "1px solid #FFC700";
  };

  /* name */
  const onChangeName = (e) => {
    const { value } = e.target; // значення поля
    dispatch(changeName(value.trim())); // надсилаемо в redux

    if (!patterns.namePattern.test(value.trim())) {
      e.target.style.border = "1px solid red";

      setErrors((prevState) => ({
        ...prevState,
        name:
          lg === "uk"
            ? "Ім'я повинне бути більше 2-х символів та написане кирилицею"
            : "The name must be more than 2 characters long and written in Cyrillic",
      }));
    } else {
      e.target.style.border = "1px solid #FFC700";
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }
  };

  /* mail */
  const onChangeMail = (e) => {
    const { value } = e.target;
    dispatch(changeMail(value.trim()));

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

  /* phone*/
  const onChangePhone = (e) => {
    const { value } = e.target;
    dispatch(changePhone(value));

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

  /* warehouses */
  const fetchWarehouses = async (cityName) => {
    const response = await axios.post("https://api.novaposhta.ua/v2.0/json/", {
      apiKey: "eadb646756f4b791e345d1481b595800",
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: cityName,
        Language: "UA",
      },
    });

    setWarehouses(response.data.data);
  };

  // Вибір доставки самовивіз/Нова Пошта
  const handleDeliveryChange = (e) => {
    setDeliveryMethod({
      method: e.target.value,
      methodPrice: e.target.value === "pickup" ? 0 : priceDelivery,
    });
  };

  // Обща сума товару та доставки
  useEffect(() => {
    if (purchasesData && purchasesData.length > 0) {
      let total = 0;
      purchasesData.forEach((product) => {
        total += product.price * product.quantity;
      });

      dispatch(getTotalPrice(total + deliveryMethod.methodPrice));
      setSumOrder(total); // Устанавливаем общую сумму
    } else {
      setSumOrder(0);
    }
  }, [purchasesData, deliveryMethod]);

  return (
    <section className="order">
      <div className="container">
        {notificationVisible && (
          <Notification
            message={t("cart.orderForm.message")}
            duration={2500} // Укажите продолжительность в миллисекундах
            onClose={() => setNotificationVisible(false)}
          />
        )}

        <h2 className="order__title cart__title">
          {t("cart.orderForm.title")}
        </h2>

        <div className="order__content">
          <form
            className="form order__form"
            action="#"
            method="post"
            name="orderName"
          >
            <ul className="order__filds">
              <li className="order__fild-wrapper">
                <label className="sr-only" for="order-name">
                  Введіть Ваше ім'я
                </label>
                <input
                  value={orderFormData.name}
                  ref={inputRefName}
                  onChange={onChangeName}
                  className="fild order__fild"
                  type="text"
                  name="name"
                  id="order-name"
                  placeholder={t("cart.orderForm.name")}
                  required
                />
                {errors.name && <p className="form__error">{errors.name}</p>}
              </li>

              <li className="order__fild-wrapper">
                <label className="sr-only" for="order-email">
                  Введіть Ваш email
                </label>
                <input
                  value={orderFormData.mail}
                  onChange={onChangeMail}
                  className="fild order__fild"
                  type="email"
                  name="email"
                  id="order-email"
                  placeholder={t("cart.orderForm.mail")}
                  required
                />
                {errors.mail && <p className="form__error">{errors.mail}</p>}
              </li>

              <li className="order__fild-wrapper">
                <label className="sr-only" for="order-tel">
                  Введіть Ваш телефон
                </label>
                <input
                  value={orderFormData.phone}
                  onChange={onChangePhone}
                  className="fild order__fild"
                  type="tel"
                  name="tel"
                  id="order-tel"
                  placeholder={t("cart.orderForm.tel")}
                  required
                />
                <p className="form__error">{errors.phone}</p>
              </li>

              {deliveryMethod.method !== "pickup" ? (
                <>
                  <li className="order__fild-wrapper">
                    <label className="sr-only" for="city">
                      Введіть місто доставки
                    </label>
                    <input
                      className="fild order__fild"
                      value={city}
                      onChange={handleCityChange}
                      type="text"
                      name="city"
                      id="city"
                      placeholder={t("cart.orderForm.city")}
                      required
                    />
                    <div className="form-msg"></div>
                  </li>

                  <li className="order__fild-wrapper">
                    <div
                      onClick={(event) => togglePopup(event)}
                      className="fild order__fild order__fild--delivery"
                    >
                      {curentWarehouses}
                    </div>

                    {warehouses.length > 1 && warehousesPupap && (
                      <ul className="order__departaments">
                        {warehouses.map((warehouse) => (
                          <li
                            onClick={(event) => changeWarehouse(event)}
                            className="order__departament"
                            key={warehouse.Ref}
                          >
                            {warehouse.Description}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>

            <div className="order__culc-box">
              <ul className="order__check-boxes">
                <li className="order__redio-box">
                  <h3 className="order__subtitle">
                    {t("cart.orderForm.deliveryTitle")}
                  </h3>

                  <input
                    className="order__redio sr-only"
                    type="radio"
                    id="pickup"
                    name="delivery"
                    value="pickup"
                    checked={deliveryMethod.method === "pickup"} // true/false
                    onChange={handleDeliveryChange}
                  />
                  <label className="order__redio-lable" for="pickup">
                    {t("cart.orderForm.method_1")}
                  </label>

                  <input
                    className="order__redio sr-only"
                    type="radio"
                    id="novaPoshta"
                    name="delivery"
                    value="novaPoshta"
                    checked={deliveryMethod.method === "novaPoshta"} // true/false
                    onChange={handleDeliveryChange}
                  />
                  <label className="order__redio-lable" for="novaPoshta">
                    {t("cart.orderForm.method_2")}
                  </label>
                </li>

                <li className="order__redio-box">
                  <h3 className="order__subtitle">
                    {t("cart.orderForm.payTitle")}
                  </h3>

                  <input
                    className="order__redio sr-only"
                    type="radio"
                    id="cash"
                    name="payment"
                    value="cash"
                  />
                  <label className="order__redio-lable" for="cash">
                    {t("cart.orderForm.payMethod_1")}
                  </label>

                  <input
                    className="order__redio sr-only"
                    type="radio"
                    id="non-cash"
                    name="payment"
                    value="nonСash"
                    checked
                  />
                  <label className="order__redio-lable" for="non-cash">
                    {t("cart.orderForm.payMethod_2")}
                  </label>
                </li>
              </ul>

              <ul className="order__parameter-list">
                <li className="order__result-inner">
                  {t("cart.orderForm.orderSum")}
                  <span className="order__result order__result--order">
                    {sumOrder}
                  </span>
                  <span className="order__result-slice">
                    {" "}
                    {t("productPage.currency")}
                  </span>
                </li>

                <li className="order__result-inner">
                  {t("cart.orderForm.deliverySum")}
                  <span className="order__result order__result--delivery">
                    {deliveryMethod.method === "novaPoshta" ? 150 : 0}
                  </span>
                  <span className="order__result-slice">
                    {" "}
                    {t("productPage.currency")}
                  </span>
                </li>
              </ul>

              <div className="order__pay-wraper">
                <div className="order__pay">
                  {t("cart.orderForm.totalSum")}
                  <span className="order__result order__result--pay">
                    {sumOrder + deliveryMethod.methodPrice}
                  </span>
                  <span className="order__result-slice">
                    {" "}
                    {t("productPage.currency")}
                  </span>
                </div>

                <button
                  className="btn order__btn"
                  type="submit"
                  onClick={(event) => getTotalOrderData(event)}
                >
                  {t("cart.orderForm.buttonOrder")}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CartForm;
