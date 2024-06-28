import {Link} from "react-router-dom";
import Logo from "../../images/LOGO 1.png";

export default function footor() {
	return (
		<div className='footor shadow mt-5'>
			<div className='container'>
				<div className='row gy-4 ms-5'>
					<div className='col-lg-3 col-md-6'>
						<Link className='Footor-brand' to='/'>
							<img className='w-50' src={Logo} alt='' />
						</Link>
						<p className='fs-6 mt-4 text-muted'>
							Children are a joy and happiness that colors life, so follow Danna’s Website and Application to preserve them
						</p>
						<div className='d-flex gap-2 mt-4'>
							<i className='bi bi-geo-alt-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<p className='text-muted'>Ismailia , Egypt</p>
						</div>
					</div>
					<div className='col-lg-3 col-md-6'>
						<h6 className='fw-bold mb-4' style={{color: "rgba(62, 99, 176, 1)"}}>
							Novfigation
						</h6>
						<Link>
							<p className='text-muted mb-0'>Home</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>About Us</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Pages</p>
						</Link>
						<Link>
							<p className='text-muted'>Serives</p>
						</Link>
						<div className='d-flex gap-2 mt-5'>
							<i className='bi bi-telephone-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<p className='text-muted'>(+876)785 241</p>
						</div>
					</div>
					<div className='col-lg-3 col-md-6'>
						<h6 className='fw-bold mb-4' style={{color: "rgba(62, 99, 176, 1)"}}>
							Quick Link
						</h6>
						<Link>
							<p className='text-muted mb-0'>Contact Us</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Booking</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Product</p>
						</Link>
						<Link>
							<p className='text-muted'>ChatBot</p>
						</Link>
						<div className='d-flex gap-2 mt-5'>
							<i className='bi bi-envelope-paper-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<p className='text-muted'>Dana22@gmail.com</p>
						</div>
					</div>
					<div className='col-lg-3 col-md-6'>
						<h6 className='fw-bold mb-4' style={{color: "rgba(62, 99, 176, 1)"}}>
							Services
						</h6>
						<Link>
							<p className='text-muted mb-0'>Home</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Contact Us</p>
						</Link>
						<Link>
							<p className='text-muted mb-0'>Product</p>
						</Link>
						<Link>
							<p className='text-muted'>ChatBot</p>
						</Link>
						<div className='d-flex gap-3 mt-5 ms-3'>
							<i className='bi bi-facebook' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<i className='bi bi-twitter' style={{color: "rgba(50, 170, 144, 1)"}}></i>
							<i className='bi bi-youtube' style={{color: "rgba(50, 170, 144, 1)"}}></i>
						</div>
					</div>
					<hr />
					<p className='text-center'>
						Made With Love <i className='bi bi-balloon-heart-fill' style={{color: "rgba(50, 170, 144, 1)"}}></i>
					</p>
				</div>
			</div>
		</div>
	);
}
// import { Link } from "react-router-dom";
// import style from "../../Styles/Navbar.module.css";
// import main from "../../Styles/Footer.module.css";

// const Footer = () => {
//   return (
//   <Fragment>
//     <div className={main.footer} style={{ border: "1px solid black",height: "80vh",width: "100%",position: "relative",backgroundImage:"url('https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?w=1380&t=st=1692128189~exp=1692128789~hmac=9a60b5f73ceec833f91eff837235e266b2d607b6f6071be84fcacfd6b8435208')",backgroundRepeat: "no-repeat",backgroundSize: "cover",backgroundBlendMode: "screen",}}>
//       <div
//         style={{width: "100%",position: "absolute",height: "100%",top: "0",left: "0",backgroundColor: "rgb(42,57, 74,.9)",padding:"40px"}}>
//           <div className={main.flext}>
//             <div className=" text-light">
//               <img src="https://img.icons8.com/?size=512&id=81934&format=png" alt="" style={{width:"50px",height:"50px"}}/>
//                   <span className="text-light">
//                     <span style={{fontWeight: "bold",letterSpacing: "2px",fontSize: "22px"}}>
//                       IKEA
//                     </span>
//                    <br/> <span style={{color: "orange",letterSpacing: "2px",fontSize: "14px",}}>Furniture</span></span>
//               <p className={main.parag}>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
//                 deserunt, cum illum earum harum facilis iusto ab praesentium
//                 inventore non ut quo ipsum dolorem dicta placeat ducimus quas.
//                 In, perferendis.
//               </p>
//               <div>
//                 <div className={main.icon}>
//                   <Link>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       style={{ color: "white" }}
//                       width="30"
//                       height="30"
//                       fill="currentColor"
//                       className="bi bi-facebook"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
//                     </svg>
//                   </Link>
//                   <Link>
//                     <svg
//                       style={{ color: "white" }}
//                       width="30"
//                       height="30"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       className="bi bi-linkedin"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//                     </svg>
//                   </Link>
//                   <Link>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       style={{ color: "white" }}
//                       width="30"
//                       height="30"
//                       fill="currentColor"
//                       className="bi bi-instagram"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
//                     </svg>
//                   </Link>
//                   <Link>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       style={{ color: "white" }}
//                       width="30"
//                       height="30"
//                       fill="currentColor"
//                       className="bi bi-twitter"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
//                     </svg>
//                   </Link>
//                   <Link>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       style={{ color: "white" }}
//                       width="30"
//                       height="30"
//                       fill="currentColor"
//                       className="bi bi-pinterest"
//                       viewBox="0 0 16 16"
//                     >
//                       <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
//                     </svg>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className={main.about}>
//               <h3 className="pb-3">About Store</h3>
//               <ul className="navbar-nav  ">
//                 <li className="nav-item ">
//                   <Link className={style.link} aria-current="page" to="/home">
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className={style.link} to="/product">
//                     Shopping
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className={style.link} to="/addProduct">
//                     Add Product
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className={style.link} to="/addProduct">
//                     About US
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className={style.link} to="/addProduct">
//                     Contact US
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className=" text-light">
//               <h3 className="pb-3">Brands</h3>
//               <ul className="navbar-nav ">
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     otobito
//                   </p>
//                 </li>
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     coobilas
//                   </p>
//                 </li>
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     firmigo & bias
//                   </p>
//                 </li>
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     rabitto
//                   </p>
//                 </li>
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     casilas
//                   </p>
//                 </li>
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     arpenture
//                   </p>
//                 </li>
//               </ul>
//             </div>
//             <div className={main.category}>
//               <h3 className="pb-3">Catigories</h3>
//               <ul className="navbar-nav ms-auto me-5 ">
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     single sofa
//                   </p>
//                 </li>
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     sleeper sofa
//                   </p>
//                 </li>
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     accent chairs
//                   </p>
//                 </li>
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     loveseats
//                   </p>
//                 </li>
//                 <li className="nav-item ">
//                   <p className="text-light" aria-current="page" to="/home">
//                     swivels & jliders
//                   </p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="text-secondary ">
//             <p style={{ fontSize: "13px" }}>
//               Copyright &copy; 2023.all Rights reseved to IKEA Furniture
//             </p>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );

// };

// export default Footer;
