import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {baseURL} from "@utils/baseURL";

const Doctors = () => {
	const [doctors, setDoctors] = useState([]);
	useEffect(() => {
		axios
			.get(baseURL + "doctors")
			.then((response) => {
				setDoctors(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<div className='Doctors_Crad_home'>
				<div className='container'>
					<div className='row gy-4'>
						{doctors.map((doctor) => (
							<div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
								<div className='card border-0 rounded-5 text-center shadow'>
									<div className='justify-content-center mt-3'>
										<img
											className='rounded-circle shadow'
											src={doctor.image}
											alt={doctor.name}
											style={{
												width: "40%",
												border: "2px solid white",
											}}
										/>
									</div>
									<div className='card-body'>
										<h5 className='card-title'>{doctor.name}</h5>
										<p
											className='card-text'
											style={{
												fontSize: "10px",
												color: "#6D6666",
											}}
										>
											{doctor.specialty}
										</p>
										<div
											className='d-flex gap-1 justify-content-center'
											style={{
												color: "#EDBA64",
											}}
										>
											{Array(Math.floor(doctor.rating)).fill(<i className='bi bi-star-fill'></i>)}
											{Array(doctor.rating % 1 >= 0.5 ? 1 : 0).fill(<i className='bi bi-star-half'></i>)}
										</div>
									</div>
									<Link to={`/detailsdoctors/${doctor._id}`}>
										<button
											className='btn-text w-100 p-2 text-white rounded-bottom-5'
											style={{
												backgroundColor: "#32AA90",
											}}
										>
											Talk To Doctor
										</button>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Doctors;
