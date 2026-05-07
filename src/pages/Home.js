import React from 'react';
import './Home.css';
import BeeIcon from '../assets/home_icons/bee.png';
import Gallery from '../components/Gallery';
import Button from '../components/Button';

function Home() {
  return (
    <div>
      <main className="margin">
        <section className="welcomeSection">
          <header className="welcomeText">
            <h2 className="purple">Welcome to SWE at UCSD!</h2>
            <hr className="divider homeDivider" />
            <p className="darkGray">
              Society of Women Engineers at UC San Diego informs, nurtures, and
              encourages women to attain high levels of education and professional
              achievement. Our members serve as role models to pre-college and
              engineering students.
              {' '}
              <strong>All UC San Diego students are welcome</strong>
              {' '}
              to attend our events and be involved in our organization, regardless of
              gender, major, or membership status.
            </p>
          </header>
        </section>
        <section className="linkSection">
          <a href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Fswe.atucsd%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnTtqjAv5bMOlDeJtAKbrKJql4jWxgs56tbqBNw2hDCx7MlV4oYQUjFul5CK4_aem_3mXpQXMu_lIrRVZgZizAUQ&e=AUD_ASHPuVfx01GRyFqevmkEejxbJ72O-LgBwohre4J_zkTRq6ysg-zad2MAr3bsFZ-OX7SiYViqVOz2sejoxtXaFuwYNEBpTK-xtPSOdPxkesgP1IMGqrBGOQ" target="_blank" rel="noreferrer">
            <Button label="Bee-come a SWE bee" color="var(--pale-purple)" bgColor="var(--purple)">
              <img src={BeeIcon} alt="Bee Icon" />
            </Button>
          </a>
        </section>
      </main>

      <Gallery />

    </div>
  );
}

export default Home;
