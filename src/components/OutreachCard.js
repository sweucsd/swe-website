import React from 'react';
import PropTypes from 'prop-types';
import './OutreachCard.css';
import Gears from '../assets/swe_gears_2.png';

function OutreachCard(props) {
  const {
    image, name, description, right,
  } = props;

  let align;
  let container;
  let imgDesign;
  let gears;
  let divider;
  if (right === true) {
    align = 'labelLeft';
    container = 'outreachCardContainerRight';
    imgDesign = 'rightImgDesign';
    gears = 'Right_gears';
    divider = 'outreachDividerLeft';
  } else {
    align = 'labelRight';
    container = 'outreachCardContainerLeft';
    imgDesign = 'leftImgDesign';
    gears = 'Left_gears';
    divider = 'outreachDividerRight';
  }
  return (
    <div className="outreachCard">
      <div className={container}>
        <div className="imgContainer">
          <img className={imgDesign} src={image} alt="" />
          <img src={Gears} className={gears} alt="" />
        </div>
        <div className={align}>
          <p className="h3 mediumPurple">{name}</p>
          <hr className={`divider ${divider}`} />
          <p className="p2 darkGray">{description}</p>
        </div>
      </div>
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
