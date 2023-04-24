import { useState, useEffect } from 'react';
import * as adminQueries from '../../queries';
import API, { GRAPHQL_AUTH_MODE, GraphQLResult } from '@aws-amplify/api';
import { GetSeriesBySeriesTypeQuery, Series } from 'API';

export default function useSeries() {
  const [series, setSeries] = useState<Series[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const addToSeries = (newSeries: Series) => {
    setSeries((prevSeries) => [newSeries, ...prevSeries]);
  };
  const updateSeries = (updatedSeries: Series) => {
    console.log({ oldSeriesz: series });
    const newSeriesItems = series.map((series) =>
      series.id === updatedSeries.id ? updatedSeries : series
    );
    console.log({ newSeriesItems });
    setSeries(newSeriesItems);
  };
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const tempSeriesList: Series[] = [];
      const loadNext = async (nextToken: string | null) => {
        try {
          const getSeries = (await API.graphql({
            query: adminQueries.getSeriesBySeriesType,
            variables: {
              nextToken,
              limit: 200,
              sortDirection: 'DESC',
              seriesType: 'adult-sunday',
            },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
          })) as GraphQLResult<GetSeriesBySeriesTypeQuery>;
          console.log({ 'Success customQueries.listSeries: ': getSeries });
          const seriesItems =
            (getSeries.data?.getSeriesBySeriesType?.items as Series[]) ?? [];
          if (seriesItems.length) {
            tempSeriesList.push(...seriesItems);
          }
          if (getSeries.data?.getSeriesBySeriesType?.nextToken)
            await loadNext(getSeries.data?.getSeriesBySeriesType?.nextToken);
        } catch (e) {
          console.error(e);
        }
      };
      await loadNext(null);
      setSeries(tempSeriesList);
      setIsLoading(false);
    })();
  }, []);
  return { series, isLoading, addToSeries, updateSeries };
}
