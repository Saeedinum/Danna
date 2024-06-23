import React, {Component, useState} from "react";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import Ellipse from "../../images/profile.png";
import "../../Styles/ProfileDr.css";
import Avatar from "react-avatar-edit";

export default function ProfileDr() {
	const [image, setimage] = useState("");
	const [imageCrop, setimageCrop] = useState("");
	const [src, setsrc] = useState(false);
	const [profile, setprofile] = useState([]);
	const [pview, setpview] = useState(false);

	const profileFinal = profile.map((item) => item.pview);

	const onClose = () => {
		setpview(null);
	};
	const onCrop = (view) => {
		setpview(view);
	};
	const saveCropImage = () => {
		setprofile([...profile, {pview}]);
		setimageCrop(false);
	};
	return (
		<div className='profile p-5'>
			<div className='container-fluid'>
				<div class='row gy-4'>
					<div class='col-sm-4'>
						<div class='sidebar bg-white shadow rounded w-100'>
							<ul className='p-4'>
								<li>
									<a class='active d-flex gap-4 fs-2 rounded p-3' href=''>
										<i class='bi bi-person'></i>
										<span>UserInfo</span>
									</a>
								</li>
								<li>
									<a class='active d-flex gap-4 fs-2 rounded p-3' href=''>
										<i class='bi bi-bookmark-fill' style={{color: " rgba(50, 170, 144, 1)"}}></i>
										<span>saved</span>
									</a>
								</li>
								<li>
									<a class='active d-flex gap-4 fs-2 rounded p-3' href=''>
										<i class='bi bi-journal-bookmark-fill' style={{color: "rgba(166, 121, 166, 0.87)"}}></i>
										<span>Booking</span>
									</a>
								</li>
								<li>
									<a class='active d-flex gap-4 fs-2 rounded p-3' href=''>
										<i class='bi bi-bell' style={{color: "rgba(255, 61, 0, 0.79)"}}></i>
										<span>Notices</span>
									</a>
								</li>
								<li>
									<a class='active d-flex gap-4 fs-2 rounded p-3' href=''>
										<i class='bi bi-star' style={{color: "rgba(255, 118, 220, 1)"}}></i>
										<span>Favorites</span>
									</a>
								</li>
								<li>
									<a class='active d-flex gap-4 fs-2 rounded p-3' href=''>
										<i class='bi bi-play-circle-fill' style={{color: "rgba(211, 16, 16, 1)"}}></i>
										<span>Video</span>
									</a>
								</li>
								<li>
									<a class='active d-flex gap-4 fs-2 rounded p-3' href=''>
										<i class='bi bi-question-circle' style={{color: "rgba(237, 186, 100, 1)"}}></i>
										<span>Helping & privacy</span>
									</a>
								</li>
								<li>
									<a class='active d-flex gap-4 fs-2 rounded p-3' href=''>
										<i class='bi bi-gear-fill' style={{color: "rgba(166, 121, 166, 1)"}}></i>
										<span>Settings</span>
									</a>
								</li>
							</ul>
							<br />
							<div class='info'>
								<a class='active d-flex gap-4 fs-2 rounded p-5' href=''>
									<i class='bi bi-box-arrow-right'></i>
									<span>Log Out</span>
								</a>
							</div>
						</div>
					</div>
					<div class='col-sm-8'>
						<div class='card border-0 shadow rounded w-100'>
							<div className='profileform'>
								<div className='profile_img text-center p-4'>
									<div className='flex flex-column justify-content-center align-items-center'>
										<img
											src={profileFinal.length ? profileFinal : Ellipse}
											style={{width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover", border: "4px solid green"}}
											onClick={() => setimageCrop(true)}
											alt=''
										/>
										<br />
										<label htmlFor='' className='mt-3 text-5xl fs-3 fw-bold'>
											Mohamed Osama
										</label>
										<br />
										<Dialog
											visible={imageCrop}
											header={() => (
												<p htmlFor='' className='text-2xl textColor'>
													Updata Profile
												</p>
											)}
											onHide={() => setimageCrop(false)}
										>
											<div className='confirmation-content flex flex-column align-items-center'>
												<Avatar
													width={500}
													height={400}
													onCrop={onCrop}
													onClose={onClose}
													src={src}
													shadingColor={"#474649"}
													backgroundColor={"#474649"}
												/>
												<div className='flex flex flex-column align-items-center mt-5 w-12'>
													<div className='flex justify-content-around w-12 mt-4'>
														<Button onClick={saveCropImage} label='Save' icon='pi pi-check' />
													</div>
												</div>
											</div>
										</Dialog>
										<InputText
											type='file'
											accept='/image/*'
											style={{display: "none"}}
											onChange={(event) => {
												const file = event.target.files[0];
												if (file && file.type.substring(0, 5) === "image") {
													setimage(file);
												} else {
													setimage(null);
												}
											}}
										/>
									</div>
								</div>
								<form className='form p-3'>
									<div className='d-flex' style={{gap: "39%"}}>
										<label for='exampleInputFirst' class='form-label ms-3'>
											First Name
										</label>
										<label for='exampleInputLast' class='form-label ms-4'>
											Last Name
										</label>
									</div>
									<div class='d-flex gap-3'>
										<input type='text' class='form-control' id='exampleInputFirst' aria-describedby='fnameHelp' />
										<input type='text' class='form-control' id='exampleInputLast' aria-describedby='lnameHelp' />
									</div>
									<div>
										<label for='exampleInputEmail1' class='form-label ms-3'>
											E-Mail
										</label>
										<input type='email' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
									</div>
									<div>
										<label for='exampleInputPhone' class='form-label ms-3'>
											Phone Number
										</label>
										<input type='text' class='form-control' id='exampleInputPhone' aria-describedby='phoneHelp' />
									</div>
									<div>
										<label for='exampleInputYear' class='form-label ms-3'>
											Year
										</label>
										<input type='text' class='form-control' id='exampleInputYear' />
									</div>
									<label for='exampleInputGender' class='form-label ms-3'>
										Gender
									</label>
									<br />
									<div class=' gender p-2 ps-4 d-flex gap-5'>
										<div class='form-check form-check-inline'>
											<input class='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio1' value='option1' />
											<label class='form-check-label' for='inlineRadio1'>
												Male
											</label>
										</div>
										<div class='form-check form-check-inline'>
											<input class='form-check-input' type='radio' name='inlineRadioOptions' id='inlineRadio2' value='option2' />
											<label class='form-check-label' for='inlineRadio2'>
												Female
											</label>
										</div>
									</div>
									<div class='mb-3'>
										<label for='exampleInputLocation' class='form-label ms-3'>
											Location
										</label>
										<input type='text' class='form-control' id='exampleInputLocation' />
									</div>
									<div className='text-center'>
										<button type='submit' class='btn fs-4 rounded'>
											Save Change
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

//   npm i react-avatar-edit
