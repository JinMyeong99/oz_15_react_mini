import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "./home/homeSlice";
import { genreSlice } from "./genre/genreSlice";
import { favoriteSlice } from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    genre: genreSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});
