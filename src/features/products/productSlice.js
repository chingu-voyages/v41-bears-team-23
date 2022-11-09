import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const productSlice = createSlice({ name: 'product', initialState });

export default productSlice.reducer;
