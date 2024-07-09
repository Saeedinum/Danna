import {useState, useRef} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import jir from "../../../assets/JIRAFF.png";
import user from "../../../assets/user.jpg";
import {ImageCoverSkeleton, SideImagesSkeleton, TitleSkeleton, DescriptionSkeleton} from "./skeleton/ShowProductSkeleton";
import currencyFormat from "../../../utils/currencyFormat";
import {useGetProductQuery} from "../../api/productsAPI";
import {useFetchFavourritesQuery, useAddToFavouritesMutation, useRemoveFavouriteMutation} from "../../api/favouritesAPI";
import {useAddToCartMutation} from "../../api/cartAPI";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const ShowProduct = () => {
	const {productID} = useParams();

	const [section, setSection] = useState(1);

	const {data, isLoading, isError} = useGetProductQuery({productID: productID});

	const {data: wishlist, isLoading: favouriteLoading} = useFetchFavourritesQuery();
	const [isInWishlist, setIsInWishlist] = useState(wishlist?.result.some((item) => item._id === productID));

	const [addToFavourites] = useAddToFavouritesMutation();
	const [removeFavourite] = useRemoveFavouriteMutation();

	const toggleFavorite = async (idProduct) => {
		if (isInWishlist) {
			removeFavourite({ProductID: idProduct});
		} else {
			addToFavourites({ProductID: idProduct});
		}
	};

	const quantityRef = useRef(null);

	const [addToCart, {isLoading: cartloading, error: ierror}] = useAddToCartMutation();

	return (
		<div
			className='productdesplay'
			style={{
				fontFamily: "PT Sans",
			}}
		>
			<div className='container'>
				<div className='sec1'>
					<div className='row'>
						<div className=' col-lg-6 col-md-12 '>
							<div className='row'>
								<div className='col-sm-3 '>
									<div className='d-flex flex-column bd-highlight mb-3'>
										{isLoading ? (
											<SideImagesSkeleton count={4} height={100} />
										) : (
											data.result?.images.map((image) => (
												<div key={image._id} className='p-2 bd-highlight'>
													<img src={image.url} className='img-thumbnail ' alt={data?.title} />
												</div>
											))
										)}
									</div>
								</div>
								<div className='col-sm-9'>
									<div className='card' style={{borderRadius: "16px"}}>
										{isLoading ? <ImageCoverSkeleton /> : <img src={data.result?.imageCover.url} className='' alt={data?.title} />}
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-12'>
							<div className='card p-3 border-0'>
								{isLoading ? (
									<>
										<TitleSkeleton />
									</>
								) : (
									<>
										<h1>{data.result?.title}</h1>
										<div className='d-flex gap-4 text-center'>
											<div className='icon'>
												{Array(Math.floor(data.result?.ratingAvg)).fill(<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>)}
												{Array(data.result?.ratingAvg % 1 >= 0.5 ? 1 : 0).fill(
													<i className='bi bi-star-half' style={{color: "rgba(255, 199, 0, 1)"}}></i>,
												)}
											</div>
											<p className='color'>({data.result?.ratingCount} CUSTOMER REVIEWS)</p>
										</div>
										<h4>{currencyFormat(data.result?.price)}</h4>
										<p className='color text-muted'>{data.result?.description}</p>
										<div className='d-flex gap-3'>
											<input ref={quantityRef} type='number' className='w-25' style={{outline: "none"}} />
											<button
												className='w-25 text-white'
												style={{
													backgroundColor: "rgba(50, 170, 144, 1)",
												}}
												onClick={() => addToCart(data.result?._id, quantityRef.current.value)}
											>
												Add To Cart
											</button>
										</div>
										<div className='d-flex gap-3 icon1'>
											<button onClick={() => toggleFavorite(data.result?._id)}>
												<i className={`bi bi-${isInWishlist ? "heart-fill" : "heart"}`} style={{color: "rgba(50, 170, 144, 1)"}}></i>
												<p>ADD TO WISHLIST</p>
											</button>
											<img src={jir} alt='' className='w-25 position-absolute end-0' />
										</div>
										<p className='mt-5 color text-muted'>Category : Toys</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div className='sec2'>
					{isLoading ? (
						<div className='d-flex justify-content-center'>
							<DescriptionSkeleton style={{}} />
						</div>
					) : (
						<>
							<div className='d-flex justify-content-center gap-5'>
								<h3 style={{cursor: "pointer"}} onClick={() => setSection(1)}>
									Description
								</h3>
								<h3 style={{cursor: "pointer"}} onClick={() => setSection(2)}>
									Additional Infomation
								</h3>
								<h3 style={{cursor: "pointer"}} onClick={() => setSection(3)}>
									Reviews
								</h3>
							</div>
							{section === 1 && (
								<div className='d-flex justify-content-center'>
									<div className='card w-75'>
										<div className='container'>
											<div className='row'>
												<div className='col-sm-8'>
													<div className='card border-0'>
														<div className='card-body'>
															<p className='card-text'>{data.result?.description}</p>
															<p className='card-text'>
																<small className='text-muted'>
																	Variant: Refined Polished /Oak
																	<br />
																	Base color: Oak
																	<br />
																	Base material: Lacquered Oak
																	<br />
																	Base type: Wood Base
																	<br />
																	Seat finish: Full Upholstery
																	<br />
																	Seat material: Leather
																	<br />
																	Height: 74,4cm Width: 60cm
																</small>
															</p>
														</div>
													</div>
												</div>
												<div className='col-sm-4'>
													<img src={data.result?.imageCover.url} alt={data.result?.name} className='mt-5 p-2 border rounded' />
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
							{section === 2 && (
								<div className='d-flex justify-content-center'>
									<div className='card w-75 p-2 '>
										<div className='container'>
											<div className='row'>
												<div className='col-lg-6 col-sm-12'>
													<div className='d-flex border-bottom'>
														<p>Weight</p>
														<small className='text-muted ms-auto'>45KG</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Brand</p>
														<small className='text-muted ms-auto'>Abbaco Noelat</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Categories</p>
														<small className='text-muted ms-auto'>{data.result?.category.name}</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Collection</p>
														<small className='text-muted ms-auto'>Summer 2022</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Designer</p>
														<small className='text-muted ms-auto'>Elly Weryt</small>
													</div>
												</div>
												<div className='col-lg-6 col-sm-12'>
													<div className='d-flex border-bottom'>
														<p>Dimenions</p>
														<small className='text-muted ms-auto'>100*150*100cm</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Type</p>
														<small className='text-muted ms-auto'>Cribs</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Base Material</p>
														<small className='text-muted ms-auto'>Wood</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Color</p>
														<small className='text-muted ms-auto'>Brown</small>
													</div>
													<div className='d-flex border-bottom'>
														<p>Material</p>
														<small className='text-muted ms-auto'>Metal, Wood</small>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
							{section === 3 && (
								<div className='d-flex justify-content-center'>
									<div className='card w-75 '>
										<div className='container'>
											<div className='row p-5'>
												<div className=' col-12'>
													<p className='ms-2 fw-bold'>REVIEWS</p>
													<div className='card mb-3 border-0 bg-light'>
														<div className='row g-0'>
															<div className='col-md-3'>
																<img src={user} className='img-fluid rounded-start w-75 p-4 ' alt='...' />
															</div>
															<div className='col-md-9'>
																<div className='card-body'>
																	<ul className='d-flex p-0'>
																		<li>
																			<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																		<li>
																			<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																		<li>
																			<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																		<li>
																			<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																		<li>
																			<i className='bi bi-star-half' style={{color: "rgba(255, 199, 0, 1)"}}></i>
																		</li>
																	</ul>
																	<p className='card-text mb-2'>YOUR REVIEW IS AWAITING APPROVAL</p>
																	<small className='text-muted'>good</small>
																</div>
															</div>
														</div>
													</div>
													<Review productID={data.result?._id} />
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

const Review = ({productID}) => {
	const navigate = useNavigate();

	const [review, setReview] = useState({
		rate: 0,
		comment: "",
		name: "",
		email: "",
		check: false,
	});

	return (
		<>
			<div className=''>
				<h4>ADD A REVIEW</h4>
				<small className='text-muted'>Your email address will not be published. Required fields are marked *</small>
			</div>
			<div className='mt-3'>
				<small className='fs-6'>YOUR RATING *</small>
				<ul className='d-flex p-0 '>
					<li>
						<i
							onClick={() => setReview({...review, rate: 1})}
							className={`bi  ${review.rate >= 1 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
					<li>
						<i
							onClick={() => setReview({...review, rate: 2})}
							className={`bi  ${review.rate >= 2 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
					<li>
						<i
							onClick={() => setReview({...review, rate: 3})}
							className={`bi  ${review.rate >= 3 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
					<li>
						<i
							onClick={() => setReview({...review, rate: 4})}
							className={`bi  ${review.rate >= 4 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
					<li>
						<i
							onClick={() => setReview({...review, rate: 5})}
							className={`bi  ${review.rate >= 5 ? "bi-star-fill" : "bi-star"}`}
							style={{color: "rgba(255, 199, 0, 1)"}}
						></i>
					</li>
				</ul>
			</div>
			<div className='form-floating '>
				<textarea
					onChange={(e) => setReview({...review, comment: e.target.value})}
					className='form-control'
					placeholder='Leave a comment here'
					id='floatingTextarea'
				></textarea>
				<label htmlFor='floatingTextarea'>Your review</label>
			</div>
			<br />
			<div className='row'>
				<div className='col-6'>
					<div className='mb-3'>
						<input
							onChange={(e) => setReview({...review, name: e.target.value})}
							type='text'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='Your Name'
						/>
					</div>
				</div>
				<div className='col-6'>
					<div className='mb-3'>
						<input
							onChange={(e) => setReview({...review, email: e.target.value})}
							type='email'
							className='form-control'
							id='exampleFormControlInput1'
							placeholder='name../../example.com'
						/>
					</div>
				</div>
			</div>
			<div className='mb-3 form-check'>
				<input onChange={(e) => setReview({...review, check: e.target.checked})} type='checkbox' className='form-check-input' id='exampleCheck1' />
				<label className='form-check-label' htmlFor='exampleCheck1'>
					Check me out
				</label>
			</div>
			<button
				onClick={async () => {
					if (!localStorage.getItem("token")) {
						return navigate("/login");
					} else {
						try {
							axios.post(
								baseURL + "reviews",
								{
									comment: review.comment,
									product: productID,
									ratings: review.rate,
								},
								{
									headers: {
										token: localStorage.getItem("token"),
									},
								},
							);
						} catch (err) {}
					}
				}}
				className='btn btn-primary'
			>
				Submit
			</button>
		</>
	);
};
export default ShowProduct;
