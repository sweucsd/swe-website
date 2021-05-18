import React from 'react';
import './Footer.css';
import instagram from '../assets/contacts/instagram.png';
import facebook from '../assets/contacts/facebook.png';
import email from '../assets/contacts/email.png';
import slack from '../assets/contacts/slack.png';
import connect from '../assets/contacts/link.png';
import linkedin from '../assets/contacts/linkedin.png';

function Footer() {
  return (
    <footer className="margin footer">
      <div>
        <p className="h3">Contact Us</p>
        <a className="tooltip" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/swe.ucsd/">
          <img className="icon" src={instagram} alt="" />
          <span className="tooltiptext">Instagram</span>
        </a>
        <a className="tooltip" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sweucsd">
          <img className="icon tooltip" src={facebook} alt="" />
          <span className="tooltiptext">Facebook</span>
        </a>
        <a className="tooltip" href="mailto:swe@eng.ucsd.edu">
          <img className="icon tooltip" src={email} alt="" />
          <span className="tooltiptext">Email</span>
        </a>
        <a className="tooltip" target="_blank" rel="noopener noreferrer" href="https://sweatucsd.slack.com/join/shared_invite/zt-i1wt8n8i-wRXnLa5JuhMWg70q7BxwAQ#/shared-invite/email">
          <img className="icon tooltip" src={slack} alt="" />
          <span className="tooltiptext">Slack</span>
        </a>
        <a className="tooltip" target="_blank" rel="noopener noreferrer" href="https://linktr.ee/sweucsd">
          <img className="icon tooltip" src={connect} alt="" />
          <span className="tooltiptext">LinkTree</span>
        </a>
        <a className="tooltip" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/society-of-women-engineers-at-ucsd/">
          <img className="icon tooltip" src={linkedin} alt="" />
          <span className="tooltiptext">LinkedIn</span>
        </a>
        <h5 className="p1">© Society of Women Engineers at University of California, San Diego</h5>
      </div>
    </footer>
  );
}

export default Footer;
