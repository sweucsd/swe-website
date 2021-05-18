import React from 'react';
import './Outreach.css';
import OutreachEvents from '../data/OutreachEvents';
import OutreachCard from '../components/OutreachCard';

function Outreach() {
  return (
    <div className="margin outreachContainer">
      {OutreachEvents.map((event, index) => {
        let isRight;
        if (index % 2 === 0) {
          isRight = false;
        } else {
          isRight = true;
        }
        if (index !== OutreachEvents.length - 1) {
          return (
            <div>
              <OutreachCard
                name={event.name}
                image={event.image}
                description={event.description}
                right={isRight}
              />
              <hr className="divider" />
            </div>
          );
        }
        return (
          <div>
            <OutreachCard
              name={event.name}
              image={event.image}
              description={event.description}
              right={isRight}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Outreach;
