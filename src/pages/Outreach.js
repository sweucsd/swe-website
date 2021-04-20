import './Outreach.css';
import OutreachCard from '../components/OutreachCard';

const description = 'https://i.imgur.com/MgNHcA4.jpg';
const projects = [
  { name: 'Envision', description: description },
  { name: 'Edge', description: description },
]

function Outreach() {
  return (
    projects.map((project, index) => {
      if (index % 2 === 0) {
        return <OutreachCard name={project.name} description={project.description} right={false} />
      }
      else {
        return <OutreachCard name={project.name} description={project.description} right={true} />
      }
    }
    )
  );
}

export default Outreach;