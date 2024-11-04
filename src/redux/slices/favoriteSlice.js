import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historyItems: [],
  favoriteItems: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavoriteItem(state, action) {
      const find = state.favoriteItems.find(
        (item) => item.id === action.payload.id
      );

      if (!find) {
        state.favoriteItems.push(action.payload);

        // Сохраняем в localStorage
        const dataStorage = localStorage.getItem("favoriteItems");
        const favoriteItems = dataStorage ? JSON.parse(dataStorage) : [];
        favoriteItems.push(action.payload);
        localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
      }
    },

    addHistoryItem(state, action) {
      // Логика добавления в historyItems
      state.historyItems.push(action.payload);
      // Обновление localStorage
      localStorage.setItem("historyItems", JSON.stringify(state.historyItems));
    },

    changeFavoriteStorage(state, action) {
      state.favoriteItems = action.payload;
    },

    changeHistoryStorage(state, action) {
      state.historyItems = action.payload;
    },

    deleteItem(state, action) {
      const dataStorage = localStorage.getItem("favoriteItems");
      const favoriteItems = dataStorage ? JSON.parse(dataStorage) : [];

      // Фильтруем по id, чтобы удалить
      const newArr = favoriteItems.filter((item) => item.id !== action.payload);

      // Обновляем state и localStorage
      state.favoriteItems = newArr;
      localStorage.setItem("favoriteItems", JSON.stringify(newArr));
    },
  },
});

export const selectHistoryItems = (state) => state.favorite.historyItems;
export const selectFavoriteItems = (state) => state.favorite.favoriteItems;

export const { addFavoriteItem, addHistoryItem, changeFavoriteStorage, changeHistoryStorage, deleteItem } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
