import React, { useRef, useEffect } from "react";
import Mixitup from "mixitup";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addId } from "../../redux/slices/topSlice";
import Card from "../galleryComponents/Card";

const TopMixItUp = () => {
  const containerRef = useRef(null);
  const topItems = useSelector((state) => state.topSlice.topItems);
  const topCategores = useSelector((state) => state.topSlice.topCategory);
  const activId = useSelector((state) => state.topSlice.activeId);
  const dispatch = useDispatch();

  useEffect(() => {
    const mixer = Mixitup(containerRef.current, {
      selectors: {
        target: ".mix",
      },
      animation: {
        duration: 300,
      },
    });

    return () => {
      mixer.destroy();
    };
  }, []);

  return (
    <div>
      {/* Фильтры */}
      <ul className="filter-buttons gallery top__gallery">
        {topCategores.map((category, i) => (
          <li class="gallery__category" key={category.id}>
            <button
              data-filter={category.filter}
              class="btn gallery__btn active"
              className={
                activId === i ? "btn gallery__btn active" : "btn gallery__btn"
              }
              type="button"
              onClick={() => dispatch(addId(i))}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Контейнер с элементами */}
      <ul ref={containerRef} className="mix-container gallery__items">
        {topItems.map((item) => (
          <Card {...item}/>
        ))}
      </ul>
    </div>
  );
};

export default TopMixItUp;
