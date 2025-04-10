import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css';

function EventCard(props) {
  const {
    image, title, list,
  } = props;

  return (
    <div className="eventCardContainer shadow">
      <img className="eventsImgs" src={image} alt="" />
      <div className="eventsText darkGray">
        <h6 className="eventCardTitle">{title}</h6>
        <ul>
          {list.map((item) => (
            <li className="eventsCardText">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventCard;
