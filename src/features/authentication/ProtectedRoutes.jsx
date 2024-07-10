import {jwtDecode} from "jwt-decode";
import {Navigate} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import {setID} from "../../store/userSlice";

export default function ProtectedRoutes({children}) {
	// const dispatch = useDispatch();
	const token = localStorage.getItem("token");

	try {
		const decoded = jwtDecode(token);
		// dispatch(setID(jwtDecode(localStorage.getItem("token"))?.userId));
	} catch (error) {
		localStorage.clear();
		return <Navigate to='/login' />;
	}

	if (token) return children;
	return <Navigate to='/login' />;
}
