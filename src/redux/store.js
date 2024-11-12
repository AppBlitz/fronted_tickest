import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice.js";
import cartReducer from "./slice/shoppingCart.js"
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  },
});

export default store;
