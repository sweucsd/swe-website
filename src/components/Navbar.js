import './Navbar.css';
import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";
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
import Hamburger from '../assets/hamburger.png';
import Close from '../assets/close.png';


function Navbar() {
  const [showSideNav, setShowSideNav] = useState(false);
  const location = useLocation();

  useEffect(
    () => {
      setShowSideNav(false);
      window.scrollTo(0, 0);
    },
    [location]
  );

  return (
    <div>
      <div className="navContainer">
        <nav className="topNav p1">
          <NavLink exact to="/"><img className="logo" src={Logo} alt="logo" /></NavLink>
          <NavLink exact className="link" to="/">Home</NavLink>
          <NavLink exact className="link" to="/about">About</NavLink>
          <NavLink exact className="link" to="/events">Events</NavLink>
          <NavLink exact className="link" to="/involvement">Get Involved</NavLink>
          <NavLink exact className="link" to="/outreach">Outreach</NavLink>
          <NavLink exact className="link" to="/sponsors">Sponsors</NavLink>
          <button className="hamburgerContainer" onClick={() => setShowSideNav(!showSideNav)}>
            {showSideNav ?
              <img className="closeIcon" src={Close} alt='' /> :
              <img className="hamburger" src={Hamburger} alt='' />
            }
          </button>
        </nav>
        <nav className={`${showSideNav ? "sideNav" : "sideNavClosed"} p1`}>
          <NavLink exact className="sideLink" to="/">Home</NavLink>
          <NavLink exact className="sideLink" to="/about">About</NavLink>
          <NavLink exact className="sideLink" to="/events">Events</NavLink>
          <NavLink exact className="sideLink" to="/involvement">Get Involved</NavLink>
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