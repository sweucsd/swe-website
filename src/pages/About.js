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
      image: '',
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
    <div className="aboutContainer">
      <p className="h2 officersTitle">SWE Board 2020-2021</p>
      <p className="h3 officersSubtitle">Our Officers</p>
      <div className="officersGrid">
        {officers.map(officer => {
          return <OfficerCard name={officer.name} position={officer.position} image={officer.image} />
        }
        )}
      </div>
    </div>
  );
}

export default About;