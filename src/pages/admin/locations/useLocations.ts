import { TMHLocation } from 'API';
import DataLoader from '../../../components/RenderRouter/DataLoader';
import { useState, useEffect } from 'react';
// import moment from 'moment';
// import API, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
// import * as mutations from '../../../graphql/mutations';
export default function useLocations() {
  const [locations, setLocations] = useState<TMHLocation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function getLocations() {
    // (async () => {
    //   try {
    //     setIsLoading(true);
    //     const response = await fetch('/static/data/locations.json');
    //     const locations = await response.json();
    //     const queryInputs = locations.map((location: any) => {
    //       const meetingInstances = location.serviceTimes.map(
    //         (serviceTime: string) => ({
    //           date: '2023-03-12',
    //           startTime: moment(serviceTime, 'HH:mm').format('HH:mm'),
    //           endTime: moment(serviceTime, 'HH:mm')
    //             .add(1, 'hour')
    //             .format('HH:mm'),
    //           name: '',
    //           description: '',
    //           frequency: 'WEEKLY',
    //           location: {
    //             name: 'The Meeting House',
    //             latitude: location.location.latitude,
    //             longitude: location.location.longitude,
    //             address1: location.location.address,
    //             state: 'Ontario',
    //             zip: '',
    //             country: 'Canada',
    //             url: `https://www.themeetinghouse.com/${location.id}`,
    //           },
    //         })
    //       );
    //       let socials;
    //       if (location.facebookEvents.length) {
    //         socials = {};
    //         socials.facebook = location.facebookEvents.map((facebookEvent) => {
    //           return {
    //             pageId: facebookEvent,
    //           };
    //         });
    //       }

    //       const newLocationData = {
    //         id: location.id,
    //         name: location.name,
    //         regionShortName: location.regionShortName,
    //         homeChurchGroupID: location.homeChurchGroupID,
    //         abbreviation: location.abbreviation,
    //         region: location.region,
    //         meetings: meetingInstances,
    //         pastorEmail: location.pastorEmail,
    //         showInLocationMap: true,
    //         showInLocationList: true,
    //         location: {
    //           name: location.location.address,
    //           latitude: location.location.latitude,
    //           longitude: location.location.longitude,
    //         },
    //       };
    //       if (socials) newLocationData.socials = socials;
    //       if (location.youth) {
    //         newLocationData.youth = {};
    //         if (location.youth.age)
    //           newLocationData.youth.description = location.youth.age;
    //         if (location.youth.time)
    //           newLocationData.youth.time = location.youth.time;
    //         if (location.youth.facebook)
    //           newLocationData.youth.facebookLink = location.youth.facebook;
    //         if (location.youth.instagram)
    //           newLocationData.youth.instagramLink = location.youth.instagram;
    //         if (location.youth.mainContact) {
    //           newLocationData.youth.contact = {};
    //           if (location.youth.mainContact.name)
    //             newLocationData.youth.contact.name =
    //               location.youth.mainContact.name;
    //           if (location.youth.mainContact.email)
    //             newLocationData.youth.contact.email =
    //               location.youth.mainContact.email;
    //           if (location.youth.mainContact.phone)
    //             newLocationData.youth.contact.phone =
    //               location.youth.mainContact.phone;
    //         }
    //         if (location.youth.location) {
    //           newLocationData.youth.location = {};
    //           if (location.youth.location.name)
    //             newLocationData.youth.location.name =
    //               location.youth.location.name;
    //           if (location.youth.location.address)
    //             newLocationData.youth.location.address1 =
    //               location.youth.location.address;
    //           if (location.youth.location.googleMapLink)
    //             newLocationData.youth.location.url =
    //               location.youth.location.googleMapLink;
    //         }
    //       }
    //       return newLocationData;
    //     });
    //     console.log({ queryInputs });
    //     queryInputs.forEach((query: any) => {
    //       (async () => {
    //         try {
    //           const response = await API.graphql({
    //             query: mutations.createTMHLocation,
    //             variables: { input: query },
    //             authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    //           });
    //           console.log({ response });
    //         } catch (error) {
    //           console.error({ error });
    //         }
    //       })();
    //     });
    //     setLocations(queryInputs);
    //   } catch (error) {
    //     console.error({ errorFetchLocations: error });
    //   } finally {
    //     setIsLoading(false);
    //   }
    // })();
    (async () => {
      try {
        setIsLoading(true);
        const locations = await DataLoader.loadLocations();
        console.log({ locations });
        setLocations(locations.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error({ errorFetchLocations: error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  const removeLocation = (locationID: string) => {
    setLocations(locations.filter((location) => location.id !== locationID));
  };
  return { locations, isLoading, removeLocation, setIsLoading, setLocations };
}
