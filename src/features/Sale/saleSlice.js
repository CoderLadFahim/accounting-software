import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sales: [],
};

export const salesSlice = createSlice({
	name: 'sales',
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

// export const { login, logout } = salesSlice.actions;

// export const selectUserIsAuthenticated = (state) =>
// 	state.sales.userIsAuthenticated;

export default salesSlice.reducer;
