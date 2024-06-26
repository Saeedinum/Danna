import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
// import {jwtDecode} from "jwt-decode";

// import img1 from "../../images/image 64.png";
// import img2 from "../../images/image 65.png";
// import img3 from "../../images/image 66.png";
// import img4 from "../../images/image 67.png";
// import bigimg from "../../images/image 68.png";
// import descriptionimg from "../../images/image 70.png";
// import star from "../../images/star.png";
import jir from "../../images/JIRAFF.png";
import user from "../../images/user.jpg";

// import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";

export default function ProductDesply() {
	const navigate = useNavigate();
	// const [a, seta] = useState(false);
	const [section, setSection] = useState(1);
	const params = useParams();
	const productId = params.productID;
	const [product, setProduct] = useState({
		result: {
			imageCover: {
				url: "",
			},
			images: [],
			title: "",
			price: 0,
			description: "",
			category: "",
			stock: 0,
			brand: "",
			ratingAvg: 0,
		},
	});

	useEffect(() => {
		axios
			.get("https://danna-pi.vercel.app/api/v1/products/" + productId)
			.then((response) => {
				setProduct(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [productId]);
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
										<div className='p-2 bd-highlight'>
											<img src={product.result?.imageCover.url} className='img-thumbnail ' alt={product?.title} />
										</div>
										{product.result?.images.map((image) => (
											<div className='p-2 bd-highlight'>
												<img src={image.url} className='img-thumbnail ' alt={product?.title} />
											</div>
										))}
									</div>
								</div>
								<div className='col-sm-9'>
									<div className='card' style={{borderRadius: "16px"}}>
										<img src={product.result?.imageCover.url} className='' alt={product?.title} />
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-12'>
							<div className='card p-3 border-0'>
								<h1>{product.result.title}</h1>
								<div className='d-flex gap-4 text-center'>
									<div className='icon'>
										{Array(Math.floor(product.result.ratingAvg)).fill(<i className='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>)}
										{Array(product.result.ratingAvg % 1 >= 0.5 ? 1 : 0).fill(
											<i className='bi bi-star-half' style={{color: "rgba(255, 199, 0, 1)"}}></i>,
										)}
									</div>
									<p className='color'>({product.result.ratingCount} CUSTOMER REVIEWS)</p>
								</div>
								<h4>${product.result.price}</h4>
								<p className='color text-muted'>{product.result.description}</p>
								<div className='d-flex gap-3'>
									<input type='number' className='w-25' style={{outline: "none"}} />
									<button
										className='w-25 text-white'
										style={{
											backgroundColor: "rgba(50, 170, 144, 1)",
										}}
									>
										Add To Card
									</button>
								</div>
								<div className='d-flex gap-3 icon1'>
									<i className='bi bi-heart-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
									<p>ADD TO WISHLIST</p>
									<img src={jir} alt='' className='w-25 position-absolute end-0' />
								</div>
								<p className='mt-5 color text-muted'>Category : Toys</p>
							</div>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div className='sec2'>
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
													<p className='card-text'>{product.result.description}</p>
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
											<img src={product.result.imageCover.url} alt={product.result.name} className='mt-5 p-2 border rounded' />
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
												<small className='text-muted ms-auto'>{product.result.category.name}</small>
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
															{/* ❌ I can't find endpoint for this data  */}
															<p className='card-text mb-2'>YOUR REVIEW IS AWAITING APPROVAL</p>
															<small className='text-muted'>good</small>
														</div>
													</div>
												</div>
											</div>
												<div className=''>
													<h4>ADD A REVIEW</h4>
													<small className='text-muted'>Your email address will not be published. Required fields are marked *</small>
												</div>
												<div className='mt-3'>
													<small className='fs-6'>YOUR RATING *</small>
													<Rating />
												</div>
												<div className='form-floating '>
													<textarea className='form-control' placeholder='Leave a comment here' id='floatingTextarea'></textarea>
													<label htmlFor='floatingTextarea'>Your review</label>
												</div>
												<br />
												<div className='row'>
													<div className='col-6'>
														<div className='mb-3'>
															<input type='text' className='form-control' id='exampleFormControlInput1' placeholder='Your Name' />
														</div>
													</div>
													<div className='col-6'>
														<div className='mb-3'>
															<input type='email' className='form-control' id='exampleFormControlInput1' placeholder='name@example.com' />
														</div>
													</div>
												</div>
												<div className='mb-3 form-check'>
													<input type='checkbox' className='form-check-input' id='exampleCheck1' />
													<label className='form-check-label' htmlFor='exampleCheck1'>
														Check me out
													</label>
												</div>
												<button
													onClick={() => {
														if (!localStorage.getItem("token")) {
															return navigate("/login");
														}else{
															
														}
													}}
													className='btn btn-primary'
												>
													Submit
												</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

const Rating = () => {
	const [rating, setRating] = useState(0);
	return (
		<ul className='d-flex p-0 '>
			<li>
				<i onClick={() => setRating(1)} className={`bi  ${rating >= 1 ? "bi-star-fill" : "bi-star"}`} style={{color: "rgba(255, 199, 0, 1)"}}></i>
			</li>
			<li>
				<i onClick={() => setRating(2)} className={`bi  ${rating >= 2 ? "bi-star-fill" : "bi-star"}`} style={{color: "rgba(255, 199, 0, 1)"}}></i>
			</li>
			<li>
				<i onClick={() => setRating(3)} className={`bi  ${rating >= 3 ? "bi-star-fill" : "bi-star"}`} style={{color: "rgba(255, 199, 0, 1)"}}></i>
			</li>
			<li>
				<i onClick={() => setRating(4)} className={`bi  ${rating >= 4 ? "bi-star-fill" : "bi-star"}`} style={{color: "rgba(255, 199, 0, 1)"}}></i>
			</li>
			<li>
				<i onClick={() => setRating(5)} className={`bi  ${rating >= 5 ? "bi-star-fill" : "bi-star"}`} style={{color: "rgba(255, 199, 0, 1)"}}></i>
			</li>
		</ul>
	);
};
