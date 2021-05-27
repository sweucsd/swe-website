import React from 'react';
import SocialIcon from '../assets/events/social_icon.png';
import OutreachIcon from '../assets/events/outreach_icon.png';
import TechnicalIcon from '../assets/events/technical_icon.png';
import ProfessionalIcon from '../assets/events/professional_icon.png';

import './Calendar.css';

function Calendar() {
  const eventIcons = [
    {
      image: SocialIcon,
      label: 'Social',
    },
    {
      image: OutreachIcon,
      label: 'Outreach',
    },
    {
      image: TechnicalIcon,
      label: 'Technical',
    },
    {
      image: ProfessionalIcon,
      label: 'Professional',
    },
  ];

  return (
    <>
      <div className="margin">
        <h1 className="h2 purple titleText">Our Events</h1>
        <hr className="divider" />
        <p className="mediumPurple center italic">Bee there or bee square!</p>
        <div className="purple p1 iconsContainer">
          {eventIcons.map((icon) => (
            <div className="iconContainer">
              <img className="purpleFilter eventIcon" src={icon.image} alt="" />
              <p className="iconLabels">{icon.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="margin lightPurpleBg calendarBody">
        <div className="calendarContainer">
          <div className="calendar">
            <iframe title="swe-cal" src="https://calendar.google.com/calendar/embed?src=eng.ucsd.edu_rskqtoaiv6mmk9jg3jq6bb5j7k%40group.calendar.google.com&ctz=America%2FLos_Angeles" styles="border: 0" width="100%" height="600" frameBorder="0" scrolling="no" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
