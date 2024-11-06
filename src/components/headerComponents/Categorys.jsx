import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addId } from "../../redux/slices/navSlice";

const Categorys = ({ setIsSticky, setShow }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { activId, categorys } = useSelector((state) => state.navSlice);
  const navigate = useNavigate();
  const [startY, setStartY] = useState(0);

  // Обработчик начала свайпа
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  // Обработчик движения пальца (опускание шапки)
  const handleTouchMove = (e) => {
    const touchY = e.touches[0].clientY;
    const diff = touchY - startY;

    if (diff > 20) {
      setIsSticky(false);
      setShow(true)
      if (window.innerWidth < 992) {
      }
    }
  };

  // Перехід між якорями та сторінками
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
    <nav
      className="nav"
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
    >
      <ul className="nav__list">
        {categorys.map((category, i) => {
          return (
            <li key={category.id} className="nav__category-item">
              <Link
                className={
                  activId === i ? "nav__category active" : "nav__category"
                }
                onClick={() => {
                  dispatch(addId(i));
                  handleLinkClick(category.section); // Передаем только секцию
                }}
                to="/"
              >
                <span className="nav__category-name tr">
                  {t(category.nameKey)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Categorys;
