import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	supplier: [],
};

export const supplierSlice = createSlice({
	name: 'supplier',
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

// export const { login, logout } = supplierSlice.actions;

// export const selectUserIsAuthenticated = (state) =>
// 	state.supplier.userIsAuthenticated;

export default supplierSlice.reducer;
