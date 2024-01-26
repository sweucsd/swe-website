import React from 'react';
import './Projects.css';
import Projects from '../data/Projects';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import Gears from '../assets/swe_gears_2.png';

function GetInvolved() {
  return (
    <div>
      <div className="margin lightPurpleBg">
        <div className="projHeader">
          <div>
            <h1 className="h2 purple projTitle">Join a Project Team</h1>
            <h1 className="h3 mediumPurple">Gain Technical Experience</h1>
          </div>
          <img src={Gears} className="threeGears" alt="" />
        </div>
        <p className="p1 darkGray">
          Projects are a great way to stay involved with the SWE community
          and earn hours towards membership while gaining hands-on technical
          experience and meeting fellow SWE Bees. Stay subscribed to our
          newsletter and attend GBMs to hear about future project opportunities.
          Here are some of our current projects:
        </p>
        <h1 className="h2 purple projTitle">Previous Projects</h1>
        {Projects.map((project, index) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            image={project.image}
            right={index % 2 === 1}
          />
        ))}
        <div className="sweetIdeasContainer">
          <h1 className="h2 purple projTitle">SWE-et Ideas!</h1>
          <p className="p1 darkGray sweetIdeasBody">
            Interested in starting your own project? Fill out the
            SWE-et Ideas project application
            for a chance to bring your ideas to life! If your application is selected,
            we&apos;ll help you form a team and provide you with funding
            for your very own project.
          </p>
          <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfnSqAgbqSM9LhiWwLa6g5HYfKgdbCFzLfMuGGP3OcClm6hrw/viewform">
            <Button label="Apply Here" secondary />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
