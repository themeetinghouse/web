import './Announcements.scss';
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import DataLoader from 'components/RenderRouter/DataLoader';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import moment from 'moment';
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
            <p>Transit Accessible: {edit?.F1ItemData.name}</p>
            <p>Has Childcare: {edit?.F1ItemData.name}</p>
            <p>Is Online: {edit?.F1ItemData.name}</p>
            <p>Elders: {edit?.F1ItemData.name}</p>
            <p>Gender: {edit?.F1ItemData.name}</p>
            <p>Transit Accessible: {edit?.F1ItemData.name}</p>
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
        <div style={{ margin: 'auto', width: '50vw' }}>
          <table
            style={{
              backgroundColor: '#efefef',
              width: '100%',
            }}
          >
            <thead>
              <tr>
                <th colSpan={3}>
                  <input
                    placeholder="Search by name.."
                    value={search}
                    onChange={(e) => {
                      if (page !== 0) setPage(0);
                      setSearch(e.target.value);
                    }}
                    style={{ width: '100%', margin: '16px 0px', padding: 8 }}
                  />
                </th>
              </tr>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Last Updated</th>
                <th></th>
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
                      <td>
                        {moment(hm.updatedAt).format('YYYY-MM-DD hh:mm a')}
                      </td>
                      <td>
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
              <tr>
                <td colSpan={3}>
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
