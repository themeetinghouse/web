import moment from 'moment';
import { useHistory, useLocation } from 'react-router-dom';
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
  return (
    <div className={`EventItemContainer`}>
      <div className={`EventItemH1`}> {location.state.event.name}</div>
      <div
        style={{
          flex: 1,
          flexDirection: 'row',
          display: 'flex',
          paddingTop: 24,
        }}
      >
        <div>
          <div className={`EventItemH1`}> About This Event</div>
          <img
            src={location.state.event.cover?.source}
            alt={location.state.event.name}
            className="EventItemImg"
          />
          <div className={`EventItemDescription`}>
            {location.state.event?.description}
          </div>
          {location?.state?.event?.ticket_uri ? (
            <button>Register</button>
          ) : null}
        </div>
        <div style={{ marginLeft: 22 }}>
          {location.state.event?.start_time ||
          location.state.event?.end_time ? (
            <div style={{ marginTop: 10 }}>
              <div className={`EventItemH4`}> Date &amp; Time</div>
              <div className={`EventItemDescription`}>
                {moment(location.state.event?.start_time).format(
                  'dddd hh:mm a'
                )}{' '}
                - {moment(location.state.event?.end_time).format('hh:mm a')}
              </div>
            </div>
          ) : null}
          {location.state.event?.place?.location?.street ||
          location.state.event?.place?.location?.city ||
          location.state.event.place?.location?.state ||
          location.state.event.place?.location?.zip ? (
            <div style={{ marginTop: 40 }}>
              <div className={`EventItemH4`}> Location</div>
              <div className={`EventItemDescription`}>
                {location.state.event?.place?.location?.street}{' '}
              </div>
              <div className={`EventItemDescription`}>
                {location.state.event.place?.location?.city}{' '}
                {location.state.event.place?.location?.state}{' '}
                {location.state.event.place?.location?.zip}{' '}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
