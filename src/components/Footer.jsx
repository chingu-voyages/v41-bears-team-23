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

