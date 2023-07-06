import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  discountedProducts: [],
  product: {},
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setDiscountedProducts: (state, action) => {
      state.discountedProducts = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    editProduct: (state, action) => {
      const updatedProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === updatedProduct.id
      );
      if (existingProduct) {
        Object.assign(existingProduct, updatedProduct);
      }
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },
  },
});

export const {
  setProducts,
  setProduct,
  setDiscountedProducts,
  setLoading,
  setError,
  addProduct,
  editProduct,
  deleteProduct,
} = productsSlice.actions;
export default productsSlice.reducer;
