import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/theme/themeSlice.js";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});
