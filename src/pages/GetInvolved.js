import React from 'react';
import Events from '../data/Events';
import EventCard from '../components/EventCard';
import ProgramCard from '../components/ProgramCard';
import weConference from '../assets/Event_Imgs/we_conference.jpg';
import mentorMentee from '../assets/Event_Imgs/mentor_mentee.jpg';
import purpleBee from '../assets/swe_bee.png';
import './GetInvolved.css';

function GetInvolved() {
  const programs = [
    {
      name: 'Mentor/Mentee',
      description: 'The SWEntorship Program pairs undergraduate upperclassmen at UCSD with lowerclassmen of the same major. Interested in becoming a mentor or mentee? Sign up for our mailing list to join the program and get paired with another student in your major!',
      image: mentorMentee,
      link: '',
    },
    {
      name: 'WE21 Conference',
      description: 'WE21 is SWE\'s annual international conference for women in engineering and technology, held in different cities every year in October or November. The conference features a career fair, keynote speakers, ProDev workshops, and other professional opportunities.',
      image: weConference,
      link: 'https://we21.swe.org/',
    },
  ];

  const similarOrgs = [
    {
      name: 'National Society of Black Engineers (NSBE)',
      link: 'http://nsbeucsd.weebly.com/',
    },
    {
      name: 'Society of Hispanic Professional Engineers (SHPE)',
      link: 'https://sites.google.com/view/shpeucsd/home',
    },
    {
      name: 'Out in Science, Technology, Engineering, and Mathematics (OSTEM)',
      link: 'https://ostem.ucsd.edu/',
    },
    {
      name: 'The Society of Asian Scientists and Engineers (SASE)',
      link: 'https://saseatucsd.weebly.com/',
    },
    {
      name: 'Women in Computing (WIC)',
      link: 'https://wic.ucsd.edu/',
    },
  ];

  return (
    <>
      <div className="margin">
        <div>
          <div className="beeImgContainer">
            <div>
              <h1 className="purple h2">SWE Membership</h1>
              <h2 className="mediumPurple h3">How can I become a section member?</h2>
            </div>
            <img className="beeImg" src={purpleBee} alt="" />
          </div>
          <ul>
            <li className="h6 darkGray">$5 Membership Fee</li>
            <ul>
              <li className="p2 darkGray">Paid to our Treasurer</li>
            </ul>
            <p className="p1 darkGray separator"><strong>or</strong></p>
            <li className="h6 darkGray">6+ Hours of Participation</li>
            <ul className="p2 darkGray">
              <li>
                Attend GBMs, workshops, and other
                {' '}
                <a href="/events" className="clickableLink">SWE events</a>
              </li>
              <li>
                Join a SWE project team (learn more
                {' '}
                <a href="/projects" className="clickableLink">here</a>
                )
              </li>
              <li>
                Remember to sign in whenever you attend SWE events or meetings in
                order to log your attendance!
              </li>
            </ul>
            <p className="p1 darkGray separator"><strong>or</strong></p>
            <li className="h6 darkGray">Become a Collegiate Member</li>
            <ul>
              <li className="p2 darkGray">
                Standard Collegiate Membership ($20), Collegiate to Career ($50),
                SWE + SHPE ($24.90), SWE + NSBE ($27.00)
              </li>
              <li className="p2 darkGray">
                Visit
                {' '}
                <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://swe.org/">swe.org</a>
                {' '}
                to sign up for collegiate membership
              </li>
            </ul>
          </ul>
        </div>
        <p className="p2 darkGray membershipBody">
          Any
          {' '}
          <strong>one</strong>
          {' '}
          of the above will qualify you for membership at our section.
          Sectional membership comes with a variety of perks, including
          a free SWE t-shirt, voting rights in board elections, and eligibility to
          run for board positions. However, note that
          {' '}
          <strong>official membership is not required</strong>
          {' '}
          to attend our events and be involved in our organization. Everyone is welcome!
        </p>

        <div>
          <h1 className="purple h2">Our Events</h1>
          <h2 className="mediumPurple h3">What events can I attend?</h2>

          <div className="eventSection">
            {Events.map((event) => (
              <EventCard title={event.title} image={event.image} list={event.items} />
            ))}
          </div>
          <p className="p2 darkGray">
            Find out when these events are happening by checking out our
            {' '}
            <a className="clickableLink" href="/events">calendar.</a>
          </p>
        </div>
      </div>

      <div className="margin lightPurpleBg">
        <p className="h2 purple">Other Programs</p>
        <p className="italic mediumPurple">More ways to get involved!</p>
        {programs.map((program) => (
          <ProgramCard
            title={program.name}
            description={program.description}
            image={program.image}
            link={program.link}
          />
        ))}
      </div>

      <div className="margin">
        <div>
          <h1 className="purple h2">Resources</h1>
          <div className="resourcesContainer">
            <div className="generalLinks">
              <h2 className="mediumPurple h3">Some Useful Links</h2>
              <ul>
                <li className="p2 darkGray">
                  <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://swe.org/">SWE National Website</a>
                </li>
                <li className="p2 darkGray">
                  Check out the
                  {' '}
                  <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1BvWJhT6jVURzMG5PkjGtbqWT5YD6yN4-3IEllo_Qx0g/edit?usp=sharin">SWE Opportunities Sheet</a>
                  {' '}
                  for upcoming scholarship opportunities
                </li>
                <li className="p2 darkGray">
                  Join our
                  {' '}
                  <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdpJZDjpkxkWwFNvyy9T46Efap0ASpX5Faja3IGrvCL8lCWwQ/viewform">newsletter</a>
                  {' '}
                  for regular updates
                </li>
                <li className="p2 darkGray">
                  <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="http://www.swesandiego.org/">
                    SWE San Diego County Section
                  </a>
                </li>
              </ul>
            </div>

            <div className="otherOrganizations">
              <h2 className="mediumPurple h3">Similar UCSD Organizations</h2>
              <ul>
                {similarOrgs.map((org) => (
                  <li className="p2 darkGray">
                    <a className="clickableLink" target="_blank" rel="noopener noreferrer" href={org.link}>
                      {org.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInvolved;
