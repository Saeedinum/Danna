import {RouterProvider, createBrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {Offline} from "react-detect-offline";

import Home from "@Components/Home";
import Login from "@Components/LoginAndSiginup/Login";
import Register from "@Components/LoginAndSiginup/Signup";
import Articles from "@Components/Articles/Articles";
import Doctors from "@Components/Doctors/Doctors";
import Celendar1 from "@Components/Doctors/celendar/Celendar";
import AboutUs from "@Components/AboutUs/AboutUs";
import DetailsDoctors from "@Components/Doctors/DetailsDoctor";
import ArticleDetails from "@Components/Articles/ArticleDetails";
import ContactUs from "@Components/ContactUs/ContactUs";
import ChatBot from "@Components/Chatbot/ChatBot";
import ProductDesply from "@Components/product/ProductDesply";
import MainLayout from "@Components/Layouts/MainLayout.jsx";
import ProtectedRoutes from "@Components/ProtectedRoutes/ProtectedRoutes.jsx";
import Notfound from "@Components/Notfound/Notfound.jsx";
import AuthLayout from "@Components/Layouts/AuthLayout.jsx";
import UpdateProfile from "@Components/UpdateProfile/UpdateProfile.jsx";
import ProductPage from "@Components/product/ProductPage.jsx";
import ProfileDoctor from "@Components/profile/ProfileDr.jsx";
import Cart from "@Components/product/Cart.jsx";
import Payment from "@Components/Payment/Payment.jsx";
import Favourite from "@Components/product/Favourite.jsx";
import Questions from "@Components/Questions/Questions.jsx";
import Videos from "@Components/Videos/Videos.jsx";
import QuestionDet from "@Components/Questions/QuestionDetails.jsx";
import ForgetNewPassward from "@Components/Forgetpassword/ForgetNewPassword.jsx";
import ForgetPassward from "@Components/Forgetpassword/ForgetPassword.jsx";
import ForgetPasswardOtp from "@Components/Forgetpassword/ForgetPasswordOtp.jsx";
import Book from "@Components/Book/Book.jsx";
import BookDet from "@Components/Book/BookDetail.jsx";
import PaymentProduct from "@Components/product/paymentProduct.jsx";

function App() {
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

				// { path: "product-details/:id", element: <ProtectedRoutes> <ProductDetails /></ProtectedRoutes> },
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
	return (
		<div className='App'>
			<RouterProvider router={routes} />
			<Offline>
				<div className='offline'>You are Offline Now!</div>
			</Offline>
			<ToastContainer theme='colored' autoClose={3000} />
		</div>
	);
}

export default App;
