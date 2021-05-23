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
        <h5 className="p1">© Society of Women Engineers at University of California, San Diego</h5>
        <a href="/Attributions" className="clickableLink">Attributions</a>
      </div>
      {/* <div className="p2">
        <div>
          Social icon made by
          {' '}
          <a href="https://www.flaticon.com/authors/prettycons" title="prettycons">prettycons</a>
          {' '}
          from
          {' '}
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
        <div>
          Outreach icon made by
          {' '}
          <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a>
          {' '}
          from
          {' '}
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
        <div>
          Professional icon made by
          {' '}
          <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
          {' '}
          from
          {' '}
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
        <div>
          Technical icon made by
          {' '}
          <a href="https://www.freepik.com" title="Freepik">Freepik</a>
          {' '}
          from
          {' '}
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
