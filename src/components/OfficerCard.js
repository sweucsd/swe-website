import React from 'react';
import PropTypes from 'prop-types';
import './OfficerCard.css';

function OfficerCard(props) {
  const {
    image, name, position, year, major, college, fact,
  } = props;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="officerCardContainer shadow flip-card-front">
          <img className="officerImg" src={image} alt="" />
          <h6 className="officerName purple">{name}</h6>
          <hr className="divider officerCardDivider" />
          <p className="officerPosition">{position}</p>
        </div>
        <div className="officerCardContainer flip-card-back">
          <h6 className="officerNameBack">{name}</h6>
          <hr className="divider officerCardDivider" />
          <p className="officerPosition">
            Year:&nbsp;
            {year}
          </p>
          <p className="officerPosition">
            Major:&nbsp;
            {major}
          </p>
          <p className="officerPosition">
            College:&nbsp;
            {college}
          </p>
          <p className="officerPosition">{fact}</p>
        </div>
      </div>
    </div>
  );
}

OfficerCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  college: PropTypes.string.isRequired,
  fact: PropTypes.string.isRequired,
};

export default OfficerCard;
