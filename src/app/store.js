import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/Auth/authSlice';
import productsReducer from '../features/Products/productsSlice';
import salesReducer from '../features/Sales/salesSlice';
import purchasesReducer from '../features/Purchases/purchasesSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
		products: productsReducer,
		sales: salesReducer,
		purchases: purchasesReducer,
	},
});
