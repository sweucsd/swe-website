import '../App.css';

function Calendar() {
  return (
    <body className="calendarBody">
      <div className="calendarContainer">
        <div className="calendar">
          <iframe src="https://calendar.google.com/calendar/embed?src=eng.ucsd.edu_rskqtoaiv6mmk9jg3jq6bb5j7k%40group.calendar.google.com&ctz=America%2FLos_Angeles" styles="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
    </body>
  );
}

export default Calendar;