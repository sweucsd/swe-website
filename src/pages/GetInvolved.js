import './GetInvolved.css';
import ProjectCard from '../components/ProjectCard';
import Gears from '../assets/swe_gears_2.png';


function GetInvolved() {
  const description = 'UC San Diego Society of Women Engineers informs, nurtures, and encourages women to attain high levels of education and professional achievement. Our members serve as role models to pre-college and engineering students.'
  const projects = [
    { name: 'Ornithopter – Robotic Bird', description: 'Behind the robotic bird project are UCSD students from diverse majors and backgrounds. With the skills learned from fields such as aerospace, electrical, and computer engineering, the team applied their individual experiences to achieve a single goal - to create the robotic bird. They decided to focus on creating a robotic bird because one of the goals was to create a hands on project that everyone can gain experience from. Over the course of the project, team members became proficient in programs such as Solidworks and Arduino.' },
    { name: 'STEAM Project', description: description },
    { name: 'SWEbsite Design', description: description },
  ]

  return (
    <div>
      <div className="membershipContainer">
        <div>
          <h1 className="membershipTitle">SWE @ UCSD Section Membership</h1>
          <h3 className="membershipSubtitle">How can I become a member?</h3>
          <ol>
            <li className="membershipLi">$5 Membership Fee</li>
            <ul>
              <li className="membershipSubLi">Paid to our Treasurer</li>
            </ul>
            <li className="membershipLi">6+ Hours of Participation</li>
            <ul>
              <li className="membershipSubLi">Attend GBMs, workshops, and other SWE events</li>
              <li className="membershipSubLi">Get involved with a SWE project (learn more about projects below)</li>
              <li className="membershipSubLi">Remember to sign in whenever you attend SWE events or meetings in order to log your attendance!</li>
            </ul>
            <li className="membershipLi">Become a Collegiate Member</li>
            <ul>
              <li className="membershipSubLi">Standard Collegiate Membership ($20), Collegiate to Career ($50), SWE + SHPE ($24.90), SWE + NSBE ($27.00)</li>
              <li className="membershipSubLi">Visit <a className="clickable" target="_blank" rel="noopener noreferrer" href="https://swe.org/">swe.org</a> to sign up for collegiate membership</li>
            </ul>
          </ol>
        </div>
        <p className="membershipBody">
        SWE membership at our section comes with a variety of perks, including a free SWE t-shirt, voting rights in board elections, and eligibility to run for board positions.
        However, note that official section membership is not required to attend our events and be involved in our organization. Everyone is welcome!
        </p>
      </div>
      <div className="projContainer">
        <div className="projHeader">
          <h1 className="projTitle OpenSans">Projects</h1>
          <img src={Gears} style={{ width: 150, float: 'right' }} alt='' />
        </div>
        <p className="projSubtitle">Projects are a great way to stay involved with the SWE community and earn hours towards membership while gaining hands-on technical experience and meeting fellow SWE Bees. 
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

      </div>
    </div>
  );
}

export default GetInvolved;