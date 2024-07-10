import forget from "../../../assets/image 7.png";
import Change from "./Change";
import Email from "./Email";
import OTP from "./OTP";

const ForgetPassword = () => {
	return (
		<div className='forgetpassward' style={{background: "rgba(50, 170, 144, 1)"}}>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-6'>
						<img className='mx-auto d-block w-100 p-5' src={forget} alt='' />
					</div>
					<div className='col-sm-6 p-5'>
						<div className='card border-0 bg-white shadow h-100 w-100 p-5' style={{borderRadius: "16px"}}>
							{/* 
								//@ update with slice 
								//@ sections in order 
									email 
										=> OTP //! request and check 
											=> change //! request 
												=> reload authAPi , userSlice
							*/}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgetPassword;
