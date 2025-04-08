import React from 'react';
import './Projects.css';
import Projects from '../data/Projects';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import Gears from '../assets/swe_icons/swe_gears.png';

function GetInvolved() {
  return (
    <div>
      <div className="margin lightPurpleBg">
        <div className="projHeader">
          <div>
            <h2 className="purple projTitle">Join a Project Team</h2>
            <h3 className="mediumPurple">Gain Technical Experience</h3>
          </div>
          <img src={Gears} className="threeGears" alt="" />
        </div>
        <p className="darkGray">
          Projects are a great way to stay involved with the SWE community
          and earn hours towards membership while gaining hands-on technical
          experience and meeting fellow SWE Bees. Stay subscribed to our
          newsletter and attend GBMs to hear about future project opportunities.
          Here are some of our current projects:
        </p>
        <h2 className="purple projTitle">Previous Projects</h2>
        {Projects.map((project, index) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            image={project.image}
            right={index % 2 === 1}
          />
        ))}
        <div className="sweetIdeasContainer">
          <h2 className="purple projTitle">SWE-et Ideas!</h2>
          <p className="darkGray sweetIdeasBody">
            Interested in starting your own project? Fill out the
            SWE-et Ideas project application
            for a chance to bring your ideas to life! If your application is selected,
            we&apos;ll help you form a team and provide you with funding
            for your very own project.
          </p>
          <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfnSqAgbqSM9LhiWwLa6g5HYfKgdbCFzLfMuGGP3OcClm6hrw/viewform">
            <Button label="Apply Here" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
