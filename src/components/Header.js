import './Header.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

function Header() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  let location = useLocation();
  useEffect(
    () => {
      const titles = {
        '/': {
          title: 'SWE @ UCSD',
          subtitle: 'Aspire / Advance / Achieve'
        },
        '/about': {
          title: 'About Us',
          subtitle: 'Learn about who we are and what it means to be a SWE Bee!'
        },
        '/events': {
          title: 'SWE Calendar',
          subtitle: 'Subscribe to our calendar to stay notified about our upcoming events!'
        },
        '/involvement': {
          title: 'Get Involved',
          subtitle: 'Find out how to become active members of our org'
        },
        '/outreach': {
          title: 'Outreach',
          subtitle: 'Help us inspire young women to pursue engineering'
        },
        '/sponsors': {
          title: 'Sponsors',
          subtitle: 'Thanks to our sponsors for their continued support!'
        }
      }

      if (location.pathname in titles) {
        setTitle(titles[location.pathname].title);
        setSubtitle(titles[location.pathname].subtitle);
      }
      else {
        setTitle('404');
        setSubtitle('Page Not Found');
      }
    },
    [location]
  )
  return (
    <div className="overlay">
      <div className="image" alt='' />
      <div className="textContainer">
        <h1 className="h1">{title}</h1>
        <h2 className="h4">{subtitle}</h2>
      </div>
    </div>
  );
}

export default Header;