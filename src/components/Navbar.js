import './Navbar.css';
import React, { useState, useEffect, useRef } from 'react';
import {
  Switch,
  Route,
  NavLink,
  useLocation,
} from 'react-router-dom';
import GetInvolved from '../pages/GetInvolved';
import Sponsors from '../pages/Sponsors';
import Calendar from '../pages/Calendar';
import Outreach from '../pages/Outreach';
import About from '../pages/About';
import Home from '../pages/Home';
import Logo from '../assets/swe_logo.png';
import Header from './Header';
import Footer from './Footer';
import NotFound from '../pages/NotFound';

function Navbar() {
  const [showSideNav, setShowSideNav] = useState(false);
  const location = useLocation();

  // effects on page change
  useEffect(
    () => {
      setShowSideNav(false);
      window.scrollTo(0, 0);
    },
    [location],
  );

  function useOutsideAlerter(ref) {
    useEffect(() => {
      // triggered if click detected outside of element
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowSideNav(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div>
      <div ref={wrapperRef} className="navContainer">
        <nav className="topNav p1">
          <NavLink exact to="/"><img className="logo" src={Logo} alt="logo" /></NavLink>
          <NavLink exact className="link" to="/">Home</NavLink>
          <NavLink exact className="link" to="/about">About</NavLink>
          <NavLink exact className="link" to="/events">Events</NavLink>
          <NavLink exact className="link" to="/involvement">Involvement</NavLink>
          <NavLink exact className="link" to="/outreach">Outreach</NavLink>
          <NavLink exact className="link" to="/sponsors">Sponsors</NavLink>
          <button type="button" className="hamburgerContainer" onClick={() => setShowSideNav(!showSideNav)}>
            <div className={`hamburger ${showSideNav && 'open'}`}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>
        </nav>
        <nav className={`${showSideNav ? 'sideNav' : 'sideNavClosed'} p1`}>
          <NavLink exact className="sideLink" to="/">Home</NavLink>
          <NavLink exact className="sideLink" to="/about">About</NavLink>
          <NavLink exact className="sideLink" to="/events">Events</NavLink>
          <NavLink exact className="sideLink" to="/involvement">Involvement</NavLink>
          <NavLink exact className="sideLink" to="/outreach">Outreach</NavLink>
          <NavLink exact className="sideLink" to="/sponsors">Sponsors</NavLink>
        </nav>
      </div>

      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/involvement">
          <GetInvolved />
        </Route>
        <Route exact path="/sponsors">
          <Sponsors />
        </Route>
        <Route exact path="/events">
          <Calendar />
        </Route>
        <Route exact path="/outreach">
          <Outreach />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default Navbar;
