import React from 'react';
import './About.css';
import Officers from '../data/Officers';
import OfficerCard from '../components/OfficerCard';

function About() {
  return (
    <>
      <div className="margin">
        <h2 className="purple aboutTitle">Who We Are</h2>
        <h3 className="mediumPurple aboutSubtitle">What is SWE?</h3>
        <p className="darkGray aboutBody">
          The
          {' '}
          <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://swe.org/">Society of Women Engineers (SWE)</a>
          {' '}
          is
          a national non-profit organization founded in 1950 that inspires women to
          pursue engineering by providing educational and career opportunities and
          advocating for gender equality within the field. SWE has hundreds of
          professional and collegiate sections across the United States, including
          here at UC San Diego.
        </p>

        <h3 className="mediumPurple aboutSubtitle">UC San Diego Section – Our Mission</h3>
        <p className="darkGray aboutBody">
          UC San Diego Society of Women Engineers is a diverse group of passionate
          young engineers excited about women in STEM. Through outreach to K-12
          students, socials with other women engineers, networking workshops
          with industry, and technical teams, UCSD SWE provides women engineers
          with a welcoming environment to grow professionally and academically.
        </p>
      </div>

      <div className="margin lightPurpleBg officersContainer">
        <h2 className="purple officersTitle">SWE Board 2024-2025</h2>
        <h3 className="mediumPurple officersSubtitle">Our Officers</h3>
        <div className="officersGrid">
          {Officers.map((officer) => (
            <OfficerCard
              name={officer.name}
              position={officer.position}
              image={officer.image}
              college={officer.college}
              major={officer.major}
              year={officer.year}
              fact={officer.fact}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
