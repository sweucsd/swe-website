import React from 'react';
import Calendar from 'react-google-calendar-events-list';
import './Home.css';
import Button from '../components/Button';
import Gears from '../assets/swe_gears_2.png';

function Home() {
  return (
    <div className="margin">
      <div>
        <h1 className="welcome h2">Welcome to SWE!</h1>
      </div>
      <p className="p2 welcomebody">
        UC San Diego Society of Women Engineers informs, nurtures, and
        encourages women to attain high levels of education and professional
        achievement. Our members serve as role models to pre-college and
        engineering students.
        {' '}
        <strong>official membership is not required</strong>
        {' '}
        to attend our events and be involved in our organization. Everyone is welcome!
      </p>
      <img src={Gears} className="threeGears homegears" alt="" />
      <br />
      <br />
      <div>
        <iframe className="introvideo" width="560" height="315" textAlign="center" src="https://www.youtube.com/embed/ehvOnGnPoGk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <br />
      <br />
      <div>
        <h3 className="h3 afterswe">After SWE:</h3>
        <p className="p2 welcomebody">
          For students after graduating, a
          {' '}
          <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="http://www.swesandiego.org/">SWE San Diego Professional Section:</a>
          {' '}
          continue participating in SWE locally!
        </p>
      </div>
      <div className="upcomingEventsContainer">
        <p className="h2 upcomingEventsTitle">Upcoming Events:</p>
        <div className="eventsContainer">
          <Calendar
            calendarID="eng.ucsd.edu_rskqtoaiv6mmk9jg3jq6bb5j7k@group.calendar.google.com"
            apiKey="AIzaSyC-AdQG9YyIw3V5EC0YFx6h8cJ0aXkr1tg"
          >
            {({ events }) => events.sort((a, b) => (
              new Date(a.start.dateTime) - new Date(b.start.dateTime)
            )).slice(0, 3).map((event) => (
              <div>
                <div className="h6 upcomingEventsSummary">{event.summary}</div>
                <div className="p1 upcomingEventsTime">{new Date(event.start.dateTime).toLocaleString()}</div>
              </div>
            ))}
          </Calendar>
        </div>
        <a className="eventsBtn" href="/events">
          <Button label="All Events" />
        </a>
      </div>
    </div>
  );
}

export default Home;
