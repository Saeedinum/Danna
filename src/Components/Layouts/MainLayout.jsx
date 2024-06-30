import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footor/Footor.jsx";
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
