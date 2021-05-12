import React from 'react';
import './GetInvolved.css';

function GetInvolved() {
  return (
    <div>
      <div className="margin">
        <div>
          <h1 className="membershipTitle h2">Start a Membership</h1>
          <h2 className="membershipSubtitle h3">How can I become a section member?</h2>
          <ul>
            <li className="h6 membershipLi">$5 Membership Fee</li>
            <ul>
              <li className="p2 membershipSubLi">Paid to our Treasurer</li>
            </ul>
            <li className="h6 membershipLi">6+ Hours of Participation</li>
            <ul className="p2 membershipSubLi">
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
            <li className="h6 membershipLi">Become a Collegiate Member</li>
            <ul>
              <li className="p2 membershipSubLi">
                Standard Collegiate Membership ($20), Collegiate to Career ($50),
                SWE + SHPE ($24.90), SWE + NSBE ($27.00)
              </li>
              <li className="p2 membershipSubLi">
                Visit
                {' '}
                <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://swe.org/">swe.org</a>
                {' '}
                to sign up for collegiate membership
              </li>
            </ul>
          </ul>
        </div>
        <p className="p2 membershipBody">
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
    </div>
  );
}

export default GetInvolved;
