import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {jwtDecode} from "jwt-decode";

const initialState = {
	user: null,
	token: null,
	id: null,
};

export const fetchUserById = createAsyncThunk("users/fetchByIdStatus", async (token) => {
	const id = jwtDecode(token)?.userId;
	const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}users/${id}`, {
		headers: {
			token: token,
		},
	}).then((data) => data.json());
	return {
		user: res.result,
		id: id,
		token: token,
	};
});

export const userSlice = createSlice({
	initialState,
	name: "userSlice",
	reducers: {
		logout: () => initialState,
	},

	extraReducers: (builder) => {
		builder.addCase(fetchUserById.fulfilled, (state, action) => {
			state.token = action.payload.token;
			state.id = action.payload.id;
			state.user = action.payload.user;
		});
	},
});

export default userSlice.reducer;
export const {logout} = userSlice.actions;
