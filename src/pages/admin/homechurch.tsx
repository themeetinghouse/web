import './Announcements.scss';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import DataLoader from 'components/RenderRouter/DataLoader';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import { ListHomeChurchInfosQuery } from 'API';

Amplify.configure(awsmobile);

export default function homechurch(): JSX.Element {
  const [homeChurch, setHomeChurch] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const createhmHM = async (firstHm: any) => {
    console.log({ firstHm });
    const homeChurchInfo = {
      id: firstHm.id, // PK
      elders: [], // TMHPROD - where can I get this?
      vacinationRequired: 'Unknown', // TMHPROD - 'Yes'/'No'/'Unknown' -> defaults to 'No'
      hasChildcare: firstHm?.hasChildcare, // F1 SYNCHED property - 'Yes'/'No'/'Unknown' -> defaults to 'No'
      isOnline: 'Unknown', // TMHPROD - 'Yes'/'No'/'Unknown' -> defaults to 'Yes'
      onlineConnectUrl: '', // TMHPROD - zoom url
      ageGroups: 'All', // Young Adults/Seniors/All (default)
      petFree: 'Unknown', // TMHPROD - 'Yes'/'No'/'Unknown' -> defaults to 'No'
      transitAccessible: 'Unknown', // TMHPROD - 'Yes'/'No'/'Unknown' -> defaults to 'No'
      //accessCode: '', // TMHPROD
      gender: firstHm.gender, // F1 SYNCHED property - Male Only/Female Only/Mixed(default)[doesn't display a pill]
      extendedDescription: '', // TMHPROD - Optional free form
      imgageUrl: '', // TMHPROD - link to image url (upload the image using amplify put to public folder)
      imageAlt: '', // TMHPROD
      videoUrl: '', // TMHPROD - link to video url (upload the video using amplify put to public folder)
    };
    try {
      const addHM = (await API.graphql({
        query: mutations.createHomeChurchInfo,
        variables: homeChurchInfo,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<ListHomeChurchInfosQuery>;
      console.log({ addHM });
    } catch (err) {
      console.log({ err });
    }
  };
  useEffect(() => {
    const loadStuff = async () => {
      await fetchF1ListGroup2sChurches();
      await fetchHomeChurchInfoChurches();
    };
    const fetchHomeChurchInfoChurches = async (): Promise<void> => {
      try {
        const hms = (await API.graphql({
          query: queries.listHomeChurchInfos,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<ListHomeChurchInfosQuery>;
        console.log(
          'hms?.data?.listHomeChurchInfos?.items',
          hms?.data?.listHomeChurchInfos?.items
        );
      } catch (err) {
        console.log({ err });
      }
    };
    const fetchF1ListGroup2sChurches = async (): Promise<void> => {
      let data: Array<any> = [];
      await DataLoader.listHomeChurches(
        (items) => {
          data = [...data, ...items];
        },
        () => setHomeChurch(data)
      );
      setIsLoading(false);
    };
    loadStuff();
  }, []);
  useEffect(() => {
    if (homeChurch?.[0]) {
      createhmHM(homeChurch?.[0]);
    }
  }, [homeChurch]);
  return (
    <div>
      {isLoading ? (
        <div
          style={{
            minHeight: 300,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner />
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Elders</th>
              <th>Vaccination Required</th>
              <th>Has Childcare</th>
              <th>Is Online</th>
              <th>Online Connect URL</th>
              <th>Age Groups</th>
              <th>Gender</th>
              <th>Extended Description</th>
              <th>Image Url</th>
              <th>Image Alt</th>
              <th>Video Url</th>
            </tr>
          </thead>
          <tbody>
            {homeChurch?.map((hm: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{hm?.name}</td>
                  <td>{hm?.elders?.map((elder: string) => elder + ', ')}</td>
                  <td>{hm?.vaccinationRequired}</td>
                  <td>{hm?.hasChildcare}</td>
                  <td>{hm?.isOnline}</td>
                  <td>{hm?.onlineConnectUrl}</td>
                  <td>{hm?.ageGroups}</td>
                  <td>{hm?.petFree}</td>
                  <td>{hm?.transitAccessible}</td>
                  <td>{hm?.gender?.name}</td>
                  <td>{hm?.extendedDescription}</td>
                  <td>{hm?.imgageUrl}</td>
                  <td>{hm?.imageAlt}</td>
                  <td>{hm?.videoUrl}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
