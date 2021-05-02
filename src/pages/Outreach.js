import React from 'react';
import './Outreach.css';
import OutreachCard from '../components/OutreachCard';

const image = 'https://i.imgur.com/MgNHcA4.jpg';
const projects = [
  {
    name: 'Envision',
    image: 'https://swe.ucsd.edu/wp-content/uploads/2020/11/DSC_0359-768x432.jpg',
    description: 'Envision is an annual conference hosted by SWE for high school girls to attend workshops and a project fair, hear from industry speakers, and participate in other hands-on activities to learn about opportunities in STEM and gain technical/professional experience.',
  },
  {
    name: 'EDGE',
    image,
    description: 'Empowerment and Development for Girls in Engineering (EDGE) is a program that pairs high school girls with an undergraduate mentor at UCSD, while also offering engineering-related workshops to expose young girls to STEM and possible career opportunities.',
  },
  {
    name: 'SWENext',
    image: 'https://swe.ucsd.edu/wp-content/uploads/2020/11/DSC_0359-768x432.jpg',
    description: 'SWE Next is...',
  },
];

function Outreach() {
  return (
    <div className="margin outreachContainer">
      {projects.map((project, index) => {
        let isRight;
        if (index % 2 === 0) {
          isRight = false;
        } else {
          isRight = true;
        }
        if (index !== projects.length - 1) {
          return (
            <div>
              <OutreachCard
                name={project.name}
                image={project.image}
                description={project.description}
                right={isRight}
              />
              <hr className="divider" />
            </div>
          );
        }

        return (
          <div>
            <OutreachCard
              name={project.name}
              image={project.image}
              description={project.description}
              right={isRight}
            />
            <hr className="divider" />
          </div>
        );

        return (
          <div>
            <OutreachCard
              name={project.name}
              image={project.image}
              description={project.description}
              right={isRight}
            />
            <hr className="divider" />
          </div>
        );

      })}
    </div>
  );
}

export default Outreach;
