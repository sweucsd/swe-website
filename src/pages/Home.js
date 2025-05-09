import React from 'react';
import './Home.css';
import NewsletterIcon from '../assets/home_icons/newsletter.png';
import CalendarIcon from '../assets/home_icons/calendar.png';
import BeeIcon from '../assets/home_icons/bee.png';
import Gallery from '../components/Gallery';
import Button from '../components/Button';

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
        <section className="linkSection">
          <a href="/involvement" target="_blank" rel="noreferrer">
            <Button label="Bee-come a SWE bee" color="var(--purple)" bgColor="var(--light-purple)">
              <img src={BeeIcon} alt="Bee Icon" />
            </Button>
          </a>
          <a href="/calendar" rel="noreferrer">
            <Button label="Upcoming events!" color="var(--purple)" bgColor="var(--light-purple)">
              <img src={CalendarIcon} alt="" />
            </Button>
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScC-Yn0CFXuItVm6ZAKS4cDyqM01tCUY-7jYJhsfq9wRHcB2w/viewform?usp=sf_link" target="_blank" rel="noreferrer">
            <Button label="Join our mailing list!" color="var(--purple)" bgColor="var(--light-purple)">
              <img src={NewsletterIcon} alt="" />
            </Button>
          </a>
        </section>
      </main>

      <Gallery />

    </div>
  );
}

export default Home;
