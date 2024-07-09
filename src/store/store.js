import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {articlesAPI} from "../features/api/articlesAPI.js";
import {productsAPI} from "../features/api/productsAPI.js";
import {cartAPI} from "../features/api/cartAPI.js";
import {favouritesAPI} from "../features/api/favouritesAPI.js";

const store = configureStore({
	reducer: {
		[articlesAPI.reducerPath]: articlesAPI.reducer,
		[productsAPI.reducerPath]: productsAPI.reducer,
		[cartAPI.reducerPath]: cartAPI.reducer,
		[favouritesAPI.reducerPath]: favouritesAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(articlesAPI.middleware, productsAPI.middleware, cartAPI.middleware, favouritesAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
