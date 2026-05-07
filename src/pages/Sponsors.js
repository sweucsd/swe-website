import React from 'react';
import './Sponsors.css';
import SponsorsInfo from '../data/Sponsors';

function Sponsors() {
  return (
    <div className="margin">
      <h2 className="purple">Sponsors</h2>
      <p className="darkGray">Our corporate partners</p>
      <div className="sponsorshipContainer">
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
        <strong>
          <a className="linkHighlight" href="mailto:swe@ucsd.edu">swe@ucsd.edu</a>
        </strong>
        {' '}
        to get in contact with our VP External and receive information about how
        your company can partner with us.
      </p>
    </div>
  );
}

export default Sponsors;
