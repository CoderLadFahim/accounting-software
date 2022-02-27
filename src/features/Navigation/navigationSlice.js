import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mobileSidebarActive: false,
	activeMobileDropdown: 'Home',
};

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setMobileSidebarActive: (state) => {
			state.mobileSidebarActive = !state.mobileSidebarActive;
		},
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

export const { setActiveMobileDropdown, setMobileSidebarActive } =
	navigationSlice.actions;

export default navigationSlice.reducer;
