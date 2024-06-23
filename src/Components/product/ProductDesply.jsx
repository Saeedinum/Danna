import React, {useState} from "react";
import img1 from "../../images/image 64.png";
import img2 from "../../images/image 65.png";
import img3 from "../../images/image 66.png";
import img4 from "../../images/image 67.png";
import bigimg from "../../images/image 68.png";
import jir from "../../images/JIRAFF.png";
import user from "../../images/user.jpg";
import descriptionimg from "../../images/image 70.png";
import star from "../../images/star.png";

export default function ProductDesply() {
	const [a, seta] = useState(false);
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
							<div class='row'>
								<div class='col-sm-3 '>
									<div class='d-flex flex-column bd-highlight mb-3'>
										<div class='p-2 bd-highlight'>
											<img src={img1} class='img-thumbnail ' alt='...' />
										</div>
										<div class='p-2 bd-highlight'>
											<img src={img2} class='img-thumbnail ' alt='...' />
										</div>
										<div class='p-2 bd-highlight'>
											<img src={img3} class='img-thumbnail ' alt='...' />
										</div>
										<div class='p-2 bd-highlight'>
											<img src={img4} class='img-thumbnail ' alt='...' />
										</div>
									</div>
								</div>
								<div class='col-sm-9'>
									<div className='card' style={{borderRadius: "16px"}}>
										<img src={bigimg} class='' alt='...' />
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-6 col-md-12'>
							<div className='card p-3 border-0'>
								<h1>
									GREY TEDDY BEAR <br /> TOY
								</h1>
								<div className='d-flex gap-4 text-center'>
									<div className='icon'>
										<i class='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
										<i class='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
										<i class='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
										<i class='bi bi-star-half' style={{color: "rgba(255, 199, 0, 1)"}}></i>
									</div>
									<p className='color'>(3- CUSTOMER REVIEWS)</p>
								</div>
								<h4>$90.00</h4>
								<p className='color text-muted'>
									Lorem ipsum dolor sit amet, conslit, sed do <br /> eiusmod temp.orem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
									do eiusmod{" "}
								</p>
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
									<i class='bi bi-heart-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
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
						<h3>Description</h3>
						<h3>Additional Infomation</h3>
						<h3>Reviews</h3>
					</div>
					<div className='d-flex justify-content-center'>
						<div className='card w-75'>
							<div className='container'>
								<div className='row'>
									<div className='col-sm-8'>
										<div className='card border-0'>
											<div className='card-body'>
												<p className='card-text'>
													Quidem eveniet quod veritatis non. Dolore voluptas quod <br /> cumque sunt quiavoluptas. Omnis nihil ad quia de bitis <br />{" "}
													volupt atems of unique wholesale brandeveniet quod <br /> veritatis non. Dolore voluptas quod cumque sunt quia <br />{" "}
													facere. Omnis nihil ad quia de bitis voluptatem lorem
												</p>
												<p class='card-text'>
													<small class='text-muted'>
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
										<img src={descriptionimg} alt='' className='mt-5 p-2 border rounded' />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='d-flex justify-content-center'>
						<div className='card w-75 p-2 d-none'>
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
											<small className='text-muted ms-auto'>Babycare, Furniture</small>
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
					<div className='d-flex justify-content-center'>
						<div className='card w-75 d-none'>
							<div className='container'>
								<div className='row p-5'>
									<div className=' col-12'>
										<p className='ms-2 fw-bold'>REVIEWS</p>
										<div class='card mb-3 border-0 bg-light'>
											<div class='row g-0'>
												<div class='col-md-3'>
													<img src={user} class='img-fluid rounded-start w-75 p-4 ' alt='...' />
												</div>
												<div class='col-md-9'>
													<div class='card-body'>
														<ul className='d-flex p-0'>
															<li>
																<i class='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
															</li>
															<li>
																<i class='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
															</li>
															<li>
																<i class='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
															</li>
															<li>
																<i class='bi bi-star-fill' style={{color: "rgba(255, 199, 0, 1)"}}></i>
															</li>
															<li>
																<i class='bi bi-star-half' style={{color: "rgba(255, 199, 0, 1)"}}></i>
															</li>
														</ul>
														<p class='card-text mb-2'>YOUR REVIEW IS AWAITING APPROVAL</p>
														<small class='text-muted'>good</small>
													</div>
												</div>
											</div>
										</div>
										<div className=''>
											<h4>ADD A REVIEW</h4>
											<small class='text-muted'>Your email address will not be published. Required fields are marked *</small>
										</div>
										<div className='mt-3'>
											<small className='fs-6'>YOUR RATING *</small>
											<ul className='d-flex p-0 '>
												<li>
													<i class='bi bi-star' style={{color: "rgba(255, 199, 0, 1)"}}></i>
												</li>
												<li>
													<i class='bi bi-star' style={{color: "rgba(255, 199, 0, 1)"}}></i>
												</li>
												<li>
													<i class='bi bi-star' style={{color: "rgba(255, 199, 0, 1)"}}></i>
												</li>
												<li>
													<i class='bi bi-star' style={{color: "rgba(255, 199, 0, 1)"}}></i>
												</li>
												<li>
													<i class='bi bi-star' style={{color: "rgba(255, 199, 0, 1)"}}></i>
												</li>
											</ul>
										</div>

										<div class='form-floating '>
											<textarea class='form-control' placeholder='Leave a comment here' id='floatingTextarea'></textarea>
											<label for='floatingTextarea'>Your review</label>
										</div>
										<br />
										<div class='row'>
											<div class='col-6'>
												<div class='mb-3'>
													<input type='email' class='form-control' id='exampleFormControlInput1' placeholder='Your Name' />
												</div>
											</div>
											<div class='col-6'>
												<div class='mb-3'>
													<input type='email' class='form-control' id='exampleFormControlInput1' placeholder='name@example.com' />
												</div>
											</div>
										</div>

										<div class='mb-3 form-check'>
											<input type='checkbox' class='form-check-input' id='exampleCheck1' />
											<label class='form-check-label' for='exampleCheck1'>
												Check me out
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
