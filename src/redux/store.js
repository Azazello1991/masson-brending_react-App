import { configureStore } from '@reduxjs/toolkit';
import navSlice from "./slices/navSlice";
import servicesSlice from "./slices/servicesSlice";
import productsSlice from './slices/productsSlice';
import topSlice from './slices/topSlice';
import saleSlice from './slices/saleSlice';
import catalogSlice from './slices/catalogSlice';
import formCollSlice from './slices/formCollSlice';
import gallerySlice from './slices/gallerySlice';
import asyncProductsSlice from './slices/asyncProductsSlice';
import filterSlice from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    navSlice,
    servicesSlice,
    productsSlice,
    topSlice,
    saleSlice,
    catalogSlice,
    formCollSlice,
    gallerySlice,
    asyncProductsSlice,
    filterSlice,
  },
})