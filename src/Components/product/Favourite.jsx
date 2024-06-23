import React, {useState} from "react";
import toy from "../../images/toycateg.png";
import {Link} from "react-router-dom";

export default function Favourite() {
	return (
		<div className='container'>
			<div className='d-flex justify-content-between mt-2 border-bottom'>
				<h1>Your Favourite</h1>
				<Link to={`/productpage`}>
					<div className='mt-2'>
						<i class='bi bi-arrow-90deg-right rounded-3 text-white p-2' style={{backgroundColor: "#32AA90"}}></i>
					</div>
				</Link>
			</div>
			<div className='mt-5'>
				<div class='row gy-4'>
					<div class='col-lg-3 col-md-6 col-sm-12'>
						<div class='card p-4 rounded-4 text-center'>
							<div class='position-absolute top-0 end-0 p-3'>
								<i class='bi bi-x-lg'></i>
							</div>
							<div className='text-center'>
								<img src={toy} class='card-img-top w-50' alt='...' />
							</div>
							<div class='card-body'>
								<p class='card-text'>Toys</p>
								<h5 class='card-title fw-bold'>Girls Milk Bottles</h5>
								<div className='d-flex justify-content-center gap-3'>
									<del>$280.00</del>
									<p class='card-text'>$80.00</p>
								</div>
							</div>
							<Link to={`/Cart`}>
								<button className='w-100 rounded-3 p-2 text-white' style={{backgroundColor: "#32AA90"}}>
									Add To Cart
								</button>
							</Link>
						</div>
					</div>
					<div class='col-lg-3 col-md-6 col-sm-12'>
						<div class='card p-4 rounded-4 text-center'>
							<div class='position-absolute top-0 end-0 p-3'>
								<i class='bi bi-x-lg'></i>
							</div>
							<div className='text-center'>
								<img src={toy} class='card-img-top w-50' alt='...' />
							</div>
							<div class='card-body'>
								<p class='card-text'>Toys</p>
								<h5 class='card-title fw-bold'>Girls Milk Bottles</h5>
								<div className='d-flex justify-content-center gap-3'>
									<del>$280.00</del>
									<p class='card-text'>$80.00</p>
								</div>
							</div>
							<Link to={`/Cart`}>
								<button className='w-100 rounded-3 p-2 text-white' style={{backgroundColor: "#32AA90"}}>
									Add To Cart
								</button>
							</Link>
						</div>
					</div>
					<div class='col-lg-3 col-md-6 col-sm-12'>
						<div class='card p-4 rounded-4 text-center'>
							<div class='position-absolute top-0 end-0 p-3'>
								<i class='bi bi-x-lg'></i>
							</div>
							<div className='text-center'>
								<img src={toy} class='card-img-top w-50' alt='...' />
							</div>
							<div class='card-body'>
								<p class='card-text'>Toys</p>
								<h5 class='card-title fw-bold'>Girls Milk Bottles</h5>
								<div className='d-flex justify-content-center gap-3'>
									<del>$280.00</del>
									<p class='card-text'>$80.00</p>
								</div>
							</div>
							<Link to={`/Cart`}>
								<button className='w-100 rounded-3 p-2 text-white' style={{backgroundColor: "#32AA90"}}>
									Add To Cart
								</button>
							</Link>
						</div>
					</div>
					<div class='col-lg-3 col-md-6 col-sm-12'>
						<div class='card p-4 rounded-4 text-center'>
							<div class='position-absolute top-0 end-0 p-3'>
								<i class='bi bi-x-lg'></i>
							</div>
							<div className='text-center'>
								<img src={toy} class='card-img-top w-50' alt='...' />
							</div>
							<div class='card-body'>
								<p class='card-text'>Toys</p>
								<h5 class='card-title fw-bold'>Girls Milk Bottles</h5>
								<div className='d-flex justify-content-center gap-3'>
									<del>$280.00</del>
									<p class='card-text'>$80.00</p>
								</div>
							</div>
							<Link to={`/Cart`}>
								<button className='w-100 rounded-3 p-2 text-white' style={{backgroundColor: "#32AA90"}}>
									Add To Cart
								</button>
							</Link>
						</div>
					</div>
					<div class='col-lg-3 col-md-6 col-sm-12'>
						<div class='card p-4 rounded-4 text-center'>
							<div class='position-absolute top-0 end-0 p-3'>
								<i class='bi bi-x-lg'></i>
							</div>
							<div className='text-center'>
								<img src={toy} class='card-img-top w-50' alt='...' />
							</div>
							<div class='card-body'>
								<p class='card-text'>Toys</p>
								<h5 class='card-title fw-bold'>Girls Milk Bottles</h5>
								<div className='d-flex justify-content-center gap-3'>
									<del>$280.00</del>
									<p class='card-text'>$80.00</p>
								</div>
							</div>
							<Link to={`/Cart`}>
								<button className='w-100 rounded-3 p-2 text-white' style={{backgroundColor: "#32AA90"}}>
									Add To Cart
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
