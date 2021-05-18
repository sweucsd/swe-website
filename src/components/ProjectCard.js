import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

function ProjectCard(props) {
  const {
    right, name, description, image,
  } = props;
  let align;
  let flexDir;
  if (right === true) {
    align = 'projLabelRight';
    flexDir = 'flexEnd';
  } else {
    align = 'projLabelLeft';
    flexDir = 'flexStart';
  }
  return (
    <div className="projectContainer">
      <p className={`${align} h5 purple`}>{name}</p>
      <div className={flexDir}>
        <div className="p2 project">{description}</div>
        <div style={{ backgroundImage: `url(${image})` }} className="projectImgContainer" />
      </div>
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
