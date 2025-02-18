import React from 'react';
import './Sponsors.css';
import SponsorsInfo from '../data/Sponsors';

function Sponsors() {
  return (
    <div className="margin">
      <h2 className="purple">Sponsors</h2>
      <p className="italic mediumPurple">Our corporate partners</p>
      <div className="SponsorshipContainer">
        {SponsorsInfo.map((sponsor) => (
          <div className="sponsorImgContainer">
            <img src={sponsor.image} style={{ width: 170 }} alt="" />
          </div>
        ))}
      </div>
      <h3 className="mediumPurple">Interested in sponsoring us?</h3>
      <p className="darkGray">
        Email us at
        {' '}
        <a className="clickableLink" href="mailto:swe@ucsd.edu">swe@ucsd.edu</a>
        {' '}
        to get in contact with our VP External and receive information about how
        your company can partner with our section.
      </p>
    </div>
  );
}

export default Sponsors;
