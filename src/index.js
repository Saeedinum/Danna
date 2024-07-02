import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/index.css";
import reportWebVitals from "@test/reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Offline} from "react-detect-offline";

import Home from "@pages/Home";
import Login from "@pages/LoginAndSiginup/Login";
import Register from "@pages/LoginAndSiginup/Signup";
import Articles from "@pages/Articles/Articles";
import Doctors from "@pages/Doctors/Doctors";
import Celendar1 from "@pages/celendar/Celendar";
import AboutUs from "@pages/AboutUs";

import DetailsDoctors from "@pages/Doctors/DetailsDoctor";
import ArticleDetails from "@pages/Articles/ArticleDetails";
import ContactUs from "@pages/ContactUs";
import ChatBot from "@pages/ChatBot";
import ProductDesply from "@pages/product/ProductDesply";
import MainLayout from "@layouts/MainLayout.jsx";
import AuthLayout from "@layouts/AuthLayout.jsx";

import ProtectedRoutes from "@components/ProtectedRoutes.jsx";
import Notfound from "@pages/Notfound/Notfound.jsx";
import UpdateProfile from "@pages/UpdateProfile.jsx";
import ProductPage from "@pages/product/ProductPage.jsx";
import ProfileDoctor from "@pages/ProfileDr.jsx";
import Cart from "@pages/Cart.jsx";

import Payment from "@pages/Payment.jsx";
import Favourite from "@pages/Favourite.jsx";
import Questions from "@pages/Questions/Questions.jsx";
import Videos from "@pages/Videos/Videos.jsx";
import QuestionDet from "@pages/Questions/QuestionDetails.jsx";
import ForgetNewPassward from "@pages/Forgetpassword/ForgetNewPassword.jsx";
import ForgetPassward from "@pages/Forgetpassword/ForgetPassword.jsx";
import ForgetPasswardOtp from "@pages/Forgetpassword/ForgetPasswordOtp.jsx";
import Book from "@pages/Book/Book.jsx";
import BookDet from "@pages/Book/BookDetail.jsx";
import PaymentProduct from "@pages/product/paymentProduct.jsx";

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
			{path: "articleDetails/:id", element: <ArticleDetails />},
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className='App'>
			<RouterProvider router={routes} />
			<Offline>
				<div className='offline'>You are Offline Now!</div>
			</Offline>
			<ToastContainer theme='colored' autoClose={3000} />
		</div>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
