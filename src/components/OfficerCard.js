import React from 'react';
import PropTypes from 'prop-types';
import './OfficerCard.css';

function OfficerCard(props) {
  const { image, name, position } = props;

  return (
    <div className="officerCardContainer">
      <img className="officerImg" src={image} alt="" />
      <p className="h6 officerName">{name}</p>
      <hr className="divider officerCardDivider" />
      <p className="p2 officerPosition">{position}</p>
    </div>
  );
}

OfficerCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default OfficerCard;
