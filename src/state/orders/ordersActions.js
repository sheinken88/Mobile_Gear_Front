import axios from "axios";
import { setOrders, setLoading, setError } from "./ordersSlice";
import * as settings from "../../settings";

export const fetchOrders = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${settings.axiosURL}/admin/orders`);
    console.log("Response: ", response);
    dispatch(setOrders(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
