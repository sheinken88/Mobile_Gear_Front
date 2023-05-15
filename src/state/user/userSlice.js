import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userData: null,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.isAdmin = action.payload.isAdmin;
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.isAdmin = action.payload.isAdmin;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
      state.isAdmin = false;
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
