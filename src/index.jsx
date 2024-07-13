import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import {ToastContainer} from "react-toastify";
import {Offline} from "react-detect-offline";

import Router from "./router/Router.jsx";

import {Provider} from "react-redux";
import store from "./store/store.js";

// if (process.env.NODE_ENV === "production") {
// 	if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
// 		for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
// 			window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === "function" ? () => {} : null;
// 		}
// 	}
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<div className='App'>
		<Provider store={store}>
			<Router />
		</Provider>
		<Offline>
			<div className='offline'>You are Offline Now!</div>
		</Offline>
		<ToastContainer theme='colored' autoClose={3000} />
	</div>,
	// </React.StrictMode>,
);
