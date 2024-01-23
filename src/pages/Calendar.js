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
      link: '/involvement',
    },
    {
      image: OutreachIcon,
      label: 'Outreach',
      link: '/outreach',
    },
    {
      image: TechnicalIcon,
      label: 'Technical',
      link: '/projects',
    },
    {
      image: ProfessionalIcon,
      label: 'Professional',
      link: '/involvement',
    },
  ];

  return (
    <>
      <div className="margin">
        <h1 className="h2 purple titleText">Our Events</h1>
        <hr className="divider" />
        <p className="mediumPurple center italic">Bee there or bee square!</p>
        <div className="iconsContainer">
          {eventIcons.map((icon) => (
            <div className="iconContainer">
              <a href={icon.link} className="iconLink">
                <img className="purpleFilter eventIcon" src={icon.image} alt="" />
                <p className="purple p1 iconLabels">{icon.label}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="margin lightPurpleBg calendarBody">
        <div className="calendarContainer">
          <div className="calendar">
            <iframe title="swe-cal" src="https://calendar.google.com/calendar/embed?src=c_tm7f9bhuj7e1s1rv2tdf8eougo%40group.calendar.google.com&ctz=America%2FLos_Angeles" style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
