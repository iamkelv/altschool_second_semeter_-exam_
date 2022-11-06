const { createSlice } = require("@reduxjs/toolkit");

const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
console.log(!!storedUserLoggedInInformation);
const initialState = {
  token: "",
  login: !!storedUserLoggedInInformation,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, { payload }) {
      state.token = payload.idToken;
      if (storedUserLoggedInInformation === "1") {
        return (state.login = true);
      } else {
        state.login = true;
      }
    },
    logout(state, { payload }) {
      state.login = payload;
    },
  },
});

export const authReducers = authSlice.reducer;
export const authActions = authSlice.actions;
