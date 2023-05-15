import axios from "axios";
import { setProducts, setLoading, setError } from "./productsSlice";
import * as settings from "../../settings";

export const fetchProducts =
  (searchTerm = "") =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `${settings.axiosURL}/api/products?search=${searchTerm}`
      );
      dispatch(setProducts(response.data));
    } catch {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
