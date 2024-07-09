import {Link} from "react-router-dom";
import Skeleton from "./Skeleton.jsx";
import Lottie from "lottie-react";
import empty from "./empty.json";

import {useAddToCartMutation} from "../../api/cartAPI.js";
import {useRemoveFavouriteMutation, useFetchFavourritesQuery} from "../../api/favouritesAPI.js";

const Favourite = () => {
	const [addToCart, {isLoading: cartloading}] = useAddToCartMutation();
	const {data, isLoading, isError} = useFetchFavourritesQuery();
	const favourites = data?.result;

	const [removeFavourite] = useRemoveFavouriteMutation();

	if (favourites?.length === 0 && !isLoading && !isError) {
		return (
			<>
				<div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "100px", height: "50vh"}}>
					<Lottie animationData={empty} style={{width: "20%", height: "60%"}} />
					<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "0px", height: "100vh"}}>
						<h2 style={{fontFamily: "PT Sans", color: "#555"}}>Your favourite is empty, add some products</h2>
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
					{isError || isLoading ? (
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Skeleton />
							<Skeleton />
							<Skeleton />
							<Skeleton />
							<Skeleton />
						</div>
					) : (
						favourites?.map((item) => (
							<div key={item?.id} className='col-lg-3 col-md-6 col-sm-12'>
								<div className='card p-4 rounded-4 text-center'>
									<div
										style={{cursor: "pointer"}}
										onClick={() => removeFavourite({ProductID: item?.id})}
										className='position-absolute top-0 end-0 p-3'
									>
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
												removeFavourite({ProductID: item?.id})
											}}
											className='w-100 rounded-3 p-2 text-white'
											style={{backgroundColor: "#32AA90"}}
										>
											Add To Cart
										</button>
									</Link>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default Favourite;
