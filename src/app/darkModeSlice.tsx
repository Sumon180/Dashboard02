import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";

interface CounterState {
  mode: boolean;
  isOpen: boolean;
}

const initialState: CounterState = {
  mode: JSON.parse(localStorage.getItem("darkMode") ?? "[]") || false,
  isOpen: false,
};

export const darkModeSlice = createSlice({
  name: "toggle",

  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = !state.mode;
      localStorage.setItem("toggle", JSON.stringify(state.mode));
    },
    navToggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleMode, navToggle } = darkModeSlice.actions;

export const toggleDarkMode = (state: RootState) => state.toggle.mode;
export const toggleNav = (state: RootState) => state.toggle.isOpen;

export default darkModeSlice.reducer;
