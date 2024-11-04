import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activId:0,
  categorys: [
    {
      nameKey: "category.services", // используем ключ для перевода
      id: 1,
      section: '#about',
    },
    {
      nameKey: "category.example",
      id: 2,
      section: '#example',
    },
    {
      nameKey: "category.top",
      id: 3,
      section: '#top',
    },
    {
      nameKey: "category.catalog",
      id: 4,
      section: '#catalog',
    },
    {
      nameKey: "category.comments",
      id: 5,
      section: '#comments',
    },
    {
      nameKey: "category.aboutUs",
      id: 6,
      section: '#video',
    },
    {
      nameKey: "category.contacts",
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
      state.activId = action.payload
    },
  },
});

export const selectCategory = (state) => state.categorys; // useSelector

export const { addId } = navSlice.actions;

export default navSlice.reducer;
