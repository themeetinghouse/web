import { useEffect, useState, useRef } from 'react';
import './Dropdown.scss';
import moment from 'moment-timezone';
import { Link } from 'components/Link/Link';
import customUseOnClickOutside from '../Menu/customUseOnClickOutside';
import { Spinner } from 'reactstrap';
import { LiveEvents } from 'components/types';
import { Nullable } from '../../utils';

type LiveEventInDropdown = {
  id: Nullable<string>;
  eventName: Nullable<string>;
  eventStartTime: Nullable<string>;
  eventEndTime: Nullable<string>;
  eventLink: Nullable<string>;
  live: boolean;
};

type EventStatus = 'upcoming' | 'live';

type EventItemProps = {
  event: LiveEventInDropdown;
  status: EventStatus;
};

function EventItem({ event, status }: EventItemProps) {
  const offsetStartTime = moment(event?.eventStartTime, 'HH:mm')
    .add(15, 'minutes')
    .format('HH:mm');

  const startTimeToDisplay = moment
    .tz(offsetStartTime, 'HH:mm', 'America/Toronto')
    .utc()
    .local();

  return (
    <>
      <div
        className={'EventItem' + (status === 'live' ? ' LiveEventItem' : '')}
      >
        <p className="EventTime">
          {startTimeToDisplay.format('h:mm')}
          <small style={{ fontWeight: 700 }}>
            {startTimeToDisplay.format('A')}
          </small>{' '}
        </p>
        <p className="EventTitle">{event?.eventName}</p>
        {status === 'live' ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 12H22.5"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M15.5 5L22.5 12L15.5 19"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
            <path
              d="M12 6V12H18"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
        )}
      </div>
    </>
  );
}

type EventListProps = {
  events: LiveEventInDropdown[];
  status: EventStatus;
};

function LiveEventList({ events, status }: EventListProps) {
  if (!events.length) {
    return null;
  }

  return (
    <>
      <h1>{status == 'live' ? 'Live' : 'Later Today'}</h1>
      <div className="LiveEventList">
        {events?.map((event) => {
          if (status === 'live') {
            return (
              <Link
                key={event.id}
                to={
                  event.eventLink === '/live'
                    ? '/live'
                    : !event?.eventLink?.includes('https://')
                    ? `https://${event.eventLink}`
                    : event.eventLink
                }
                aria-label={'live event: ' + event.eventName}
              >
                <EventItem event={event} status={status} />
              </Link>
            );
          }

          return <EventItem key={event.id} event={event} status={status} />;
        })}
      </div>
    </>
  );
}

type DropdownProps = {
  end: () => void;
  close: () => void;
  liveEvents: LiveEvents;
};

export default function Dropdown({ end, close, liveEvents }: DropdownProps) {
  const ref = useRef(null);
  const [events, setEvents] = useState<LiveEventInDropdown[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const loadLiveStreams = async () => {
    const tempEvents: LiveEventInDropdown[] = [];
    liveEvents.forEach((item) => {
      const rightNow = moment().tz('America/Toronto').format('HH:mm');
      const live = Boolean(
        item?.videoStartTime &&
          item?.endTime &&
          rightNow >= item.videoStartTime &&
          rightNow <= item.endTime
      );
      const event = {
        id: item?.id,
        eventName: item?.eventTitle ? item.eventTitle : item?.homepageLink,
        eventStartTime: item?.videoStartTime ?? item?.startTime,
        eventEndTime: item?.endTime,
        eventLink:
          item?.liveYoutubeId || item?.liveVimeoId
            ? '/live'
            : item?.externalEventUrl,
      };
      if (!(item?.endTime && rightNow >= item.endTime)) {
        tempEvents.push({ ...event, live });
      }
    });
    setEvents(tempEvents);
    setIsLoading(false);
  };

  customUseOnClickOutside(ref, close);

  useEffect(() => {
    loadLiveStreams();
  }, []);

  useEffect(() => {
    if (events && events?.length > 0) {
      const interval = setInterval(() => {
        const rightNow = moment.tz('America/Toronto').format('HH:mm');
        const temp = [...events];
        events.forEach((event, index) => {
          const startTime = moment(event.eventStartTime, 'HH:mm').format(
            'HH:mm'
          );
          const endTime = moment(event.eventEndTime, 'HH:mm').format('HH:mm');
          if (rightNow >= endTime) {
            const lastEvent = events[events?.length - 1];
            if (lastEvent) {
              const { eventEndTime } = lastEvent;
              if (eventEndTime && rightNow >= eventEndTime) {
                clearInterval(interval);
                end();
              } else {
                temp.splice(index, 1);
                setEvents(temp);
              }
            }
          } else {
            if (rightNow >= startTime && rightNow < endTime) {
              if (temp[index]?.live === false) {
                temp[index].live = true;
                setEvents(temp);
              }
            } else {
              if (temp[index]?.live === true) {
                temp[index].live = false;
                setEvents(temp);
              }
            }
          }
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [events?.length]);

  const live: LiveEventInDropdown[] = [];
  const upcoming: LiveEventInDropdown[] = [];

  events?.forEach((event) => {
    if (event.live) {
      live.push(event);
    } else {
      upcoming.push(event);
    }
  });

  return (
    <div ref={ref} className="DropdownMainContainer">
      <div className="triangle" />
      <div className="DropdownFill">
        <div className="closeButtonContainer">
          <img
            onClick={close}
            className="closeButton"
            alt="Close Icon"
            src="/static/svg/Close-Cancel-White.svg"
          />
        </div>
        {!isLoading ? (
          <>
            <LiveEventList events={live} status="live" />
            <LiveEventList events={upcoming} status="upcoming" />
            <p className="EventFooter">
              All times displayed in {moment.tz(moment.tz.guess()).zoneAbbr()}
            </p>
          </>
        ) : (
          <div style={{ marginTop: '5vh', display: 'flex', zIndex: 100 }}>
            <Spinner
              style={{ margin: 'auto', width: '3rem', height: '3rem' }}
              color="light"
            />
          </div>
        )}
      </div>
    </div>
  );
}
