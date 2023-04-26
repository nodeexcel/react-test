import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import roleSlice from "./slices/roleSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    role: roleSlice,
  },
});

export default store;
