import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeMobileDropdown: 'Home',
};

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setActiveMobileDropdown: (state, { payload }) => {
			// setting the active dropdown to be an empty string if user click on an already-active link
			if (payload === state.activeMobileDropdown) {
				if (payload === 'Home') return;
				state.activeMobileDropdown = '';
				return;
			}
			state.activeMobileDropdown = payload;
		},
	},
});

export const { setActiveMobileDropdown } = navigationSlice.actions;

export const selectActiveMobileDropdown = (state) =>
	state.navigation.activeMobileDropdown;

export default navigationSlice.reducer;
