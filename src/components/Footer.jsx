import React from 'react';
import './Footer.css';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import {faTwitterSquare,faFacebookSquare,faInstagramSquare,faPinterestSquare,faLinkedin,faSkype} from '@fortawesome/free-brands-svg-icons'
import { mobile } from "../responsive";

const Footer = () => {
	return <div className='footer'>
		<div className="footer__top">
			<a href="#"><p>Back to top </p></a>
		</div>
		<div className='footer__links'>
			{/* <div className='footer__area'>
               <h4>Menu</h4>
			   <ul>
				<li><a href='#'>New Arrivals</a></li>
				<li><a href='#'>Best Sellers</a></li>
				<li><a href='#'>Recently Viewed</a></li>
				<li><a href='#'>Popular This Week</a></li>
				<li><a href='#'>All Products</a></li>
			   </ul>
			</div> */}
			{/* <div className='footer__area'>
			<h4>Categories</h4>
			   <ul>
				<li><a href='#'>Crockery</a></li>
				<li><a href='#'>Furniture</a></li>
				<li><a href='#'>Homeware</a></li>
				<li><a href='#'>Plant Pots</a></li>
				<li><a href='#'>Chairs</a></li>
			
			   </ul>
			</div> */}
			<div className='footer__area'>
			<h4>Our Company</h4>
			   <ul>
				<li><a href='#'>About Us</a></li>
				<li><a href='#'>Vacancies</a></li>
				<li><a href='#'>Contact Us</a></li>
				<li><a href='#'>Privacy</a></li>
				<li><a href='#'>Returns Policy</a></li>
			   </ul>
			</div>
			<div className='footer__area'>
               <h4>Join our mailing list</h4>
			   <input /><button>Sign up</button>
			</div>
		</div>
        <div className='line'>
        
        </div>
        <div className='footer-logos'>
		<p>Copyright 2022 Avion LTD</p>
		<a href='#'><FontAwesomeIcon className="icons"   icon={faLinkedin} /></a>
		<a href='#'><FontAwesomeIcon className="icons" icon={faFacebookSquare} /></a>
		<a href='#'><FontAwesomeIcon className="icons" icon={faInstagramSquare} /></a>
		<a href='#'><FontAwesomeIcon className="icons" icon={faSkype} /></a>
		<a href='#'><FontAwesomeIcon className="icons" icon={faTwitterSquare} /></a>
		<a href='#'><FontAwesomeIcon className="icons" icon={faPinterestSquare} /></a>

		</div>


	</div>;
};

export default Footer;

