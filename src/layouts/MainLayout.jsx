import Navbar from "./Navbar.jsx";
import Footer from "./Footor.jsx";
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
