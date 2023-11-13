import {
  CreateTMHSiteMutation,
  GetTMHPersonQuery,
  SitePerson,
  TMHPerson,
  TMHSite,
  UpdateTMHPersonMutation,
} from 'API';
import { API, GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import React from 'react';
import { MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import * as customMutations from '../../../graphql-custom/customMutations';
import * as customQueries from '../../../graphql-custom/customQueries';

export default function TMHSitesDropdown({
  userData,
  setUserData,
  callback,
  passIsLoading,
}: {
  userData: any;
  setUserData: any;
  callback: (data: TMHPerson) => void;
  passIsLoading?: any;
}) {
  const userId = userData?.id;
  const [sites, setSites] = React.useState<TMHSite[]>([]);
  const [userSites, setUserSites] = React.useState<TMHSite[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const sites = (await API.graphql({
          query: customQueries.listTMHSites,
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as GraphQLResult<{ listTMHSites: { items: TMHSite[] } }>;
        const siteItems = sites.data?.listTMHSites?.items ?? [];
        setSites(siteItems);
        const siteIds = userData?.tmhSites.map(
          (site: SitePerson) => site?.tMHSiteID
        );
        console.log({ sites });
        const newUserSites =
          siteItems.filter((site) => siteIds?.includes(site?.id)) ?? [];
        setUserSites(newUserSites);
      } catch (error: any) {
        console.error({ 'failed to load sites': error });
        const siteItems = error?.data?.listTMHSites?.items ?? [];
        setSites(siteItems);
        const siteIds = userData?.tmhSites.map(
          (site: SitePerson) => site?.tMHSiteID
        );
        console.log({ sites });
        const newUserSites =
          siteItems.filter((site: any) => siteIds?.includes(site?.id)) ?? [];
        setUserSites(newUserSites);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  const createSitePerson = async (siteId: string) => {
    try {
      console.log(`creating site person for ${siteId}`);
      const createSitePerson = (await API.graphql({
        query: customMutations.createSitePerson,
        variables: {
          input: {
            tMHSiteID: siteId,
            tMHPersonID: userId,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateTMHPersonMutation>;
      console.log({ createSitePerson });
    } catch (error5) {
      console.log({ error5 });
    }
  };
  const removeSitePerson = async (sitePersonID: string) => {
    try {
      console.log(`removing site person for ${sitePersonID}`);
      const removeSitePerson = (await API.graphql({
        query: customMutations.deleteSitePerson,
        variables: {
          input: {
            id: sitePersonID,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateTMHPersonMutation>;
      console.log({ removeSitePerson });
    } catch (error1) {
      console.error({ error1 });
    }
  };
  const refetchUserData = async (ID: string) => {
    try {
      const newUserData = (await API.graphql({
        query: customQueries.getTMHPerson,
        variables: {
          id: ID,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<GetTMHPersonQuery>;
      const newUserDataItems = newUserData?.data?.getTMHPerson?.tmhSites ?? [];
      setUserData({ ...userData, tmhSites: newUserDataItems }); //updates Modal data
      callback({ ...userData, tmhSites: newUserDataItems }); //updates list data
    } catch (error) {
      const err = error as { errors: any[]; data: { getTMHPerson?: any } };
      const newUserDataItems = err?.data?.getTMHPerson?.tmhSites ?? [];
      setUserData({ ...userData, tmhSites: newUserDataItems }); //updates Modal data
      callback({ ...userData, tmhSites: newUserDataItems }); //updates list data
      console.error({ error });
    }
  };
  const createTmhSite = async (siteName: string) => {
    setIsLoading(true);
    try {
      const newSite = (await API.graphql({
        query: customMutations.createTMHSite,
        variables: {
          input: {
            id: siteName,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<CreateTMHSiteMutation>;
      console.log({ newSite });
      if (newSite?.data?.createTMHSite) {
        try {
          await createSitePerson(newSite.data.createTMHSite.id);
          refetchUserData(userId);
          setUserSites([...userSites, newSite.data.createTMHSite]);
        } catch (error2) {
          console.error('Something went wrong...', { error2 });
        } finally {
          setSites([...sites, newSite.data.createTMHSite]);
        }
      }
    } catch (error3) {
      console.error('An error occurred while creating a new site', { error3 });
    } finally {
      setIsLoading(false);
    }
  };
  const handleSelectOnChange = async (
    newValue: MultiValue<{
      value: string;
      label: string;
    }>
  ) => {
    if (!newValue) return;
    const reducedNewValue = newValue.map((item) => item.value);
    const newSite = sites.filter((site) => reducedNewValue.includes(site.id));
    if (!newSite) return;
    const tempOldSites = userSites.map((site) => site.id);
    const tempNewSites = newSite.map((site) => site.id);
    const removed = tempOldSites.filter((site) => !tempNewSites.includes(site));
    const added = tempNewSites.filter((site) => !tempOldSites.includes(site));
    const handleRemoved = async () => {
      const existingSitePersonID = userData?.tmhSites?.find(
        (sitePerson: SitePerson) => sitePerson.tMHSiteID === removed[0]
      );
      if (existingSitePersonID)
        await removeSitePerson(existingSitePersonID?.id);

      setIsLoading(false);
    };
    const handleAdded = async () => {
      const addedSiteID = added[0];
      if (addedSiteID) await createSitePerson(addedSiteID);
    };
    setIsLoading(true);
    passIsLoading(true);
    await handleRemoved();
    await handleAdded();

    await refetchUserData(userId);
    setUserSites(newSite);
    passIsLoading(false);
    setIsLoading(false);
  };
  console.log({ userData });
  return (
    <label
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        Teams:
      </div>
      <CreatableSelect
        isDisabled={isLoading}
        allowCreateWhileLoading={false}
        formatCreateLabel={(inputValue) => `Add new site "${inputValue}"`}
        isMulti
        styles={{
          control: (provided: any) => ({
            ...provided,
            display: 'flex',
            flex: 1,
            marginTop: 4,
          }),
          container: (provided: any) => ({
            ...provided,
            display: 'flex',
            flex: 1,
          }),
        }}
        value={[
          ...userSites.map((site) => ({ value: site?.id, label: site?.id })),
        ]}
        onCreateOption={createTmhSite}
        isLoading={isLoading}
        loadingMessage={() => 'Loading...'}
        onChange={handleSelectOnChange}
        placeholder="Select Site/Enter Site"
        options={sites.map((item: any) => ({
          label: item.id,
          value: item.id,
        }))}
      ></CreatableSelect>
    </label>
  );
}
