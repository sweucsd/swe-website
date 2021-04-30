import React from 'react';
import './Footer.css';
import instagram from '../assets/contacts/instagram.png';
import facebook from '../assets/contacts/facebook.png';
import email from '../assets/contacts/email.png';
import slack from '../assets/contacts/slack.png';
import connect from '../assets/contacts/link.png';

function Footer() {
  return (
    <footer className="margin footer">
      <div>
        <p className="h3">Contact Us</p>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/swe.ucsd/">
          <img className="icon" src={instagram} alt="" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sweucsd">
          <img className="icon" src={facebook} alt="" />
        </a>
        <a href="mailto:swe@eng.ucsd.edu">
          <img className="icon" src={email} alt="" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://sweatucsd.slack.com/join/shared_invite/zt-i1wt8n8i-wRXnLa5JuhMWg70q7BxwAQ#/shared-invite/email">
          <img className="icon" src={slack} alt="" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdpJZDjpkxkWwFNvyy9T46Efap0ASpX5Faja3IGrvCL8lCWwQ/viewform">
          <img className="icon" src={connect} alt="" />
        </a>
        <h5 className="p1">© Society of Women Engineers at University of California, San Diego</h5>
      </div>
    </footer>
  );
}

export default Footer;
