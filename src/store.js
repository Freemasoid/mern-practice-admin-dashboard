import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/theme/themeSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../utils/api.js";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
