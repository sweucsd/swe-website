import '../App.css';
import solid_black_square from '../assets/solid_black_square.png';

function Sponsors() {
  return (
    <body>
      <div className="SponsorshipContainer">
            <div className="header">
              <h1 className="sponsorstitle OpenSans">Sponsors</h1>
              
              <div className="SponsorshipContainer">
              <table id="sponsors_table">
                <tr>
                  <td>
                    <h1 class='sponsor_names'>Slack</h1>
                    <img src={solid_black_square} style={{width: 200, float: 'left' }} alt='' />
                  </td>
                  <td>
                    <h1 class='sponsor_names'>Slack</h1>
                    <img src={solid_black_square} style={{width: 200, float: 'left' }} alt='' />
                  </td>
                  <td>
                    <h1 class='sponsor_names'>Slack</h1>
                    <img src={solid_black_square} style={{width: 200, float: 'left' }} alt='' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1 class='sponsor_names'>Slack</h1>
                    <img src={solid_black_square} style={{width: 200, float: 'left' }} alt='' />
                  </td>
                  <td>
                    <h1 class='sponsor_names'>Slack</h1>
                    <img src={solid_black_square} style={{width: 200, float: 'left' }} alt='' />
                  </td>
                  <td>
                    <h1 class='sponsor_names'>Slack</h1>
                    <img src={solid_black_square} style={{width: 200, float: 'left' }} alt='' />
                  </td>
                </tr>
              </table>
              </div>
            </div>

      </div>
    </body>
  );
}

export default Sponsors;