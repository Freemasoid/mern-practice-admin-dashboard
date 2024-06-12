import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./features/state/stateSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../utils/api.js";

export const store = configureStore({
  reducer: {
    state: stateSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);
