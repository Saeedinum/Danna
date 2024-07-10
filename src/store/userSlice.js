import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	user: null,
	token: null,
	id: null
};

export const userSlice = createSlice({
	initialState,
	name: "userSlice",
	reducers: {
		logout: () => initialState,
		setUser: (state, action) => {
			state.user = action.payload
		},
		setToken: (state, action) => {
			state.token = action.payload
		},
		setID: (state, action) => {
			state.id = action.payload
			console.log(action)
		},
	},
});

export default userSlice.reducer;
export const {logout, setToken ,setUser , setID} = userSlice.actions;
