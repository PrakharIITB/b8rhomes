import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: true,
    user: null,
    token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("name", state.user.name);
      localStorage.setItem("email", state.user.email);
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setStatus: (state, action) => {
      state.login = action.payload.login;
    },
  },
});

export const { setLogin, setLogout, setStatus } = authSlice.actions;
export default authSlice.reducer;