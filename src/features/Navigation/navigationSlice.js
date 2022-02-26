import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeMobileDropdown: 'Home',
};

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setActiveMobileDropdown: (state, { payload }) => {
			state.activeMobileDropdown = payload;
		},
	},
});

export const { setActiveMobileDropdown } = navigationSlice.actions;

export const selectActiveMobileDropdown = (state) =>
	state.navigation.activeMobileDropdown;

export default navigationSlice.reducer;
