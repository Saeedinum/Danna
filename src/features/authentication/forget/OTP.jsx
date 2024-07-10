const OTP = () => {
	return (
		<>
			<h4 className='text-center fw-bold mt-5 p-3' style={{color: "rgba(50, 170, 144, 1)"}}>
				OTP VERIFICATION
			</h4>
			<p className='text-secondary text-center'>Enter the OTP sent to - nd----6../../gmail.com</p>
			<form action=''>
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
					<button type='submit' className='btn text-white fs-5 w-50 rounded-pill' style={{background: "rgba(50, 170, 144, 1)"}}>
						Submit
					</button>
				</div>
			</form>
		</>
	);
};

export default OTP;
