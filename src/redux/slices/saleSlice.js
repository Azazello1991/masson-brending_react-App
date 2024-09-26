import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import examplePhoto from "../../images/example/example_1.webp";

const initialState = {
  dataSlider: [
    {
      title: "Русский корабль...",
      id: 0,
      text: "Купи футболку і 10% з кожної покупки піде на потреби ЗСУ, купи стильну футболку і підтримай свого брата на фронті",
      url: '',
    },
    {
      title: "Русский корабль...",
      id: 1,
      text: "Купи футболку і 10% з кожної покупки піде на потреби ЗСУ, купи стильну футболку і підтримай свого брата на фронті",
      url: '',
    },
    {
      title: "Русский корабль...",
      id: 2,
      text: "Купи футболку і 10% з кожної покупки піде на потреби ЗСУ, купи стильну футболку і підтримай свого брата на фронті",
      url: '',
    },
    {
      title: "Русский корабль...",
      id: 3,
      text: "Купи футболку і 10% з кожної покупки піде на потреби ЗСУ, купи стильну футболку і підтримай свого брата на фронті",
      url: '',
    },
    {
      title: "Русский корабль...",
      id: 4,
      text: "Купи футболку і 10% з кожної покупки піде на потреби ЗСУ, купи стильну футболку і підтримай свого брата на фронті",
      url: '',
    },
    {
      title: "Русский корабль...",
      id: 5,
      text: "Купи футболку і 10% з кожної покупки піде на потреби ЗСУ, купи стильну футболку і підтримай свого брата на фронті",
      url: '',
    },
  ],
};

export const saleSlice = createSlice({
  name: "top",
  initialState: initialState,

  reducers: {
    addId(state, action) {
      state.activeId = action.payload;
    },
  },
});

export const selectTopItems = (state) => state.topItems; // useSelector

/* export const { addId } = topSlice.actions; */

export default saleSlice.reducer;
