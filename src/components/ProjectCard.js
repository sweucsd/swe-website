import '../App.css';

function ProjectCard(props) {
  let align;
  if (props.right === true) {
    align = 'labelRight';
  }
  else {
    align = 'labelLeft';
  }
  return (
    <body>
        <div className="projectContainer">
          <p className={align}>{props.name}</p>
          <div className="project Merriweather">{props.description}</div>
          
      </div>
    </body>
  );
}

export default ProjectCard;