import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './OutreachCard.css';

function OutreachCard(props) {
  const {
    image, name, description, link, right,
  } = props;

  const direction = (right === true) ? '' : 'imageFirst';

  return (
    <div className={`outreachCard ${direction}`}>
      <img className={`outreachImage ${direction}`} src={image} alt="" />
      <div className={`outreachText ${direction}`}>
        <h5 className="mediumPurple">{name}</h5>
        <hr className={`divider outreachDivider ${direction}`} />
        <p className="darkGray">{description}</p>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <Button label="Learn More ›" color="var(--medium-purple)" bgColor="var(--light-purple)" />
        </a>
      </div>
    </div>
  );
}

OutreachCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  right: PropTypes.bool.isRequired,
};

export default OutreachCard;
