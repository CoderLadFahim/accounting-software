import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
	userIsAuthenticated: false,
};

export const incrementAsync = createAsyncThunk(
	'counter/fetchCount',
	async (amount) => {
		const response = await fetchCount(amount);
		// The value we return becomes the `fulfilled` action payload
		return response.data;
	}
);

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
		builder
			.addCase(incrementAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(incrementAsync.fulfilled, (state, action) => {
				state.status = 'idle';
				state.value += action.payload;
			});
	},
});

export const { login, logout } = authSlice.actions;

export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
	const currentValue = selectCount(getState());
	if (currentValue % 2 === 1) {
		dispatch(incrementByAmount(amount));
	}
};

export default authSlice.reducer;
