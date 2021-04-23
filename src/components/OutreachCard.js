import './OutreachCard.css';
import Gears from '../assets/swe_gears_2.png';

function OutreachCard(props) {
  let align;
  if (props.right === true) {
    align = 'labelLeft'
  }
  else {
    align = 'labelRight'
  }
  return (
    <div className="outreachCard">
      {props.right ?
        <div>
          <div className="outreachCardContainerLeft">
            <div className="imgContainer">
              <div className="Right">
                <img className='leftImgDesign' src={props.image} alt='' />
              </div>
              <img src={Gears} className="Left_gears" alt='' />
            </div>
            <p className={align + " h3"}>{props.name}</p>
          </div>
          <p className="p2 outreachDescription">{props.description}</p>
        </div> : <div>
          <div className="outreachCardContainerRight">
            <div className="imgContainer">
              <img src={Gears} className="Right_gears" alt='' />
              <div className="Left">
                <img className='rightImgDesign' src={props.image} alt='' />
              </div>
            </div>
            <p className={align + " h3"}>{props.name}</p>
          </div>
          <p className="p2 outreachDescription">{props.description}</p>
        </div>
      }
    </div>
  );
}

export default OutreachCard;