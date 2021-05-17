import React from 'react';
import GBM_1 from '../assets/Event_Imgs/GBM_1.jpg';
import GBM_2 from '../assets/Event_Imgs/GBM_2.jpg';
import './GetInvolved.css';

function GetInvolved() {
  return (
    <div>
      <div className="margin">
        <div>
          <h1 className="purple h2">Become an Active Member</h1>
          <h2 className="mediumPurple h3">How can I become a section member?</h2>
          <ul>
            <li className="h6 darkGray">$5 Membership Fee</li>
            <ul>
              <li className="p2 darkGray">Paid to our Treasurer</li>
            </ul>
            <li className="h6 darkGray">6+ Hours of Participation</li>
            <ul className="p2 darkGray">
              <li>
                Attend GBMs, workshops, and other
                {' '}
                <a href="/events" className="clickableLink">SWE events</a>
              </li>
              <li>
                Get involved with a SWE project (learn more about projects below)
              </li>
              <li>
                Remember to sign in whenever you attend SWE events or meetings in
                order to log your attendance!
              </li>
            </ul>
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
        <p className="p2 darkGray">
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
      </div>
      <div className="margin lightPurpleBg">
        <p className="h2 purple">Programs</p>
        <p className="em mediumPurple">More ways to get involved!</p>
        <div className="programContainer">
          <div className="programText pgLeftText">
            <p className="h3 mediumPurple">Mentor Mentee Program</p>
            <hr className="divider" />
            <p className="p2 darkGray">
              The Mentorship Program pairs undergraduate upperclassmen at UCSD
              with lowerclassmen of the same major. Interested in becoming a mentor or mentee?
              Sign up for our mailing list to join the program and get paired with
              another student in your major!
            </p>
          </div>
          <div>
            <img className="programImg" src="https://i.imgur.com/MgNHcA4.jpg" alt="" />
          </div>
        </div>
        <div className="programContainer">
          <div>
            <img className="programImg" src="https://i.imgur.com/MgNHcA4.jpg" alt="" />
          </div>
          <div className="programText pgRightText">
            <p className="h3 mediumPurple">WE21 Conference</p>
            <hr className="divider" />
            <p className="p2 darkGray">
              <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://we21.swe.org/">WE21</a>
              {' '}
              is SWE&apos;s annual international conference for women in
              engineering and technology, held in different cities every year
              in October or November. The conference features a career fair,
              keynote speakers, ProDev workshops, and other professional opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className="margin">
        <div>
          <h1 className="purple h2">Our Events</h1>
          <h2 className="mediumPurple h3">What events can I attend?</h2>
          <ul>
            <div className="eventSection">
              <div>
                <li className="h6 darkGray">GBMs</li>
                <ul>
                  <li className="p2 darkGray">Attend our quarterly meetings to stay updated</li>
                  <li className="p2 darkGray">Bond with your fellow SWE members</li>
                  <li className="p2 darkGray">Interact with the guest speakers</li>
                </ul>
              </div>
              <div className="gallery">
                <img className="eventsImgs" src={GBM_1} alt="" />
                <img className="eventsImgs" src={GBM_2} alt="" />
              </div>
            </div>
            <li className="h6 darkGray">Technical Events</li>
            <ul className="p2 darkGray">
              <li className="p2 darkGray">Attend workshops and learn a variety of technical skills required for the professional workspace</li>
              <li className="p2 darkGray">Apply your skills outside of the classroom</li>
              <li className="p2 darkGray">Collaborate with other students on a Project to dive deeper into learning a particular skill</li>
            </ul>
            <div className="gallery">
              <img className="eventsImgs" src="src/assets/Event_Imgs/Technical_1.jpg" alt="" />
              <img className="eventsImgs" src="src/assets/Event_Imgs/Technical_2.jpg" alt="" />
            </div>
            <li className="h6 darkGray">Professional Events</li>
            <ul>
              <li className="p2 darkGray">Network and meet with industry professionals </li>
              <li className="p2 darkGray">Gain valuable insight</li>
              <li className="p2 darkGray">Learn how to best prepare yourself for graduation</li>
            </ul>
            <div className="gallery">
              <img className="eventsImgs" src="src/assets/Event_Imgs/Professional_1.jpg" alt="" />
              <img className="eventsImgs" src="src/assets/Event_Imgs/Professional_2.jpg" alt="" />
            </div>
            <li className="h6 darkGray">Outreach Events</li>
            <ul>
              <li className="p2 darkGray">Get involved with some of our outreach programs</li>
              <li className="p2 darkGray">Become a mentor for high school students with EDGE</li>
              <li className="p2 darkGray">Participate and help run cool events for the students with Envision</li>
            </ul>
            <div className="gallery">
              <img className="eventsImgs" src="src/assets/Event_Imgs/Outreach_1.jpg" alt="" />
              <img className="eventsImgs" src="src/assets/Event_Imgs/Outreach_2.jpg" alt="" />
            </div>
            <li className="h6 darkGray">Social Events</li>
            <ul>
              <li className="p2 darkGray">Participate in cool bonding events</li>
              <li className="p2 darkGray">Learn how your fellow members navigate through college</li>
              <li className="p2 darkGray">Attend for a chance to win cool giveaways</li>
            </ul>
            <div className="gallery">
              <img className="eventsImgs" src="src/assets/Event_Imgs/Social_1.jpg" alt="" />
              <img className="eventsImgs" src="src/assets/Event_Imgs/Social_2.jpg" alt="" />
            </div>
          </ul>
        </div>
        <p className="p2 darkGray">
          Find out when these events are happening by visiting the
          {' '}
          <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="/events">calendar</a>
          {' '}
          page!
        </p>
      </div>
    </div>
  );
}

export default GetInvolved;
