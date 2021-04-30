import React from 'react';
import PropTypes from 'prop-types';
import './OutreachCard.css';
import Gears from '../assets/swe_gears_2.png';

function OutreachCard(props) {
  const {
    image, name, description, right,
  } = props;

  let align;
  if (right === true) {
    align = 'labelLeft';
  } else {
    align = 'labelRight';
  }
  return (
    <div className="outreachCard">
      {right
        ? (
          <div>
            <div className="outreachCardContainerLeft">
              <div className="imgContainer">
                <img className="leftImgDesign" src={image} alt="" />
                <img src={Gears} className="Left_gears" alt="" />
              </div>
              <p className={`${align} h3`}>{name}</p>
            </div>
            <p className="p2 outreachDescription">{description}</p>
          </div>
        ) : (
          <div>
            <div className="outreachCardContainerRight">
              <div className="imgContainer">
                <img src={Gears} className="Right_gears" alt="" />
                <img className="rightImgDesign" src={image} alt="" />
              </div>
              <p className={`${align} h3`}>{name}</p>
            </div>
            <p className="p2 outreachDescription">{description}</p>
          </div>
        )}
    </div>
  );
}

OutreachCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  right: PropTypes.bool.isRequired,
};

export default OutreachCard;
