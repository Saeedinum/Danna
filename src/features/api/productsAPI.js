import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {createEntityAdapter} from "@reduxjs/toolkit";

export const productsAPI = createApi({
	reducerPath: "productsAPI",
	baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_BASE_URL}),
	tagTypes: ["products"],
	endpoints: (builder) => ({
		getProductsByCategory: builder.query({
			query: ({categoryID}) => {
				return `products/?category=${categoryID}`;
			},
		}),
		getCategories: builder.query({
			query: () => `categories`,
		}),
	}),
});

export const {useGetProductsByCategoryQuery, useGetCategoriesQuery} = productsAPI;
