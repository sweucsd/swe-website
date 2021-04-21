import './Outreach.css';
import OutreachCard from '../components/OutreachCard';

const image = 'https://i.imgur.com/MgNHcA4.jpg';
const projects = [
  {
    name: 'Envision',
    image: image,
    description: 'Envision is an annual conference hosted by SWE for high school girls to attend workshops and a project fair, hear from industry speakers, and participate in other hands-on activities to learn about opportunities in STEM and gain technical/professional experience.'
  },
  {
    name: 'EDGE',
    image: image,
    description: 'Empowerment and Development for Girls in Engineering (EDGE) is a program that pairs high school girls with an undergraduate mentor at UCSD, while also offering engineering-related workshops to expose young girls to STEM and possible career opportunities.'
  },
]

function Outreach() {
  return (
    <div>
      <div className="outreachHeader">
        <div className="outreachBorder">
          <h3 className="outreachText">
            Through our outreach programs, we aim to introduce high school girls to exciting opportunities in STEM.
            In doing so, we hope to inspire young women to pursue careers in engineering and fulfill our mission of
            bridging the gender gap in STEM-related fields.
        </h3>
        </div>
      </div>
      <div className="outreachContainer">
        {projects.map((project, index) => {
          let isRight;
          if (index % 2 === 0) {
            isRight = false;
          }
          else {
            isRight = true;
          }
          if (index !== projects.length - 1) {
            return <div>
              <OutreachCard name={project.name} image={project.image} description={project.description} right={isRight} />
              <hr className="divider" />
            </div>

          }
          else {
            return <OutreachCard name={project.name} image={project.image} description={project.description} right={isRight} />
          }
        })}
      </div>
    </div>
  );
}

export default Outreach;