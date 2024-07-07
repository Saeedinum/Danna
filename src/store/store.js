import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {articlesAPI} from "../features/api/articlesAPI.js";
import {productsAPI} from "../features/api/productsAPI.js";

const store = configureStore({
	reducer: {
		[articlesAPI.reducerPath]: articlesAPI.reducer,
		[productsAPI.reducerPath]: productsAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articlesAPI.middleware).concat(productsAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
