import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    sortBy: {
      name: "Задати фільтр",
      sotrProperty: "-price",
    },
    quantity: {
      name: "По 16",
      quantity: 16,
    },
    currentPage: 1,
    categoryId: "",
    searchValue: "",
  },
};

export const filterSlice = createSlice({
  name: "filterr",
  initialState: initialState,
  reducers: {
    sortByData(state, action) {
      state.params.sortBy = action.payload.obj;
    },

    sortByQuantity(state, action) {
      state.params.quantity = action.payload.obj;
    },
  },
});

export const selectFilter = (state) => state.content; // useSelector

export const { sortByData, sortByQuantity } = filterSlice.actions; // functions

export default filterSlice.reducer;
