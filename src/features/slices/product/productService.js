import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:3001/api/products/";

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "product/addProducts",
  async ({ product, token }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(apiUrl, product, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return fulfillWithValue(response.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
