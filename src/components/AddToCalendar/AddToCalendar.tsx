import { v4 as uuidv4 } from 'uuid';
import './AddToCalendar.scss';

interface Props {
  event: {
    start: string;
    end: string;
    summary: string;
    description: string;
    rRule?: string;
    geo: string;
    location: string;
    url?: string;
  };
  color: 'white' | 'black';
}

export default function AddToCalendar({ event, color }: Props) {
  const strokeColor = color === 'white' ? '#FFFFFF' : '#1A1A1A';
  const ics =
    'BEGIN:VCALENDAR\n' +
    'VERSION:2.0\n' +
    'PRODID:-//The Meeting House Church Family//TMH Cal 1.0//EN\n' +
    'CALSCALE:GREGORIAN\n' +
    'BEGIN:VEVENT\n' +
    `SUMMARY:${event.summary}\n` +
    `DESCRIPTION:${event.description}\n` +
    `UID:${uuidv4()}\n` +
    (event.rRule ? 'RRULE:' + event.rRule + '\n' : '') +
    `DTSTART:${event.start}\n` +
    `DTEND:${event.end}\n` +
    `LOCATION:${event.location}\n` +
    `GEO:${event.geo}\n` +
    (event.url ? 'URL:' + event.url + '\n' : '') +
    'END:VEVENT' +
    'END:VCALENDAR';

  if (ics) {
    return (
      <>
        <svg
          style={{ marginRight: 10 }}
          width={25}
          height={25}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 17V23"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M17 20H23"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M12 22H1V4H23V12"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M7 1V4"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M17 1V4"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
          <path
            d="M1 8H23"
            stroke={strokeColor}
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>
        <button
          onClick={() =>
            window.open('data:text/calendar;charset=utf8,' + escape(ics))
          }
          className={'add-to-calendar ' + color}
        >
          Add to Calendar
        </button>
      </>
    );
  }

  return null;
}
