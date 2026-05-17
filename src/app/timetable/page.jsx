import { timetable } from '../data';
import TimetableDay from './TimetableDay';

export default function Page() {
  // fixing Data Forum timetable
  const newDay1 = {
    date: timetable[0].date,
    day: timetable[0].day,
    timeslots: [],
  };
  const dataForumDay1 = {
    date: timetable[0].date,
    day: '1 (Data Forum)',
    timeslots: [],
  };
  timetable[0].timeslots.forEach(({ startTime, endTime, events }) => {
    const day1Events = [];
    const dataForumEvents = [];
    events.forEach((ev) => {
      if (ev.venue.name === 'MWT2') {
        dataForumEvents.push(ev);
      } else {
        day1Events.push(ev);
      }
    });
    if (day1Events.length > 0) {
      newDay1.timeslots.push({
        startTime,
        endTime,
        events: day1Events,
      });
    }
    if (dataForumEvents.length > 0) {
      dataForumDay1.timeslots.push({
        startTime,
        endTime,
        events: dataForumEvents,
      });
    }
  });
  const newTimeTable = [
    newDay1,
    timetable[1],
  ].filter(Boolean);
  return (
    <div className="container is-fluid">
      <div className="has-text-centered my-4">
        <a className="button is-link has-background-brand-color-yellow  has-text-brand-color-blue is-hidden-tablet" href="https://hkoscon2026.eventbrite.com/" rel="noreferrer">
          Get Ticket
        </a>
      </div>
      {newTimeTable.map(({ day, timeslots }) => (
        <TimetableDay key={`day${day}`} day={day} timeslots={timeslots} />
      ))}
    </div>
  );
}
