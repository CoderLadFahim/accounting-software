import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	customer: [],
};

export const customerSlice = createSlice({
	name: 'customer',
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

// export const { login, logout } = customerSlice.actions;

// export const selectUserIsAuthenticated = (state) =>
// 	state.customer.userIsAuthenticated;

export default customerSlice.reducer;
