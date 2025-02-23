import {RouterProvider, createBrowserRouter} from "react-router-dom";

import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import Register from "../pages/signup/Signup.jsx";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ChatBot from "../pages/ChatBot";
import Notfound from "../pages/error/Notfound.jsx";
import Payment from "../pages/Payment.jsx";
import Questions from "../pages/Questions/Questions.jsx";
import QuestionDet from "../pages/Questions/QuestionDetails.jsx";

import Articles from "../features/articles/Articles.jsx";
import ShowArticle from "../features/articles/ShowArticle.jsx";

import Doctors from "../features/doctors/Doctors.jsx";
import DetailsDoctors from "../features/doctors/DetailsDoctor.jsx";

import ShowProduct from "../features/ecommerce/products/ShowProduct.jsx";
import ProductsPage from "../features/ecommerce/products/ProductsPage.jsx";
import Cart from "../features/ecommerce/cart/Cart.jsx";
import Favourite from "../features/ecommerce/favourites/Favourite.jsx";
import PaymentProduct from "../features/ecommerce/cart/paymentProduct.jsx";

import ProtectedRoutes from "../features/authentication/ProtectedRoutes.jsx";
import UpdateProfile from "../features/authentication/UpdateProfile.jsx";
import ForgetPassword from "../features/authentication/forget/ForgetPassword.jsx";

import ProfileDoctor from "../features/doctors/ProfileDr.jsx";
import Videos from "../features/videos/Videos.jsx";

import Book from "../features/booking/Book.jsx";
import BookDet from "../features/booking/BookDetail.jsx";

import Celendar1 from "../components/calendar/Celendar.jsx";

import MainLayout from "../layouts/MainLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";

const Router = () => {
	return (
		<RouterProvider
			router={createBrowserRouter([
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
						{path: "productpage/:id?", element: <ProductsPage />},
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
						{path: "productDesply/:productID", element: <ShowProduct />},
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
						{
							path: "Questions",
							element: <Questions />,
						},
						{
							path: "QuestionDet",
							element: <QuestionDet />,
						},

						{
							path: "ForgetPassword",
							element: <ForgetPassword />,
						},

						{
							path: "Book",
							element: <Book />,
						},

						{
							path: "Bookdetail",
							element: <BookDet />,
						},
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
			])}
		/>
	);
};

export default Router;
