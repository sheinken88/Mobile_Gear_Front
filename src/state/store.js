import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import productsReducer from "./products/productsSlice"; // falta crear
// import cartReducer from './cart/cartSlice'; // falta crear

export default configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    // cart: cartReducer,
  },
});
