import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addProduct, fetchOneProduct, fetchProducts } from "./productService";

const initialState = {
  products: [],
  currentProduct: null,
  status: "pending",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        toast.success("Product created");
      })
      .addCase(addProduct.rejected, (state, action) => {
        toast.error("Error when creating product");
      })
      .addCase(fetchOneProduct.fulfilled, (state, action) => {
        state.currentProduct = action.payload;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
