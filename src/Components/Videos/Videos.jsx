import imgVideo1 from "../../images/Group 18.png";
import cardimg from "../../images/Group 19.png";
import {Link} from "react-router-dom";
export default function DetailsArticles() {
	return (
		<div className='videos'>
			<div className='container'>
				<h1
					className='text-center'
					style={{
						color: "rgba(50, 170, 144, 1)",
					}}
				>
					Watch Our Children Wellbeing
				</h1>
				<br />
				<div className='card border-0' style={{border: "none"}}>
					<img src={imgVideo1} className='card-img' alt='...' />
					<div
						className='card-img-overlay p-5'
						style={{
							color: "rgba(62, 99, 176, 1)",
						}}
					>
						<h5 className='card-title fs-1 fw-bold'>Prenatal Care</h5>
						<p className='card-text fw-bold'>Knowing that you are doing all you can to ...</p>
						<div
							className='d-flex rounded-bottom ps-2  gap-2 text-white position-absolute bottom-0 start-0'
							style={{
								backgroundColor: "rgba(50, 170, 144, 1)",
							}}
						>
							<p className='fw-bold mt-1'>Watch Video</p>
							<i className='bi bi-play-circle-fill fs-4 pe-2 ' style={{}}></i>
						</div>
					</div>
				</div>
				<div className='row row-cols-1 row-cols-md-3 g-4 mt-4'>
					<div className='col'>
						<Link to={`/openvideos`}>
							<div className='card border-0 shadow'>
								<img src={cardimg} className='card-img-top' alt='...' />
								<div
									className='rounded-bottom rounded-top ps-2 text-white position-absolute top-0 end-0'
									style={{
										backgroundColor: "rgba(50, 170, 144, 1)",
									}}
								>
									<i className='bi bi-play-circle-fill fs-4 pe-2 ' style={{}}></i>
								</div>
								<div className='card-body'>
									<h5 className='card-title'>Breastfeeding or artificial feeding</h5>
									<p className='card-text'>The baby may not be hungry because he has ...</p>
								</div>
							</div>
						</Link>
					</div>
					<div className='col'>
						<Link to={`/openvideos`}>
							<div className='card border-0 shadow'>
								<img src={cardimg} className='card-img-top' alt='...' />
								<div
									className='rounded-bottom rounded-top ps-2 text-white position-absolute top-0 end-0'
									style={{
										backgroundColor: "rgba(50, 170, 144, 1)",
									}}
								>
									<i className='bi bi-play-circle-fill fs-4 pe-2 ' style={{}}></i>
								</div>
								<div className='card-body'>
									<h5 className='card-title'>Breastfeeding or artificial feeding</h5>
									<p className='card-text'>The baby may not be hungry because he has ...</p>
								</div>
							</div>
						</Link>
					</div>
					<div className='col'>
						<Link to={`/openvideos`}>
							<div className='card border-0 shadow'>
								<img src={cardimg} className='card-img-top' alt='...' />
								<div
									className='rounded-bottom rounded-top ps-2 text-white position-absolute top-0 end-0'
									style={{
										backgroundColor: "rgba(50, 170, 144, 1)",
									}}
								>
									<i className='bi bi-play-circle-fill fs-4 pe-2 ' style={{}}></i>
								</div>
								<div className='card-body'>
									<h5 className='card-title'>Breastfeeding or artificial feeding</h5>
									<p className='card-text'>The baby may not be hungry because he has ...</p>
								</div>
							</div>
						</Link>
					</div>
					<div className='col'>
						<Link to={`/openvideos`}>
							<div className='card border-0 shadow'>
								<img src={cardimg} className='card-img-top' alt='...' />
								<div
									className='rounded-bottom rounded-top ps-2 text-white position-absolute top-0 end-0'
									style={{
										backgroundColor: "rgba(50, 170, 144, 1)",
									}}
								>
									<i className='bi bi-play-circle-fill fs-4 pe-2 ' style={{}}></i>
								</div>
								<div className='card-body'>
									<h5 className='card-title'>Breastfeeding or artificial feeding</h5>
									<p className='card-text'>The baby may not be hungry because he has ...</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<br />
			</div>
		</div>
	);
}
