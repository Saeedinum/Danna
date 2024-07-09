import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const favouritesAPI = createApi({
	reducerPath: "favouritesAPI",
	baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_BASE_URL}),
	endpoints: (builder) => ({
		fetchFavourrites: builder.query({
			query: () => ({
				url: `wishlist`,
				headers: {
					token: localStorage.getItem("token"),
				},
			}),
		}),

		addToFavourites: builder.mutation({
			query: ({ProductID}) => ({
				url: "wishlist",
				method: "PATCH",
				headers: {
					token: localStorage.getItem("token"),
				},
				body: {
					product: ProductID,
				},
			}),
		}),

		removeFavourite: builder.mutation({
			query: ({ProductID}) => ({
				url: "wishlist",
				method: "DELETE",
				headers: {
					token: localStorage.getItem("token"),
				},
				body: {
					product: ProductID,
				},
			}),
		}),
	}),
});

export const {useAddToFavouritesMutation, useFetchFavourritesQuery, useRemoveFavouriteMutation} = favouritesAPI;
