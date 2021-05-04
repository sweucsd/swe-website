import React from 'react';
import './Sponsors.css';
import BoeingLogo from '../assets/sponsors/Boeing_Logo.png';
import BrainCorpLogo from '../assets/sponsors/Brain_Corp_Logo.jpeg';
import CamposEPCLogo from '../assets/sponsors/Campos_EPC_Logo.jpg';
import LawrenceLivNatLab from '../assets/sponsors/Lawrence_Liv_Nat_Lab_logo.jpeg';
import LockheedMartinlogo from '../assets/sponsors/Lockheed_Martin_Logo.jpeg';
import NorthropGrummanLogo from '../assets/sponsors/Northrop_Grumman_Logo.svg.png';
import Nuvasive from '../assets/sponsors/Nuvasive_logo.jpeg';
import Splunk from '../assets/sponsors/splunk_logo.jpg';
import TESCLogo from '../assets/sponsors/TESC_logo.png';

function Sponsors() {
  return (
    <div className="margin">
      <h1 className="h2 sponsorstitle">Our Sponsors</h1>
      <div className="SponsorshipContainer">
        <div className="sponsorImgContainer">
          <img src={BoeingLogo} style={{ width: 200 }} alt="" />
        </div>
        <div className="sponsorImgContainer">
          <img src={BrainCorpLogo} style={{ width: 200 }} alt="" />
        </div>
        <div className="sponsorImgContainer">
          <img src={CamposEPCLogo} style={{ width: 200 }} alt="" />
        </div>
        <div className="sponsorImgContainer">
          <img src={LawrenceLivNatLab} style={{ width: 200 }} alt="" />
        </div>
        <div className="sponsorImgContainer">
          <img src={LockheedMartinlogo} style={{ width: 200 }} alt="" />
        </div>
        <div className="sponsorImgContainer">
          <img src={NorthropGrummanLogo} style={{ width: 200 }} alt="" />
        </div>
        <div className="sponsorImgContainer">
          <img src={Nuvasive} style={{ width: 200 }} alt="" />
        </div>
        <div className="sponsorImgContainer">
          <img src={Splunk} style={{ width: 200 }} alt="" />
        </div>
        <div className="sponsorImgContainer">
          <img src={TESCLogo} style={{ width: 200 }} alt="" />
        </div>
      </div>
      <p className="h3 interestTitle">Interested in sponsoring us?</p>
      <p className="p1 interestBody">
        Email us at
        {' '}
        <a className="clickableLink" href="mailto:swe@eng.ucsd.edu">swe@eng.ucsd.edu</a>
        {' '}
        to get in contact with our VP External and receive information about how
        your company can partner with our chapter.
      </p>
    </div>
  );
}

export default Sponsors;
