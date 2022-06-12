import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";
import getConfig from "../../utils/getConfig";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    setFavorites: (state, action) => {
      return action.payload;
    }
  }
});

export const { setFavorites } = favoritesSlice.actions;

export const getFavorites = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get("https://news-app-academlo.herokuapp.com/favorites/", getConfig())
    .then((res) => dispatch(setFavorites(res.data)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const addToFavorites = (favorite) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .post(
      "https://news-app-academlo.herokuapp.com/news/add_to_favorite/",
      favorite,
      getConfig()
    )
    .then(() => dispatch(getFavorites()))
    .finally(() => dispatch(setIsLoading(false)));
};

export default favoritesSlice.reducer;
