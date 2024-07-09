import {Link, useNavigate} from "react-router-dom";
import Skeleton from "./Skeleton.jsx";
import Lottie from "lottie-react";
import emptyCart from "./emptyCart.json";

import {useFetchCartQuery, useUpdataItemMutation} from "../../api/cartAPI.js";

const Cart = () => {
	const {data, isLoading, isError, refetch} = useFetchCartQuery();
	const cart = data?.cart;

	const [updateItem, {isLoading: LoadingUpdate}] = useUpdataItemMutation();

	const navigate = useNavigate();

	const incrementItem = async (productID) => {
		const item = cart.cartItems.find((item) => item.product._id === productID);
		const newQuantity = item.quantity + 1;
		updateItem({itemID: productID, newQuantity: newQuantity});
		refetch();
	};

	const decrementItem = async (productID) => {
		const item = cart.cartItems.find((item) => item.product._id === productID);
		const newQuantity = item.quantity - 1;
		updateItem({itemID: productID, newQuantity: newQuantity});
		refetch();
	};

	const removeItem = async (cartItemID) => updateItem({itemID: cartItemID, quantity: 0});

	if (isLoading || isError) {
		return (
			<>
				<div
					style={{
						marginLeft: "200px",
					}}
				>
					<Skeleton />;
				</div>
			</>
		);
	}

	if (cart.length === 0 && !isError && !isLoading) {
		return (
			<>
				<div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "100px", height: "50vh"}}>
					<Lottie animationData={emptyCart} style={{width: "20%", height: "60%"}} />
					<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "0px", height: "100vh"}}>
						<h2 style={{fontFamily: "PT Sans", color: "#555"}}>Your cart is empty, add some products</h2>
						<Link to={`/productpage`} style={{marginTop: "10px", textDecoration: "none"}}>
							<button
								style={{
									padding: "10px 20px",
									fontSize: "16px",
									color: "white",
									backgroundColor: "#32AA90",
									border: "none",
									borderRadius: "5px",
									cursor: "pointer",
									marginTop: "10px",
								}}
							>
								Go to Products
							</button>
						</Link>
					</div>
				</div>
			</>
		);
	}

	return (
		<div className='container'>
			<div className='d-flex justify-content-between mt-2'>
				<h1>Your Cart</h1>
				<Link to={`/productpage`}>
					<div className='mt-2'>
						<i className='bi bi-arrow-90deg-right rounded-3 text-white p-2' style={{backgroundColor: "#32AA90"}}></i>
					</div>
				</Link>
			</div>
			<div className='cart mt-4'>
				<div className='d-flex justify-content-between border-bottom '>
					<h5 style={{color: "rgba(0, 0, 0, 0.33)"}}>Product</h5>
					<h5 style={{color: "rgba(0, 0, 0, 0.33)"}}>Total</h5>
				</div>
				<div className='product border-bottom'>
					{cart.cartItems.map((item, index) => (
						<div key={index} className='d-flex justify-content-between mb-4'>
							<div className='div1'>
								<div className='row'>
									<div className='col-sm-8'>
										<div className='d-flex text-center'>
											<img src={item.product.imageCover.url} alt={item.product.title} className='w-25' />
											<div className='mt-4 fs-6' style={{fontFamily: "PT Sans"}}>
												<ul>
													<li>{item.product.title}</li>
													<li>{new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(item.product.price)}</li>
												</ul>
											</div>
										</div>
									</div>
									<div className='col-sm-4'>
										<div className='d-flex mt-4 fs-6 gap-5 justify-content-center'>
											<div className='d-flex gap-2 border' style={{fontFamily: "PT Sans"}}>
												<button className='fs-4 ' onClick={() => decrementItem(item.product._id)}>
													-
												</button>
												<h5 className='mt-2'>{item.quantity}</h5>
												<button className='fs-4' onClick={() => incrementItem(item.product._id)}>
													+
												</button>
											</div>
											<div className='remove fs-4'>
												<button onClick={() => removeItem(item._id)}>
													<i className='bi bi-trash3-fill text-danger'></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='div2 mt-4 fs-6' style={{fontFamily: "PT Sans"}}>
								{new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(item.product.price * item.quantity)}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='card border-0 w-50 mt-5 p-4'>
				<h3>Cart Totals</h3>
				<div className='d-flex justify-content-between border-bottom mt-3'>
					<h5>Total</h5>
					<h5>{new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(cart.totalPrice)}</h5>
				</div>
				<button
					className='p-2 fs-4 mt-4 text-white'
					style={{
						fontFamily: "PT Sans",
						backgroundColor: "#32AA90",
					}}
					onClick={() => navigate("/PayProduct")}
				>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default Cart;
