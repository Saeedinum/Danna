import {useState} from "react";
import forget from "../../../assets/image 7.png";

const ForgetPassword = () => {
	const [step, setStep] = useState(1);

	return (
		<div className='forgetpassward' style={{background: "rgba(50, 170, 144, 1)"}}>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6'>
						<img className='mx-auto d-block w-100 p-5' src={forget} alt='' />
					</div>
					<div className='col-sm-6 p-5'>
						<div className='card border-0 bg-white shadow h-100 w-100 p-5' style={{borderRadius: "16px"}}>
							{step === 1 ? (
								<>
									<h4 className='text-center fw-bold mt-5 p-3' style={{color: "rgba(50, 170, 144, 1)"}}>
										Forgot password
									</h4>
									<p className='text-secondary'>Enter your email for the verification proccess,we will send 4 digits code to your email.</p>
										<div className='p-4'>
											<label htmlFor='exampleInputEmail1' className='form-label'>
												E-mail
											</label>
											<input
												type='email'
												placeholder='Please Enter Email'
												className='form-control'
												id='exampleInputEmail1'
												aria-describedby='emailHelp'
											/>
										</div>
										<div className='d-flex justify-content-center'>
											<button
												onClick={() => {
													setStep(2);
												}}
												className='btn text-white fs-5 w-50 rounded-pill'
												style={{background: "rgba(50, 170, 144, 1)"}}
												type='button'
											>
												Continue
											</button>
										</div>
								</>
							) : step === 2 ? (
								<>
									<h4 className='text-center fw-bold mt-5 p-3' style={{color: "rgba(50, 170, 144, 1)"}}>
										OTP VERIFICATION
									</h4>
									<p className='text-secondary text-center'>Enter the OTP sent to - nd----6../../gmail.com</p>
										<div className='mt-3 d-flex gap-3'>
											<input type='text' className='form-control shadow-sm border-0' style={{background: "rgba(246, 246, 246, 1)"}} />
											<input type='text' className='form-control shadow-sm border-0' style={{background: "rgba(246, 246, 246, 1)"}} />
											<input type='text' className='form-control shadow-sm border-0' style={{background: "rgba(246, 246, 246, 1)"}} />
											<input type='text' className='form-control shadow-sm border-0' style={{background: "rgba(246, 246, 246, 1)"}} />
											<input type='text' className='form-control shadow-sm border-0' style={{background: "rgba(246, 246, 246, 1)"}} />
											<input type='text' className='form-control shadow-sm border-0' style={{background: "rgba(246, 246, 246, 1)"}} />
										</div>
										<div className='mt-4'>
											<p className='text-secondary text-center'>00.120 Sec</p>
											<p className='text-secondary text-center'>
												Don’t receive code ?<button className='border-0 bg-white'>Re-send</button>{" "}
											</p>
										</div>
										<div className='d-flex justify-content-center'>
											<button
												onClick={() => {
													setStep(3);
												}}
												type='button'
												className='btn text-white fs-5 w-50 rounded-pill'
												style={{background: "rgba(50, 170, 144, 1)"}}
											>
												Continue
											</button>
										</div>
								</>
							) : (
								<>
									<h4 className='text-center fw-bold mt-5 p-3' style={{color: "rgba(50, 170, 144, 1)"}}>
										New Password
									</h4>
									<p className='text-secondary'>Set the new password for your account so you can login and access all featuress.</p>
										<div className='p-3'>
											<label htmlFor='exampleInputEmail1' className='form-label'>
												Enter new password
											</label>
											<input type='password' className='form-control' />
										</div>
										<div className='p-3'>
											<label htmlFor='exampleInputEmail1' className='form-label'>
												Confirm password
											</label>
											<input type='password' className='form-control' />
										</div>
										<div className='d-flex justify-content-center'>
											<button type='submit' className='btn text-white fs-5 w-50 rounded-pill' style={{background: "rgba(50, 170, 144, 1)"}}>
												submit
											</button>
										</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
