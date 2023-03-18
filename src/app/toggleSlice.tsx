import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

interface CounterState {
  state: boolean;
}

const initialState: CounterState = {
  state: JSON.parse(localStorage.getItem("toggle") ?? "[]") || false,
};

export const toggleSlice = createSlice({
  name: "toggle",

  initialState,
  reducers: {
    toggleHandle: (state) => {
      state.state = !state.state;
      localStorage.setItem("toggle", JSON.stringify(state.state));
    },
  },
});

export const { toggleHandle } = toggleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const toggleState = (state: RootState) => state.toggle.state;

export default toggleSlice.reducer;
