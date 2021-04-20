import React from 'react';
import './Footer.css';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import email from '../assets/email.png';
import slack from '../assets/slack.png';
import connect from '../assets/link.png';



function Footer() {
  return (
    <footer className="footer">
        <div>
          <h5>© Society of Women Engineers at University of California, San Diego</h5>
          <a href="https://www.instagram.com/swe.ucsd/">
            <img className="icon" src={instagram} alt='' />
          </a>
          <a href="https://www.facebook.com/sweucsd">
            <img className="icon" src={facebook} alt='' />
          </a>
          <a href="mailto:swe@eng.ucsd.edu">
            <img className="icon" src={email} alt='' />
          </a>
          <a href="https://sweatucsd.slack.com/join/shared_invite/zt-i1wt8n8i-wRXnLa5JuhMWg70q7BxwAQ#/shared-invite/email">
            <img className="icon" src={slack} alt='' />
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpJZDjpkxkWwFNvyy9T46Efap0ASpX5Faja3IGrvCL8lCWwQ/viewform">
            <img className="icon" src={connect} alt='' />
          </a>    
        </div>
    </footer>
  );
}

export default Footer;