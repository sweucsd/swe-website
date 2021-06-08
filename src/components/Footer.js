import React from 'react';
import ContactInfo from '../data/ContactInfo';
import './Footer.css';

function Footer() {
  return (
    <footer className="margin footer">
      <div>
        <p className="h3">Contact Us</p>
        {ContactInfo.map((contact) => (
          <a className="tooltip" target="_blank" rel="noopener noreferrer" href={contact.link}>
            <img className="icon" src={contact.image} alt="" />
            <span className="tooltiptext em">{contact.name}</span>
          </a>
        ))}
        <div>
          <h5 className="p1">
            © Society of Women Engineers at University of California, San Diego |
            {' '}
            <a href="/attributions" className="clickableLink attr">Attributions</a>
          </h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
