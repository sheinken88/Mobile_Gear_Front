import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items[newItem.id];
      if (!existingItem) {
        state.items[newItem.id] = {
          ...newItem,
          quantity: 1,
        };
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items[id];
      if (existingItem.quantity === 1) {
        delete state.items[id];
      } else {
        existingItem.quantity--;
      }
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items[id];
      if (existingItem) {
        const difference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalQuantity += difference;
        state.totalPrice += difference * existingItem.price;
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
