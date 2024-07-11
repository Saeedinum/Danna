import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {articlesAPI} from "../features/api/articlesAPI.js";
import {productsAPI} from "../features/api/productsAPI.js";
import {cartAPI} from "../features/api/cartAPI.js";
import {favouritesAPI} from "../features/api/favouritesAPI.js";
import {authAPI} from "../features/api/authAPI.js";
import {passwordAPI} from "../features/api/passwordAPI.js";
import userReducer from "./userSlice.js";

const store = configureStore({
	reducer: {
		[articlesAPI.reducerPath]: articlesAPI.reducer,
		[productsAPI.reducerPath]: productsAPI.reducer,
		[cartAPI.reducerPath]: cartAPI.reducer,
		[favouritesAPI.reducerPath]: favouritesAPI.reducer,
		[authAPI.reducerPath]: authAPI.reducer,
		[passwordAPI.reducerPath]: passwordAPI.reducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			articlesAPI.middleware,
			authAPI.middleware,
			productsAPI.middleware,
			cartAPI.middleware,
			passwordAPI.middleware,
			favouritesAPI.middleware,
		),
});

setupListeners(store.dispatch);

export default store;
