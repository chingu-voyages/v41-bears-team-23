import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import productReducer from '../features/products/productSlice';
import productsReducer from '../features/products/productsSlice';

const store = configureStore({
	reducer: {
		products: productsReducer,
		product: productReducer,
		cart: cartReducer,
		auth: authReducer,
	},
});

export default store;
