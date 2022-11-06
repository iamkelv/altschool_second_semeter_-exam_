import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./slices/auth-slice";
import { userSliceReducer } from "./slices/user-slice";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    users: userSliceReducer,
  },
});
