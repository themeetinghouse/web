import { useEffect, useState } from 'react';
import * as queries from '../../../../graphql/queries';
import { CustomPlaylist, ListCustomPlaylistsQuery } from 'API';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import { API } from 'aws-amplify';
export default function useCustomPlaylists() {
  const [customPlaylists, setCustomPlaylists] = useState<CustomPlaylist[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const addToPlaylist = (playlist: CustomPlaylist) => {
    setCustomPlaylists((prev) => [playlist, ...prev]);
  };
  const deleteFromPlaylist = (playlist: CustomPlaylist) => {
    setCustomPlaylists((prev) => prev.filter((p) => p.id !== playlist.id));
  };
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const customPlaylists = (await API.graphql({
          query: queries.listCustomPlaylists,
          variables: { input: { limit: 1000 } },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<ListCustomPlaylistsQuery>;
        console.log({
          'Success mutations.listCustomPlaylists: ': customPlaylists,
        });
        setCustomPlaylists(
          (customPlaylists.data?.listCustomPlaylists?.items.sort((a, b) => {
            if (a?.id && b?.id) return a.id.localeCompare(b.id);
            else return 0;
          }) as CustomPlaylist[]) || []
        );
      } catch (error) {
        console.log({ 'Error mutations.listCustomPlaylists: ': error });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return {
    customPlaylists,
    deleteFromPlaylist,
    addToPlaylist,
    isLoading,
  };
}
