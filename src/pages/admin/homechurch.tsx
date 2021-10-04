import './Announcements.scss';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import DataLoader from 'components/RenderRouter/DataLoader';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
// import moment from 'moment';
import { ListHomeChurchInfosQuery } from 'API';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import './homechurch.scss';
import { Modal } from 'reactstrap';

Amplify.configure(awsmobile);

export default function homechurch(): JSX.Element {
  const [homeChurch, setHomeChurch] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [edit, setEdit] = useState<any>(null);
  const [page, setPage] = useState(0);
  const createhmHM = async (firstHm: any) => {
    const homeChurchInfo = {
      id: firstHm.id, // PK
    };
    try {
      const addHM = (await API.graphql({
        query: mutations.createHomeChurchInfo,
        variables: { input: homeChurchInfo },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<ListHomeChurchInfosQuery>;
      console.log({ added: { addHM } });
    } catch (err) {
      console.log({ err });
    }
  };
  const shouldCreateHomeChurchInfo = (
    f1HomeChurches: any,
    homeChurchInfos: any
  ) => {
    f1HomeChurches.forEach((f1HomeChurch: any) => {
      const inHomeChurchInfosTable = homeChurchInfos.find(
        (homeChurchInfo: any) => homeChurchInfo?.id === f1HomeChurch?.id
      );
      if (!inHomeChurchInfosTable) createhmHM(f1HomeChurch);
      else console.log('Already exists');
    });
  };
  // const shouldUpdateHomeChurchInfo = (
  //   f1HomeChurches: any,
  //   homeChurchInfos: any
  // ) => {
  //   homeChurchInfos.forEach((homeChurchInfo: any) => {
  //     const inF1Table = f1HomeChurches.find(
  //       (f1HomeChurch: any) => f1HomeChurch?.id === homeChurchInfo?.id
  //     );
  //   });
  // };
  const onChangeOption = async (event: any): Promise<void> => {
    // this is null. should also pass homechurchinfo id
    console.log(event.target.value, 'called');
    if (false) updateHomeChurchInfo(event.target.value);
  };
  const updateHomeChurchInfo = async (fieldsToUpdate: any): Promise<void> => {
    try {
      const updateHMInfo = (await API.graphql({
        query: mutations.updateHomeChurchInfo,
        variables: { input: fieldsToUpdate },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<ListHomeChurchInfosQuery>;
      console.log({ updated: { updateHMInfo } });
    } catch (err) {
      console.log({ err });
    }
  };
  const injectF1Data = (f1HomeChurches: any, homeChurchInfos: any) => {
    return homeChurchInfos.map((homeChurchInfo: any) => {
      const inF1Table = f1HomeChurches.find(
        (f1HomeChurch: any) => f1HomeChurch?.id === homeChurchInfo?.id
      );
      homeChurchInfo.F1ItemData = inF1Table;
      return homeChurchInfo;
    });
  };
  useEffect(() => {
    const fetchHomeChurchInfoChurches = async (): Promise<any> => {
      try {
        const hms = (await API.graphql({
          query: queries.listHomeChurchInfos,
          variables: { limit: 200 },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<ListHomeChurchInfosQuery>;
        console.log('hms', hms);
        return hms?.data?.listHomeChurchInfos?.items;
      } catch (err) {
        console.log({ err });
        return { items: [] };
      }
    };
    const fetchF1ListGroup2sChurches = async (): Promise<Array<any>> => {
      let data: Array<any> = [];
      await DataLoader.listHomeChurches(
        (items) => {
          data = [...data, ...items];
        },
        () => null
      );
      return data;
    };
    const load = async () => {
      const f1HomeChurchItems = await fetchF1ListGroup2sChurches();
      const homeChurchInfoItems = await fetchHomeChurchInfoChurches();
      shouldCreateHomeChurchInfo(f1HomeChurchItems, homeChurchInfoItems);
      const injectedHomeChurchInfoData = injectF1Data(
        f1HomeChurchItems,
        homeChurchInfoItems
      );
      setHomeChurch(injectedHomeChurchInfoData);
      setIsLoading(false);
    };
    load();
  }, []);
  return (
    <div>
      {edit ? (
        <Modal size="lg" isOpen={edit}>
          <div>
            <p>Name: {edit?.F1ItemData.name}</p>
            <p>Transit Accessible: {edit?.transitAccessible}</p>
            <p>Has Childcare: {edit?.hasChildcare}</p>
            <p>Is Online: {edit?.isOnline}</p>
            <p>Online Connect URL: {edit?.onlineConnectUrl}</p>
            <p>Elders: {edit?.elders?.map((elder: string) => elder + ', ')}</p>
            <p>Gender: {edit?.gender}</p>
            <p>Pet Free: {edit?.petFree}</p>
            <p>Age Groups: {edit?.ageGroups}</p>
            <p>Extended Description: {edit?.extendedDescription} </p>
            <p>Vaccination Required: {edit?.vaccinationRequired}</p>
            <p></p>
            <button onClick={() => setEdit(null)}>Save</button>
            <button onClick={() => setEdit(null)}>Close</button>
          </div>
        </Modal>
      ) : null}
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
        <div style={{ margin: 'auto', width: '90vw' }}>
          <table
            style={{
              backgroundColor: '#efefef',
              width: '100%',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: 'white', margin: 16 }}>
                <th colSpan={11}>
                  <input
                    placeholder="Search by name.."
                    value={search}
                    onChange={(e) => {
                      if (page !== 0) setPage(0);
                      setSearch(e.target.value);
                    }}
                    style={{
                      width: '60%',
                      margin: '16px 0px',
                      padding: 8,
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th style={{ textAlign: 'center' }}>Pet Free</th>
                <th style={{ textAlign: 'center' }}>Transit Accessible</th>
                <th style={{ textAlign: 'center' }}>Has Childcare</th>
                <th style={{ textAlign: 'center' }}>Vaccination Required</th>
                <th style={{ textAlign: 'center' }}>Young Adult</th>
                <th style={{ textAlign: 'center' }}>Family Friendly</th>
                <th style={{ textAlign: 'center' }}>Is Online</th>
                <th style={{ textAlign: 'center' }}>Is Hybrid</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {homeChurch
                .filter((hm: any) => {
                  if (search) {
                    if (
                      hm?.F1ItemData?.name
                        ?.toLowerCase()
                        .includes(search.toLocaleLowerCase())
                    )
                      return true;
                    return false;
                  } else return true;
                })
                .slice(page, page + 10)
                ?.map((hm: any, index: number) => {
                  return (
                    <tr
                      key={index}
                      style={
                        index % 2 == 0 ? { backgroundColor: '#f7f7f7' } : {}
                      }
                    >
                      <td>{hm?.id}</td>
                      <td>{hm?.F1ItemData?.name}</td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          onChange={onChangeOption}
                          className="HomeChurchCheckbox"
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          onChange={onChangeOption}
                          className="HomeChurchCheckbox"
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          onChange={onChangeOption}
                          className="HomeChurchCheckbox"
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          onChange={onChangeOption}
                          className="HomeChurchCheckbox"
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          onChange={onChangeOption}
                          className="HomeChurchCheckbox"
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          onChange={onChangeOption}
                          className="HomeChurchCheckbox"
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          onChange={onChangeOption}
                          className="HomeChurchCheckbox"
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          onChange={onChangeOption}
                          className="HomeChurchCheckbox"
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <button
                          onClick={() => setEdit(hm)}
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                          }}
                        >
                          <img
                            width={20}
                            height={20}
                            src="/static/icons/Register-white.png"
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr style={{ backgroundColor: 'white' }}>
                <td style={{ paddingBottom: 16 }} colSpan={11}>
                  <TransactionPaginate
                    paginationIndex={page}
                    setPaginationIndex={setPage}
                    length={
                      homeChurch.filter((hm: any) => {
                        if (search) {
                          if (
                            hm?.F1ItemData?.name
                              ?.toLowerCase()
                              .includes(search.toLocaleLowerCase())
                          )
                            return true;
                          return false;
                        } else return true;
                      }).length
                    }
                  ></TransactionPaginate>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
