import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // первоначальное состояние
  purchases: [],
};

export const cartSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    addPurchases: (state, action) => {
      const coincidence = state.purchases.find(
        (product) =>
          product.id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );
      if (coincidence) {
        return;
      }
      state.purchases.push(action.payload);
    },

    changeSizeProduct: (state, action) => {
      const product = state.purchases.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.size = action.payload.size; // Изменяем размер
      }
    },

    changeColorProduct: (state, action) => {
      const product = state.purchases.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.color = action.payload.color; // Изменяем цвет
      }
    },

    moreProduct: (state, action) => {
      console.log(action);
      const product = state.purchases.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity++;
      }
    },

    lessProduct: (state, action) => {
      const product = state.purchases.find(
        (product) => product.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },

    deletProduct: (state, action) => {
      state.purchases = state.purchases.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const selectSortBy = (state) => state.purchases;

export const {
  addPurchases,
  changeSizeProduct,
  changeColorProduct,
  moreProduct,
  lessProduct,
  deletProduct
} = cartSlice.actions;

export default cartSlice.reducer;