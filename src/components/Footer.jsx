import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Footer.css';  
import footerLogo from '../assets/footerLogo.svg';

function Footer(){
    return(
        <footer className="footerContainer">
            <p className="footerTitle">BrightTech Solutions</p>
            <img src={footerLogo} className="footerLogo" />
            <p><b>Email Us: </b>BrightTechCommunication@gmail.com</p>
            <p>Our main purpose at BrightTech Solutions is to provide
            businesses with all of the necesssary tools they need in order to elevate
            their brand and reach new audiences while maintaining their work ethic 
            and integrity.
          </p>
          <p><b>For immedaite inqueries, call our helpline:</b> (715)-295-1943</p>
          
        </footer>
    );
}

export default Footer;