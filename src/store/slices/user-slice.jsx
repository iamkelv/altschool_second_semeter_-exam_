import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  getUsers: [],
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, { payload }) {
      state.getUsers.push(...payload);
    },
    getSingleUser(state, { payload }) {
      const userId = payload.id.value;
      const existingUser = state.getUsers.find(
        (user) => user.id.value === userId
      );
    },
  },
});

export const userSliceReducer = userSlice.reducer;
export const userSliceAction = userSlice.actions;
