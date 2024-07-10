import {jwtDecode} from "jwt-decode";
import {Navigate} from "react-router-dom";

export default function ProtectedRoutes({children}) {
	const token = localStorage.getItem("token");

	try {
		const decoded = jwtDecode(token);
	} catch (error) {
		localStorage.clear();
		return <Navigate to='/login' />;
	}

	if (token) return children;
	return <Navigate to='/login' />;
}
