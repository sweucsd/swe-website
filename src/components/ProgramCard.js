import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ProgramCard.css';

function ProgramCard(props) {
  const {
    title, description, image, link,
  } = props;

  return (
    <div className="programContainer">
      <div className="programText darkGray">
        <h6>{title}</h6>
        <hr className="programDivider divider" />
        <p>{description}</p>
        {link !== '' && (
          <div className="programBtn">
            <a className="clickableLink" target="_blank" rel="noopener noreferrer" href={link}>
              <Button label="Website ›" />
            </a>
          </div>
        )}
      </div>
      <div>
        <img className="programImg" src={image} alt="" />
      </div>
    </div>
  );
}

ProgramCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProgramCard.defaultProps = {
  link: '',
};

export default ProgramCard;
