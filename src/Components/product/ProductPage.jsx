import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {baseURL} from "../../utils/baseURL";

import categ2 from "../../images/toy2.png";
import seller from "../../images/seller.png";

import Carousel from "react-bootstrap/Carousel";
import CardGroup from "react-bootstrap/CardGroup";
import CategorySkeleton from "../skeleton/categorySkeleton";
import ProductSkeleton from "../skeleton/productSkeleton";

export default function ProductPage() {
	const navigate = useNavigate();
	const [categories, setCategories] = useState({
		result: [],
		error: "",
	});

	const [products, setProducts] = useState({
		result: [],
		error: "",
		loading: "",
	});

	useEffect(() => {
		axios
			.get(baseURL + "categories")
			.then((response) => {
				setCategories(response.data);
			})
			.catch((error) => {
				setCategories({
					result: [],
					error: "Error fetching categories",
				});
				console.error(error);
			});
	}, []);

	const fetchProductsByCategory = (categoryId) => {
		console.log(categoryId);
		axios
			.get(`${baseURL}products?category=${categoryId}`)
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				setProducts({
					result: [],
					error: "Error fetching products",
				});
				console.error("There was an error fetching the products!", error);
			});
	};

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

	const [favorites, setFavorites] = useState({});
	useEffect(() => {
		if (localStorage.getItem("token")) {
			const fetchWishlist = async () => {
				try {
					const response = await axios.get(baseURL + "wishlist", {
						headers: {
							token: localStorage.getItem("token"),
						},
					});
					console.log(response);
					response.data.result.map((product) => {
						setFavorites((prevFavorites) => ({
							...prevFavorites,
							[product._id]: true,
						}));
					});
				} catch (err) {
					console.log(err.message);
				}
			};
			fetchWishlist();
		}
	}, []);

	const toggleFavorite = async (idProduct) => {
		const isFavorite = favorites[idProduct];
		setFavorites((prevFavorites) => ({
			...prevFavorites,
			[idProduct]: !isFavorite,
		}));
		if (isFavorite) {
			console.log("remove from favorite " + idProduct);
			console.log(" token " + localStorage.getItem("token"));
			try {
				const response = await axios.delete(baseURL + "wishlist", {
					headers: {
						token: localStorage.getItem("token") ?? navigate("/login"),
					},
					data: {product: idProduct}, // Add the data payload here
				});
				console.log("Product removed from favorite:", response.data);
			} catch (err) {
				console.error("❌Error removing product from favorite:", err.message);
			}
		} else {
			console.log("add   " + idProduct);
			console.log(" token " + localStorage.getItem("token"));
			try {
				const response = await axios.patch(
					baseURL + "wishlist",
					{product: idProduct},
					{
						headers: {
							token: localStorage.getItem("token") ?? navigate("/login"),
						},
					},
				);
				console.log("Product added to favorite:", response.data);
			} catch (err) {
				console.log(err.message);
			}
		}
	};

	return (
		<div
			className='productpage'
			style={{
				fontFamily: "PT Sans",
			}}
		>
			<div className='sec1'>
				<div className='container'>
					<Carousel>
						<Carousel.Item>
							<CardGroup>
								{categories.result.length > 0 ? (
									categories.result.map((categori) => (
										<div className='card p-2 text-center border-0' key={categori._id} onClick={() => fetchProductsByCategory(categori._id)}>
											<img src={categori.image.url} style={{width: "100px"}} className='card-img-top rounded-circle ms-4' alt={categori.title} />
											<div className='card-body'>
												<h5 className='card-title'>{categori.title}</h5>
											</div>
										</div>
									))
								) : (
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<CategorySkeleton />
										<CategorySkeleton />
										<CategorySkeleton />
										<CategorySkeleton />
										<CategorySkeleton />
									</div>
								)}
							</CardGroup>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
			<div className='sec2 mt-5'>
				<div className='container'>
					<div className='content text-center'>
						<h1 className=''>Best Seller</h1>
						<p className='text-muted'>
							Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod temp.
						</p>
					</div>
					<div className='mt-5'>
						<Carousel>
							<Carousel.Item>
								<div className='row gy-4 d-flex justify-content-center'>
									<div className='col-sm-4'>
										<div className='card h-100'>
											<img src={categ2} className='card-img-top' alt='...' />
											<div className='card-body text-center'>
												<p className='card-text'>Toys</p>
												<h5 className='card-title'>Girls Milk Bottles</h5>
												<p className='card-text'>$80.00</p>
												<button
													className='btn w-100 text-white'
													style={{
														backgroundColor: "rgba(50, 170, 144, 1)",
													}}
												>
													Add To Cart
												</button>
											</div>
										</div>
									</div>
									<div className='col-sm-6'>
										<div className='card border h-100'>
											<img src={seller} className='h-100' alt='' />
										</div>
									</div>
								</div>
							</Carousel.Item>
							<Carousel.Item>
								<div className='row gy-4 d-flex justify-content-center'>
									<div className='col-sm-4'>
										<div className='card h-100'>
											<img src={categ2} className='card-img-top' alt='...' />
											<div className='card-body text-center'>
												<p className='card-text'>Toys</p>
												<h5 className='card-title'>Girls Milk Bottles</h5>
												<p className='card-text'>$80.00</p>
												<button
													className='btn w-100 text-white'
													style={{
														backgroundColor: "rgba(50, 170, 144, 1)",
													}}
												>
													Add To Cart
												</button>
											</div>
										</div>
									</div>
									<div className='col-sm-6'>
										<div className='card border h-100'>
											<img src={seller} className='h-100' alt='' />
										</div>
									</div>
								</div>
							</Carousel.Item>
							<Carousel.Item>
								<div className='row gy-4 d-flex justify-content-center'>
									<div className='col-sm-4'>
										<div className='card h-100'>
											<img src={categ2} className='card-img-top' alt='...' />
											<div className='card-body text-center'>
												<p className='card-text'>Toys</p>
												<h5 className='card-title'>Girls Milk Bottles</h5>
												<p className='card-text'>$80.00</p>
												<button
													className='btn w-100 text-white'
													style={{
														backgroundColor: "rgba(50, 170, 144, 1)",
													}}
												>
													Add To Cart
												</button>
											</div>
										</div>
									</div>
									<div className='col-sm-6'>
										<div className='card border h-100'>
											<img src={seller} className='h-100' alt='' />
										</div>
									</div>
								</div>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
			<br />
			<br />
			<div className='sec3 mt-5'>
				<div className='container'>
					<div className='content text-center'>
						<h1>Start Broweing</h1>
						<p className='text-muted'>
							Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod temp.
						</p>
					</div>
					<div className='mt-5'>
						<div className='row gy-4'>
							{products.result.length > 0 ? (
								products.result.map((product) => (
									<div key={product._id} className='col-lg-3 col-md-6 col-sm-12'>
										<div className='card p-4 rounded-4 text-center'>
											<div className='position-absolute top-0 end-0 p-3'>
												<button onClick={() => toggleFavorite(product._id)} className='btn'>
													<i className={`bi ${favorites[product._id] ? "bi-heart-fill" : "bi-heart"} text-danger fs-5`}></i>
												</button>
											</div>
											<div className='text-center'>
												<img src={product.imageCover.url} className='card-img-top w-50' alt={product.title} />
											</div>
											<Link to={`/productDesply/${product._id}`}>
												<div className='card-body'>
													<p className='card-text text-dark'>Toys</p>
													<h5 className='card-title fw-bold text-dark'>Girls Milk Bottles</h5>
													<div className='d-flex justify-content-center gap-3'>
														<del
															style={{
																color: "rgba(0, 0, 0, 0.64)",
															}}
														>
															{product.price}
														</del>
														<p className='card-text text-dark'>{product.finalPrice}</p>
													</div>
												</div>
											</Link>
											<Link to={`/Cart`}>
												<button onClick={() => addToCart(product.id)} className='w-100 rounded-3 p-2 text-white' style={{backgroundColor: "#32AA90"}}>
													Add To Cart
												</button>
											</Link>
										</div>
									</div>
								))
							) : (
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<ProductSkeleton />
									<ProductSkeleton />
									<ProductSkeleton />
									<ProductSkeleton />
									<ProductSkeleton />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
