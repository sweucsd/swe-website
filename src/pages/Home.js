import React from 'react';
import './Home.css';
import NewsletterIcon from '../assets/home_icons/newsletter.png';
import CalendarIcon from '../assets/home_icons/calendar.png';
import BeeIcon from '../assets/home_icons/bee.png';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <div>
      <main className="margin">
        <section className="welcomeSection">
          <header className="welcomeText">
            <h2 className="purple">Welcome to SWE!</h2>
            <hr className="divider homeDivider" />
            <p className="darkGray">
              UC San Diego Society of Women Engineers informs, nurtures, and
              encourages women to attain high levels of education and professional
              achievement. Our members serve as role models to pre-college and
              engineering students.
              {' '}
              <strong>All UCSD students are welcome</strong>
              {' '}
              to attend our events and be involved in our organization, regardless of
              gender, major, or membership status.
            </p>
          </header>
        </section>
        <nav className="linksSection">
          <ul>
            <li>
              <img className="purpleFilter" src={BeeIcon} alt="" />
              <h6 className="link">
                <a href="/involvement">
                  Bee-come a SWE Bee! ›
                </a>
              </h6>
            </li>
            <li>
              <img className="purpleFilter" src={CalendarIcon} alt="" />
              <h6 className="link">
                <a href="/events">
                  Upcoming events ›
                </a>
              </h6>
            </li>
            <li>
              <img className="purpleFilter" src={NewsletterIcon} alt="" />
              <h6 className="link">
                <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScC-Yn0CFXuItVm6ZAKS4cDyqM01tCUY-7jYJhsfq9wRHcB2w/viewform">
                  Join our mailing list ›
                </a>
              </h6>
            </li>
          </ul>
        </nav>
      </main>

      <Gallery />

    </div>
  );
}

export default Home;
