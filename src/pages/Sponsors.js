import './Sponsors.css';
import Boeing_Logo from '../assets/sponsors/Boeing_Logo.png';
import Brain_Corp_Logo from '../assets/sponsors/Brain_Corp_Logo.jpeg';
import Campos_EPC_Logo from '../assets/sponsors/Campos_EPC_Logo.jpg';
import Lawrence_Liv_Nat_Lab from '../assets/sponsors/Lawrence_Liv_Nat_Lab_logo.jpeg';
import Lockheed_Martin_logo from '../assets/sponsors/Lockheed_Martin_Logo.jpeg';
import Northrop_Grumman_Logo from '../assets/sponsors/Northrop_Grumman_Logo.svg.png';
import Nuvasive from '../assets/sponsors/Nuvasive_logo.jpeg';
import splunk from '../assets/sponsors/splunk_logo.jpg';
import TESC_logo from '../assets/sponsors/TESC_logo.png';


function Sponsors() {
  return (
    <div className="margin">
      <h1 className="h2 sponsorstitle">Our Sponsors</h1>
      <div className="SponsorshipContainer">
        <div className="sponsorImgContainer">
          <img src={Boeing_Logo} style={{ width: 200 }} alt='' />
        </div>
        <div className="sponsorImgContainer">
          <img src={Brain_Corp_Logo} style={{ width: 200 }} alt='' />
        </div>
        <div className="sponsorImgContainer">
          <img src={Campos_EPC_Logo} style={{ width: 200 }} alt='' />
        </div>
        <div className="sponsorImgContainer">
          <img src={Lawrence_Liv_Nat_Lab} style={{ width: 200 }} alt='' />
        </div>
        <div className="sponsorImgContainer">
          <img src={Lockheed_Martin_logo} style={{ width: 200 }} alt='' />
        </div>
        <div className="sponsorImgContainer">
          <img src={Northrop_Grumman_Logo} style={{ width: 200 }} alt='' />
        </div>
        <div className="sponsorImgContainer">
          <img src={Nuvasive} style={{ width: 200 }} alt='' />
        </div>
        <div className="sponsorImgContainer">
          <img src={splunk} style={{ width: 200 }} alt='' />
        </div>
        <div className="sponsorImgContainer">
          <img src={TESC_logo} style={{ width: 200 }} alt='' />
        </div>
      </div>
      <p className="h3 interestTitle">Interested in sponsoring us?</p>
      <p className="p1 interestBody">
        Email us at <a className="clickableLink" href="mailto:swe@eng.ucsd.edu">swe@eng.ucsd.edu</a> to
        get in contact with our VP External and receive information about how
        your company can become involved with our chapter.
        </p>
    </div>
  );
}

export default Sponsors;