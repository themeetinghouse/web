import { ListSpeakersQuery, Speaker } from 'API';
import { useEffect, useState } from 'react';
import * as adminQueries from '../../queries';
import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';

export default function useSpeakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const addToSpeakers = (speaker: Speaker) => {
    setSpeakers((prev) => [speaker, ...prev]);
  };
  const removeSpeaker = (speakerId: string) => {
    setSpeakers((prev) => prev.filter((s) => s.id !== speakerId));
  };

  const updateSpeaker = (speaker: Speaker) => {
    setSpeakers((prev) => {
      const index = prev.findIndex((s) => s.id === speaker.id);
      if (index === -1) return prev;
      const newSpeakers = [...prev];
      newSpeakers[index] = speaker;
      return newSpeakers;
    });
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const fetchSpeakers = (await API.graphql({
          query: adminQueries.listSpeakers,
          variables: { nextToken: null, limit: 200 },
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        })) as GraphQLResult<ListSpeakersQuery>;
        console.log({ 'Success adminQueries.listSpeakers: ': fetchSpeakers });
        const speakerItems =
          (fetchSpeakers.data?.listSpeakers?.items.sort((a, b) => {
            if (a?.name && b?.name) return a.id.localeCompare(b.id);
            else return 0;
          }) as Speaker[]) ?? [];
        setSpeakers(speakerItems);
      } catch (e) {
        console.error(e);
      }

      setIsLoading(false);
    })();
  }, []);
  return { speakers, isLoading, addToSpeakers, removeSpeaker, updateSpeaker };
}
