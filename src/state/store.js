import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
