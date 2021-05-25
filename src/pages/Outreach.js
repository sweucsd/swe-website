import React from 'react';
import './Outreach.css';
import OutreachEvents from '../data/OutreachEvents';
import OutreachCard from '../components/OutreachCard';

function Outreach() {
  return (
    <div className="margin outreachContainer">
      <p className="h2 purple">K-12 Outreach Programs</p>
      <p className="em mediumPurple">Bringing engineering to girls in the San Diego community</p>
      {OutreachEvents.map((event, index) => {
        let isRight;
        if (index % 2 === 0) {
          isRight = false;
        } else {
          isRight = true;
        }
        return (
          <OutreachCard
            name={event.name}
            image={event.image}
            description={event.description}
            link={event.link}
            right={isRight}
          />
        );
      })}
    </div>
  );
}

export default Outreach;
