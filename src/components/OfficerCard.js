import React from 'react';
import PropTypes from 'prop-types';
import './OfficerCard.css';

function OfficerCard(props) {
  const {
    image, name, position, /* year, major, college, fact, */
  } = props;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="officerCardContainer shadow flip-card-front">
          <img className="officerImg" src={image} alt="" />
          <p className="h6 officerName purple">{name}</p>
          <hr className="divider officerCardDivider" />
          <p className="p2 officerPosition">{position}</p>
        </div>
        <div className="officerCardContainer flip-card-back">
          <p className="h6 officerNameBack">{name}</p>
          <hr className="divider officerCardDivider" />
          <p className="p2 officerPosition">
            Year:&nbsp;
            {year}
          </p>
          <p className="p2 officerPosition">
            Major:&nbsp;
            {major}
          </p>
          <p className="p2 officerPosition">
            College:&nbsp;
            {college}
          </p>
          <p className="p2 officerPosition">{fact}</p>
        </div>
      </div>
    </div>
  );
}

OfficerCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  /* year: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  fact: PropTypes.string.isRequired, */
};

export default OfficerCard;
