import './Navbar.css';
import React, { useState, useEffect, useRef } from 'react';
import {
  Switch,
  Route,
  NavLink,
  useLocation,
} from 'react-router-dom';
import Pages from '../data/Pages';
import Logo from '../assets/swe_icons/swe_logo.png';
import Header from './Header';
import Footer from './Footer';
import NotFound from '../pages/NotFound';
import Attributions from '../pages/Attributions';

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
        <nav className="topNav">
          <NavLink exact to="/"><img className="logo" src={Logo} alt="logo" /></NavLink>
          <div className="navButtons">
            {Pages.map((page) => (
              <div>
                <NavLink exact className="link" to={page.path}>{page.navLabel}</NavLink>
              </div>
            ))}
          </div>
          <button type="button" className="hamburgerContainer" onClick={() => setShowSideNav(!showSideNav)} aria-label="toggle nav menu">
            <div className={`hamburger ${showSideNav && 'open'}`}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>
        </nav>
        <nav className={`${showSideNav ? 'sideNav' : 'sideNavClosed'}`}>
          {Pages.map((page) => (
            <NavLink exact className="sideLink" to={page.path}>{page.navLabel}</NavLink>
          ))}
        </nav>
      </div>

      <Header />

      <Switch>
        {Pages.map((page) => (
          <Route exact path={page.path}>
            {page.component}
          </Route>
        ))}
        <Route exact path="/attributions">
          <Attributions />
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
