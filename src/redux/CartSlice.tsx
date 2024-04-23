// 2 - slice

import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
  cart: [];
}

interface CartState {
  carts: Cart[],
};

const initialState:CartState= {
  carts: []
}

//slice is collection of our reduces actions
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.carts.push(action.payload);
    },
  },
});

export default CartSlice.reducer;
export const { addToCart } = CartSlice.actions;

//3 - import slice to our store
