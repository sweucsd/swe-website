import '../App.css';

function ProjectCard(props) {
  return (
    <body>
        <div className="projectContainer">
          <p className="label">{props.name}</p>
          <div className="project">{props.description}</div>
      </div>
    </body>
  );
}

export default ProjectCard;