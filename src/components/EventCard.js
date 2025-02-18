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
      <div className="eventsText">
        <h6 className="darkGray eventCardTitle">{title}</h6>
        <ul>
          {list.map((item) => (
            <li className="p2 darkGray">{item}</li>
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
