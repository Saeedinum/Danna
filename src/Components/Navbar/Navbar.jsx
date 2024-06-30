import {useContext, useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";

import Logo from "@images/LOGO 1.svg";
import "./Navbar.css";

// Throttle function to limit the frequency of scroll event handling
const throttle = (callback, delay) => {
	let lastTime = 0;
	return function () {
		const now = new Date().getTime();
		if (now - lastTime >= delay) {
			callback();
			lastTime = now;
		}
	};
};

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = throttle(() => {
			setIsScrolled(window.scrollY > 70);
		}, 50);

		window.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<nav
				className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}
				// className={`navbar navbar-expand-lg `}
			>
				<div className='container-fluid px-5'>
					<Link className='navbar-brand' to='/'>
						<img src={Logo} alt='' />
					</Link>
					<span
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<i className='fa-solid fa-bars'></i>
					</span>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/home'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/aboutus'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/chatbot'>
									Chatbot
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/'>
									Supplies
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/contactus'>
									Contact
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/'>
									Book a...
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/'>
									Read or Watch...
								</NavLink>
							</li>
						</ul>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/profile'>
									User Name
								</NavLink>
							</li>
							<li className='nav-item'>
								<span className='nav-link'>/</span>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/login' onClick={() => localStorage.clear()}>
									Log Out
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
