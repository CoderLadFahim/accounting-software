import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/Auth/authSlice';
import productsReducer from '../features/Product/productSlice';
import saleReducer from '../features/Sale/saleSlice';
import purchaseReducer from '../features/Purchase/purchaseSlice';
import categoryReducer from '../features/Category/categorySlice';
import customerReducer from '../features/Customer/customerSlice';
import supplierReducer from '../features/Supplier/supplierSlice';
import navigationReducer from '../features/Navigation/navigationSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authReducer,
		products: productsReducer,
		sale: saleReducer,
		purchase: purchaseReducer,
		category: categoryReducer,
		customer: customerReducer,
		navigation: navigationReducer,
		supplier: supplierReducer,
	},
});
