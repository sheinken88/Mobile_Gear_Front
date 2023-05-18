import axios from "axios";
import * as settings from "../settings/index";

export const addProduct =
  (name, description, price, discount, features, product_img, stock) =>
  async () => {
    try {
      await axios.post(`${settings.axiosURL}/admin/products`, {
        name,
        description,
        price,
        discount,
        features,
        product_img,
        stock,
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

export const editProduct =
  (id, name, description, price, discount, features, product_img) =>
  async () => {
    try {
      await axios.put(`${settings.axiosURL}/admin/products/${product.id}`, {
        name,
        description,
        price,
        discount,
        features,
        product_img,
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

export const deleteProduct = (id) => async () => {
  try {
    await axios.delete(`${settings.axiosURL}/admin/products/${product.id}`);
  } catch (error) {
    console.error("Login error:", error);
  }
};
