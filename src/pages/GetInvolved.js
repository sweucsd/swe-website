import './GetInvolved.css';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import Gears from '../assets/swe_gears_2.png';


function GetInvolved() {
  const description = 'UC San Diego Society of Women Engineers informs, nurtures, and encourages women to attain high levels of education and professional achievement. Our members serve as role models to pre-college and engineering students.'
  const projects = [
    { name: 'Ornithopter – Robotic Bird', description: 'Behind the robotic bird project are UCSD students from diverse majors and backgrounds. With the skills learned from fields such as aerospace, electrical, and computer engineering, the team applied their individual experiences to achieve a single goal - to create the robotic bird. They decided to focus on creating a robotic bird because one of the goals was to create a hands on project that everyone can gain experience from. Over the course of the project, team members became proficient in programs such as Solidworks and Arduino. Members: Christine Phan (Project Lead), Megan McCall, Rachel Sjostedt, Gabrielle Hart, Tara Len, Amanda Chau, Marie Shimizu, Haley Sohn' },
    { name: 'STEAM Project', description: 'Our STEAM project is the combination of art and engineering that aims to create a statement piece that uses engineering concepts and nods towards women in STEM who are underrepresented. Members: Dafina Sopi (Project Lead), Kylie Morales, Leslie Jasmine Lopez, Tiffany Soebroto, Parker Carnahan, Elianor Shohet, Tatiana Podhajny, Shantelle Megan Serafin' },
    { name: 'SWEbsite Design', description: description },
  ]

  return (
    <div>
      <div className="membershipContainer">
        <div>
          <h1 className="membershipTitle h2">UCSD Section Membership</h1>
          <h2 className="membershipSubtitle h4">How can I become a member?</h2>
          <ol>
            <li className="h3 membershipLi">$5 Membership Fee</li>
            <ul>
              <li className="p1 membershipSubLi">Paid to our Treasurer</li>
            </ul>
            <li className="h3 membershipLi">6+ Hours of Participation</li>
            <ul className="p1 membershipSubLi">
              <li>Attend GBMs, workshops, and other <a href="/events" className="clickableLink">SWE events</a></li>
              <li>Get involved with a SWE project (learn more about projects below)</li>
              <li>Remember to sign in whenever you attend SWE events or meetings in order to log your attendance!</li>
            </ul>
            <li className="h3 membershipLi">Become a Collegiate Member</li>
            <ul>
              <li className="p1 membershipSubLi">Standard Collegiate Membership ($20), Collegiate to Career ($50), SWE + SHPE ($24.90), SWE + NSBE ($27.00)</li>
              <li className="p1 membershipSubLi">Visit <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://swe.org/">swe.org</a> to sign up for collegiate membership</li>
            </ul>
          </ol>
        </div>
        <p className="p2 membershipBody">
          SWE membership at our section comes with a variety of perks, including a free SWE t-shirt, voting rights in board elections, and eligibility to run for board positions.
          However, note that official section membership is not required to attend our events and be involved in our organization. Everyone is welcome!
        </p>
      </div>
      <div className="projContainer">
        <div className="projHeader">
          <h1 className="h2 projTitle">Projects</h1>
          <img src={Gears} style={{ width: 150, float: 'right' }} alt='' />
        </div>
        <p className="p1 projSubtitle">Projects are a great way to stay involved with the SWE community and earn hours towards membership while gaining hands-on technical experience and meeting fellow SWE Bees.
          Stay subscribed to our newsletter and attend GBMs to hear about future project opportunities.
          Here are some of our current projects:
        </p>
        {projects.map((project, index) => {
          if (index % 2 === 0) {
            return <ProjectCard name={project.name} description={project.description} right={false} />
          }
          else {
            return <ProjectCard name={project.name} description={project.description} right={true} />
          }
        }


        )}
        <div className="sweetIdeasContainer">
          <p className="h3 sweetIdeasTitle">SWE-et Ideas!</p>
          <p className="h5 sweetIdeasSubtitle">Project Opportunities</p>
          <p className="p1 sweetIdeasBody">
            Interested in starting your own project? Fill out the
            SWE-et Ideas project application
            for a chance to bring your ideas to life! If your application is selected,
            we'll help you form a team and provide you with funding 
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