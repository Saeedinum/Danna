import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {baseURL} from "@utils/baseURL";

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
					favourite: response.data.result,
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
	console.log(state.favourite);
	const addToCart = async (idProduct) => {
		try {
			const response = await axios.post(
				baseURL + "carts",
				{product: idProduct},
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
			const response = await axios.delete(baseURL + "wishlist", {
				headers: {
					token: localStorage.getItem("token") ?? navigate("/login"),
				},
				data: {product: idProduct},
			});
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
					{state?.favourite?.map((item) => (
						<div key={item?.id} className='col-lg-3 col-md-6 col-sm-12'>
							<div className='card p-4 rounded-4 text-center'>
								<div style={{cursor: "pointer"}} onClick={() => removeFromWishlist(item?.id)} className='position-absolute top-0 end-0 p-3'>
									<i className='bi bi-x-lg'></i>
								</div>
								<div className='text-center'>
									<img src={item?.imageCover?.url} className='card-img-top w-50' alt='...' />
								</div>
								<div className='card-body'>
									<p className='card-text'>{item?.category?.name}</p>
									<h5 className='card-title fw-bold'>{item?.title}</h5>
									<div className='d-flex justify-content-center gap-3'>
										<del>{item?.price ? new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(item?.price) : ""}</del>
										<p className='card-text'>{new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(item?.finalPrice)}</p>
									</div>
								</div>
								<Link>
									<button
										onClick={() => {
											addToCart(item?.id);
											removeFromWishlist(item?.id);
										}}
										className='w-100 rounded-3 p-2 text-white'
										style={{backgroundColor: "#32AA90"}}
									>
										Add To Cart
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
