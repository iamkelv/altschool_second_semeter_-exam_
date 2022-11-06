import { configureStore } from "@reduxjs/toolkit";
import { authReducers } from "./slices/auth-slice";
import { uiSliceReducer } from "./slices/ui-slice";
import { userSliceReducer } from "./slices/user-slice";

export const store = configureStore({
  reducer: {
    auth: authReducers,
    users: userSliceReducer,
    ui: uiSliceReducer,
  },
});
