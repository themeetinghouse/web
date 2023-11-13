import API, { GraphQLResult } from '@aws-amplify/api';
import { useEffect, useState } from 'react';
import { ListTMHCompassionsQuery, TMHCompassion } from 'API';
import { listTMHCompassions } from 'graphql/queries';
export default function useCompassionPartners() {
  const [partners, setPartners] = useState<TMHCompassion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const partners = (await API.graphql({
          query: listTMHCompassions,
        })) as GraphQLResult<ListTMHCompassionsQuery>;
        const { items } = partners.data?.listTMHCompassions || {};
        setPartners(items as TMHCompassion[]);
      } catch (error) {
        console.error({ error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  const sorted = () => {
    return partners.sort((a, b) => {
      const aName = a?.name?.toLowerCase();
      const bName = b?.name?.toLowerCase();
      if (aName && bName && aName < bName) return -1;
      if (aName && bName && aName > bName) return 1;
      return 0;
    });
  };
  return { partners: sorted(), isLoading, setPartners };
}
