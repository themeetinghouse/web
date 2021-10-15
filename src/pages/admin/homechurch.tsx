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
import { HomeChurchInfo, ListHomeChurchInfosQuery } from 'API';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import './homechurch.scss';
import { Modal } from 'reactstrap';

Amplify.configure(awsmobile);
type HMInfoEdit = {
  onlineConnectUrl: string;
  ageGroups: string;
  extendedDescription: string;
};
export default function homechurch(): JSX.Element {
  const [homeChurch, setHomeChurch] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [search, setSearch] = useState('');
  const [edit, setEdit] = useState<any>(null);
  const [page, setPage] = useState(0);
  const createhmHM = async (firstHm: any) => {
    const homeChurchInfo: HomeChurchInfo = {
      __typename: 'HomeChurchInfo',
      id: firstHm.id,
    };
    if (firstHm.name.includes('Young Adult'))
      homeChurchInfo.isYoungAdult = 'Yes';
    if (firstHm.name.includes('Family Friendly'))
      homeChurchInfo.isFamilyFriendly = 'Yes';
    try {
      const addHM = (await API.graphql({
        query: mutations.createHomeChurchInfo,
        variables: { input: homeChurchInfo },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<ListHomeChurchInfosQuery>;
      console.log({ added: { addHM } });
    } catch (err) {
      console.log({ create: err });
    }
  };
  const shouldCreateHomeChurchInfoData = async (
    f1HomeChurchData: any,
    homeChurchInfoData: any
  ) => {
    const createHomeChurchInfoPromises: any = [];
    f1HomeChurchData.forEach((f1HomeChurch: any) => {
      const inHomeChurchInfosTable = homeChurchInfoData.find(
        (homeChurchInfo: any) => {
          if (homeChurchInfo?.id === f1HomeChurch?.id)
            return homeChurchInfo?.id === f1HomeChurch?.id;
        }
      );
      if (!inHomeChurchInfosTable) {
        createHomeChurchInfoPromises.push(createhmHM(f1HomeChurch));
      } else console.log('Already exists');
    });
    await Promise.all(createHomeChurchInfoPromises);
    if (createHomeChurchInfoPromises.length) return true;
    return false;
  };
  const onChangeOption = async (event: any) => {
    const newHomeChurch = [...homeChurch];
    const hmParams = event.target.name.split('-');
    const fieldName = hmParams[0];
    const hmId = hmParams[1];
    const hmIndex = newHomeChurch.findIndex((hm: any) => hm?.id === hmId);
    let fieldVal;
    if (event.target.checked) fieldVal = 'Yes';
    else fieldVal = 'No';
    if (newHomeChurch[hmIndex][fieldName] !== fieldVal) {
      const hmData = {
        id: hmId,
        [fieldName]: fieldVal,
      };
      const success = await updateHomeChurchInfo(hmData);
      if (success) {
        newHomeChurch[hmIndex][fieldName] = fieldVal;
        setHomeChurch(newHomeChurch);
      } else
        alert(
          `An error occurred while updating ${homeChurch[hmIndex].F1ItemData.name}. \nCannot set ${fieldName} to ${fieldVal}.`
        );
    }
  };
  const updateHomeChurchInfo = async (
    fieldsToUpdate: any
  ): Promise<boolean> => {
    setIsUpdating(true);
    try {
      const updateHMInfo = (await API.graphql({
        query: mutations.updateHomeChurchInfo,
        variables: { input: fieldsToUpdate },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<ListHomeChurchInfosQuery>;
      console.log({ updated: { updateHMInfo } });
      return true;
    } catch (err) {
      console.log({ failed: err });
      return false;
    } finally {
      setIsUpdating(false);
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
    const fetchHomeChurchInfoData = async (): Promise<any> => {
      const data: Array<any> = [];
      const fetchNext = async (next: string | null = null) => {
        try {
          const json = (await API.graphql({
            query: queries.listHomeChurchInfos,
            variables: { nextToken: next },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
          })) as GraphQLResult<ListHomeChurchInfosQuery>;
          console.log({
            'Success queries.listHomeChurchInfos': json,
          });
          if (json?.data?.listHomeChurchInfos?.items?.length) {
            json?.data?.listHomeChurchInfos?.items?.forEach((hmInfo) => {
              data.push(hmInfo);
            });
          }
          if (json?.data?.listHomeChurchInfos?.nextToken)
            await fetchNext(json?.data?.listHomeChurchInfos?.nextToken);
        } catch (e) {
          console.error(e);
        }
      };
      await fetchNext(null);
      return data;
    };
    const fetchF1HomeChurchData = async (): Promise<Array<any>> => {
      let data: Array<any> = [];
      await DataLoader.listHomeChurches(
        (items) => {
          data = [...data, ...items];
        },
        () => null
      );
      return data;
    };
    const loadInitialData = async () => {
      const f1HomeChurchData = await fetchF1HomeChurchData();
      const homeChurchInfoData = await fetchHomeChurchInfoData();
      if (
        await shouldCreateHomeChurchInfoData(
          f1HomeChurchData,
          homeChurchInfoData
        )
      ) {
        console.log(
          'At least one new HomeChurchInfo has been added. Fetch again'
        );
        loadInitialData();
      }

      const injectedF1HomeChurchData = injectF1Data(
        f1HomeChurchData,
        homeChurchInfoData
      );
      setHomeChurch(injectedF1HomeChurchData);
      setIsLoading(false);
    };
    loadInitialData();
  }, []);
  const EditHomeChurchInfo = (props: any) => {
    const { edit } = props;
    console.log({ edit });
    const [newHmInfo, setNewHmInfo] = useState<HMInfoEdit>({
      onlineConnectUrl: edit?.onlineConnectUrl,
      ageGroups: edit?.ageGroups,
      extendedDescription: edit?.extendedDescription,
    });
    const saveChanges = async () => {
      const updateProps: any = { id: edit.id };
      Object.keys(newHmInfo).forEach((k: string) => {
        const fieldName = k;
        const fieldValue = newHmInfo[k as keyof HMInfoEdit];
        if (
          (fieldValue &&
            newHmInfo[fieldName as keyof HMInfoEdit] !== edit?.[fieldName]) ||
          (edit?.[fieldName] && fieldValue === '')
        )
          updateProps[fieldName] = fieldValue;
      });
      if (updateProps) console.log(updateProps);

      const success = await updateHomeChurchInfo(updateProps);
      if (success) {
        const tempHomeChurch = [...homeChurch];
        const homeChurchIndex = tempHomeChurch.findIndex(
          (hm) => hm?.id === updateProps.id
        );
        if (homeChurchIndex !== -1) {
          Object.keys(updateProps).forEach((key) => {
            tempHomeChurch[homeChurchIndex][key] = updateProps[key];
          });
          setHomeChurch(tempHomeChurch);
        }
        alert(`Successfully updated.`);
        setEdit(null);
      } else alert(`An error occurred.`);
    };
    return (
      <Modal size="lg" isOpen={edit}>
        <div style={{ padding: 24 }}>
          <p style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 2 }}>
            Name:
          </p>
          <p style={{ fontSize: 20, fontWeight: 'bold' }}>
            {' '}
            {edit?.F1ItemData.name}
          </p>
          <p style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>
            Online Connect URL:{' '}
          </p>
          <input
            style={{ width: '100%', fontSize: 16, marginBottom: '1rem' }}
            onChange={(e) => {
              e.persist();
              setNewHmInfo((prev) => ({
                ...prev,
                onlineConnectUrl: e?.target?.value,
              }));
            }}
            value={newHmInfo?.onlineConnectUrl}
          />
          <p style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>
            Extended Description:{' '}
            <textarea
              rows={6}
              style={{ width: '100%', fontSize: 16, marginBottom: '1rem' }}
              onChange={(e) => {
                e.persist();
                setNewHmInfo((prev) => ({
                  ...prev,
                  extendedDescription: e?.target?.value,
                }));
              }}
              value={newHmInfo?.extendedDescription}
            />
          </p>
          {/*
          <p style={{ color: 'gray' }}>
            Custom Pills:
            {edit?.customPills?.map((pill: string) => pill)}
          </p>*/}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <button
              className="hmEditButton white"
              style={{ marginRight: 8 }}
              onClick={() => setEdit(null)}
            >
              Close
            </button>
            <button className="hmEditButton" onClick={() => saveChanges()}>
              Save
            </button>
          </div>
        </div>
      </Modal>
    );
  };
  return (
    <div>
      <EditHomeChurchInfo edit={edit} />
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
                <th colSpan={9}>
                  <div className="hmSearchInput">
                    <img
                      width="15"
                      height="15"
                      src="/static/svg/Search.svg"
                      alt="Search"
                    />
                    <input
                      className="hmSearchInput"
                      placeholder="Search by name.."
                      value={search}
                      onChange={(e) => {
                        if (page !== 0) setPage(0);
                        setSearch(e.target.value);
                      }}
                    />
                  </div>
                </th>
                <th colSpan={2}>{isUpdating ? <Spinner /> : null}</th>
              </tr>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th style={{ textAlign: 'center' }}>Pet Free</th>
                <th style={{ textAlign: 'center' }}>Transit Accessible</th>
                <th style={{ textAlign: 'center' }}>Family Friendly</th>
                <th style={{ textAlign: 'center' }}>Vaccination Required</th>
                <th style={{ textAlign: 'center' }}>Young Adult</th>
                <th style={{ textAlign: 'center' }}>Is Online</th>
                <th style={{ textAlign: 'center' }}>Is Hybrid</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {homeChurch
                .filter((hm: any) => {
                  if (!hm?.F1ItemData) return false; // removes HM not in f1
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
                          name={`petFree-${hm?.id}`}
                          checked={hm?.petFree === 'Yes'}
                          onChange={(e) => onChangeOption(e)}
                          className={`HomeChurchCheckbox`}
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          name={`transitAccessible-${hm?.id}`}
                          checked={hm?.transitAccessible === 'Yes'}
                          onChange={(e) => onChangeOption(e)}
                          className={`HomeChurchCheckbox`}
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          name={`isFamilyFriendly-${hm?.id}`}
                          checked={hm?.hasChildcare === 'Yes'}
                          onChange={(e) => onChangeOption(e)}
                          className={`HomeChurchCheckbox`}
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          name={`vaccinationRequired-${hm?.id}`}
                          checked={hm?.vaccinationRequired === 'Yes'}
                          onChange={(e) => onChangeOption(e)}
                          className={`HomeChurchCheckbox`}
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          name={`isYoungAdults-${hm?.id}`}
                          checked={hm?.isYoungAdults === `Young Adult`}
                          onChange={(e) => onChangeOption(e)}
                          className={`HomeChurchCheckbox`}
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          name={`isOnline-${hm?.id}`}
                          checked={hm?.isOnline === 'Yes'}
                          onChange={(e) => onChangeOption(e)}
                          className={`HomeChurchCheckbox`}
                          type="checkbox"
                        />
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          name={`isHybrid-${hm?.id}`}
                          checked={hm?.isHybrid === 'Yes'}
                          onChange={(e) => onChangeOption(e)}
                          className={`HomeChurchCheckbox`}
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
                <td colSpan={4}>
                  {homeChurch.filter((hm: any) => hm?.F1ItemData).length}{' '}
                  homechurches
                </td>
                <td style={{ paddingBottom: 16 }} colSpan={6}>
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
