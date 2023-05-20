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
  },
});

export const {
  setProducts,
  setProduct,
  setDiscountedProducts,
  setLoading,
  setError,
} = productsSlice.actions;
export default productsSlice.reducer;
