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
    productSize: "",
    productColor: "",
    productQuantity: 1,
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    sortByData(state, action) {
      console.log(action.payload.obj)
      state.params.sortBy = action.payload.obj;
    },

    sortByQuantity(state, action) {
      state.params.quantity = action.payload.obj;
    },

    updateSearchValue(state, action) {
      state.params.searchValue = action.payload;
    },

    setPagination(state, action) {
      state.params.currentPage = action.payload.selected + 1;
    },

    setProductSize(state, action) {
      state.params.productSize = action.payload;
    },

    setProductColor(state, action) {
      state.params.productColor = action.payload;
    },

    setProductQuantityMore(state) {
      state.params.productQuantity++;
    },

    setProductQuantityLess(state) {
      state.params.productQuantity--;
    },

    setChangeProductQuantity(state, action) {
      state.params.productQuantity = action.payload;
    },

    setTranslations(state, action) {
      state.params.sortBy.name = action.payload.name;
      state.params.quantity.name = action.payload.quantity;
    },
    
  },
});

export const selectFilter = (state) => state.params; // useSelector

export const {
  sortByData,
  sortByQuantity,
  updateSearchValue,
  setPagination,
  setProductSize,
  setProductColor,
  setProductQuantityMore,
  setProductQuantityLess,
  setChangeProductQuantity,
  setTranslations
} = filterSlice.actions;

export default filterSlice.reducer;
