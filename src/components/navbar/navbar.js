// import { Link } from 'gatsby';
import React from 'react';
import Logo from '../../assets/logo.svg';
import PhoneIcon from '../../assets/phone_icon.svg';
import EmailIcon from '../../assets/email_icon.svg';

import './navbar.scss';

const Navbar = () => (
	<nav className="nav">
		<div className="logo-container">
			<Logo id="logo" />
		</div>
		<div id="contact-details">
			<div id="phone">
				<span>+421 949 253 305</span>
				<PhoneIcon className="icon" />
			</div>
			<div id="email">
				<span>predajnapraktik@outlook.sk </span>
				<EmailIcon className="icon" />
			</div>
		</div>
	</nav>
);

export default Navbar;
