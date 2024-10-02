import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsRes = createAsyncThunk(
  "products/fetchProductsStatus",
  async (params) => {
    const { gender, order, limit, page, sort, search, idProduct } = params;

    const { data } = await axios.get(
      `https://66ef203c3ed5bb4d0bf2dded.mockapi.io/croducts?${search}&limit=${limit}&page=${page}&order=${order}${sort}${gender}${idProduct}`
    );
    
    // Робимо додатковий запит без ліміту щоб вирахувати кількість сторінок для пагінації:
    const dataNoLimit  = await axios.get(
      `https://66ef203c3ed5bb4d0bf2dded.mockapi.io/croducts?${search}&limit=100&page=1&order=${order}${sort}${gender}`
    );

    return { data, dataNoLimit }; // поверта масив продуктів
  }
);

const initialState = {
  products: [],
  isLoading: "loadihg", // loadihg | success | error
  pagesGallery: 1
};

export const asyncProductsSlice = createSlice({
  name: "gallery",
  initialState: initialState,
  reducers: {
    setItems(state, action) {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(fetchProductsRes.pending, (state) => {
        // Чекання
        state.isLoading = "loading";
        state.items = [];
      })
      .addCase(fetchProductsRes.fulfilled, (state, action) => {
        // Успіх
        state.products = action.payload.data;
        state.pagesGallery = action.payload.dataNoLimit.data.length /  action.payload.data.length
        state.isLoading = "success";
      })
      .addCase(fetchProductsRes.rejected, (state) => {
        // Помилка
        state.isLoading = "error";
        state.items = [];
      });
  },
});

export default asyncProductsSlice.reducer;