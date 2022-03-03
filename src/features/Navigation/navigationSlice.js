import { createSlice } from '@reduxjs/toolkit';
import menus from './menus';

const initialState = {
	mobileSidebarActive: false,
	activeMobileDropdown: 'Home',
	menus,
	//  states after this point are only used in desktop screens
	activeMainMenu: 'Products',
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
		setActiveMainMenu: (state, { payload }) => {
			state.activeMainMenu = payload;
		},
	},
});

export const {
	setActiveMobileDropdown,
	setMobileSidebarActive,
	setActiveMainMenu,
} = navigationSlice.actions;

export default navigationSlice.reducer;
