import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice";
import news from "./slices/news.slice.js";
import favorites from "./slices/favorites.slice";

export default configureStore({
  reducer: {
    isLoading,
    news,
    favorites
  }
});