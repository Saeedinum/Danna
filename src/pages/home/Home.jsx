import {Link} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import homing2 from "../../assets/Component 21.png";
import Rectangle1 from "../../assets/Rectangle 14.png";
import dricon from "../../assets/Component 39.png";
import chaticon from "../../assets/Component 34.png";
import videosicon from "../../assets/videos.png";
import prodicon from "../../assets/product.png";
import quesicon from "../../assets/Component 38.png";
import articon from "../../assets/Component 37.png";
import icons from "../../assets/Component 22.png";
import unsplash from "../../assets/unsplash_xT0TfNMn4Tk.png";
import doctorbook from "../../assets/Component 24.png";
import imgvideo from "../../assets/video.png";
import doctorbook2 from "../../assets/Component 23.png";
import heart from "../../assets/heart.png";
import doctor from "../../assets/Ellipse 1.png";
import sticker from "../../assets/image 12.png";
import babyvedio1 from "../../assets/Rectangle 23.png";
import imgchat from "../../assets/Componentchat.png";
import app from "../../assets/pre-footer_05 1.png";

import "./Home.css";
const Home = () => {
	return (
		<div className='home'>
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
			<div className='section2'>
				<div className='container'>
					<div className='row'>
						<div className='col mt-5'>
							<div className='row'>
								<div className='col'>
									<Link to={`/doctors`}>
										<div className='card sec-card'>
											<div className='card-body mt-3' style={{textAlign: "center"}}>
												<img src={dricon} alt='' srcSet='' />
												<h5 className='card-title mt-2'>Doctors</h5>
											</div>
										</div>
									</Link>
								</div>
								<div className='col'>
									<Link to={`/chatbot`}>
										<div className='card sec-card'>
											<div className='card-body mt-2' style={{textAlign: "center"}}>
												<img src={chaticon} alt='' srcSet='' />
												<h5 className='card-title mt-3'>Chatbot</h5>
											</div>
										</div>
									</Link>
								</div>
								<div className='col'>
									<Link to={`/videos`}>
										<div className='card sec-card'>
											<div className='card-body mt-3' style={{textAlign: "center"}}>
												<img src={videosicon} alt='' srcSet='' />
												<h5 className='card-title mt-2'>Videos</h5>
											</div>
										</div>
									</Link>
								</div>
							</div>
							<br />
							<div className='row'>
								<div className='col'>
									<Link to={`/productpage`}>
										<div className='card sec-card'>
											<div className='card-body mt-3' style={{textAlign: "center"}}>
												<img src={prodicon} alt='' srcSet='' />
												<h5 className='card-title mt-2'>Products</h5>
											</div>
										</div>
									</Link>
								</div>
								<div className='col'>
									<Link to={`/Questions`}>
										<div className='card sec-card'>
											<div className='card-body mt-3' style={{textAlign: "center"}}>
												<img src={quesicon} alt='' srcSet='' />
												<h5 className='card-title mt-2'>Questiocs</h5>
											</div>
										</div>
									</Link>
								</div>
								<div className='col'>
									<Link to={`/articles`}>
										<div className='card sec-card'>
											<div className='card-body mt-3' style={{textAlign: "center"}}>
												<img src={articon} alt='' srcSet='' />
												<h5 className='card-title mt-2'>Articles</h5>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='dots dots-up'></div>
							<div className='card mt-5 medical-card'>
								<img src={Rectangle1} className='card-img-top' alt='...' />
								<div className='card-body'>
									<p className='card-text mt-3'>
										Therefore, moments will make a difference with your child. From the Danna application, you can book the nearest incubation to you
									</p>
									<Link to={`/Book`}>
										<a href='#' className='btn mt-3'>
											BOOK YOUR INCUBATION
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
						<div className='row'>
							<Carousel>
								<Carousel.Item>
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='md-4 d-flex'>
													<img src={doctor} className='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div className='col-md-8'>
													<div className='card-body card-txt'>
														<p className='card-text'>What services are provided to children in primary health care centers?</p>
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
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='md-4 d-flex'>
													<img src={doctor} className='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div className='col-md-8'>
													<div className='card-body card-txt'>
														<p className='card-text'>What services are provided to children in primary health care centers?</p>
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
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='md-4 d-flex'>
													<img src={doctor} className='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div className='col-md-8'>
													<div className='card-body card-txt'>
														<p className='card-text'>What services are provided to children in primary health care centers?</p>
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
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='md-4 d-flex'>
													<img src={doctor} className='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div className='col-md-8'>
													<div className='card-body card-txt'>
														<p className='card-text'>What services are provided to children in primary health care centers?</p>
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
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='md-4 d-flex'>
													<img src={doctor} className='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div className='col-md-8'>
													<div className='card-body card-txt'>
														<p className='card-text'>What services are provided to children in primary health care centers?</p>
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
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='md-4 d-flex'>
													<img src={doctor} className='img-doctor' alt='...' />
													<div className='content-img'>
														<p className='name-img'>Omar Samer</p>
														<p className='date-img'>25-11-2023</p>
													</div>
												</div>
												<div className='col-md-8'>
													<div className='card-body card-txt'>
														<p className='card-text'>What services are provided to children in primary health care centers?</p>
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
						<div className='row mt-5'>
							<div className='col'>
								<div className='card' style={{background: "#EDBA64"}}>
									<div className='image'>
										<img src={icons} style={{width: "20%"}} alt='' className='icon-baby' />
										<img src={unsplash} style={{width: "45%"}} alt='' className='img-baby' />
									</div>
									<div className='card-body'>
										<h5 className='card-title mt-3'>Book incubation</h5>
										<p className='card-text'>Flexibility and Adaptability : Acknowledge that the plan may evolve during the incubation process</p>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className='card' style={{background: "#D49778"}}>
									<div className='image'>
										<img src={icons} style={{width: "20%"}} alt='' className='icon-baby' />
										<img src={unsplash} style={{width: "45%"}} alt='' className='img-baby' />
									</div>
									<div className='card-body'>
										<h5 className='card-title mt-3'>Book incubation</h5>
										<p className='card-text'>Flexibility and Adaptability : Acknowledge that the plan may evolve during the incubation process</p>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className='card' style={{background: "#83BBF6"}}>
									<div className='image'>
										<img src={icons} style={{width: "20%"}} alt='' className='icon-baby' />
										<img src={unsplash} style={{width: "45%"}} alt='' className='img-baby' />
									</div>
									<div className='card-body'>
										<h5 className='card-title mt-3'>Book incubation</h5>
										<p className='card-text'>Flexibility and Adaptability : Acknowledge that the plan may evolve during the incubation process</p>
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
			<div className='homepagesection5'>
				<div className='stiker stiker-up'></div>
				<div className='card text-white' style={{width: "100%", border: "none"}}>
					<img src={doctorbook} className='card-img' alt='...' />
					<div className='card-img-overlay container'>
						<h4 className='card-title'>Request a medical consultation now</h4>
						<h1 className='card-text'>Book your child's incubation now</h1>
						<p className='card-text'>
							Therefore, moments will make a difference with your child.
							<br /> From the Danna application, you can book the nearest
							<br /> nursery to you
						</p>
						<div className='chatvideo'>
							<div className='row icon-chat'>
								<div className='col'>
									<div className='mb-3'>
										<div className='row g-0'>
											<div className='col-md-4'>
												<img src={imgvideo} className='img-fluid rounded-start' alt='...' />
											</div>
											<div className='col-md-8'>
												<div className='card-body'>
													<h5 className='card-title'>video call</h5>

													<p className='card-text'>
														<small className='text-muted'>Talk to a doctor via video</small>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col' style={{marginRight: "55%"}}>
									<div className='mb-3'>
										<div className='row g-0'>
											<div className='col-md-4'>
												<img src={imgchat} className='img-fluid rounded-start' alt='...' />
											</div>
											<div className='col-md-8'>
												<Link to={`/chatbot`}>
													<div className='card-body'>
														<h5 className='card-title'>Chatbot</h5>
														<p className='card-text'>
															<small className='text-muted'>Talk to Chatbot</small>
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
							<div className='container'>
								<div className='row row-cols-2 mt-2'>
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='col-md-4'>
													<img src={babyvedio1} alt='...' />
												</div>
												<div className='col-md-8'>
													<div className='card-body'>
														<h5 className='card-title'>Growth</h5>
														<p className='card-text'>Changing diapers frequently is an</p>
														<p className='btnvideo'>
															<small className='text-muted'>PLAY NOW</small>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='col-md-4'>
													<img src={babyvedio1} className='img-fluid rounded-start' alt='...' />
												</div>
												<div className='col-md-8'>
													<div className='card-body'>
														<h5 className='card-title'>Growth</h5>
														<p className='card-text'>Changing diapers frequently is an</p>
														<p className='btnvideo'>
															<small className='text-muted'>PLAY NOW</small>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='col-md-4'>
													<img src={babyvedio1} className='img-fluid rounded-start' alt='...' />
												</div>
												<div className='col-md-8'>
													<div className='card-body'>
														<h5 className='card-title'>Growth</h5>
														<p className='card-text'>Changing diapers frequently is an</p>
														<p className='btnvideo'>
															<small className='text-muted'>PLAY NOW</small>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='col'>
										<div className='card mb-3'>
											<div className='row g-0'>
												<div className='col-md-4'>
													<img src={babyvedio1} className='img-fluid rounded-start' alt='...' />
												</div>
												<div className='col-md-8'>
													<div className='card-body'>
														<h5 className='card-title'>Growth</h5>
														<p className='card-text'>Changing diapers frequently is an</p>
														<p className='btnvideo'>
															<small className='text-muted'>PLAY NOW</small>
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
			<br />
			<br />
			<div className='homepagesection7 mt-5'>
				<div className='card' style={{width: "100%", border: "none"}}>
					<img src={doctorbook2} className='card-img' alt='...' />
					<div className='card-img-overlay container'>
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
			<div className='container'>
				<div className=' mt-5'>
					<img src={app} alt='' />
				</div>
			</div>
		</div>
	);
};
export default Home;
