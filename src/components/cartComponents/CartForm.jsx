import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
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

const CartForm = ({ purchasesData }) => {
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

  // Об'єкт для оформлення заамовлення
  const [formData, setFormData] = React.useState({
    name: "",
    mail: "",
    phone: "",
    sity: "",
    department: "",
  });

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
    "Відділення Нової Пошти*"
  );
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const { totalPrice, orderFormData, totalOrderData } = useSelector(
    (state) => state.formOrderSlice
  );

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
        };

        dispatch(getTotalData(orderData));
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
        name: "Ім'я повинне бути більше 2-х символів та написане кирилицею",
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
        mail: "Не вірно вказаний mail",
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
        phone: "Не вірно вказаний номер",
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
    <section class="order">
      <div class="container">
        <h2 class="order__title cart__title">Оформити заказ</h2>

        <div class="order__content">
          <form
            class="form order__form"
            action="#"
            method="post"
            name="orderName"
          >
            <ul class="order__filds">
              <li class="order__fild-wrapper">
                <label class="sr-only" for="order-name">
                  Введіть Ваше ім'я
                </label>
                <input
                  value={orderFormData.name}
                  ref={inputRefName}
                  onChange={onChangeName}
                  class="fild order__fild"
                  type="text"
                  name="name"
                  id="order-name"
                  placeholder="Ваше ім'я*"
                  required
                />
                {errors.name && <p className="form__error">{errors.name}</p>}
              </li>

              <li class="order__fild-wrapper">
                <label class="sr-only" for="order-email">
                  Введіть Ваш email
                </label>
                <input
                  value={orderFormData.mail}
                  onChange={onChangeMail}
                  class="fild order__fild"
                  type="email"
                  name="email"
                  id="order-email"
                  placeholder="Email*"
                  required
                />
                {errors.mail && <p className="form__error">{errors.mail}</p>}
              </li>

              <li class="order__fild-wrapper">
                <label class="sr-only" for="order-tel">
                  Введіть Ваш телефон
                </label>
                <input
                  value={orderFormData.phone}
                  onChange={onChangePhone}
                  class="fild order__fild"
                  type="tel"
                  name="tel"
                  id="order-tel"
                  placeholder="Телефон*"
                  required
                />
                <p className="form__error">{errors.phone}</p>
              </li>

              {deliveryMethod.method !== "pickup" ? (
                <>
                  <li class="order__fild-wrapper">
                    <input
                      class="fild order__fild"
                      value={city}
                      onChange={handleCityChange}
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Місто*"
                      required
                    />
                    <label class="sr-only" for="city">
                      Введіть місто доставки
                    </label>
                    <div class="form-msg"></div>
                  </li>

                  <li class="order__fild-wrapper">
                    <div
                      onClick={(event) => togglePopup(event)}
                      class="fild order__fild order__fild--delivery"
                    >
                      {curentWarehouses}
                    </div>

                    {warehouses.length > 1 && warehousesPupap && (
                      <ul class="order__departaments">
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

            <div class="order__culc-box">
              <ul class="order__check-boxes">
                <li class="order__redio-box">
                  <h3 class="order__subtitle">Доставка</h3>

                  <input
                    class="order__redio sr-only"
                    type="radio"
                    id="pickup"
                    name="delivery"
                    value="pickup"
                    checked={deliveryMethod.method === "pickup"}
                    onChange={handleDeliveryChange}
                  />
                  <label class="order__redio-lable" for="pickup">
                    Самовивіз
                  </label>

                  <input
                    class="order__redio sr-only"
                    type="radio"
                    id="novaPoshta"
                    name="delivery"
                    value="novaPoshta"
                    checked={deliveryMethod.method === "novaPoshta"}
                    onChange={handleDeliveryChange}
                  />
                  <label class="order__redio-lable" for="novaPoshta">
                    Нова пошта
                  </label>
                </li>

                <li class="order__redio-box">
                  <h3 class="order__subtitle">Розрахунок</h3>

                  <input
                    class="order__redio sr-only"
                    type="radio"
                    id="cash"
                    name="payment"
                    value="cash"
                  />
                  <label class="order__redio-lable" for="cash">
                    Накладний платіж
                  </label>

                  <input
                    class="order__redio sr-only"
                    type="radio"
                    id="non-cash"
                    name="payment"
                    value="nonСash"
                    checked
                  />
                  <label class="order__redio-lable" for="non-cash">
                    Безготівковий
                  </label>
                </li>
              </ul>

              <ul class="order__parameter-list">
                <li class="order__result-inner">
                  Замовлення:
                  <span class="order__result order__result--order">
                    {sumOrder}
                  </span>
                  <span class="order__result-slice"> грн</span>
                </li>

                <li class="order__result-inner">
                  Доставка:
                  <span class="order__result order__result--delivery">
                    {deliveryMethod.method === "novaPoshta" ? 150 : 0}
                  </span>
                  <span class="order__result-slice"> грн</span>
                </li>
              </ul>

              <div class="order__pay-wraper">
                <div class="order__pay">
                  Разом:
                  <span class="order__result order__result--pay">
                    {sumOrder + deliveryMethod.methodPrice}
                  </span>
                  <span class="order__result-slice"> грн</span>
                </div>

                <button
                  class="btn order__btn"
                  type="submit"
                  onClick={(event) => getTotalOrderData(event)}
                >
                  Оформити замовлення
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
