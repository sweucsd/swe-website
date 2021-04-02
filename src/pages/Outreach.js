import '../App.css';
import solid_black_square from '../assets/solid_black_square.png';
import Gears from '../assets/swe_gears_2.png';

function Outreach() {
  return (
    <body>
      <div className="EdgeContainer">
        <img src={Gears} style={{ width: 200, marginLeft: 650, position: 'absolute'}} alt='' />
        <h1 id='outreach-title-right'>EDGE</h1>
        <img class="BorderClass" src={solid_black_square} style={{position:'absolute', borderStyle: 'solid', borderColor: '#c4c4c4', borderWidth: 20, borderRadius:25, width: 700, height:400, boxShadow: '-20px -20px #5e537b' }} alt='' /> 
        <p>Hello! This is text.</p>

      </div>
      <div className="EnvisionContainer">
        <img src={Gears} style={{ width: 200, float: 'left', position: 'absolute' }} alt='' />
        <h1 id='outreach-title-left'>Envision</h1>
        <img class="BorderClass" src={solid_black_square} style={{ position: 'absolute', bottom: 20, borderStyle: 'solid', borderColor: '#c4c4c4', borderWidth: 20, borderRadius:25, width: 700, height:400, marginTop: 20, boxShadow: '20px -20px #5e537b' }} alt='' />
        <p>Hello! This is text.</p>
      </div>
    </body>
  );
}

export default Outreach;