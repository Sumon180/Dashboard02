import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";

interface CounterState {
  mode: boolean;
}

const initialState: CounterState = {
  mode: JSON.parse(localStorage.getItem("darkMode") ?? "[]") || false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",

  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
      localStorage.setItem("darkMode", JSON.stringify(state.mode));
    },
  },
});

export const { toggleMode } = darkModeSlice.actions;

export const toggleDarkMode = (state: RootState) => state.darkMode.mode;

export default darkModeSlice.reducer;
