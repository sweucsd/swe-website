import './OutreachCard.css';
import Gears2 from '../assets/swe_gears_2.png';
import Gears1 from '../assets/swe_gears_1.png';

function OutreachCard(props) {
  let align;
  if (props.right === true) {
    align = 'labelLeft'
  }
  else {
    align = 'labelRight'
  }
  return (
    <body>
      {props.right ?
        <div>
          <div className="outreachContainer">
            <div className="imgContainer">
              <div className="Right Merriweather"><img className='leftImgDesign' src={props.description} alt=''/></div>
              <img src={Gears1} className="Left_gears" alt=''/>
            </div>
            <p className={align}>{props.name}</p>
          </div></div> : <div>
          <div className="outreachContainer">
            <p className={align}>{props.name}</p>
            <div className="imgContainer">
              <img src={Gears2} className="Right_gears" alt=''/>
              <div className="Left Merriweather"><img className='rightImgDesign' src={props.description} alt=''/></div>
            </div>
          </div>
        </div>
      }
      {/*<div className="projectContainer">
          <p className={align}>{props.name}</p>
          {props.right ? <img src={Gears} className="Left_gears"/> : <img src={Gears} className="Right_gears"/> }
          {props.right ? <div className="Right Merriweather">{props.description}</div> : <div className="Left Merriweather">{props.description}</div>}
          
          
  </div>*/}
    </body>
  );
}

export default OutreachCard;