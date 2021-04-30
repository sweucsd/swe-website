import React from 'react';
import './OfficerCard.css'

function OfficerCard(props) {
  return (
    <div className="officerCardContainer">
      <img className="officerImg" src={props.image} alt=''/>
      <p className="h6 officerName">{props.name}</p>
      <hr className="divider officerCardDivider" />
      <p className="p2 officerPosition">{props.position}</p>
    </div>
  );
}

export default OfficerCard;