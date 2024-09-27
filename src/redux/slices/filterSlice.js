import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    searchValue: "",

    sortBy: {
      name: "Усі товари",
      sotrProperty: "-price",
    },

    quantity: {
      name: "По 16",
      quantity: 16,
    },

    currentPage: 1,

    categoryId: "",
  },
};

export const filterSlice = createSlice({
  name: "filterr",
  initialState: initialState,
  reducers: {
    sortByData(state, action) {
      console.log(action.payload)
      state.params.sortBy = action.payload.obj;
    },

    sortByQuantity(state, action) {
      state.params.quantity = action.payload.obj;
    },

    updateSearchValue(state, action) {
      state.params.searchValue = action.payload;
    },
  },
});

export const selectFilter = (state) => state.content; // useSelector

export const { sortByData, sortByQuantity, updateSearchValue } = filterSlice.actions; // functions

export default filterSlice.reducer;
