import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

function ProjectCard(props) {
  const {
    right, name, description, image,
  } = props;
  let flexDir;
  if (right === true) {
    flexDir = 'flexEnd';
  } else {
    flexDir = 'flexStart';
  }
  return (
    <div className={`shadow ${flexDir} projectContainer darkGray lightPurpleBg`}>
      <div className="projectText">
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
      <div style={{ backgroundImage: `url(${image})` }} className="projectImg" />
    </div>
  );
}

ProjectCard.propTypes = {
  right: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
