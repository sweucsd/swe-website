import React from 'react';

import './Calendar.css';

function Calendar() {
  return (
    <>
      <div className="margin lightPurpleBg calendarBody">
        <div className="calendarContainer">
          <div className="calendar">
            <iframe title="swe-cal" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showPrint=0&src=Y190bTdmOWJodWo3ZTFzMXJ2MnRkZjhlb3Vnb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA" style={{ borderWidth: 0 }} width="800" height="600" frameBorder="0" scrolling="no" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
