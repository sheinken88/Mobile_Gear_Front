import axios from "axios";
import {
  setProducts,
  setProduct,
  setDiscountedProducts,
  setLoading,
  setError,
} from "./productsSlice";
import * as settings from "../../settings";

export const fetchProducts =
  (searchTerm = "") =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `${settings.axiosURL}/products?modelName=${searchTerm}`
      );
      console.log("Response: ", response);
      dispatch(setProducts(response.data));
    } catch {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const fetchProduct = (productId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${settings.axiosURL}/products/${productId}`
    );
    dispatch(setProduct(response.data));
  } catch {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const fetchDiscountedProducts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `${settings.axiosURL}/products/discounted`
    );
    console.log("Discounted products: ", response.data);
    dispatch(setDiscountedProducts(response.data));
  } catch (error) {
    console.log(error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
