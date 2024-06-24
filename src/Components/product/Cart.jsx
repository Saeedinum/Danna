import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../utils/baseURL";

import img from "../../images/image 54.png";
import img2 from "../../images/image 44.png";
import img3 from "../../images/image 55.png";

export default function Cart() {
	const [state, setState] = useState({
		cart: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		const fetchCart = async () => {
			try {
				const response = await axios.get(baseURL + "carts", {
					headers: {
						token: 
						localStorage.getItem("token")
							// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTW9oYW1lZCBPc2FtYSIsInVzZXJJZCI6IjY1ZWE1ZjczZmE0OTk2ZGJlMDNlNTNiNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzExMDkzMDcyfQ.XK5lGtfydIOuFrNBTZn3uML_7hku25jxqbUNAO85LK0",
					},
				});
				console.log(response.data);
				setState({
					cart: response.data,
					loading: false,
					error: null,
				});
			} catch (err) {
				setState({
					cart: null,
					loading: false,
					error: err.message,
				});
			}
		};

		fetchCart();
	}, []);

	const {cart, loading, error} = state;

	const [count, Setcount] = useState(1);
	function inc() {
		Setcount(count + 1);
	}
	function dec() {
		Setcount(count - 1);
	}
	if (loading) {
		return <p>Loading cart...</p>;
	}

	if (error) {
		return <p>Error fetching cart: {error}</p>;
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
					<div className='d-flex justify-content-between mb-4'>
						<div className='div1'>
							<div className='row'>
								<div className='col-sm-8'>
									<div className='d-flex text-center'>
										<img src={img} alt='' className='w-25' />
										<div className='mt-4 fs-6' style={{fontFamily: "PT Sans"}}>
											<ul>
												<li>Soft Rabbit Textile toy</li>
												<li>$80.00</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='col-sm-4'>
									<div className='d-flex mt-4 fs-6 gap-5 justify-content-center'>
										<div className='d-flex gap-2 border' style={{fontFamily: "PT Sans"}}>
											<button className='fs-4 ' onClick={dec}>
												-
											</button>
											<h5 className='mt-2'> {count} </h5>
											<button className='fs-4' onClick={inc}>
												+
											</button>
										</div>
										<div className='remove fs-4'>
											<i className='bi bi-trash3-fill text-danger'></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='div2 mt-4 fs-6' style={{fontFamily: "PT Sans"}}>
							{" "}
							{count * 80}{" "}
						</div>
					</div>
					<div className='d-flex justify-content-between mb-4'>
						<div className='div1'>
							<div className='row'>
								<div className='col-sm-8'>
									<div className='d-flex text-center'>
										<img src={img} alt='' className='w-25' />
										<div className='mt-4 fs-6' style={{fontFamily: "PT Sans"}}>
											<ul>
												<li>Soft Rabbit Textile toy</li>
												<li>$80.00</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='col-sm-4'>
									<div className='d-flex mt-4 fs-6 gap-5 justify-content-center'>
										<div className='d-flex gap-2 border' style={{fontFamily: "PT Sans"}}>
											<button className='fs-4 ' onClick={dec}>
												-
											</button>
											<h5 className='mt-2'> {count} </h5>
											<button className='fs-4' onClick={inc}>
												+
											</button>
										</div>
										<div className='remove fs-4'>
											<i className='bi bi-trash3-fill text-danger'></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='div2 mt-4 fs-6' style={{fontFamily: "PT Sans"}}>
							{" "}
							{count * 80}{" "}
						</div>
					</div>
				</div>
			</div>
			<div className='card border-0 w-50 mt-5 p-4'>
				<h3>Cart Totals</h3>
				<div className='d-flex justify-content-between border-bottom mt-3'>
					<h5>Total</h5>
					<h5>$500.00</h5>
				</div>
				<button
					className='p-2 fs-4 mt-4 text-white'
					style={{
						fontFamily: "PT Sans",
						backgroundColor: "#32AA90",
					}}
				>
					Checkout
				</button>
			</div>
		</div>
	);
}
