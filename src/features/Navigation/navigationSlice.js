import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	navigation: [],
};

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {},
});

// export const { login, logout } = navigationSlice.actions;

// export const selectUserIsAuthenticated = (state) =>
// 	state.navigation.userIsAuthenticated;

export default navigationSlice.reducer;
