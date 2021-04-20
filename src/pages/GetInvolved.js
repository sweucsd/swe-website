import './GetInvolved.css';
import ProjectCard from '../components/ProjectCard';
import Gears from '../assets/swe_gears_2.png';


function GetInvolved() {
  const description = 'UC San Diego Society of Women Engineers informs, nurtures, and encourages women to attain high levels of education and professional achievement. Our members serve as role models to pre-college and engineering students.'
  const projects = [
    { name: 'SWEbsite Design', description: description },
    { name: 'ANOTHER PROJECT', description: description },
    { name: 'SWEbsite Design', description: description },
    { name: 'SWEbsite Design', description: description },
    { name: 'SWEbsite Design2', description: 'description2' },
    { name: 'SWEbsite Design3', description: 'description3' },
  ]

  return (
    <div className="projContainer">
      <div className="projHeader">
        <h1 className="projTitle OpenSans">Projects</h1>
        <img src={Gears} style={{ width: 150, float: 'right' }} alt='' />
      </div>
      {projects.map((project, index) => {
        if (index % 2 === 0) {
          return <ProjectCard name={project.name} description={project.description} right={false} />
        }
        else {
          return <ProjectCard name={project.name} description={project.description} right={true} />
        }
      }


      )}

    </div>
  );
}

export default GetInvolved;