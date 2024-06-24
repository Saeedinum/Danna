import React, {Component} from "react";
import vector from "../../images/AI IMG.png";
import name from "../../images/Name.png";
import repot from "../../images/rebot 1.png";
import {Link} from "react-router-dom";

export default function ChatBot() {
	return (
		<div className='chatbot p-2' style={{background: "#F5FAFF"}}>
			<div className='container'>
				<div className='card border-0 mb-2'>
					<img src={vector} className='card-img-top' alt='...' />
					<div className='card-body'>
						<div className='row'>
							<div className='col-sm-8 mt-5'>
								<ul className='det_message d-flex gap-2' style={{marginTop: "40%"}}>
									<li>
										<img src={name} alt='' />
									</li>
									<li className='w-100'>
										<input type='text' className='form-control rounded-pill' placeholder='ask your question....' id='exampleInput' />
									</li>
									<Link>
										<li
											className='icon rounded-circle text-white text-center p-1'
											style={{background: "#32aa90", width: "30px", height: "30px", transform: "rotate(45deg)"}}
										>
											<i className='bi bi-send-fill me-1'></i>
										</li>
									</Link>
								</ul>
							</div>
							<div className='col-sm-4'>
								<div className='report'>
									<div className='card border-0'>
										<div className='card-header rounded-3 fs-4 fw-bold text-center' style={{background: "#bad9fa", color: "#3e63b0"}}>
											Hi,User
										</div>
										<img src={repot} alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
