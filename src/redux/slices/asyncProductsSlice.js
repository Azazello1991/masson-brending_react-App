import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductsRes = createAsyncThunk(
  "products/fetchProductsStatus",
  async (params) => {
    const { gender, order, limit, page, sort, search } = params;

    const { data } = await axios.get(
      `https://66ef203c3ed5bb4d0bf2dded.mockapi.io/croducts?${search}&limit=${limit}&page=${page}&order=${order}${sort}${gender}`
    );

    return data; // поверта масив продуктів
  }
);

const initialState = {
  products: [],
  isLoading: "loadihg", // loadihg | success | error
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
        // Ожидание
        state.isLoading = "loading";
        state.items = [];
      })
      .addCase(fetchProductsRes.fulfilled, (state, action) => {
        // Успешно
        state.products = action.payload;
        state.isLoading = "success";
      })
      .addCase(fetchProductsRes.rejected, (state) => {
        // Ошибка
        state.isLoading = "error";
        state.items = [];
      });
  },
});

export default asyncProductsSlice.reducer;