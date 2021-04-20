import './ProjectCard.css';

function ProjectCard(props) {
  let align;
  if (props.right === true) {
    align = 'projLabelRight';
  }
  else {
    align = 'projLabelLeft';
  }
  return (
    <body>
        <div className="projectContainer">
          <p className={align}>{props.name}</p>
          <div className="project">{props.description}</div>
          
      </div>
    </body>
  );
}

export default ProjectCard;