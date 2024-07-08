import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cartAPI = createApi({
	reducerPath: "cartAPI",
	baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_BASE_URL}),
	endpoints: (builder) => ({
		fetchCart: builder.query({
			query: () => ({
				url: `carts`,
				headers: {
					token: localStorage.getItem("token"),
				},
			}),
		}),

		addToCart: builder.mutation({
			query: ({ProductID}) => ({
				url: "carts",
				method: "POST",
				headers: {
					token: localStorage.getItem("token"),
				},
				data: {
					ProductID
				},
			}),
		}),
	}),
});

export const {useAddToCartMutation} = cartAPI;
