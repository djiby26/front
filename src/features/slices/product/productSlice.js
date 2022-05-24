import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productService";

const initialState = {
  products: [],
  status: "pending",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "success";
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
