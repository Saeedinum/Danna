import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Offline} from "react-detect-offline";

import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/signup/Signup.jsx";
import Articles from "./features/articles/Articles.jsx";
import Doctors from "./features/doctors/Doctors.jsx";
import Celendar1 from "./components/calendar/Celendar.jsx";
import AboutUs from "./pages/AboutUs";

import DetailsDoctors from "./features/doctors/DetailsDoctor.jsx";
import ShowArticle from "./features/articles/ShowArticle.jsx";
import ContactUs from "./pages/ContactUs";
import ChatBot from "./pages/ChatBot";
import ProductDesply from "./features//ecommerce/products/ProductDesply.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

import ProtectedRoutes from "./features/authentication/ProtectedRoutes.jsx";
import Notfound from "./pages/error/Notfound.jsx";
import UpdateProfile from "./features/authentication/UpdateProfile.jsx";
import ProductPage from "./features/ecommerce/products/ProductPage.jsx";
import ProfileDoctor from "./features/doctors/ProfileDr.jsx";
import Cart from "./features/ecommerce/cart/Cart.jsx";

import Payment from "./pages/Payment.jsx";
import Favourite from "./features/ecommerce/favourites/Favourite.jsx";
import Questions from "./pages/questions/Questions.jsx";
import Videos from "./features/videos/Videos.jsx";
import QuestionDet from "./pages/questions/QuestionDetails.jsx";
import ForgetNewPassward from "./features/authentication/ForgetNewPassword.jsx";
import ForgetPassward from "./features/authentication/ForgetPassword.jsx";
import ForgetPasswardOtp from "./features/authentication/ForgetPasswordOtp.jsx";
import Book from "./features/booking/Book.jsx";
import BookDet from "./features/booking/BookDetail.jsx";
import PaymentProduct from "./features/ecommerce/products/paymentProduct.jsx";

import {Provider} from "react-redux";
import store from "./store/store.js";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{index: true, element: <Home />},
			{path: "signup", element: <Register />},
			{path: "login", element: <Login />},
			{path: "profile", element: <UpdateProfile />},
			{path: "home", element: <Home />},
			{path: "articles", element: <Articles />},
			{path: "articleDetails/:id", element: <ShowArticle />},
			{path: "doctors", element: <Doctors />},
			{path: "celendar1", element: <Celendar1 />},
			{path: "aboutus", element: <AboutUs />},
			{path: "detailsdoctors/:doctorID", element: <DetailsDoctors />},
			{path: "productpage", element: <ProductPage />},
			{path: "profiledr", element: <ProfileDoctor />},
			{path: "contactus", element: <ContactUs />},
			{
				path: "chatbot",
				element: (
					<ProtectedRoutes>
						<ChatBot />
					</ProtectedRoutes>
				),
			},
			{path: "productDesply/:productID", element: <ProductDesply />},
			{
				path: "Cart",
				element: (
					<ProtectedRoutes>
						<Cart />
					</ProtectedRoutes>
				),
			},
			{path: "payment", element: <Payment />},
			{path: "videos/:id?", element: <Videos />},
			{
				path: "favourite",
				element: (
					<ProtectedRoutes>
						<Favourite />
					</ProtectedRoutes>
				),
			},
			{path: "Questions", element: <Questions />},
			{path: "QuestionDet", element: <QuestionDet />},
			{path: "ForgetNewPassword", element: <ForgetNewPassward />},
			{path: "ForgetPassword", element: <ForgetPassward />},
			{path: "ForgetPasswardOtp", element: <ForgetPasswardOtp />},
			{path: "Book", element: <Book />},
			{path: "Bookdetail", element: <BookDet />},
			{
				path: "PayProduct",
				element: (
					<ProtectedRoutes>
						<PaymentProduct />
					</ProtectedRoutes>
				),
			},
			{path: "*", element: <Notfound />},
		],
	},
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{path: "signup", element: <Register />},
			{path: "login", element: <Login />},
		],
	},
]);

// if (process.env.NODE_ENV === "production") {
// 	if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
// 		for (const [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
// 			window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value === "function" ? () => {} : null;
// 		}
// 	}
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className='App'>
				<Provider store={store}>
					<RouterProvider router={routes} />
				</Provider>
			<Offline>
				<div className='offline'>You are Offline Now!</div>
			</Offline>
			<ToastContainer theme='colored' autoClose={3000} />
		</div>
	</React.StrictMode>,
);
