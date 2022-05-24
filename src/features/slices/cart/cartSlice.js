import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = cart
  ? cart
  : {
      products: [],
      quantiteProd: 0,
      total: 0,
    };

const fetchCart = createAsyncThunk("cart/get", async (userId, thunkApi) => {
  try {
    return await fetchCart(userId);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkApi.rejectWithValue(message);
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let searched = state.products.find(
        (prod) => prod._id === action.payload._id
      );

      //checking if a product is already added in the cart so that in does get duplicated
      //If it is already in the cart we just update the quantity and its total price
      if (searched) {
        searched.quantite += action.payload.quantite;
        state.products = state.products.filter(
          (prod) => prod._id !== action.payload._id
        );
        state.products.push(searched);

        //if its not a duplicate we simply add it the list of products
      } else {
        state.quantiteProd += 1;
        state.products.push(action.payload);
      }

      //Updating the total price of products in the cart
      state.total += action.payload.price * action.payload.quantite;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteProduct: (state, action) => {
      state.quantiteProd--;
      state.total -= action.payload.price * action.payload.quantite;

      //to ensure that we don't have a negative value for the total price
      state.total = state.total < 0 && 0;
      state.products = state.products.filter(
        (prod) => prod._id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
