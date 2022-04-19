import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todoSlice/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
