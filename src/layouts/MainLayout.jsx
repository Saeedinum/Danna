import Navbar from "../pages/Navbar.jsx";
import Footer from "../pages/Footor.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};
export default MainLayout;
