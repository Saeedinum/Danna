import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footor/Footor.jsx";
import {Outlet} from "react-router-dom";

export default function MainLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
