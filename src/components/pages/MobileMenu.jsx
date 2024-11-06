import React from "react";
import { useTranslation } from "react-i18next";
import Form from "./../mainComponents/Form";
import Logo from "../../images/logo-masons-shop.svg";
import { Link, useNavigate } from "react-router-dom";
import Cabinet from "../headerComponents/Cabinet";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addId } from "../../redux/slices/navSlice";

const MobileMenu = ({ activeBurger, setActiveBurger }) => {
  const { t } = useTranslation();
  const { activId, categorys } = useSelector((state) => state.navSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLinkClick = (section) => {
    // Переход на главную страницу
    navigate("/"); // Переход на главную страницу

    // Затримка для переходу на іншу сторінку
    setTimeout(() => {
      const element = document.getElementById(section.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <section
      className={activeBurger ? "mobile-menu" : "mobile-menu menu-hidden"}
    >
      <div className="mobile-menu__wrapper">
        <div className="mobile-menu__head">
          <Link
            className="logo"
            to={"/"}
            onClick={() => setActiveBurger(false)}
          >
            <img
              className="logo__icon"
              src={Logo}
              width="184"
              height="63"
              alt="логотип"
            ></img>
          </Link>

          <button
            className="burger burger--active"
            type="button"
            onClick={() => setActiveBurger(false)}
          >
            <span className="burger__line"></span>
            <span className="sr-only">Закрити меню</span>
          </button>
        </div>

        <div className="mobile-menu__cabinet"><Cabinet /></div>

        <nav className="nav">
          <ul className="nav__list mobile-nav">
            {categorys.map((category, i) => {
              return (
                <li className="nav__category-item mobile__category">
                  <Link
                    className="nav__category"
                    onClick={() => {
                      setActiveBurger(false);
                      dispatch(addId(i));
                      handleLinkClick(category.section); // Передаем только секцию
                    }}
                  >
                    <span className="nav__category-name">
                      {t(category.nameKey)}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Form />
      </div>
    </section>
  );
};

export default MobileMenu;
