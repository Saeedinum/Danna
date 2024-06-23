import React, {Component} from "react";
import forget from "../../images/image 7.png";
export default class ForgetNewPassward extends Component {
	render() {
		return (
			<div className='forgetpassward' style={{background: "rgba(50, 170, 144, 1)"}}>
				<div className='container'>
					<div class='row'>
						<div class='col-sm-6'>
							<img className='mx-auto d-block w-100 p-5' src={forget} alt='' />
						</div>
						<div class='col-sm-6 p-5'>
							<div className='card border-0 bg-white shadow h-100 w-100 p-5' style={{borderRadius: "16px"}}>
								<h4 className='text-center fw-bold mt-5 p-3' style={{color: "rgba(50, 170, 144, 1)"}}>
									New Password
								</h4>
								<p className='text-secondary'>Set the new password for your account so you can login and access all featuress.</p>
								<form action=''>
									<div class='p-3'>
										<label for='exampleInputEmail1' class='form-label'>
											Enter new password
										</label>
										<input type='password' class='form-control' id='exampleInputPassword1' />
									</div>
									<div class='p-3'>
										<label for='exampleInputEmail1' class='form-label'>
											Confirm password
										</label>
										<input type='password' class='form-control' id='exampleInputPassword1' />
									</div>
									<div className='d-flex justify-content-center'>
										<button type='submit' class='btn text-white fs-5 w-50 rounded-pill' style={{background: "rgba(50, 170, 144, 1)"}}>
											submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
