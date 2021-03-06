import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/slices/auth/authSlice";
import cartReducer from "../features/slices/cart/cartSlice";
import orderReducer from "../features/slices/order/orderSlice";
import productReducer from "../features/slices/product/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
  },
});
