import { CartState } from "../types/cart.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1})
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    }
  },
})
export const {addToCart, toggleCart} = cartSlice.actions;

export default cartSlice.reducer;