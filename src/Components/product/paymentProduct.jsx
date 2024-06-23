import React from "react";

export default function paymentProduct() {
	return (
		<div>
			<div className='container mt-5'>
				<div className='row justify-content-center gy-3'>
					<div className='col-lg-6 col-md-12 p-3'>
						<h4>BILLING DETAILS</h4>
						<div>
							<label htmlFor='' className='mt-3'>
								First Name *
							</label>{" "}
							<br />
							<input type='text' class='form-control' placeholder='FirstName' aria-label='Username' aria-describedby='basic-addon1' />
						</div>
						<div className='mt-3'>
							<label htmlFor=''>Last Name *</label> <br />
							<input type='text' class='form-control' placeholder='LastName' aria-label='Username' aria-describedby='basic-addon1' />
						</div>
						<div className='mt-3'>
							<label htmlFor=''>Country / Rregion *</label> <br />
							<select class='form-select' aria-label='Default select example'>
								<option selected> Egypt </option>
								<option value='1'>Amercane</option>
								<option value='2'>Asia</option>
								<option value='3'>United State Us</option>
							</select>
						</div>
						<div className='mt-3'>
							<label htmlFor=''>Street Address *</label> <br />
							<input type='text' class='form-control' placeholder='Ebrahim Salam Street' aria-label='Username' aria-describedby='basic-addon1' />
						</div>
						<div className='mt-3'>
							<label htmlFor=''>Town / City *</label> <br />
							<input type='text' class='form-control' aria-label='Username' aria-describedby='basic-addon1' />
						</div>
						<div className='mt-3'>
							<label htmlFor=''>State *</label> <br />
							<select class='form-select' aria-label='Default select example'>
								<option selected> Select The State </option>
								<option value='1'>Marreid</option>
								<option value='2'>single</option>
							</select>
						</div>
						<div className='mt-3'>
							<label htmlFor=''>Phone *</label> <br />
							<input type='tel' class='form-control' aria-label='Username' aria-describedby='basic-addon1' />
						</div>
						<div className='mt-3'>
							<label htmlFor=''>Email Address *</label> <br />
							<input type='email' class='form-control' aria-label='Username' aria-describedby='basic-addon1' />
						</div>
						<div className='mt-3'>
							<label htmlFor=''>Postcode Zip</label> <br />
							<input type='text' class='form-control' aria-label='Username' aria-describedby='basic-addon1' />
						</div>{" "}
						<br />
						<h4>ADDITIONAL INFORMATION</h4>
						<div className='mt-3'>
							<label htmlFor=''>Order notes(Optional)</label> <br />
							<input type='textarea' class='form-control' aria-label='Username' aria-describedby='basic-addon1' />
							<button className='btn w-25 mt-3' style={{backgroundColor: "rgba(50, 170, 144, 1)", color: "white"}}>
								PLACE ORDER
							</button>
						</div>
					</div>
					<div className='col-lg-6 col-md-12 p-3'>
						<div className='card' style={{borderRadius: "16px"}}>
							<h5 className='p-3' style={{color: "rgba(50, 170, 144, 1)"}}>
								Your Order
							</h5>
							<div className='d-flex p-2 border-bottom'>
								<p style={{color: "rgba(50, 170, 144, 1)"}}>Product</p>
								<small className='ms-auto' style={{color: "rgba(50, 170, 144, 1)"}}>
									Subtotal
								</small>
							</div>
							<div className='d-flex p-2 border-bottom'>
								<p className='text-muted'>Soft Rabbit Textil Toy × 1</p>
								<small className='ms-auto text-muted'>$80.00</small>
							</div>
							<div className='d-flex p-2 border-bottom'>
								<p className='text-muted'>Wool Shark Toy × 2</p>
								<small className='ms-auto text-muted'>$80.00</small>
							</div>
							<div className='d-flex p-2 border-bottom'>
								<p className='text-muted'>Subtotal</p>
								<small className='ms-auto text-muted'>$80.00</small>
							</div>
							<div className='d-flex p-2'>
								<p className='fw-bold'>Total</p>
								<small className='ms-auto fw-bold'>$805.00</small>
							</div>
						</div>
						<div className='card p-2 mt-5' style={{backgroundColor: "rgba(235, 233, 235, 1)", borderRadius: "16px"}}>
							<h6 className='fs-3'>Cash on delivery</h6>
							<div className='text-center' style={{backgroundColor: "rgba(223, 220, 222, 1)"}}>
								<p>Pay with cash upon delivery.</p>
							</div>
							<button className='btn w-25 mt-3' style={{backgroundColor: "rgba(50, 170, 144, 1)", color: "white"}}>
								PLACE ORDER
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
