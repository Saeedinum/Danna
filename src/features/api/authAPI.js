import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {fetchUserById} from "../../store/userSlice";

export const authAPI = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_BASE_URL,
	}),
	endpoints: (builder) => ({
		registerUser: builder.mutation({
			query({fName, lName, email, password, role}) {
				return {
					url: "users",
					method: "POST",
					body: {
						fName: fName,
						lName: lName,
						email: email,
						password: password,
						role: role,
					},
				};
			},
			transformResponse: (result) => result,
		}),

		loginUser: builder.mutation({
			query({email, password}) {
				return {
					url: "/users/login",
					method: "POST",
					body: {
						email: email,
						password: password,
					},
				};
			},
			transformResponse: (result) => result,
			async onQueryStarted(args, {dispatch, queryFulfilled}) {
				const data = await queryFulfilled;
				if (data?.data?.message == "success") {
					dispatch(fetchUserById(data?.data?.token));
				}
			},
		}),
	}),
});

export const {useLoginUserMutation, useRegisterUserMutation} = authAPI;
