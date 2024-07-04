import circle1 from "../assets/Group 42.png";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import doctorimg1 from "../assets/Frame 171.png";
import doctorimg2 from "../assets/Frame 173.png";
import doctorimg3 from "../assets/Frame 175.png";
import imgheader from "../assets/Group 43.png";
import heart from "../assets/image 104.png";
import cloud from "../assets/image 95.png";
import docts from "../assets/Frame 169.png";
import girlbaby from "../assets/image 92.png";
import plane from "../assets/image 103.png";
import brain from "../assets/noto_brain.png";
import doccircle from "../assets/Component 35.png";
import doctorimg4 from "../assets/Frame 174.png";

const AboutUs = () => {
	return (
		<div>
			<div
				className='AboutUs'
				style={{
					fontFamily: "PT Sans",
				}}
			>
				<div className='sec1'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-8 mt-3'>
								<div className='card mt-5' style={{border: "none"}}>
									<h1 className='card-title text-muted fw-bold'>
										Our Responsibility To Keep
										<br />
										Your Perfectly Healthy.
									</h1>
									<br />
									<p className='card-text text-muted fs-5'>
										Quidem eveniet quod veritatis non. Dolore voluptas quod
										<br /> cumque sunt quiavoluptas. Omnis nihil ad quia de bitis
										<br /> volupt e wholesale brandeveniet quod veritatis non.{" "}
									</p>
									<br />
									<div className='w-75'>
										<button
											className='btn text-white w-50'
											style={{
												backgroundColor: "rgba(50, 170, 144, 1)",
											}}
										>
											Place Order
										</button>
									</div>
								</div>
							</div>
							<div className='col-sm-4'>
								<img src={imgheader} alt='' className='imgheader' />
							</div>
						</div>
					</div>
				</div>
				<div className='sec2 mt-5'>
					<div className='container'>
						<div className='row'>
							<div className='col-12'>
								<div className='text-center text-muted'>
									<h1 className='fw-bold'>Why Choose us</h1>
									<p>
										Quidem eveniet quod veritatis non. Dolore voluptas quod cumque sunt quiavoluptas.
										<br />
										Omnis nihil ad quia de bitis volupt atems of unique wholesale brandeveniet quod veritatis <br />
										non. Dolore voluptas quod cumque sunt quia facere. Omnis nihil ad quia de bitis <br />
										voluptatem lorem
									</p>
								</div>
							</div>
							<div className='col-12'>
								<div className='row'>
									<div className='col-sm'>
										<div className='card border-0'>
											<img src={circle1} className='card-img' alt='...' />
											<div className='card-img-overlay'>
												<ul className='justify-content-center text-center position-absolute top-50 start-50 translate-middle'>
													<li className='fs-1 ' style={{color: "rgba(50, 170, 144, 1)"}}>
														<i className='bi bi-telephone-x'></i>
													</li>
													<li className=' fs-4'>Emergency</li>
												</ul>
											</div>
										</div>
									</div>
									<div className='col-sm'>
										<div className='card border-0'>
											<img src={circle2} className='card-img' alt='...' />
											<div className='card-img-overlay'>
												<ul className='justify-content-center text-center position-absolute top-50 start-50 translate-middle'>
													<li className='fs-1' style={{color: "rgba(50, 170, 144, 1)"}}>
														<i className='bi bi-calendar3'></i>
													</li>
													<li className='fs-4'>Emergency</li>
												</ul>
											</div>
										</div>
									</div>
									<div className='col-sm'>
										<div className='card border-0'>
											<img src={circle3} className='card-img' alt='...' />
											<div className='card-img-overlay'>
												<ul className='justify-content-center text-center position-absolute top-50 start-50 translate-middle'>
													<li className='fs-1' style={{color: "rgba(50, 170, 144, 1)"}}>
														<i className='bi bi-stars'></i>
													</li>
													<li className='fs-4'>Emergency</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className='sec3 mt-5'
					style={{
						backgroundColor: "#f8f8f8",
					}}
				>
					<div className='container'>
						<img src={cloud} alt='' className='mt-5' style={{width: "7%"}} />
						<div className='row gy-3'>
							<div className='col-md-6 col-sm-12'>
								<div className='card' style={{border: "none", textAlign: "center", background: "#f8f8f8"}}>
									<div className='d-flex justify-content-center align-items-center'>
										<h3 className='card-title fw-bold'>About Us</h3>
										<img src={heart} alt='' className='mb-5' style={{width: "7%"}} />
									</div>
									<br />
									<p className='card-text'>
										Quidem eveniet quod veritatis non. Dolore
										<br />
										voluptas quod cumque sunt quiavoluptas.
										<br />
										Omnis nihil ad quia de bitis volupt atems of
										<br />
										unique wholesale brandeveniet quod veritatis
										<br />
										non. Dolore voluptas quod cumque sunt quia
										<br />
										facere. Omnis nihil ad quia de bitis voluptatem
										<br />
										lorem{" "}
									</p>
									<br />
									<br />
									<div className='justify-content-center'>
										<button className='btn text-white w-50' style={{backgroundColor: "rgba(50, 170, 144, 1)"}}>
											Place Order
										</button>
									</div>
								</div>
							</div>
							<div className='col-md-6 col-sm-12'>
								<img src={docts} alt='' />
							</div>
						</div>
					</div>
				</div>
				<img
					src={girlbaby}
					className='ms-5'
					style={{
						width: "7%",
					}}
				/>
				<div className='sec4 mt-5'>
					<div className='container'>
						<div className='col-12'>
							<div className='text_section4_AboutUs'>
								<h2
									className='text-center fw-bold'
									style={{
										color: "rgba(50, 170, 144, 1)",
									}}
								>
									TEAM
								</h2>
								<h4 className='text-center'>Meet Our Professionals</h4>
								<p className='text-center text-muted fs-5'>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
									<br /> elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
									<br /> leo.
								</p>
							</div>
							<div></div>
						</div>
						<div className='col-12'>
							<div className='row'>
								<div className='col col-md-5 col-lg-3 col-sm-6'>
									<div className='card border-0'>
										<img src={doctorimg1} className='card-img-top' alt='...' />
										<div className='card-body'>
											<h5
												className='card-title text-center fw-bold'
												style={{
													color: "rgba(50, 170, 144, 1)",
												}}
											>
												dr. Harman White
											</h5>
											<p className='card-text text-muted text-center fs-5'>CEO & Director</p>
										</div>
									</div>
								</div>
								<div className='col col-md-5 col-lg-3  col-sm-6 '>
									<div className='card border-0'>
										<img src={doctorimg2} className='card-img-top' alt='...' />
										<div className='card-body'>
											<h5
												className='card-title text-center fw-bold'
												style={{
													color: "rgba(50, 170, 144, 1)",
												}}
											>
												dr. Harman White
											</h5>
											<p className='card-text text-muted text-center fs-5'>CEO & Director</p>
										</div>
									</div>
								</div>
								<div className='col col-md-5 col-lg-3 col-sm-6 '>
									<div className='card border-0'>
										<img src={doctorimg3} className='card-img-top' alt='...' />
										<div className='card-body'>
											<h5
												className='card-title text-center fw-bold'
												style={{
													color: "rgba(50, 170, 144, 1)",
												}}
											>
												dr. Harman White
											</h5>
											<p className='card-text text-muted text-center fs-5'>CEO & Director</p>
										</div>
									</div>
								</div>
								<div className='col col-md-5 col-lg-3 col-sm-6 '>
									<div className='card border-0'>
										<img src={doctorimg4} className='card-img-top' alt='...' />
										<div className='card-body'>
											<h5
												className='card-title text-center fw-bold'
												style={{
													color: "rgba(50, 170, 144, 1)",
												}}
											>
												dr. Harman White
											</h5>
											<p className='card-text text-muted text-center fs-5'>CEO & Director</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='last-section' style={{textAlign: "center"}}>
					<div className='container'>
						<div className='card' style={{border: "none"}}>
							<div className=''>
								<img
									src={plane}
									alt=''
									style={{
										width: "3%",
									}}
								/>
								<h1
									className='card-title fw-bold'
									style={{
										color: "rgba(50, 170, 144, 1)",
									}}
								>
									Our Services
								</h1>
							</div>
							<p className='card-text'>Meet Our Professionals </p>
							<br />
							<br />
						</div>
						<div className='row gy-4'>
							<div className='col-md-6 col-sm-12'>
								<div>
									<img src={doccircle} alt='' />
								</div>
							</div>
							<div className='col-md-6 col-sm-12'>
								<div className='row gy-3'>
									<div className='col-md-6 col-sm-12'>
										<div
											className='card p-1 shadow border-0 text-center w-100 '
											style={{
												borderRadius: "7% 0 0 7%",
											}}
										>
											<div className='justify-content-center'>
												<img src={brain} alt='' style={{width: "15%"}} />
											</div>
											<div className='card-body'>
												<h4 className='card-title fs-5 fw-bold'>Neurology Care</h4>
												<p className='card-text'>
													etur adipiscing elit. Ut elit
													<br /> tellus, luctus nec etur adipiscing
													<br /> elit. Ut elit tellus, luctus nec{" "}
												</p>
											</div>
										</div>
									</div>
									<div className='col-md-6 col-sm-12'>
										<div className='card p-1 shadow border-0 text-center w-100 ' style={{borderRadius: "0 7% 7% 0"}}>
											<div className='justify-content-center'>
												<img src={brain} alt='' style={{width: "15%"}} />
											</div>
											<div className='card-body'>
												<h4 className='card-title fs-5 fw-bold'>Neurology Care</h4>
												<p className='card-text'>
													etur adipiscing elit. Ut elit
													<br /> tellus, luctus nec etur adipiscing
													<br /> elit. Ut elit tellus, luctus nec{" "}
												</p>
											</div>
										</div>
									</div>
									<div className='col-md-6 col-sm-12'>
										<div className='card p-1 shadow border-0 text-center w-100 ' style={{borderRadius: "7% 0 0 7%"}}>
											<div className='justify-content-center'>
												<img src={brain} alt='' style={{width: "15%"}} />
											</div>
											<div className='card-body'>
												<h4 className='card-title fs-5 fw-bold'>Neurology Care</h4>
												<p className='card-text'>
													etur adipiscing elit. Ut elit
													<br /> tellus, luctus nec etur adipiscing
													<br /> elit. Ut elit tellus, luctus nec{" "}
												</p>
											</div>
										</div>
									</div>
									<div className='col-md-6 col-sm-12'>
										<div className='card p-1 shadow border-0 text-center w-100 ' style={{borderRadius: "0 7% 7% 0"}}>
											<div className='justify-content-center'>
												<img src={brain} alt='' style={{width: "15%"}} />
											</div>
											<div className='card-body'>
												<h4 className='card-title fs-5 fw-bold'>Neurology Care</h4>
												<p className='card-text'>
													etur adipiscing elit. Ut elit
													<br /> tellus, luctus nec etur adipiscing
													<br /> elit. Ut elit tellus, luctus nec{" "}
												</p>
											</div>
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
};
export default AboutUs;
