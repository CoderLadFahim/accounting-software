import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	category: [],
};

export const categorySlice = createSlice({
	name: 'category',
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

// export const { login, logout } = categorySlice.actions;

// export const selectUserIsAuthenticated = (state) =>
// 	state.category.userIsAuthenticated;

export default categorySlice.reducer;
