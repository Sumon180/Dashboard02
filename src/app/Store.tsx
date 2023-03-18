import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
import toggleSlice from "./toggleSlice";

export const Store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
    toggle: toggleSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;
