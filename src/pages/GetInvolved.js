import React from 'react';
import Events from '../data/Events';
import EventCard from '../components/EventCard';
// import ProgramCard from '../components/ProgramCard';
// import WeConference from '../assets/event_imgs/we_conference.jpg';
import PurpleBee from '../assets/swe_icons/swe_bee.png';
import OutreachEvents from '../data/OutreachEvents';
import OutreachCard from '../components/OutreachCard';
import './GetInvolved.css';

function GetInvolved() {
  const similarOrgs = [
    {
      name: 'National Society of Black Engineers (NSBE)',
      link: 'https://nsbe.ucsd.edu/',
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
        <div className="involvedHeader">
          <div>
            <h2 className="purple">SWE Membership</h2>
            <h5 className="mediumPurple">How can I become a section member?</h5>
          </div>
          <img src={PurpleBee} alt="" />
        </div>
        <ul className="darkGray membershipRoutes">
          <li>
            <strong>$5 Membership Fee </strong>
            paid to our Treasurer
            <p className="separator">or</p>
          </li>
          <li>
            <strong>5+ Hours of Participation </strong>
            from joining a SWE project team or attending GBM, workshops, and other SWE events
          </li>
          <p className="separator">or</p>
          <li>
            <strong>Becoming a Collegiate Member </strong>
            by signing up for one of the following:
            <ul>
              <li>
                <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://swe.org/">Standard Collegiate Membership</a>
                {' '}
                ($20)
              </li>
              <li>Collegiate to Career ($50)</li>
              <li>SWE + SHPE ($24.90)</li>
              <li>SWE + NSBE ($27.00)</li>
            </ul>
          </li>
        </ul>
        <p className="darkGray membershipBody">
          Any
          {' '}
          <strong>one</strong>
          {' '}
          of the above will qualify you for membership at our section.
          Sectional membership comes with a variety of perks, including
          a free SWE t-shirt, voting rights in board elections, and eligibility to
          run for board positions. However, note that
          {' '}
          <strong>official membership is not required </strong>
          {' '}
          to attend our events and be involved in our organization. Everyone is welcome!
        </p>
      </div>

      <div className="margin lightPurpleBg">
        <h2 className="purple">Our Events</h2>
        <h5 className="mediumPurple">What events can I attend?</h5>
        <p className="darkGray">
          Find out when these events are happening by checking out our
          {' '}
          <a className="clickableLink" href="/events">calendar</a>
          .
        </p>
        <div className="eventSection">
          {Events.map((event) => (
            <EventCard title={event.title} image={event.image} list={event.items} />
          ))}
        </div>
      </div>

      <div className="margin">
        <h3 className="purple">Outreach Programs</h3>
        <h5 className="mediumPurple">Give back to K-12 girls in the San Diego community</h5>
        {/* {programs.map((program) => (
          <ProgramCard
            title={program.name}
            description={program.description}
            image={program.image}
            link={program.link}
          />
        ))} */}
        {OutreachEvents.map((event, index) => {
          let isRight;
          if (index % 2 === 0) {
            isRight = false;
          } else {
            isRight = true;
          }
          return (
            <OutreachCard
              name={event.name}
              image={event.image}
              description={event.description}
              link={event.link}
              right={isRight}
            />
          );
        })}
      </div>

      <div className="margin">
        <div>
          <h2 className="purple">Resources</h2>
          <div className="resourcesContainer">
            <div className="usefulLinks">
              <h5 className="mediumPurple">Some Useful Links</h5>
              <ul className="darkGray">
                <li>
                  <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://swe.org/">SWE National Website</a>
                </li>
                <li>
                  Check out the
                  {' '}
                  <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1sasvFiNAzlbxExNYqOpKBMNCKwQZxqWwinyvpZY_5s0/edit?usp=sharing">SWE Opportunities Sheet</a>
                  {' '}
                  for upcoming scholarship opportunities
                </li>
                <li>
                  Join our
                  {' '}
                  <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScC-Yn0CFXuItVm6ZAKS4cDyqM01tCUY-7jYJhsfq9wRHcB2w/viewform">newsletter</a>
                  {' '}
                  for regular updates
                </li>
                <li>
                  <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="http://www.swesandiego.org/">
                    SWE San Diego County Section
                  </a>
                </li>
              </ul>
            </div>

            <div className="otherOrganizations">
              <h5 className="mediumPurple">Similar UCSD Organizations</h5>
              <ul>
                {similarOrgs.map((org) => (
                  <li className="darkGray">
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
