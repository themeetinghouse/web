import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import './AddToCalendar.scss';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import { useState } from 'react';

export type Event = {
  start: string;
  end: string;
  summary: string;
  description: string;
  location?: string;
  url?: string;
};

interface Props {
  event: Event;
  color: 'white' | 'black';
  textDecoration?: 'always' | 'hover';
  style?: React.CSSProperties;
  className?: string;
}

function formatDateTime(date: string) {
  return moment.utc(date).format('YYYYMMDDTHHmmssZ').replace('+00:00', 'Z');
}

/**
 * Generates a calendar URL/iCal file for Google, Apple, Outlook and Outlook.com.
 *
 * This function can be attributed to Jason Salzman.
 * Used under the MIT license: https://github.com/jasonsalzman/react-add-to-calendar/blob/master/LICENSE
 *
 * @param event Object containing event data.
 * @param provider Calendar provider.
 * @return Formatted calendar URL or iCal file.
 */
function calendarUrl(event: Event, provider?: string) {
  const body = (event.url ? event.url + '\n\n' : '') + event.description;

  switch (provider) {
    case 'Google':
      return (
        'https://calendar.google.com/calendar/render' +
        '?action=TEMPLATE' +
        '&dates=' +
        formatDateTime(event.start) +
        '/' +
        formatDateTime(event.end) +
        (event.location
          ? '&location=' + encodeURIComponent(event.location)
          : '') +
        '&text=' +
        encodeURIComponent(event.summary) +
        '&details=' +
        encodeURIComponent(body)
      );

    case 'Outlook.com':
      return (
        'https://outlook.live.com/owa/?rru=addevent' +
        '&startdt=' +
        formatDateTime(event.start) +
        '&enddt=' +
        formatDateTime(event.end) +
        '&subject=' +
        encodeURIComponent(event.summary) +
        (event.location
          ? '&location=' + encodeURIComponent(event.location)
          : '') +
        '&body=' +
        encodeURIComponent(body) +
        '&allday=false' +
        '&uid=' +
        uuidv4() +
        '&path=/calendar/view/Month'
      );

    default:
      return (
        'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'PRODID:-//The Meeting House Church Family//TMH Cal 1.0//EN\n' +
        'CALSCALE:GREGORIAN\n' +
        'BEGIN:VEVENT\n' +
        `SUMMARY:${event.summary}\n` +
        `DESCRIPTION:${event.description}\n` +
        `UID:${uuidv4()}\n` +
        `DTSTART:${formatDateTime(event.start)}\n` +
        `DTEND:${formatDateTime(event.start)}\n` +
        (event.location ? 'LOCATION:' + event.location + '\n' : '') +
        (event.url ? 'URL:' + event.url + '\n' : '') +
        'END:VEVENT\n' +
        'END:VCALENDAR'
      );
  }
}

/**
 * Add to calendar JSX component.
 *
 * @param event Object containing event data.
 * @param color Color of text and SVG icon.
 * @param textDecoration
 * Text decoration is always visible when `"always"`.
 * Text decoration appears on hover when `"hover"`.
 * Text decoration is never visible when `undefined`.
 * @param style Optional inline styles for wrapping div.
 * @param className Optional className for wrapping div.
 */
export default function AddToCalendar({
  event,
  color,
  textDecoration,
  style,
  className,
}: Props) {
  const strokeColor = color === 'white' ? '#FFFFFF' : '#1A1A1A';
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prevState) => !prevState);

  const platforms = ['Apple', 'Google', 'Outlook', 'Outlook.com'];

  return (
    <div className={'add-to-calendar-wrapper ' + className} style={style}>
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
      <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle
          className={`add-to-calendar ${color} ${
            textDecoration === 'always'
              ? 'decoration'
              : textDecoration === 'hover'
              ? 'hover-decoration'
              : ''
          }`}
        >
          Add to Calendar
        </DropdownToggle>
        <DropdownMenu>
          {platforms.map((platform) => {
            return (
              <DropdownItem
                key={platform}
                href={calendarUrl(event, platform)}
                className={platform.replace('.', '')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
