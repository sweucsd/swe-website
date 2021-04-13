import './Sponsors.css';
import Boeing_Logo from '../assets/Boeing_Logo.png';
import Brain_Corp_Logo from '../assets/Brain_Corp_Logo.jpeg';
import Campos_EPC_Logo from '../assets/Campos_EPC_Logo.jpg';
import Lawrence_Liv_Nat_Lab from '../assets/Lawrence_Liv_Nat_Lab_logo.jpeg';
import Lockheed_Martin_logo from '../assets/Lockheed_Martin_Logo.jpeg';
import Northrop_Grumman_Logo from '../assets/Northrop_Grumman_Logo.svg.png';
import Nuvasive from '../assets/Nuvasive_logo.jpeg';
import splunk from '../assets/splunk_logo.jpg';
import TESC_logo from '../assets/TESC_logo.png';


function Sponsors() {
  return (
    <body>
      <div className="header">
        <h1 className="sponsorstitle OpenSans">Sponsors</h1>
        <div className="SponsorshipContainer">
          <div>
            <img src={Boeing_Logo} style={{ width: 200 }} alt='' />
          </div>
          <div>
            <img src={Brain_Corp_Logo} style={{ width: 200 }} alt='' />
          </div>
          <div>
            <img src={Campos_EPC_Logo} style={{ width: 200 }} alt='' />
          </div>
          <div>
            <img src={Lawrence_Liv_Nat_Lab} style={{ width: 200 }} alt='' />
          </div>
          <div>
            <img src={Lockheed_Martin_logo} style={{ width: 200 }} alt='' />
          </div>
          <div>
            <img src={Northrop_Grumman_Logo} style={{ width: 200 }} alt='' />
          </div>
          <div>
            <img src={Nuvasive} style={{ width: 200 }} alt='' />
          </div>
          <div>
            <img src={splunk} style={{ width: 200 }} alt='' />
          </div>
          <div>
            <img src={TESC_logo} style={{ width: 200 }} alt='' />
          </div>
        </div>
      </div>
    </body >
  );
}

export default Sponsors;