import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  orders: [],
  message: "",
};
const url = "http://localhost:3001/api/order/";

export const getOrders = createAsyncThunk(
  "order/fetchOrders",
  async (token, { rejectWithValue }) => {
    try {
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderState: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.message = "Retrieving orders error";
      console.log(action.payload);
    });
  },
});

export const { setOrderState } = orderSlice.actions;

export default orderSlice.reducer;
