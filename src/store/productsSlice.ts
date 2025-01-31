import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product.types";
import axios from "axios";

// Action
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
  return response.data
})

const productsSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (_, action) => {
      return action.payload
    })
  }
})

export default productsSlice.reducer;

// extraReducers for APIs
// (state, action) state as _

// initialState: [
//   {
//     id: 1,
//     title: 'Product 1',
//     price: 50,
//     description: "Description 1",
//     category: 'Category 1',
//     image: 'https://via.placeholder.com/150'
//   }
// ] as Product[],