import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userData: null,
  is_admin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.is_admin = action.payload.is_admin;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.is_admin = action.payload.is_admin;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
      state.is_admin = false;
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
