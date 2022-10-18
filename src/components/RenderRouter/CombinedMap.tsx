import { F1ListGroup2, ListHomeChurchInfosQuery } from 'API';
import API from '@aws-amplify/api';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as queries from '../../graphql/queries';
import { HomeChurchItemContent } from 'components/types';
import {
  GoogleApiWrapper,
  IProvidedProps,
  Map,
  Marker,
  Polygon,
} from 'google-maps-react';
import { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import DataLoader, { LocationData } from './DataLoader';
import './CombinedMap.scss';
const SITE_PIN_URL = '/static/svg/SiteLocationPin.svg';
const SITE_PIN_SELECTED_URL = '/static/svg/SiteLocationPin-selected.svg';

const HOME_CHURCH_PIN_URL = '/static/svg/HomeChurchPin.svg';
const HOME_CHURCH_PIN_SELECTED_URL = '/static/svg/HomeChurchPin-selected.svg';
const CURRENT_LOCATION_URL = '/static/svg/CurrentLocation.svg';
const DEFAULT_LAT_LNG = { lng: -79.685926, lat: 43.511459 };

interface Props extends RouteComponentProps, IProvidedProps {
  content: HomeChurchItemContent;
}

export function ContentItem(props: Props) {
  // let map: google.maps.Map | undefined;

  const [selectedPlace] = useState(null);
  //const [locationFilter, setLocationFilter] = useState(null);
  // const [locationsLoaded, setLocationsLoaded] = useState([]);
  const [, setAllLocationsLoaded] = useState(false);
  const [mapBounds] = useState(null);
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [groups, setGroups] = useState<(F1ListGroup2 | null)[]>([]);
  const [groupsExtra, setGroupsExtra] = useState<any[]>([]);

  const [currentLatLng, setCurrentLatLng] = useState(DEFAULT_LAT_LNG);
  //const [showContactModal, setShowContactModal] = useState(false);
  //const [activePill, setActivePill] = useState(undefined);
  //const [mapSelected, setMapSelected] = useState(true);
  //const [selectedDay, setSelectedDay] = useState({ value: 'all' });
  //const [contactHomeChurchId, setContactHomeChurchId] = useState(null);

  useEffect(() => {
    DataLoader.getLocations({ class: 'locations' }).then((locationsRet) => {
      console.log(
        'HomeChurchItem.constructor(): Got locations: %o',
        locationsRet
      );
      setLocations(locationsRet);
    });

    const loadHomeChurchInfo = async () => {
      const data: Array<any> = [];
      const fetchNext = async (next: string | null = null) => {
        try {
          const json = (await API.graphql({
            query: queries.listHomeChurchInfos,
            variables: { nextToken: next },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
          })) as GraphQLResult<ListHomeChurchInfosQuery>;
          console.log({
            'Success queries.listHomeChurchInfos': json,
          });
          if (json?.data?.listHomeChurchInfos?.items?.length) {
            json?.data?.listHomeChurchInfos?.items?.forEach((hmInfo) => {
              data.push(hmInfo);
            });
          }
          if (json?.data?.listHomeChurchInfos?.nextToken)
            fetchNext(json?.data?.listHomeChurchInfos?.nextToken);
        } catch (e) {
          console.error(e);
        }
      };
      await fetchNext(null);
      setGroupsExtra(data);
    };

    loadHomeChurchInfo().then(() => {
      DataLoader.listHomeChurches(
        (items) => {
          setGroups((x) => {
            return [...x, ...items];
          });
        },
        async () => {
          const injectHomeChurchInfoData = (
            f1HomeChurches: any,
            homeChurchInfos: any
          ) => {
            return f1HomeChurches.map((f1HomeChurch: any) => {
              const inHomeChurchInfosTable = homeChurchInfos.find(
                (homeChurchInfo: any) => f1HomeChurch?.id === homeChurchInfo?.id
              );
              f1HomeChurch.extraData = inHomeChurchInfosTable;
              return f1HomeChurch;
            });
          };
          const injected = injectHomeChurchInfoData(groups, groupsExtra);
          console.log({ injected });
          injectHomeChurchInfoData(groups, groupsExtra);
          setAllLocationsLoaded(true);
          await updateGeoLocation(false);
        }
      );
    });
  }, []);

  const getCurrentPosition = (
    isUserAction = false
  ): Promise<google.maps.LatLngLiteral> => {
    return new Promise((resolve, reject) => {
      if (!('geolocation' in navigator)) {
        console.log('Could not get current location. Using default');
        resolve(DEFAULT_LAT_LNG);
        return;
      }
      if (navigator.permissions)
        navigator.permissions
          .query({ name: 'geolocation' })
          .then((permissionStatus) => {
            if (permissionStatus.state === 'denied') {
              if (isUserAction) {
                alert(
                  'This function is unavailable until you allow location permissions.'
                );
                reject();
              } else {
                resolve(DEFAULT_LAT_LNG);
              }
              return;
            }

            navigator.geolocation.getCurrentPosition(
              (position) => {
                resolve({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              },
              (e) => {
                console.error(`failed to retrieve current position: %o`, e);
                resolve(DEFAULT_LAT_LNG);
              }
            );
          });
    });
  };

  const updateGeoLocation = async (isUserAction: boolean): Promise<void> => {
    const newLatLng = await getCurrentPosition(isUserAction);
    setCurrentLatLng(newLatLng);
  };

  const inititalCenter = { lat: 43.5, lng: -79.5 };
  const initalZoom = 10;

  return (
    <div className="CombinedMapItem">
      <div className="CombinedMapItemDiv1">
        <h1 className="CombinedMapH1">{props.content.header1}</h1>

        <div className="CombinedMapItemMap">
          <Map
            google={props.google}
            zoom={initalZoom}
            initialCenter={inititalCenter}
            bounds={mapBounds ?? undefined}
            mapTypeControl={false}
            onReady={(_props, map) => (map = map)}
          >
            <Polygon
              paths={[
                { lat: 43.75, lng: -79.2 },
                { lat: 43.61, lng: -79.2 },
                { lat: 43.58, lng: -79.55 },
                { lat: 43.75, lng: -79.65 },
                { lat: 43.85, lng: -79.2 },
              ]}
            />
            <Marker
              icon={CURRENT_LOCATION_URL}
              position={{ ...currentLatLng }}
            />
            {locations.map((location) => {
              return (
                <Marker
                  key={location.id}
                  anchorPoint={new google.maps.Point(0, 0)}
                  icon={selectedPlace ? SITE_PIN_SELECTED_URL : SITE_PIN_URL}
                  position={{
                    lat: location.location.latitude,
                    lng: location.location.longitude,
                  }}
                />
              );
            })}
            {groups.map((location) => {
              return (
                <Marker
                  key={location?.id}
                  anchorPoint={new google.maps.Point(0, 0)}
                  icon={
                    selectedPlace
                      ? HOME_CHURCH_PIN_SELECTED_URL
                      : HOME_CHURCH_PIN_URL
                  }
                  position={{
                    lat: Number(location?.location?.address?.latitude),
                    lng: Number(location?.location?.address?.longitude),
                  }}
                />
              );
            })}
            {/*}  <InfoWindow
              pixelOffset={new google.maps.Size(0, -32)}
              google={props.google}
              // These types are wrong, they should be optional. So just cast to fix the issues.
              map={map as google.maps.Map}
              // marker={selectedPlaceMarker as google.maps.Marker}
              position={{
                lat: 20,
                lng: 20,
              }}
              visible={!!selectedPlace}
            >
              <div></div>
            </InfoWindow>*/}
          </Map>
        </div>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0',
})(withRouter(ContentItem));
