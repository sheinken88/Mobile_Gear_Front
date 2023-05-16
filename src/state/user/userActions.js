import axios from "axios";
axios.defaults.withCredentials = true;
import { login, register } from "./userSlice";
import * as settings from "../../settings";

export const registerUser = (userName, email, password) => async (dispatch) => {
  try {
    const response = await axios.post(`${settings.axiosURL}/users/signup`, {
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
    await axios.post(`${settings.axiosURL}/users/login`, {
      email,
      password,
    });

    const payload = await axios.get(`${settings.axiosURL}/secret`);
    console.log("PAYLOAD: ", payload.data);

    const userData = payload.data;
    await dispatch(login(userData));
  } catch (error) {
    console.error("Login error:", error);
  }
};
