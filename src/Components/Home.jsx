import React from "react";
import "../Styles/Home.css";
import homing1 from "../images/section1.png";
import homing2 from "../images/Component 21.png";
import Rectangle1 from "../images/Rectangle 14.png";
import dricon from "../images/Component 39.png";
import chaticon from "../images/Component 34.png";
import videosicon from "../images/videos.png";
import prodicon from "../images/product.png";
import quesicon from "../images/Component 38.png";
import articon from "../images/Component 37.png";
import icons from "../images/Component 22.png";
import unsplash from "../images/unsplash_xT0TfNMn4Tk.png";
import doctorbook from "../images/Component 24.png";
import imgvideo from "../images/video.png";
import doctorbook2 from "../images/Component 23.png";
import Carousel from "react-bootstrap/Carousel";
import heart from "../images/heart.png";
import doctor from "../images/Ellipse 1.png";
import sticker from "../images/image 12.png";
import babyvedio1 from "../images/Rectangle 23.png";
import imgchat from "../images/Componentchat.png";
import app from "../images/pre-footer_05 1.png";
import {Link} from "react-router-dom";
export default function Home() {
	return (
		<div className='home'>
			{/* section1 */}
			<div className='homepage'>
				<div className='container'>
					<div className='d-flex justify-content-center align-items-center'>
						<div className='content-home'>
							<h1>
								Book your child's incubation <span>now</span>
							</h1>
							<p>
								Therefore, moments will make a difference with your child.
								<br /> From the Danna application, you can book the nearest
								<br /> nursery to you
							</p>
							<Link to={`/Book`}>
								<button className='more-anwser'>Book Now</button>
							</Link>
						</div>
						<div className='img-home'>
							<img src={homing2} alt='' className='homing2' />
						</div>
					</div>
				</div>
			</div>

			{/* section2 */}
			<div className='section2'>
				<div className='container'>
					<div class='row'>
						<div class='col mt-5'>
							<div class='row'>
								<div class='col'>
									<Link to={`/doctors`}>
										<div class='card sec-card'>
											<div class='card-body mt-3' style={{textAlign: "center"}}>
												<img src={dricon} alt='' srcset='' />
												<h5 class='card-title mt-2'>Doctors</h5>
											</div>
										</div>
									</Link>
								</div>
								<div class='col'>
									<Link to={`/chatbot`}>
										<div class='card sec-card'>
											<div class='card-body mt-2' style={{textAlign: "center"}}>
												<img src={chaticon} alt='' srcset='' />
												<h5 class='card-title mt-3'>Chatbot</h5>
											</div>
										</div>
									</Link>
								</div>
								<div class='col'>
									<Link to={`/videos`}>
										<div class='card sec-card'>
											<div class='card-body mt-3' style={{textAlign: "center"}}>
												<img src={videosicon} alt='' srcset='' />
												<h5 class='card-title mt-2'>Videos</h5>
											</div>
										</div>
									</Link>
								</div>
							</div>
							<br />
							<div class='row'>
								<div class='col'>
									<Link to={`/productpage`}>
										<div class='card sec-card'>
											<div class='card-body mt-3' style={{textAlign: "center"}}>
												<img src={prodicon} alt='' srcset='' />
												<h5 class='card-title mt-2'>Products</h5>
											</div>
										</div>
									</Link>
								</div>
								<div class='col'>
									<Link to={`/Questions`}>
										<div class='card sec-card'>
											<div class='card-body mt-3' style={{textAlign: "center"}}>
												<img src={quesicon} alt='' srcset='' />
												<h5 class='card-title mt-2'>Questiocs</h5>
											</div>
										</div>
									</Link>
								</div>
								<div class='col'>
									<Link to={`/art`}>
										<div class='card sec-card'>
											<div class='card-body mt-3' style={{textAlign: "center"}}>
												<img src={articon} alt='' srcset='' />
												<h5 class='card-title mt-2'>Articles</h5>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div class='col'>
							<div className='dots dots-up'></div>
							<div class='card mt-5 medical-card'>
								<img src={Rectangle1} class='card-img-top' alt='...' />
								<div class='card-body'>
									<p class='card-text mt-3'>
										Therefore, moments will make a difference with your child. From the Danna application, you can book the nearest incubation to you
									</p>
									<Link to={`/Book`}>
										<a href='#' class='btn mt-3'>
											BOOK YOUR INCUBATION
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* section3 */}
			<br />
			<div className='question mt-2'>
				<div className='container'>
					<img src={sticker} alt='' className='sticker' />
					<div className='card-question text-align-center'>
						<div className='main-heading'>
							<img src={heart} alt='' className='heart' />
							<h1 className='head_P'>
								Community & <br /> Medical Questions
							</h1>
						</div>
						<br />
						<br />
						<div class='row'>
							<Carousel>
								<Carousel.Item>
									<div class='col'>
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='md-4 d-flex'>
													<img src={doctor} class='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div class='col-md-8'>
													<div class='card-body card-txt'>
														<p class='card-text'>What services are provided to children in primary health care centers?</p>
														<a href='#'>
															<button className='btn-answer'>Dr Answered</button>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<div class='col'>
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='md-4 d-flex'>
													<img src={doctor} class='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div class='col-md-8'>
													<div class='card-body card-txt'>
														<p class='card-text'>What services are provided to children in primary health care centers?</p>
														<a href='#'>
															<button className='btn-answer'>Dr Answered</button>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<div class='col'>
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='md-4 d-flex'>
													<img src={doctor} class='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div class='col-md-8'>
													<div class='card-body card-txt'>
														<p class='card-text'>What services are provided to children in primary health care centers?</p>
														<a href='#'>
															<button className='btn-answer'>Dr Answered</button>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<div class='col'>
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='md-4 d-flex'>
													<img src={doctor} class='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div class='col-md-8'>
													<div class='card-body card-txt'>
														<p class='card-text'>What services are provided to children in primary health care centers?</p>
														<a href='#'>
															<button className='btn-answer'>Doctor Answered</button>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<div class='col'>
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='md-4 d-flex'>
													<img src={doctor} class='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div class='col-md-8'>
													<div class='card-body card-txt'>
														<p class='card-text'>What services are provided to children in primary health care centers?</p>
														<a href='#'>
															<button className='btn-answer'>Doctor Answered</button>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<div class='col'>
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='md-4 d-flex'>
													<img src={doctor} class='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div class='col-md-8'>
													<div class='card-body card-txt'>
														<p class='card-text'>What services are provided to children in primary health care centers?</p>
														<a href='#'>
															<button className='btn-answer'>Doctor Answered</button>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</Carousel.Item>
							</Carousel>
						</div>

						<Link to={`/Questions`}>
							<button className='more-anwser'>More Doctors Answer</button>
						</Link>
					</div>
				</div>
			</div>
			{/* Section 4 */}
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className='Articles mt-2'>
				<div className='container'>
					<div className='main-heading'>
						<img src={heart} alt='' className='heart' />
						<h1 className='head_P'>Medical Articles</h1>
					</div>
					<br />
					<div className='grid'>
						<div class='row mt-5'>
							<div class='col'>
								<div class='card' style={{background: "#EDBA64"}}>
									<div className='image'>
										<img src={icons} style={{width: "20%"}} alt='' className='icon-baby' />
										<img src={unsplash} style={{width: "45%"}} alt='' className='img-baby' />
									</div>
									<div class='card-body'>
										<h5 class='card-title mt-3'>Book incubation</h5>
										<p class='card-text'>Flexibility and Adaptability : Acknowledge that the plan may evolve during the incubation process</p>
									</div>
								</div>
							</div>
							<div class='col'>
								<div class='card' style={{background: "#D49778"}}>
									<div className='image'>
										<img src={icons} style={{width: "20%"}} alt='' className='icon-baby' />
										<img src={unsplash} style={{width: "45%"}} alt='' className='img-baby' />
									</div>
									<div class='card-body'>
										<h5 class='card-title mt-3'>Book incubation</h5>
										<p class='card-text'>Flexibility and Adaptability : Acknowledge that the plan may evolve during the incubation process</p>
									</div>
								</div>
							</div>
							<div class='col'>
								<div class='card' style={{background: "#83BBF6"}}>
									<div className='image'>
										<img src={icons} style={{width: "20%"}} alt='' className='icon-baby' />
										<img src={unsplash} style={{width: "45%"}} alt='' className='img-baby' />
									</div>
									<div class='card-body'>
										<h5 class='card-title mt-3'>Book incubation</h5>
										<p class='card-text'>Flexibility and Adaptability : Acknowledge that the plan may evolve during the incubation process</p>
									</div>
								</div>
							</div>
						</div>
						<Link to={`/art`}>
							<button className='more-anwser btn-art'>All Articles</button>
						</Link>
					</div>
				</div>
			</div>
			{/* Section 5 */}
			<div className='homepagesection5'>
				<div className='stiker stiker-up'></div>
				<div class='card text-white' style={{width: "100%", border: "none"}}>
					<img src={doctorbook} class='card-img' alt='...' />
					<div class='card-img-overlay container'>
						<h4 class='card-title'>Request a medical consultation now</h4>
						<h1 class='card-text'>Book your child's incubation now</h1>
						<p class='card-text'>
							Therefore, moments will make a difference with your child.
							<br /> From the Danna application, you can book the nearest
							<br /> nursery to you
						</p>
						<div className='chatvideo'>
							<div class='row icon-chat'>
								{/* -------col1 */}
								<div class='col'>
									<div class='mb-3'>
										<div class='row g-0'>
											<div class='col-md-4'>
												<img src={imgvideo} class='img-fluid rounded-start' alt='...' />
											</div>
											<div class='col-md-8'>
												<div class='card-body'>
													<h5 class='card-title'>video call</h5>

													<p class='card-text'>
														<small class='text-muted'>Talk to a doctor via video</small>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* -------col2 */}
								<div class='col' style={{marginRight: "55%"}}>
									<div class='mb-3'>
										<div class='row g-0'>
											<div class='col-md-4'>
												<img src={imgchat} class='img-fluid rounded-start' alt='...' />
											</div>
											<div class='col-md-8'>
												<Link to={`/chatbot`}>
													<div class='card-body'>
														<h5 class='card-title'>Chatbot</h5>

														<p class='card-text'>
															<small class='text-muted'>Talk to Chatbot</small>
														</p>
													</div>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* section 6 */}
			<br />
			<br />
			<br />
			<div className='homepagesection6 mt-5'>
				<div className='container'>
					<div className='videoschildrens'>
						<div className='main-heading'>
							<img src={heart} alt='' className='heart' />
							<h1 className='head_P'>Watch Our Children Wellbeing</h1>
						</div>
						<br />
						<div className='videosbody'>
							<div class='container'>
								<div class='row row-cols-2 mt-2'>
									<div class='col'>
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='col-md-4'>
													<img src={babyvedio1} alt='...' />
												</div>
												<div class='col-md-8'>
													<div class='card-body'>
														<h5 class='card-title'>Growth</h5>
														<p class='card-text'>Changing diapers frequently is an</p>
														<p className='btnvideo'>
															<small class='text-muted'>PLAY NOW</small>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class='col'>
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='col-md-4'>
													<img src={babyvedio1} class='img-fluid rounded-start' alt='...' />
												</div>
												<div class='col-md-8'>
													<div class='card-body'>
														<h5 class='card-title'>Growth</h5>
														<p class='card-text'>Changing diapers frequently is an</p>
														<p className='btnvideo'>
															<small class='text-muted'>PLAY NOW</small>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class='col'>
										{" "}
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='col-md-4'>
													<img src={babyvedio1} class='img-fluid rounded-start' alt='...' />
												</div>
												<div class='col-md-8'>
													<div class='card-body'>
														<h5 class='card-title'>Growth</h5>
														<p class='card-text'>Changing diapers frequently is an</p>
														<p className='btnvideo'>
															<small class='text-muted'>PLAY NOW</small>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class='col'>
										{" "}
										<div class='card mb-3'>
											<div class='row g-0'>
												<div class='col-md-4'>
													<img src={babyvedio1} class='img-fluid rounded-start' alt='...' />
												</div>
												<div class='col-md-8'>
													<div class='card-body'>
														<h5 class='card-title'>Growth</h5>
														<p class='card-text'>Changing diapers frequently is an</p>
														<p className='btnvideo'>
															<small class='text-muted'>PLAY NOW</small>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Link to={`/videos`}>
							<button className='more-anwser'>See All Videos</button>
						</Link>
					</div>
				</div>
			</div>
			{/* section 7 */}
			<br />
			<br />
			<div className='homepagesection7 mt-5'>
				<div class='card' style={{width: "100%", border: "none"}}>
					<img src={doctorbook2} class='card-img' alt='...' />
					<div class='card-img-overlay container'>
						<h4 className='card-title'>Are You a Doctor ?</h4>
						<h1 className='card-text'>
							Join now the largest child-medical community
							<br /> online
						</h1>
						<p className='card-text mt-3'>
							If you would like to join the medical community and
							<br />
							benefit from the many services that medical doctors <br /> provide, do not hesitate and start registering now
						</p>
						<br />
						<button className='more-anwserbtn7'>Register as a doctor</button>
					</div>
				</div>
			</div>
			{/* section 8 */}
			<div className='container'>
				<div className=' mt-5'>
					<img src={app} alt='' />
				</div>
			</div>
		</div>
	);
}
