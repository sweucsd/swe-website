import React, { useState, useEffect } from 'react';
import SocialIcon from '../assets/events/social_icon.png';
import OutreachIcon from '../assets/events/outreach_icon.png';
import TechnicalIcon from '../assets/events/technical_icon.png';
import ProfessionalIcon from '../assets/events/professional_icon.png';

import './Calendar.css';

function Calendar() {
  const [filter, setFilter] = useState('all');
  const [cal, setCal] = useState(null);
  const [loading, setLoading] = useState(true);

  const icons = [
    {
      id: 'social',
      label: 'Social',
      image: SocialIcon,
    },
    {
      id: 'outreach',
      label: 'Outreach',
      image: OutreachIcon,
    },
    {
      id: 'technical',
      label: 'Technical',
      image: TechnicalIcon,
    },
    {
      id: 'professional',
      label: 'Professional',
      image: ProfessionalIcon,
    },
  ];

  const calendars = {
    all: <iframe onLoad={() => setLoading(false)} title="all" src="https://calendar.google.com/calendar/embed?src=c_q4nohp3lki5lgo427tqngsjaoo%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0" scrolling="no" />,
    social: <iframe onLoad={() => setLoading(false)} title="social" src="https://calendar.google.com/calendar/embed?src=c_u7jd1jdd0k3cgcudve47r3r0hs%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0" scrolling="no" />,
    technical: <iframe onLoad={() => setLoading(false)} title="technical" src="https://calendar.google.com/calendar/embed?src=c_o0cqo26jo37fl3b38fl5o0v50g%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0" scrolling="no" />,
    professional: <iframe onLoad={() => setLoading(false)} title="professional" src="https://calendar.google.com/calendar/embed?src=c_87s4tl01dr9eabtu544re2i7a8%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0" scrolling="no" />,
    outreach: <iframe onLoad={() => setLoading(false)} title="outreach" src="https://calendar.google.com/calendar/embed?src=c_l8ut7dluk89di2ikjuvhdufr20%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="800" height="600" frameBorder="0" scrolling="no" />,
  };

  useEffect(() => {
    setLoading(true);
    setCal(calendars[filter]);
  }, [filter]);

  function handleFilter(e) {
    const event = e.target.id;
    if (filter === event) {
      setFilter('all');
    } else {
      setFilter(event);
    }
  }

  return (
    <div>
      <div className="margin">
        <h1 className="h2 purple titleText">Our Events</h1>
        <hr className="divider" />
        <div className="em iconsContainer">
          {icons.map((icon) => (
            <button
              id={icon.id}
              type="button"
              className={`iconContainer ${icon.id === filter && 'iconOutline'}`}
              onClick={(e) => handleFilter(e)}
              onKeyDown={(e) => handleFilter(e)}
            >
              <img id={icon.id} className="purpleFilter eventIcon" src={icon.image} alt="" />
              <p className="em iconLabels">{icon.label}</p>
            </button>
          ))}
        </div>
        {loading && <div>LOADING...</div>}
      </div>
      <div className="margin lightPurpleBg calendarBody">
        <div className="calendarContainer">
          <div className="calendar">
            {/* <iframe title="swe-cal" src="https://calendar.google.com/calendar/embed?src=eng.ucsd.edu_rskqtoaiv6mmk9jg3jq6bb5j7k%40group.calendar.google.com&ctz=America%2FLos_Angeles" styles="border: 0" width="100%" height="600" frameBorder="0" scrolling="no" /> */}
            {cal}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
