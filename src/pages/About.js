import './About.css';
import OfficerCard from '../components/OfficerCard';

function About() {
  const officers = [
    {
      name: 'Magali Chavez',
      position: 'President',
      image: 'https://i.imgur.com/uDqIHtx.jpg',
    },
    {
      name: 'Destiny Alvarado',
      position: 'VP External',
      image: 'http://swe.ucsd.edu/wp-content/uploads/2020/11/Destiny_swe-768x1024.jpg',
    },
    {
      name: 'Elianor Shohet',
      position: 'VP Internal, Publicity Chair',
      image: 'https://i.imgur.com/y0hJ4sH.jpg',
    },
    {
      name: 'Alice Tor',
      position: 'Treasurer',
      image: 'http://swe.ucsd.edu/wp-content/uploads/2020/11/alice_headshot-1024x768.jpg',
    },
    {
      name: 'Agnes Garcia',
      position: 'Secretary',
      image: 'https://i.imgur.com/GaHPYPQ.jpg',
    },
    {
      name: 'Iris Nayki',
      position: 'Envision Outreach Chair',
      image: 'http://swe.ucsd.edu/wp-content/uploads/2021/02/Iris-768x1024.jpg',
    },
    {
      name: 'Erin Griggs',
      position: 'ABLE Outreach Chair',
      image: 'http://swe.ucsd.edu/wp-content/uploads/2020/11/erin-swe-768x1024.jpg',
    },
    {
      name: 'Hailey Morris',
      position: 'SWENext Outreach Chair',
      image: 'http://swe.ucsd.edu/wp-content/uploads/2020/11/IMG_2942-e1605033035128-769x1024.jpg',
    },
    {
      name: 'Madina Arman',
      position: 'Technical Development Chair',
      image: 'https://i.imgur.com/Kc9mKsA.jpg',
    },
    {
      name: 'Haley Sohn',
      position: 'Social Chair',
      image: 'https://swe.ucsd.edu/wp-content/uploads/2020/11/profile_swe.png',
    },
    {
      name: 'Megan McCall',
      position: 'Academic Chair',
      image: 'http://swe.ucsd.edu/wp-content/uploads/2021/01/Megan-swe-618x1024.jpg',
    },
    {
      name: 'Makena Leonard',
      position: 'Publicity Chair',
      image: 'http://swe.ucsd.edu/wp-content/uploads/2021/01/IMG_0880-1-768x1024.jpg',
    },
  ]

  return (
    <div>
      <div className="margin">
        <p className="h2 aboutTitle">Who We Are</p>
        <p className="h3 aboutSubtitle">What is SWE?</p>
        <p className="p2 aboutBody">
          The <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://swe.org/">Society of Women Engineers</a> is 
          a national non-profit organization founded in 1950 that promotes
          the female presence in engineering and other STEM related fields through educational and career opportunities.
          SWE has hundreds of professional and collegiate sections across the United States, including here at UC
          San Diego.
        </p>
        <p className="h3 aboutSubtitle">UC San Diego Section – Our Mission</p>
        <p className="p2 aboutBody">
          UC San Diego Society of Women Engineers is a diverse group of passionate young engineers excited
          about women in STEM. Through outreach to K-12 students, socials with other female engineers,
          networking workshops with industry, and technical teams, UCSD SWE provides women engineers with a
          welcoming environment to grow professionally and academically.
        </p>
      </div>
      <div className="margin officersContainer">
        <p className="h2 officersTitle">SWE Board 2020-2021</p>
        <p className="h3 officersSubtitle">Our Officers</p>
        <div className="officersGrid">
          {officers.map(officer => {
            return <OfficerCard name={officer.name} position={officer.position} image={officer.image} />
          }
          )}
        </div>
      </div>
    </div>
  );
}

export default About;