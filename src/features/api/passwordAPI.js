import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const passwordAPI = createApi({
	reducerPath: "passwordAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_BASE_URL,
	}),
	endpoints: (builder) => ({
		sendOTP: builder.query({
			query({email}) {
				return {
					url: "users/forgetPassword",
					method: "POST",
					body: {
						email: email,
					},
				};
			},
			transformResponse: (result) => result,
		}),

		verifyForgetPassword: builder.mutation({
			query({email, newpassword, OTP, id}) {
				return {
					url: `users/forgetPassword${id}`,
					method: "PATCH",
					body: {
						email: email,
						newPassword: newpassword,
						otpCode: OTP,
					},
				};
			},
			transformResponse: (result) => result,
			async onQueryStarted(args, {dispatch, queryFulfilled}) {
				const data = await queryFulfilled;
				console.log(data)
			},
		}),
	}),
});

export const {useSendOTPQuery , useVerifyForgetPasswordMutation} = passwordAPI;
