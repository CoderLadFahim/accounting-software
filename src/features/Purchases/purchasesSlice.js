import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	purchases: [],
};

export const purchasesSlice = createSlice({
	name: 'purchases',
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

// export const { login, logout } = purchasesSlice.actions;

// export const selectUserIsAuthenticated = (state) =>
// 	state.purchases.userIsAuthenticated;

export default purchasesSlice.reducer;
