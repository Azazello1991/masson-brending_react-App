import React, { useState, useEffect } from "react";
import style from "./up.module.scss";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addId } from "../../../redux/slices/navSlice";

const Up = () => {
  const dispatch = useDispatch();
  const [upInteractive, setUpInteractive] = useState(false);

  const autoToggle = () => {
    document.querySelector(`.${style.arrow}`).classList.toggle(style.auto);
  };

  // Устанавливаем событие на наведение мыши
  const handleMouseEnter = () => {
    setUpInteractive(true);
    document.querySelector(`.${style.arrow}`).classList.remove(style.auto);
  };

  // Обработчик для клика — скролл наверх
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(addId(0))
  };

  useEffect(() => {
    const arrowElement = document.querySelector(`.${style.arrow}`);

    // Добавляем обработчик наведения
    if (arrowElement) {
      arrowElement.addEventListener("mouseenter", handleMouseEnter);
    }

    // Интервал для автоматического переключения
    const interval = setInterval(() => {
      if (!upInteractive) {
        autoToggle();
      }
    }, 5000);

    // Убираем обработчики и очищаем интервал
    return () => {
      clearInterval(interval);
      if (arrowElement) {
        arrowElement.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [upInteractive]);

  return (
    <span
      className={`${style.arrow} ${style.auto}`}
      onClick={handleScrollToTop}
    >
      up
    </span>
  );
};

export default Up;
