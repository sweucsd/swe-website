import React from 'react';

import './Calendar.css';

function Calendar() {
  return (
    <>
      <div className="margin lightPurpleBg calendarBody">
        <div className="calendarContainer">
          <div className="calendar">
            <iframe
              title="swe-cal"
              src="https://calendar.google.com/calendar/embed?src=c_514a8f9150b77d42d0e8ded313fe44cb536480eebc016a15ff162414c7545b14%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              style={{ borderWidth: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
