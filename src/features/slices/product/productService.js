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

export const fetchOneProduct = createAsyncThunk(
  "product/fetchOneProduct",
  async (productId) => {
    const response = await axios.get(apiUrl + "/" + productId);
    // console.log(response);
    return response.data;
  }
);

export const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(apiUrl + "/" + productId);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const updateProduct = createAsyncThunk(
  "product/update",
  async ({ product, productId, token }, { fulfillWithValue }) => {
    const response = await axios.put(apiUrl + "/" + productId, product, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return fulfillWithValue(response.data);
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
