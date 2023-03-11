import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";

export const Store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;
