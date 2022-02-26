import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userIsAuthenticated: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state) => {
			state.userIsAuthenticated = true;
		},
		logout: (state) => {
			state.userIsAuthenticated = false;
		},
	},
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

export const { login, logout } = authSlice.actions;

export const selectUserIsAuthenticated = (state) =>
	state.auth.userIsAuthenticated;

export default authSlice.reducer;
