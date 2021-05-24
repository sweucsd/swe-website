import './Header.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Pages from '../data/Pages';

function Header() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const location = useLocation();
  useEffect(
    () => {
      const page = Pages.filter((p) => p.path === location.pathname);
      if (page.length) {
        setTitle(page[0].title);
        setSubtitle(page[0].subtitle);
        document.title = page[0].titleTag;
        document.getElementById('headerImg').style.backgroundImage = `url("${page[0].image}")`;
      } else if (location.pathname === '/attributions') {
        setTitle('Attributions');
        setSubtitle('Icon Credits');
        document.title = 'Attributions – SWE UCSD';
        document.getElementById('headerImg').style.backgroundImage = 'url("https://i.imgur.com/MgNHcA4.jpg"))';
      } else {
        setTitle('404');
        setSubtitle('Page Not Found');
        document.title = 'Page Not Found – SWE UCSD';
        document.getElementById('headerImg').style.backgroundImage = 'url("https://i.imgur.com/MgNHcA4.jpg"))';
      }
    },
    [location],
  );
  return (
    <div className="overlay">
      <div id="headerImg" className="headerImg" alt="" />
      <div key={location.pathname} className="textContainer">
        <h1 className="h1">{title}</h1>
        <h2 className="h4">{subtitle}</h2>
      </div>
    </div>
  );
}

export default Header;
