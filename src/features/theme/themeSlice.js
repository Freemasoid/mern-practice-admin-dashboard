import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

const themeSlice = createSlice({
  name: "globalTheme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
