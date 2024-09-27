import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { sortByData, updateSearchValue } from "../../redux/slices/filterSlice";

const SearchHead = () => {
  const searchValue = useSelector(
    (state) => state.filterSlice.params.searchValue
  );
  const dispatch = useDispatch();
  
  const obj = {
    obj: {
      name: "Задати фільтр",
      sotrProperty: "-price",
    },
  };

  // З-за проблем несумісності запиту на MockApi, при пошуку скидуємо gender на -price.
  const updateSortByValue = () => {
    if (searchValue) {
      dispatch(
        sortByData(obj)
      );
    }
  };

  const onChangeInpute = (event) => {
    updateSortByValue();
    dispatch(updateSearchValue(event.target.value));
  };

  return (
    <div class="container-btn" tabindex="1">
      <div class="search-container" tabindex="1">
        <input
          onChange={onChangeInpute}
          type="text"
          placeholder="Пошук"
          value={searchValue}
        ></input>
        <a class="button-circle">
          <i class="fa fa-search"></i>
        </a>
      </div>
    </div>
  );
};

export default SearchHead;
