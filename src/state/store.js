import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
});

export default store;
