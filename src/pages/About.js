import React from 'react';
import './About.css';
import Officers from '../data/Officers';
import OfficerCard from '../components/OfficerCard';

function About() {
  return (
    <>
      <div className="margin">
        <p className="h2 purple aboutTitle">Who We Are</p>
        <p className="h3 mediumPurple aboutSubtitle">What is SWE?</p>
        <p className="p2 darkGray aboutBody">
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

        <p className="h3 mediumPurple aboutSubtitle">UC San Diego Section – Our Mission</p>
        <p className="p2 darkGray aboutBody">
          UC San Diego Society of Women Engineers is a diverse group of passionate
          young engineers excited about women in STEM. Through outreach to K-12
          students, socials with other women engineers, networking workshops
          with industry, and technical teams, UCSD SWE provides women engineers
          with a welcoming environment to grow professionally and academically.
        </p>
      </div>

      <div className="margin lightPurpleBg officersContainer">
        <p className="h2 purple officersTitle">SWE Board 2021-2022</p>
        <p className="h3 mediumPurple officersSubtitle">Our Officers</p>
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
