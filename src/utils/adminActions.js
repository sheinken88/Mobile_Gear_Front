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

export const editProduct = (product) => async () => {
  try {
    const {
      id,
      name,
      stock,
      description,
      price,
      discount,
      features,
      product_img,
    } = product;
    await axios.put(`${settings.axiosURL}/admin/products/${id}`, {
      name,
      description,
      stock,
      price,
      discount,
      features,
      product_img,
    });
  } catch (error) {
    console.error("edit error: ", error);
  }
};

export const deleteProduct = (id) => async () => {
  try {
    await axios.delete(`${settings.axiosURL}/admin/products/${id}`);
  } catch (error) {
    console.error("delete error: ", error);
  }
};
