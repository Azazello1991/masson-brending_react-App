import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderFormData: {
    name: "",
    mail: "",
    phone: "",
    delivery: {
      method: "pickup",
      methodPrice: 0,
    },
  },
  totalPrice: 0,
  totalOrderData: {},
};

export const formOrderSlice = createSlice({
  name: "orderForm",
  initialState: initialState,

  reducers: {
    changeName(state, action) {
      state.orderFormData.name = action.payload;
    },
    changeMail(state, action) {
      state.orderFormData.mail = action.payload;
    },
    changePhone(state, action) {
      state.orderFormData.phone = action.payload;
    },
    changeDelivery(state, action) {
      state.orderFormData.delivery = action.payload;
    },

    getTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },

    getTotalData(state, action) {
      state.totalOrderData = action.payload
      console.log(state.totalOrderData);
    },
  },
});

export const selectCollFormData = (state) => state.orderFormData;
export const selectTotalPrice = (state) => state.totalPrice;
export const selectTotalOrderData = (state) => state.totalOrderData;

export const {
  changeName,
  changeMail,
  changePhone,
  changeDelivery,
  getTotalPrice,
  getTotalData,
} = formOrderSlice.actions;
export default formOrderSlice.reducer;
