import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [
    {
      id: "1b",
      time: '01.01.2022',
      rating: 5,
      text: "Сool t-shirt, Trump wants one too!",
      name: "Barack Obama",
      photo:
        "https://book24.ua/upload/iblock/90e/90eef2b6a176f2720ceab7cdd0958363.jpg",
    },
    {
      id: "2b",
      time: '02.11.1930',
      rating: 5,
      text: "Слава УкраЇні. Патріотичні принти у ваc!",
      name: "Степан Бандера",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Stepan_Bandera_photo.jpg/272px-Stepan_Bandera_photo.jpg",
    },
    {
      id: "3b",
      time: '20.12.2022',
      rating: 5,
      text: "ПТН ПНХ",
      name: "Boris Jones",
      photo:
        "https://today.ua/wp-content/uploads/2022/05/z25413065VPremier-Wielkiej-Brytanii-Boris-Johnson--768x494.jpg",
    },
  ],
};

export const commentsProductSlice = createSlice({
  name: "commentsProduct",
  initialState: initialState,

  reducers: {
    newComment(state, action) {
      state.comments.push(action.payload);
      console.log(action.payload)
    },
  },
});

export const { newComment } = commentsProductSlice.actions;

export const comments = (state) => state.commentsProductSlice;

export default commentsProductSlice.reducer;
