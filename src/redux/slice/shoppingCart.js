import { createSlice } from "@reduxjs/toolkit";



const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload
      if (state.length == 0 || state.filter((item) => {
        item.id == id.length == 0
      })) {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action) => {
      const { id } = action.payload

    }

  }
})

export default cartSlice.reducer
export const { addToCart, removeToCart } = cartSlice.actions
