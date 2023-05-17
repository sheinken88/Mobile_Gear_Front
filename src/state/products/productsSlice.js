import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
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
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setProduct, setLoading, setError } =
  productsSlice.actions;
export default productsSlice.reducer;
