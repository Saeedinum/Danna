import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
	reducerPath: "productsAPI",
	baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_BASE_URL}),
	endpoints: (builder) => ({
		getProductsByCategory: builder.query({
			query: ({categoryID}) => {
				console.log(categoryID)
				return `products/?category=${categoryID}`;
			},
		}),
	}),
});

export const {useGetProductsByCategoryQuery} = productsAPI;
