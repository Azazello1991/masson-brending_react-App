import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";

const Cabinet = () => {
  const { purchases } = useSelector((state) => state.cartSlice);
  useEffect(() => {
    console.log(purchases);
  }, purchases);

  return (
    <div class="header__nav-top">
      <div class="header__languages">
        <button class="header__language-btn active" data-lg="en" type="button">
          EN
        </button>
        <button class="header__language-btn" data-lg="ua" type="button">
          UA
        </button>
      </div>
      <div class="header__cabinet">
        <Link to={'/cart'}
          class="btn-icon header__cabinet-btn header__cart-btn"
          title="Кошик"
          aria-label="Кошик"
        >
          <span class="header__quantity" aria-label="Килькисть товару в кошику">
            {purchases.length}
          </span>
        </Link>
        <a
          href="#"
          class="btn-icon header__cabinet-btn header__lickes-btn"
          type="button"
          title="Обране"
          aria-label="Обране"
        ></a>
        <Link
          to="/LogIn"
          class="header__log-in"
          type="button"
          title="Реєстрація"
          aria-label="Реєстрація"
        >
          Log
        </Link>
      </div>
    </div>
  );
};

export default Cabinet;
