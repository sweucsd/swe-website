import '../App.css';
import solid_black_square from '../assets/solid_black_square.png';
import Gears from '../assets/swe_gears_2.png';

function Outreach() {
  return (
    <body>
      <div className="EdgeContainer">
        <img src={Gears} style={{ width: 200, float: 'right', marginRight: 180, display: 'block' }} alt='' />
        <h1 id='outreach-title-right'>EDGE</h1>
        <img class="BorderClass" src={solid_black_square} style={{display: 'block', borderStyle: 'solid', borderColor: '#c4c4c4', borderWidth: 20, borderRadius:25, width: 700, height:400, marginLeft: 150}} alt='' />

      </div>
      <div className="EnvisionContainer">
        <img src={Gears} style={{ width: 200, float: 'left', marginLeft: 200, display: 'inline-block' }} alt='' />
        <h1 id='outreach-title-left'>Envision</h1>
        <img class="BorderClass" src={solid_black_square} style={{display: 'block', borderStyle: 'solid', borderColor: '#c4c4c4', borderWidth: 20, borderRadius:25, width: 700, height:400, marginRight: 150, marginTop: 20 }} alt='' />
      </div>
    </body>
  );
}

export default Outreach;