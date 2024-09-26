import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collFormData: {
    name: "",
    mail: "",
    phone: "",
    comment: "",
  },
};

export const formCollSlice = createSlice({
  name: "collForm",
  initialState: initialState,

  reducers: {
    changeName(state, action) {
      state.collFormData.name = action.payload;
    },
    changeMail(state, action) {
      state.collFormData.mail = action.payload;
    },
    changePhone(state, action) {
      state.collFormData.phone = action.payload;
    },
    changeComment(state, action) {
      state.collFormData.comment = action.payload;
    },
  },
});

export const selectCollFormData = (state) => state.collFormData; // useSelector

export const { changeName, changeMail, changePhone, changeComment } = formCollSlice.actions;
export default formCollSlice.reducer;
