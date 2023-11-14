import { TMHLocation, TMHPersonByEmailQuery } from 'API';
import DataLoader from '../../../components/RenderRouter/DataLoader';
import { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { TMHPersonByEmail } from 'graphql/queries';
// import moment from 'moment';
// import API, { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
// import * as mutations from '../../../graphql/mutations';
export default function useLocations() {
  const [locations, setLocations] = useState<TMHLocation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userAccessMessage, setUserAccessMessage] = useState('');
  useEffect(function getLocations() {
    (async () => {
      try {
        setIsLoading(true);
        const locations = await DataLoader.loadLocations();
        const user1 = await Auth.currentAuthenticatedUser();

        const groups =
          user1.signInUserSession.accessToken.payload['cognito:groups'];
        if (groups.includes('LocationManager')) {
          console.debug('getting user', user1.username);
          const currentTMHPerson = (await API.graphql({
            query: TMHPersonByEmail,
            variables: { email: user1.username },
          })) as GraphQLResult<TMHPersonByEmailQuery>;
          const currentPersonData =
            currentTMHPerson.data?.TMHPersonByEmail?.items ?? [];
          const currentPerson = currentPersonData[0];
          if (currentPerson) {
            const personSites = currentPerson.tmhSites?.items.map(
              (site) => site?.tMHSite?.id
            );
            const filteredLocs = locations.filter((location) => {
              console.debug({ location }, { personSites });
              return personSites?.includes(location.abbreviation ?? '');
            });
            console.debug({ filteredLocs });
            if (!filteredLocs.length)
              setUserAccessMessage(
                'You are not currently assigned to a location. Please contact an admin to be assigned to a location.'
              );
            setLocations(filteredLocs);
          } else {
            setUserAccessMessage(
              'You are not currently assigned to a location. Please contact an admin to be assigned to a location.'
            );
          }
        } else {
          console.debug({ locations });
          setLocations(locations.sort((a, b) => a.name.localeCompare(b.name)));
        }
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
  return {
    locations,
    isLoading,
    removeLocation,
    setIsLoading,
    setLocations,
    userAccessMessage,
  };
}
