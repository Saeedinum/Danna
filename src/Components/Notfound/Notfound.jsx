import React from "react";
import errorImg from "../../images/image 70.png";

export default function Notfound() {
	return (
		<div className='d-flex align-items-center justify-content-center'>
			<img src={errorImg} className='w-50 mt-5' alt='Not found' />
		</div>
	);
}
