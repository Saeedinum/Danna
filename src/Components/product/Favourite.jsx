import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {baseURL} from "../../utils/baseURL";

import toy from "../../images/toycateg.png";

export default function Favourite() {
	const navigate = useNavigate();
	const [state, setState] = useState({
		favourite: [],
		loading: true,
		error: null,
	});

	useEffect(() => {
		const fetchWishlist = async () => {
			try {
				const response = await axios.get(baseURL + "wishlist", {
					headers: {
						token: localStorage.getItem("token") ?? navigate("/login"),
					},
				});
				console.log(response.data);
				setState({
					favourite: response.data,
					loading: false,
					error: null,
				});
			} catch (err) {
				setState({
					favourite: null,
					loading: false,
					error: err.message,
				});
			}
		};

		fetchWishlist();
	}, []);

	const addToCart = async (idProduct) => {
		try {
			const response = await axios.post(
				baseURL + "carts",
				{idProduct},
				{
					headers: {
						token: localStorage.getItem("token") ?? navigate("/login"),
					},
				},
			);
			console.log("Product added to cart:", response.data);
		} catch (err) {
			console.error("Error adding product to cart:", err.message);
		}
	};

	const removeFromWishlist = async (idProduct) => {
		try {
			const response = await axios.delete(
				//! waiting for fake data to be added in whishlist ❌
				baseURL + "wishlist",
				{idProduct},
				{
					headers: {
						token: localStorage.getItem("token") ?? navigate("/login"),
					},
				},
			);
			console.log("Product removed from wishlist:", response.data);
			setState((prevState) => ({
				...prevState,
				favourite: prevState.favourite.filter((item) => item.id !== idProduct),
			}));
		} catch (err) {
			console.error("Error removing product from wishlist:", err.message);
		}
	};

	return (
		<div className='container'>
			<div className='d-flex justify-content-between mt-2 border-bottom'>
				<h1>Your Favourite</h1>
				<Link to={`/productpage`}>
					<div className='mt-2'>
						<i className='bi bi-arrow-90deg-right rounded-3 text-white p-2' style={{backgroundColor: "#32AA90"}}></i>
					</div>
				</Link>
			</div>
			<div className='mt-5'>
				<div className='row gy-4'>
					{
						//! waiting for fake data to be added in whishlist ❌
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<div className='card p-4 rounded-4 text-center'>
								<div className='position-absolute top-0 end-0 p-3'>
									<i className='bi bi-x-lg'></i>
								</div>
								<div className='text-center'>
									<img src={toy} className='card-img-top w-50' alt='...' />
								</div>
								<div className='card-body'>
									<p className='card-text'>Toys</p>
									<h5 className='card-title fw-bold'>Girls Milk Bottles</h5>
									<div className='d-flex justify-content-center gap-3'>
										<del>$280.00</del>
										<p className='card-text'>$80.00</p>
									</div>
								</div>
								<Link>
									<button
										onClick={() => {
											addToCart("idProduct");
											removeFromWishlist("idProduct");
										}}
										className='w-100 rounded-3 p-2 text-white'
										style={{backgroundColor: "#32AA90"}}
									>
										Add To Cart
									</button>
								</Link>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	);
}
