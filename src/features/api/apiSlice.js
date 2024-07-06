import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_BASE_URL}),
	endpoints: (builder) => ({
		getArticles: builder.query({query: () => "articles"}),
		getPopularArticles: builder.query({
			query: () => ({
				url: "articles",
				params: {
					sort: "-likes,-comments",
				},
			}),
		}),
		sendComment: builder.mutation({
			query: ({articleID, comment}) => ({
				url: "article-comments",
				method: "POST",
				data: {
					comment: comment,
					article: articleID,
				},
				headers: {
					token: localStorage.getItem("token"),
				},
			}),
		}),
		toggleLike: builder.mutation({
			query: ({articleID, method}) => ({
				url: `articles/likes/${articleID}`,
				method: method,
				headers: {
					token: localStorage.getItem("token"),
				},
			}),
		}),
	}),
});

export const {useGetArticlesQuery, useGetPopularArticlesQuery, useSendCommentMutation, useToggleLikeMutation} = apiSlice;
