import axios from "axios";
import { login, register } from "./userSlice";
import * as settings from "../../settings";

export const registerUser = (userName, email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${settings.axiosURL}/api/users/signup`, {
      userName,
      email,
      password,
    });

    const userData = response.data;
    dispatch(register(userData));
  } catch (error) {
    console.error("Register error:", error);
  }
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${settings.axiosURL}/api/users/login`, {
      email,
      password,
    });

    const userData = response.data;
    dispatch(login(userData));
  } catch (error) {
    console.error("Login error:", error);
  }
};
