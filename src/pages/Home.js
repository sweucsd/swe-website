import React from 'react';
import Calendar from 'react-google-calendar-events-list';
import './Home.css';
import Button from '../components/Button';
import NewsletterIcon from '../assets/newsletter.png';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <div>
      <div className="margin">
        <div className="welcome welcomeContainer">
          <div className="welcomeText">
            <h1 className="purple h2">Welcome to SWE!</h1>
            <hr className="divider homeDivider" />
            <p className="p2 darkGray">
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
          </div>
          <div className="videoSection">
            <div className="videoWrapper">
              <iframe className="introvideo" width="560" height="315" text-align="center" src="https://www.youtube.com/embed/ehvOnGnPoGk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
        </div>
        <p className="em quote">
          <a className="purple" href="/involvement">
            Become a SWE Bee today! &gt;
          </a>
        </p>

        <div className="eventsSection">
          <div className="upcomingEventsContainer">
            <p className="h3 mediumPurple">Upcoming Events:</p>
            <div className="eventsContainer">
              <Calendar
                calendarID="eng.ucsd.edu_rskqtoaiv6mmk9jg3jq6bb5j7k@group.calendar.google.com"
                apiKey="AIzaSyC-AdQG9YyIw3V5EC0YFx6h8cJ0aXkr1tg"
              >
                {({ events }) => {
                  let ret;
                  if (events.length === 0) {
                    ret = (
                      <p className="p1 darkGray">
                        No events currently scheduled. Check back soon!
                      </p>
                    );
                  } else {
                    ret = events.sort((a, b) => (
                      new Date(a.start.dateTime) - new Date(b.start.dateTime)
                    )).slice(0, 3).map((event) => (
                      <div className="eventCard">
                        <div className="h6 darkGray">{event.summary}</div>
                        <div className="p1 darkGray">{new Date(event.start.dateTime).toLocaleString()}</div>
                      </div>
                    ));
                  }
                  return ret;
                }}
              </Calendar>
            </div>
            <a className="eventsBtn" href="/events">
              <Button label="All Events" />
            </a>
          </div>
          <div className="newsletter">
            <img className="purpleFilter" src={NewsletterIcon} alt="" />
            <p className="p1 darkGray">
              Want to stay in the loop? Join our mailing list!
            </p>
            <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdpJZDjpkxkWwFNvyy9T46Efap0ASpX5Faja3IGrvCL8lCWwQ/viewform">
              <Button label="Sign Up" />
            </a>
          </div>
        </div>
      </div>

      <Gallery />

    </div>
  );
}

export default Home;
