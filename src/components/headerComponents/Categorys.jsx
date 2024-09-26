import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addId } from "../../redux/slices/navSlice";

const Categorys = () => {
  const dispatch = useDispatch();
  const activId = useSelector((state) => state.navSlice.index);
  const categorys = useSelector((state) => state.navSlice.categorys);

  return (
    <nav class="nav">
      <ul class="nav__list">
        {categorys.map((nameCategory, i) => {
          return (
            <li key={nameCategory.id} class="nav__category-item">
              <a
                className={
                  activId === i ? "nav__category active" : "nav__category"
                }
                onClick={() => dispatch(addId(i))}
                href={nameCategory.section}
              >
                <span class="nav__category-name tr">{nameCategory.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Categorys;
