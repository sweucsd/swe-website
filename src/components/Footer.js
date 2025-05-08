import React from 'react';
import ContactInfo from '../data/ContactInfo';
import './Footer.css';

function Footer() {
  return (
    <footer className="margin footer">
      <div>
        <h3>Connect With Us</h3>
        {ContactInfo.map((contact) => (
          <a className="tooltip" target="_blank" rel="noopener noreferrer" href={contact.link}>
            <img className="icon" src={contact.image} alt="" />
            <span className="tooltiptext em">{contact.name}</span>
          </a>
        ))}
        <div>
          <p>
            © Society of Women Engineers at University of California, San Diego
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
