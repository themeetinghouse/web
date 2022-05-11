import AddToCalendar from 'components/AddToCalendar/AddToCalendar';
import { Link } from 'components/Link/Link';
import ShareDropdown from 'components/Share/ShareDropdown';
import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import './EventPage.scss';

export default function EventPage(): JSX.Element {
  const location = useLocation<any>();
  const history = useHistory();
  console.log({ location });

  if (!location.state || !location?.state?.event) {
    history.push('/');
    return <></>;
  }
  document.title = location.state.event.name;
  console.log(location.state.event?.end_time);
  const determineEventTime = () => {
    let timeString;
    if (location.state.event?.start_time)
      timeString = moment(location.state.event?.start_time).format('h:mm a');
    if (location.state.event?.end_time)
      timeString = `${timeString} - ${moment(
        location.state.event?.end_time
      ).format('h:mm a')}`;
    return timeString;
  };
  return (
    <div className={`EventItemContainer`}>
      <div className={`EventItemH1`}> {location.state.event.name}</div>
      <div
        style={{
          flex: 1,
          flexDirection: 'row',
          display: 'flex',
          flexWrap: 'wrap',
          paddingTop: 24,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={`EventItemH1`}> About This Event</div>
          <img
            src={location.state.event.cover?.source}
            alt={location.state.event.name}
            className="EventItemImg"
          />
          <div className={`EventItemDescription`}>
            {location.state.event?.description ??
              'Come to make a great marriage even better or help a struggling marriage survive. Over eight sessions, couples will discuss topics like effective communication, resolving conflict and much more. $40 per couple.'}
          </div>
          <div className="EventButtonContainer">
            {location?.state?.event?.ticket_uri ? (
              <Button className="EventPageButton" onClick={() => null}>
                <img
                  className="EventPageButtonIcon"
                  src="/static/svg/Register-white.svg"
                  alt="Register Icon"
                />
                <span className="EventPageButtonLabel">Register</span>
              </Button>
            ) : null}
            <div style={{ marginTop: -5 }}>
              <ShareDropdown
                data={{ id: location.state.event.id }}
                bgColor="black-bg"
                buttonType="thick"
                shareType="event"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: 22,
            display: 'flex',
            flexDirection: 'column',
            flex: 0.5,
          }}
        >
          {location.state.event?.start_time ||
          location.state.event?.end_time ? (
            <div style={{ marginTop: 10 }}>
              <div className={`EventItemH4`}>
                <span style={{ flex: 1 }}>Date &amp; Time</span>
                <div style={{ display: 'flex', flex: 0.5 }}>
                  <AddToCalendar
                    className="one-image-calendar"
                    event={{
                      summary: location.state.event.name,
                      description: location.state.event.description,
                      start: moment(location.state.event.start_time).format(
                        'YYYY-MM-DDTHH:mm:ssZ'
                      ),
                      end: moment(location.state.event.end_time).format(
                        'YYYY-MM-DDTHH:mm:ssZ'
                      ),
                      location: location.state.event.venue?.name,
                    }}
                    color="black"
                    textDecoration="always"
                  />
                </div>
              </div>
              <div className={`EventItemDescription`}>
                {moment(location.state.event?.start_time).format('dddd, MMM D')}{' '}
              </div>
              <div className={`EventItemDescription`}>
                {determineEventTime()}
              </div>
            </div>
          ) : null}
          {location.state.event?.place?.location ? (
            <div style={{ marginTop: 40 }}>
              <div className={`EventItemH4`}>
                <span style={{ flex: 1, display: 'flex' }}>Location</span>{' '}
                <div style={{ display: 'flex', flex: 0.5 }}>
                  {location.state.event?.place?.location?.street ? (
                    <Link
                      style={{ fontWeight: 400 }}
                      to={`https://www.google.com/maps/search/?api=1&query=${location.state.event?.place?.location?.street}`}
                    >
                      <img
                        style={{ marginRight: 10 }}
                        src="/static/svg/Map-Location.svg"
                      />
                      Get Directions
                    </Link>
                  ) : null}
                </div>
              </div>
              {location.state.event?.place?.location?.street ? (
                <div className={`EventItemDescription`}>
                  {location.state.event?.place?.location?.street}
                </div>
              ) : null}
              {location.state.event?.place?.location?.city ||
              location.state.event.place?.location?.state ||
              location.state.event.place?.location?.zip ? (
                <div className={`EventItemDescription`}>
                  {location.state.event.place?.location?.city ?? 'Oakville'}{' '}
                  {location.state.event.place?.location?.state ?? 'ON'}{' '}
                  {location.state.event.place?.location?.zip ?? 'L6H 6E1'}{' '}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
