import { createSlice } from "@reduxjs/toolkit";
import { cartItem } from "../products";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: cartItem, // Changed "value" to "items" for clarity
  },
  reducers: {
    // Add a product to the cart
    addToCart: (state, action) => {
      const newItem = action.payload;
      if (newItem) {
        state.value.push(newItem);
      }
    },
    // Remove a product from the cart
    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;
      if (itemToRemove) {
        state.value = state.value.filter((item) => item.id !== itemToRemove.id);
      }

    },
  },
});

// Export the action creators
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;

