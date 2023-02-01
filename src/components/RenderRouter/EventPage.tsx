import { FBEvent } from 'API';
import AddToCalendar from 'components/AddToCalendar/AddToCalendar';
import { Link } from 'components/Link/Link';
import ShareDropdown from 'components/Share/ShareDropdown';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import DataLoader from './DataLoader';
import './EventPage.scss';

const determineEventTime = (eventItem: FBEvent) => {
  let timeString;
  if (eventItem?.start_time)
    timeString = moment(eventItem?.start_time).format('h:mm a');
  if (eventItem?.end_time)
    timeString = `${timeString} - ${moment(eventItem?.end_time).format(
      'h:mm a'
    )}`;
  return timeString;
};

const DirectionsButton = ({
  event,
  className,
}: {
  event: FBEvent;
  className: string;
}) => {
  return (
    <div className={className}>
      {event?.place?.location?.street || event?.place?.name ? (
        <Link
          style={{ fontWeight: 400 }}
          newWindow
          to={`https://www.google.com/maps/search/?api=1&query=${
            event?.place?.location?.street ?? event?.place?.name
          }`}
        >
          <img style={{ marginRight: 10 }} src="/static/svg/Map-Location.svg" />
          Get Directions
        </Link>
      ) : null}
    </div>
  );
};

const AddToCalendarButton = ({
  event,
  className,
}: {
  event: FBEvent;
  className: string;
}) => {
  return (
    <div className={className}>
      <AddToCalendar
        event={{
          summary: event.name ?? '',
          description: event.description ?? '',
          start: moment(event.start_time).format('YYYY-MM-DDTHH:mm:ssZ'),
          end: moment(event.end_time).format('YYYY-MM-DDTHH:mm:ssZ'),
          location: event?.place?.name ?? '',
        }}
        color="black"
        textDecoration="always"
      />
    </div>
  );
};

const CTAContainer = ({
  event,
  className,
}: {
  event: FBEvent;
  className: string;
}) => {
  return (
    <div className={className}>
      <div className="EventButtonContainer">
        {event?.ticket_uri ? (
          <Link
            className="EventPageButton"
            style={{ fontWeight: 400 }}
            newWindow
            to={event?.ticket_uri ?? ''}
          >
            <img
              className="EventPageButtonIcon"
              src="/static/svg/Register-white.svg"
              alt="Register Icon"
            />
            <span className="EventPageButtonLabel">Register</span>
          </Link>
        ) : null}
        <ShareDropdown
          data={{ id: event.id }}
          bgColor="black-bg"
          buttonType="short-event"
          shareType="event"
        />
      </div>
    </div>
  );
};

export default function EventPage(): JSX.Element {
  const location = useLocation<any>();
  const history = useHistory();
  const [event, setEvent] = useState(location?.state?.event);
  const [isLoading, setIsLoading] = useState(!Boolean(location?.state?.event));
  useEffect(
    function fetchEventData() {
      console.log({ location });
      if (!location.state || !location?.state?.event?.id) {
        console.log(window.location.pathname);
      }
      const load = async () => {
        if (location.hash) {
          try {
            const data = await DataLoader.loadEvent(
              location.hash.split('#')[1]
            );
            setEvent(data);
          } catch (err) {
            history.push('/');
          } finally {
            setIsLoading(false);
          }
        } else {
          history.push('/');
        }
      };
      load();
    },
    [location?.hash, location?.state?.event]
  );
  useEffect(() => {
    if (event?.name) document.title = event.name;
  }, [event]);
  if (!event && isLoading)
    return <div className="EventItemContainer">Loading...</div>;
  return (
    <div className={`EventItemContainer`}>
      <div className={`EventItemH1`}> {event.name}</div>
      <div className="EventItemContentContainer">
        <div className="EventItemColumn">
          <div className={`EventItemH2`}> About This Event</div>
          <img
            src={event.cover?.source}
            alt={event.name}
            className="EventItemImg"
          />
          <div className={`EventItemDescription`}>{event?.description}</div>
          <CTAContainer className="EventButtonContainerMobile" event={event} />
        </div>
        <div className="EventItemColumn">
          {event?.start_time || event?.end_time ? (
            <>
              <div className={`EventItemH4`}>
                <span style={{ flex: 1 }}>Date &amp; Time</span>
                <AddToCalendarButton
                  event={event}
                  className="EventCalendarButtonContainer"
                />
              </div>
              <div className={`EventItemDescription`}>
                {moment(event?.start_time).format('dddd, MMM D')}{' '}
              </div>
              <div className={`EventItemDescription`}>
                {determineEventTime(event)}
              </div>
              <AddToCalendarButton
                event={event}
                className="EventCalendarButtonContainerMobile"
              />
            </>
          ) : null}

          <div style={{ marginTop: 40 }}>
            <div className={`EventItemH4`}>
              <span style={{ flex: 1, display: 'flex' }}>Location</span>{' '}
              <DirectionsButton
                event={event}
                className="EventCalendarButtonContainer"
              />
            </div>
            <div className={`EventItemDescription`} style={{ width: '60%' }}>
              {event.place?.location ? (
                <>
                  {event.place?.location?.city ?? 'Oakville'}
                  {event.place?.location?.state ?? 'ON'}
                  {event.place?.location?.zip ?? 'L6H 6E1'}
                </>
              ) : (
                event.place?.name
              )}
            </div>
            <DirectionsButton
              event={event}
              className="EventCalendarButtonContainerMobile"
            />
          </div>
        </div>
        <CTAContainer className="EventButtonContainerDesktop" event={event} />
      </div>
    </div>
  );
}
