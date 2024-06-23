import React from "react";
import imgcontact from "../../images/image 112.png";
import union3 from "../../images/Union3.png";
import union2 from "../../images/Union2.png";
import union1 from "../../images/Union.png";
import {Form} from "react-bootstrap";

export default function ContactUs() {
	return (
		<div>
			<div class='card' style={{width: "100%", border: "none"}}>
				<img src={imgcontact} class='card-img' alt='...' />
				<div class='card-img-overlay container' style={{marginTop: "5%"}}>
					<h4 className='card-title mt-5 fs-1'>Contact Us</h4>
					<h1 className='card-text fs-5'>
						Home ><span style={{color: "rgba(50, 170, 144, 1)"}}>Contact</span>
					</h1>
				</div>
			</div>
			<div className='container mt-5'>
				<div class='row gy-3'>
					<div class=' col-md-6 col-lg-4 '>
						<div class='card border-0'>
							<img src={union1} class='card-img' alt='...' />
							<div class='card-img-overlay text-center mt-3'>
								<i class='bi bi-envelope text-white p-2 rounded-circle fs-5' style={{background: "rgba(142, 117, 75, 0.13)"}}></i>
								<p class='card-text mt-2 fs-5'>This is the heading</p>
								<p class='card-text text-white'>
									1750 Hoffman Fullbariget <br />
									1750 Hoffman Fullbariget
								</p>
							</div>
						</div>
					</div>
					<div class=' col-md-6 col-lg-4 '>
						<div class='card border-0'>
							<img src={union2} class='card-img' alt='...' />
							<div class='card-img-overlay text-center mt-3'>
								<i class='bi bi-envelope text-white p-2 rounded-circle fs-5' style={{background: "rgba(142, 117, 75, 0.13)"}}></i>
								<p class='card-text mt-2 fs-5'>This is the heading</p>
								<p class='card-text text-white'>
									1750 Hoffman Fullbariget <br />
									1750 Hoffman Fullbariget
								</p>
							</div>
						</div>
					</div>
					<div class=' col-md-6 col-lg-4 '>
						<div class='card border-0'>
							<img src={union3} class='card-img' alt='...' />
							<div class='card-img-overlay text-center mt-3'>
								<i class='bi bi-envelope text-white p-2 rounded-circle fs-5' style={{background: "rgba(142, 117, 75, 0.13)"}}></i>
								<p class='card-text mt-2 fs-5'>This is the heading</p>
								<p class='card-text text-white'>
									1750 Hoffman Fullbariget <br />
									1750 Hoffman Fullbariget
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class='card mt-5 border-0  '>
				<div class=' bg-white container rounded-3  shadow p-4'>
					<h5 class='card-title text-center fs-1'>Contact Us</h5>
					<p class='card-text text-center fs-6'>
						This is a wider card with supporting text below as a natural
						<br />
						lead-in to additional content. This content is a little bit longer.
					</p>
					<form class='row g-3'>
						<div class='col-12'>
							<input type='text' class='form-control border-0 bg-light' placeholder='Name*' aria-label='First name' />
						</div>
						<div class='col-md-6'>
							<input type='email' class='form-control border-0 bg-light' id='inputEmail4' placeholder='Your Email' />
						</div>
						<div class='col-md-6'>
							<input type='text' class='form-control border-0 bg-light' id='inputnumber' placeholder='Your Phone' />
						</div>

						<div class='col-12'>
							<textarea id='w3review' class='form-control border-0 bg-light' name='w3review' rows='4' cols='50' placeholder='Your Message*' />
						</div>
						<div class='col-12'>
							<button type='submit' class='btn text-white p-2' style={{background: "rgba(50, 170, 144, 1)"}}>
								Book Appointment
							</button>
						</div>
					</form>
				</div>
			</div>
			<div
				className='container text-white mt-5 w-50 rounded-3 p-3'
				style={{
					backgroundColor: "rgba(50, 170, 144, 1)",
				}}
			>
				<div className='row'>
					<div className='col-lg-6 col-sm-12'>
						<h6>Join Our Newsletter</h6>
						<h5>Subscribe For Any News Update</h5>
					</div>
					<div className='col-lg-6 col-sm-12'>
						<div class='input-group mt-3'>
							<input
								type='email'
								class='form-control text-white'
								placeholder='Your Email'
								style={{
									backgroundColor: "rgba(50, 170, 144, 1)",
								}}
							/>
							<span
								class='input-group-text'
								style={{
									color: "rgba(50, 170, 144, 1)",
								}}
							>
								Subscribe
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
