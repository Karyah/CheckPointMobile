import { configureStore } from "@reduxjs/toolkit";
import Game from "./store";

export const store = configureStore({
  reducer: {
    game: Game,
  }
})