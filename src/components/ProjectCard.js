import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

function ProjectCard(props) {
  const { right, name, description } = props;
  let align;
  if (right === true) {
    align = 'projLabelRight';
  } else {
    align = 'projLabelLeft';
  }
  return (
    <div className="projectContainer">
      <p className={`${align} h5`}>{name}</p>
      <div className="p2 project">{description}</div>

    </div>
  );
}

ProjectCard.propTypes = {
  right: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;
