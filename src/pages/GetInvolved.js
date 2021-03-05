import '../App.css';
import ProjectCard from '../components/ProjectCard';
import Gears from '../assets/swe_gears_2.png';

function GetInvolved() {
  const description = 'UC San Diego Society of Women Engineers informs, nurtures, and encourages women to attain high levels of education and professional achievement. Our members serve as role models to pre-college and engineering students.'
  const projects = [
    { name: 'SWEbsite Design', description: description },
    { name: 'SWEbsite Design2', description: 'description2' },
    { name: 'SWEbsite Design3', description: 'description3' },
  ]

  return (
    <body>
      <div className="container">
        <div className="header">
          <h1 className="title">Projects</h1>
          <img src={Gears} style={{ width: 150, float: 'right' }} alt='' />
        </div>
        {projects.map((project) =>
          <ProjectCard name={project.name} description={project.description} />
        )}

      </div>
    </body>
  );
}

export default GetInvolved;