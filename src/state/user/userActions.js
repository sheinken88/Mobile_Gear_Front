import axios from "axios";
axios.defaults.withCredentials = true;
import { login, logout, register, list } from "./userSlice";
import * as settings from "../../settings";

export const registerUser = (username, email, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/users/signup`,
      {
        username,
        email,
        password,
      }
    );

    const userData = response.data;
    dispatch(register(userData));
  } catch (error) {
    console.error("Register error:", error);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, {
      email,
      password,
    });

    const payload = await axios.get(
      `${import.meta.env.VITE_API_URL}/users/secret`
    );

    const userData = payload.data;
    await dispatch(login(userData));
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/users/logout`);
    dispatch(logout());
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/admin/users`
    );
    dispatch(list(response.data));
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
