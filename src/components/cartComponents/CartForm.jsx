import React from 'react'

const CartForm = () => {
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
                    <input
                      class="fild order__fild"
                      type="text"
                      name="name"
                      id="order-name"
                      placeholder="Ваше ім'я"
                      required
                    />
                    <label class="sr-only" for="order-name">
                      Введіть Ваше ім'я
                    </label>
                    <div class="form-msg"></div>
                  </li>
  
                  <li class="order__fild-wrapper">
                    <input
                      class="fild order__fild"
                      type="email"
                      name="email"
                      id="order-email"
                      placeholder="Email"
                      required
                    />
                    <label class="sr-only" for="order-email">
                      Введіть Ваш email
                    </label>
                    <div class="form-msg"></div>
                  </li>
  
                  <li class="order__fild-wrapper">
                    <input
                      class="fild order__fild"
                      type="tel"
                      name="tel"
                      id="order-tel"
                      placeholder="Телефон"
                      required
                    />
                    <label class="sr-only" for="order-tel">
                      Введіть Ваш телефон
                    </label>
                    <div class="form-msg"></div>
                  </li>
  
                  <li class="order__fild-wrapper">
                    <input
                      class="fild order__fild"
                      type="text"
                      name="city"
                      id="order-city"
                      placeholder="Місто"
                      required
                    />
                    <label class="sr-only" for="order-city">
                      Введіть Ваше місто
                    </label>
                    <div class="form-msg"></div>
                  </li>
  
                  <li class="order__fild-wrapper">
                    <input
                      class="fild order__fild"
                      type="text"
                      name="postOffice"
                      id="post-office"
                      placeholder="Відділення"
                      required
                    />
                    <label class="sr-only" for="post-office">
                      Введіть відділення пошти
                    </label>
                    <div class="form-msg"></div>
                  </li>
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
                        checked
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
                        Накладений платіж
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
                      Заказ:
                      <span class="order__result order__result--order">
                        {" "}
                        1100
                      </span>
                      <span class="order__result-slice"> грн</span>
                    </li>
  
                    <li class="order__result-inner">
                      Доставка:
                      <span class="order__result order__result--delivery">
                        50
                      </span>
                      <span class="order__result-slice"> грн</span>
                    </li>
                  </ul>
  
                  <div class="order__pay-wraper">
                    <div class="order__pay">
                      Разом:
                      <span class="order__result order__result--pay">1150</span>
                      <span class="order__result-slice"> грн</span>
                    </div>
  
                    <button class="btn order__btn" type="submit">
                      Оформити замовлення
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
  )
}

export default CartForm