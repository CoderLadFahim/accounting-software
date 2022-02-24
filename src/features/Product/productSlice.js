import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// builder
		// 	.addCase(incrementAsync.pending, (state) => {
		// 		state.status = 'loading';
		// 	})
		// 	.addCase(incrementAsync.fulfilled, (state, action) => {
		// 		state.status = 'idle';
		// 		state.value += action.payload;
		// 	});
	},
});

// export const { login, logout } = productsSlice.actions;

// export const selectUserIsAuthenticated = (state) =>
// 	state.products.userIsAuthenticated;

export default productsSlice.reducer;
