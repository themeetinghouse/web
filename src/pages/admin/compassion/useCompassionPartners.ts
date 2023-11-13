import API, { GraphQLResult } from '@aws-amplify/api';
import { useEffect, useState } from 'react';
import {
  ListTMHCompassionsQuery,
  ListTMHLocationsQuery,
  TMHCompassion,
  TMHLocation,
} from 'API';
import { listTMHCompassions, listTMHLocations } from 'graphql/queries';
export default function useCompassionPartners() {
  const [partners, setPartners] = useState<TMHCompassion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState<TMHLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const partners = (await API.graphql({
          query: listTMHCompassions,
        })) as GraphQLResult<ListTMHCompassionsQuery>;
        const { items } = partners.data?.listTMHCompassions || {};
        const locationData = (await API.graphql({
          query: listTMHLocations,
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        })) as GraphQLResult<ListTMHLocationsQuery>;
        const { items: locationItems } =
          locationData.data?.listTMHLocations || {};
        setLocations(locationItems as TMHLocation[]);
        setPartners(items as TMHCompassion[]);
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

  return {
    partners: sorted(
      partners.filter((partner) => {
        if (!selectedLocation) return true;
        return partner.sites?.includes(selectedLocation ?? '');
      })
    ),
    isLoading,
    setPartners,
    locations,
    setSelectedLocation,
    selectedLocation,
  };
}
