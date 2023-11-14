import API, { GraphQLResult } from '@aws-amplify/api';
import { useEffect, useState } from 'react';
import {
  ListTMHCompassionsQuery,
  ListTMHLocationsQuery,
  TMHCompassion,
  TMHLocation,
  TMHPersonByEmailQuery,
} from 'API';
import { listTMHLocations } from 'graphql/queries';
import * as customQueries from 'graphql-custom/customQueries';
import * as queries from 'graphql/queries';
import { Auth } from '@aws-amplify/auth';

export default function useCompassionPartners() {
  const [error, setError] = useState<string | null>(null);
  const [partners, setPartners] = useState<TMHCompassion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState<TMHLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [isLocationManager, setIsLocationManager] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const partners = (await API.graphql({
          query: customQueries.listTMHCompassions,
        })) as GraphQLResult<ListTMHCompassionsQuery>;
        const { items } = partners.data?.listTMHCompassions || {};
        const locationData = (await API.graphql({
          query: listTMHLocations,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as GraphQLResult<ListTMHLocationsQuery>;
        const user = await Auth.currentAuthenticatedUser();
        const userGroups =
          user.signInUserSession.accessToken.payload['cognito:groups'];
        if (userGroups?.includes('LocationManager')) {
          setIsLocationManager(true);
          const currentTMHPerson = (await API.graphql({
            query: queries.TMHPersonByEmail,
            variables: { email: user.username },
          })) as GraphQLResult<TMHPersonByEmailQuery>;
          const currentPersonData =
            currentTMHPerson.data?.TMHPersonByEmail?.items ?? [];
          const currentPerson = currentPersonData[0];
          if (currentPerson) {
            const selfSites = currentPerson.tmhSites?.items.map(
              (site) => site?.tMHSite?.id
            );
            console.log({ selfSites });
            const selfFilteredLocs =
              locationData.data?.listTMHLocations?.items?.filter((location) => {
                return selfSites?.includes(location?.abbreviation ?? '');
              });
            const filteredLocsIds = selfFilteredLocs?.map((loc) => loc?.id);
            const filteredPartners = items?.filter((partner) => {
              return partner?.sites?.some((site) =>
                filteredLocsIds?.includes(site ?? '')
              );
            });
            console.log({ filteredPartners });
            setPartners(filteredPartners as TMHCompassion[]);
            setLocations(selfFilteredLocs as TMHLocation[]);
            setSelectedLocation(selfFilteredLocs?.[0]?.id ?? null);
            if (!selfFilteredLocs?.length) {
              setError(
                'You are not currently assigned to a location. Please contact an admin to be assigned to a location.'
              );
            }
          } else {
            setError(
              'You are not currently assigned to a location. Please contact an admin to be assigned to a location.'
            );
          }
        } else {
          const { items: locationItems } =
            locationData.data?.listTMHLocations || {};
          setLocations(locationItems as TMHLocation[]);
          setPartners(items as TMHCompassion[]);
        }
      } catch (error) {
        console.error({ error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  const sorted = (arrayToSort: TMHCompassion[]) => {
    return arrayToSort.sort((a, b) => {
      const aName = a?.name?.toLowerCase();
      const bName = b?.name?.toLowerCase();
      if (aName && bName && aName < bName) return -1;
      if (aName && bName && aName > bName) return 1;
      return 0;
    });
  };
  const partnersFiltered = partners.filter((partner) => {
    if (!selectedLocation) return true;
    return partner.sites?.includes(selectedLocation ?? '');
  });
  const partnersSorted = sorted(partnersFiltered);
  return {
    partners: partnersSorted,
    isLoading,
    setPartners,
    locations,
    setSelectedLocation,
    selectedLocation,
    error,
    isLocationManager,
  };
}
