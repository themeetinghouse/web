import { F1ListGroup2, ListHomeChurchInfosQuery, TMHLocation } from 'API';
import API from '@aws-amplify/api';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as queries from '../../graphql/queries';
import { HomeChurchItemContent } from 'components/types';
import {
  GoogleApiWrapper,
  InfoWindow,
  IProvidedProps,
  Map,
  Marker,
} from 'google-maps-react';
import { useRef, useEffect, useState } from 'react';
import DataLoader, { CompassionData, RegionData } from './DataLoader';
import './CombinedMap.scss';
import { useLocation } from 'react-router-dom';
const SITE_PIN_URL = '/static/svg/SiteLocationPin.svg';
const SITE_PIN_SELECTED_URL = '/static/svg/SiteLocationPin-selected.svg';

const HOME_CHURCH_PIN_URL = '/static/svg/HomeChurchPin.svg';
const HOME_CHURCH_PIN_SELECTED_URL = '/static/svg/HomeChurchPin-selected.svg';
const CURRENT_LOCATION_URL = '/static/svg/CurrentLocation.svg';
const DEFAULT_LAT_LNG = { lng: -79.685926, lat: 43.511459 };

interface Props extends IProvidedProps {
  content: HomeChurchItemContent;
}

export function ContentItem(props: Props) {
  const mapRef = useRef<HTMLElement | null>(null);
  // let map: google.maps.Map | undefined;
  const location = useLocation();
  const [showingInfoWindow, setShowingInfoWindow] = useState<boolean>(false);
  const [activeMarker, setActiveMarker] = useState<any>({});
  const [selectedPlace2Type, setSelectedPlace2Type] = useState<string>('');
  const [selectedPlace2, setSelectedPlace2] = useState<
    CompassionData | TMHLocation | F1ListGroup2 | undefined
  >(undefined);
  const [homeChurchVisible, setHomeChurchVisible] = useState<boolean>(true);
  const [compassionVisible, setCompassionVisible] = useState<boolean>(true);
  const [sundayVisible, setSundayVisible] = useState<boolean>(true);
  const [selectedPlace] = useState(null);
  //const [locationFilter, setLocationFilter] = useState(null);
  // const [locationsLoaded, setLocationsLoaded] = useState([]);
  const [allLocationsLoaded, setAllLocationsLoaded] = useState(false);
  const [locations, setLocations] = useState<TMHLocation[]>([]);
  const [regions, setRegions] = useState<RegionData[]>([]);
  const [compassion, setCompassion] = useState<CompassionData[]>([]);
  const [currentLocation, setCurrentLocation] = useState<TMHLocation | null>(
    null
  );
  const [groups, setGroups] = useState<(F1ListGroup2 | null)[]>([]);
  const [locationsLoaded, setLocationsLoaded] = useState(false);
  const [compassionLoaded, setCompassionLoaded] = useState(false);
  const [groupsExtra, setGroupsExtra] = useState<any[]>([]);
  const [mapBounds, setMapBounds] = useState<google.maps.LatLngBounds>();
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
      if (location.pathname.includes('communities')) {
        const locationID = location.pathname.split('/').at(-1);
        const selectedLoc = locationsRet.find((loc) => {
          return loc.id === locationID;
        });
        setCurrentLocation(selectedLoc as TMHLocation);
      }
      setLocations(locationsRet);
      setLocationsLoaded(true);
    });
    DataLoader.loadCompassion().then((compassion) => {
      setCompassion(compassion);
      setCompassionLoaded(true);
    });
    DataLoader.getRegions().then((locationsRet) => {
      setRegions(locationsRet);
    });

    const loadHomeChurchInfo = async () => {
      const data: Array<any> = [];
      const fetchNext = async (next: string | null = null) => {
        try {
          const json = (await API.graphql({
            query: queries.listHomeChurchInfos,
            variables: { nextToken: next, limit: 100 },
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
  const onMarkerClickSunday = (props: any, marker: any, e: any) => {
    setSelectedPlace2Type('');
    setSelectedPlace2(e);
    setSelectedPlace2Type('Sunday');
    setActiveMarker(marker);
    setShowingInfoWindow(true);
    console.log(props, marker, e);
  };
  const onMarkerClickHomeChurch = (props: any, marker: any, e: any) => {
    setSelectedPlace2Type('');
    setSelectedPlace2(e);
    setSelectedPlace2Type('HomeChurch');
    setActiveMarker(marker);
    setShowingInfoWindow(true);
    console.log(props, marker, e);
  };
  const onMarkerClickCompassion = (props: any, marker: any, e: any) => {
    setSelectedPlace2Type('');
    setSelectedPlace2(e);
    setSelectedPlace2Type('Compassion');
    setActiveMarker(marker);
    setShowingInfoWindow(true);
    console.log(props, marker, e);
  };
  const onMapClicked = (props: any) => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setSelectedPlace2Type('');
      setActiveMarker(null);
    }
  };
  const updateGeoLocation = async (isUserAction: boolean): Promise<void> => {
    const newLatLng = await getCurrentPosition(isUserAction);
    setCurrentLatLng(newLatLng);
  };

  const inititalCenter = { lat: 43.5, lng: -79.5 };
  const initalZoom = 10;
  const onGoogleReady = (mapProps: any, map: any) => {
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
      document.getElementById('legend')
    );
  };

  const renderInfoWindowContent = () => {
    if (selectedPlace2 == undefined) {
      return null;
    } else if (selectedPlace2Type == '') {
      return null;
    } else if (selectedPlace2Type == 'Sunday') {
      const sunday = selectedPlace2 as TMHLocation;
      return (
        <div>
          <div>Community Site</div>
          <div>{sunday?.name}</div>
          <div>{sunday?.location?.address1}</div>
          {/*<div>{sunday?.serviceTimeDescription}</div>*/}
        </div>
      );
    } else if (selectedPlace2Type == 'Compassion') {
      const compassion = selectedPlace2 as CompassionData;
      return (
        <div>
          <div>Compassion Partner</div>
          <div>{compassion?.name}</div>
          <div>{compassion?.location?.address}</div>
          <div>
            <a href={compassion?.website}>
              <img style={{ width: '10vw' }} src={compassion.image} />
            </a>
          </div>
        </div>
      );
    } else {
      const homechurch = selectedPlace2 as F1ListGroup2;
      return (
        <div>
          <div>HomeChurch</div>
          <div>{homechurch.name}</div>

          <div>{homechurch.description}</div>
        </div>
      );
    }
  };
  useEffect(() => {
    if (!props.google) return;
    if (allLocationsLoaded && compassionLoaded && locationsLoaded) {
      const bounds = new props.google.maps.LatLngBounds();
      const homeChurchMarkers = groups
        .filter((loc) => {
          if (currentLocation) {
            return loc?.groupType?.id === currentLocation.homeChurchGroupID;
          } else {
            return true;
          }
        })
        .map((group) => ({
          lat: Number(group?.location?.address?.latitude),
          lng: Number(group?.location?.address?.longitude),
        }));
      const locationMarkers = locations
        .filter((loc) =>
          currentLocation ? loc.id === currentLocation.id : true
        )
        .map((location) => ({
          lat: location?.location?.latitude ?? 0,
          lng: location?.location?.longitude ?? 0,
        }));
      const compassionMarkers = compassion
        .filter((compassion) => {
          if (currentLocation) {
            return false;
          } else {
            return true;
          }
        })
        .map((compassion) => ({
          lat: compassion?.location?.latitude ?? 0,
          lng: compassion.location?.longitude ?? 0,
        }));
      const combinedMarkers = [
        ...locationMarkers,
        ...homeChurchMarkers,
        ...compassionMarkers,
      ];

      combinedMarkers.forEach((marker) => {
        bounds.extend(new props.google.maps.LatLng(marker.lat, marker.lng));
      });
      setMapBounds(bounds);
    }
  }, [
    allLocationsLoaded,
    locationsLoaded,
    compassionLoaded,
    compassion,
    groups,
    locations,
    regions,
    props.google,
    currentLocation,
  ]);

  return (
    <div className="CombinedMapItem">
      <div className="CombinedMapItemDiv1">
        <h1 className="CombinedMapH1">
          {currentLocation ? currentLocation.name : props.content.header1}
        </h1>

        <div className="CombinedMapItemMap">
          <div
            id="legend"
            style={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#000000',
              backgroundColor: '#ffffff',
              margin: 10,
              padding: 5,
            }}
          >
            <div style={{ fontWeight: 'bold', marginBottom: 5 }}>LEGEND</div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setSundayVisible(!sundayVisible)}
            >
              <img
                src={sundayVisible ? SITE_PIN_URL : SITE_PIN_SELECTED_URL}
                width={16}
                height={16}
              />{' '}
              Sunday Location
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setHomeChurchVisible(!homeChurchVisible)}
            >
              <img
                src={
                  homeChurchVisible
                    ? HOME_CHURCH_PIN_URL
                    : HOME_CHURCH_PIN_SELECTED_URL
                }
                width={16}
                height={16}
              />{' '}
              Home Church
            </div>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => setCompassionVisible(!compassionVisible)}
            >
              <img
                src={
                  compassionVisible
                    ? HOME_CHURCH_PIN_URL
                    : HOME_CHURCH_PIN_SELECTED_URL
                }
                width={16}
                height={16}
              />{' '}
              Compassion Partner
            </div>
          </div>

          <Map
            ref={mapRef as React.RefObject<any>}
            onClick={onMapClicked}
            google={props.google}
            zoom={initalZoom}
            streetViewControl={false}
            zoomControl={false}
            fullscreenControl={false}
            initialCenter={inititalCenter}
            bounds={mapBounds}
            mapTypeControl={false}
            onReady={(mapProps, map2) => {
              // map = map2;

              onGoogleReady(mapProps, map2);
            }}
          >
            <InfoWindow
              key="info"
              marker={activeMarker}
              visible={showingInfoWindow}
            >
              {renderInfoWindowContent()}
            </InfoWindow>

            {/* {regions.map((z, index) => {
              return (
                <Polygon
                  key={'poly' + index}
                  fillColor={z.color}
                  strokeColor={z.color}
                  paths={z.outline}
                />
              );
            })} */}

            <Marker
              key="current"
              icon={CURRENT_LOCATION_URL}
              position={{ ...currentLatLng }}
            ></Marker>
            {compassionVisible
              ? compassion
                  .filter((compassion) => {
                    if (currentLocation) {
                      return false;
                    } else {
                      return true;
                    }
                  })
                  .map((compassion, index) => {
                    return (
                      <Marker
                        onClick={(a, b, c) => {
                          onMarkerClickCompassion(a, b, compassion);
                        }}
                        key={'comp' + compassion.id + index}
                        anchorPoint={new google.maps.Point(0, 0)}
                        icon={
                          selectedPlace
                            ? HOME_CHURCH_PIN_SELECTED_URL
                            : HOME_CHURCH_PIN_URL
                        }
                        position={{
                          lat: compassion?.location?.latitude,
                          lng: compassion?.location?.longitude,
                        }}
                      ></Marker>
                    );
                  })
              : null}
            {sundayVisible
              ? locations
                  .filter((loc) =>
                    currentLocation ? loc.id === currentLocation.id : true
                  )
                  .map((location, index) => {
                    console.log({ location });
                    return (
                      <Marker
                        onClick={(a, b, c) => {
                          onMarkerClickSunday(a, b, location);
                        }}
                        key={'loc' + location.id + index}
                        anchorPoint={new google.maps.Point(0, 0)}
                        icon={
                          selectedPlace ? SITE_PIN_SELECTED_URL : SITE_PIN_URL
                        }
                        position={{
                          lat: location?.location?.latitude ?? 0,
                          lng: location?.location?.longitude ?? 0,
                        }}
                      />
                    );
                  })
              : null}
            {homeChurchVisible
              ? groups
                  .filter((loc) => {
                    if (currentLocation) {
                      return (
                        loc?.groupType?.id === currentLocation.homeChurchGroupID
                      );
                    } else {
                      return true;
                    }
                  })
                  .map((location, index) => {
                    console.log({ location });
                    return (
                      <Marker
                        onClick={(a, b, c) => {
                          onMarkerClickHomeChurch(a, b, location);
                        }}
                        key={'group' + location?.id ?? 'a' + index}
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
                  })
              : null}
          </Map>
        </div>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0',
})(ContentItem);
