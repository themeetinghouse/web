import Dropdown from 'components/LiveEvents/Dropdown';
import { LiveEvents } from 'components/types';
import { useEffect, useRef, useState } from 'react';
import * as queries from '../../graphql/queries';
import { ListLivestreamsQuery } from '../../API';
import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import moment from 'moment-timezone';
import './AnnouncementBar.scss';
type Props = {
  showLive: boolean;
  setShowBar: (val: boolean) => void;
};
const AnnouncementBar = ({ showLive, setShowBar }: Props) => {
  const [showLiveBanner, setShowLiveBanner] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [liveTitle, setLiveTitle] = useState('Watch Live');
  const [liveEvents, setLiveEvents] = useState<LiveEvents>([]);
  useEffect(() => {
    const loadLiveEvents = async () => {
      const today = moment.tz('America/Toronto').format('YYYY-MM-DD');
      const { data } = (await API.graphql({
        query: queries.listLivestreams,
        variables: { filter: { date: { eq: today } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY,
      })) as GraphQLResult<ListLivestreamsQuery>;
      console.log(data?.listLivestreams?.items);
      setLiveEvents(
        data?.listLivestreams?.items
          ?.sort((a, b) =>
            (a?.startTime ?? '').localeCompare(b?.startTime ?? '')
          )
          .sort((a, b) =>
            (a?.eventTitle ?? '').localeCompare(b?.eventTitle ?? '')
          )
          .sort((a, b) =>
            (a?.videoStartTime ?? '').localeCompare(b?.videoStartTime ?? '')
          ) ?? []
      );
    };
    loadLiveEvents();
  }, []);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const tick = () => {
      const rightNow = moment().tz('America/Toronto').format('HH:mm');
      const temp = liveEvents;
      const lastEvent = temp[temp?.length - 1];
      console.log({ rightNow }, { endTime: lastEvent?.endTime });
      if (lastEvent) {
        const { endTime } = lastEvent;
        if (endTime && rightNow >= endTime) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setShowLiveBanner(false);
          setShowBar(false);
          return;
        }
      }
      const currentEvent = liveEvents.find((event) => {
        return (
          event?.startTime &&
          event?.endTime &&
          rightNow >= event.startTime &&
          rightNow <= event.endTime
        );
      });
      if (currentEvent) {
        if (!showLiveBanner && showLive) {
          setLiveTitle(currentEvent.homepageLink ?? 'Watch Live');
          setShowBar(true);
          setShowLiveBanner(true);
        }
      }
    };
    if (liveEvents.length > 0) {
      intervalRef.current = setInterval(tick, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [liveEvents, showLive, showLiveBanner]);
  return (
    <>
      {showLiveBanner ? (
        <button
          aria-label="Events List"
          style={{
            position: 'fixed',
            zIndex: 10000,
            top: 0,
            left: 0,
            padding: 0,
            margin: 0,
            border: 'none',
            outline: 'none !important',
            outlineOffset: 'none !important',
          }}
          className="ignore-onClickOutside"
          onClick={() => setShowDropdown((prev) => !prev)}
        >
          <div className="AnnouncementBarContainer">
            <p className="bannerMessage">{liveTitle}</p>
          </div>
        </button>
      ) : null}
      {showDropdown ? (
        <Dropdown
          liveEvents={liveEvents}
          close={() => setShowDropdown(false)}
          end={() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setShowLiveBanner(false);
            setShowDropdown(false);
            setShowBar(false);
          }}
        />
      ) : null}
    </>
  );
};
export default AnnouncementBar;
