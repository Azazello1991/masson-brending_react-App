import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
  categorys: [
    {
      name: "Послуги",
      id: 1,
      section: '#about',
    },
    {
      name: "Приклад",
      id: 2,
      section: '#example',
    },
    {
      name: "Топ",
      id: 3,
      section: '#top',
    },
    {
      name: "Каталог",
      id: 4,
      section: '#catalog',
    },
    {
      name: "Відгуки",
      id: 5,
      section: '#comments',
    },
    {
      name: "Про нас",
      id: 6,
      section: '#video',
    },
    {
      name: "Контакти",
      id: 7,
      section: '#contacts',
    },
  ],
};

export const navSlice = createSlice({
  name: "nav",
  initialState: initialState,
  reducers: {
    addId(state, action) {
      state.index = action.payload
    },
  },
});

export const selectCategory = (state) => state.categorys; // useSelector

export const { addId } = navSlice.actions;

export default navSlice.reducer;
