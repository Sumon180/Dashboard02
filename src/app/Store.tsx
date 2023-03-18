import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";

export const Store = configureStore({
  reducer: {
    toggle: darkModeSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export type AppDispatch = typeof Store.dispatch;
