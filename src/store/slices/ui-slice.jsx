import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showMenu: false,
};
const uiSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    menu(state, { payload }) {
      state.showMenu = payload;
    },
  },
});

export const uiSliceReducer = uiSlice.reducer;
export const uiSliceAction = uiSlice.actions;
