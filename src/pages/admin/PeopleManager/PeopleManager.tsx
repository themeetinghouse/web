import * as queries from '../../../graphql/queries';
import * as customQueries from '../../../graphql-custom/customQueries';
import React from 'react';
import './PeopleManager.scss';
import { API, Auth } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { ListTMHPeopleQuery, TMHPerson, TMHPersonByEmailQuery } from 'API';

import PersonCard from './PersonCard';
//import PeopleManagerModal from './PeopleManagerModal';
import { Spinner } from 'reactstrap';
import DataLoader from 'components/RenderRouter/DataLoader';
import PeopleManagerModalNew from './PeopleManagerModal';
const loadStaff = async ({
  setIsLoading,
  setPeopleData,
  setError,
}: {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  setPeopleData: React.Dispatch<React.SetStateAction<TMHPerson[]>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}) => {
  if (setIsLoading) setIsLoading(true);
  const user = await Auth.currentAuthenticatedUser();
  const groups = user.signInUserSession.accessToken.payload['cognito:groups'];

  try {
    const { data } = (await API.graphql({
      query: customQueries.listTMHPeople,
      variables: { limit: 500 },
    })) as GraphQLResult<ListTMHPeopleQuery>;
    console.log({ groups });
    if (groups?.includes('LocationManager')) {
      const people = (data?.listTMHPeople?.items as TMHPerson[]) ?? [];
      const currentTMHPerson = (await API.graphql({
        query: queries.TMHPersonByEmail,
        variables: { email: user.username },
      })) as GraphQLResult<TMHPersonByEmailQuery>;
      const currentPersonData =
        currentTMHPerson.data?.TMHPersonByEmail?.items ?? [];
      const currentPerson = currentPersonData[0];
      if (currentPerson) {
        const selfSites = currentPerson.tmhSites?.items.map(
          (site) => site?.tMHSite?.id
        );
        const locations = await DataLoader.loadLocations();
        const selfFilteredLocs = locations.filter((location) => {
          return selfSites?.includes(location.abbreviation ?? '');
        });
        const filteredPeople = people.filter((person) => {
          const personSites = person.tmhSites?.items.map(
            (site) => site?.tMHSiteID
          );
          const personLocations = locations.filter((location) => {
            return personSites?.includes(location.abbreviation ?? '');
          });
          const currentUserAbbrvs = selfFilteredLocs.map(
            (selfLoc) => selfLoc.abbreviation
          );
          const personAbbrvs = personLocations.map(
            (personLoc) => personLoc.abbreviation
          );
          return currentUserAbbrvs.some((abbrv) =>
            personAbbrvs.includes(abbrv)
          );
        });
        if (!selfFilteredLocs.length) {
          setError(
            'You are not currently assigned to a location. Please contact an admin to be assigned to a location.'
          );
        }
        setPeopleData(filteredPeople);
      } else {
        setError(
          'You are not currently assigned to a location. Please contact an admin to be assigned to a location.'
        );
      }
    } else {
      const people = (data?.listTMHPeople?.items as TMHPerson[]) ?? [];
      setPeopleData(people);
    }
  } catch (error) {
    console.log({ error });
  } finally {
    if (setIsLoading) setIsLoading(false);
  }
};
export default function PeopleManager() {
  const [disableButtons] = React.useState(false);
  const [peopleData, setPeopleData] = React.useState<TMHPerson[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<TMHPerson | null>(
    null
  );
  const [filterType, setFilterType] = React.useState('All');
  const [error, setError] = React.useState('');
  const closeModal = () => {
    //loadStaff({ setIsLoading: setDisableButtons, setPeopleData, setError });
    setShowModal(false);
  };
  const openModal = (user: TMHPerson) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  React.useEffect(() => {
    loadStaff({ setIsLoading, setPeopleData, setError });
  }, []);
  const updatePeopleDataCallback = (newValue: TMHPerson, type?: string) => {
    console.log('updatePeopleDataCallback', newValue);

    const updatedPersonIndex = peopleData.findIndex(
      (person) => person?.id === newValue?.id
    );

    // If the person is not in the current array and type is not 'delete'
    if (updatedPersonIndex === -1 && type !== 'delete') {
      setPeopleData([...peopleData, newValue]);
      return;
    }

    // If the type is 'delete'
    if (type === 'delete') {
      const filteredArray = peopleData.filter(
        (tmhPerson) => tmhPerson?.id !== newValue?.id
      );
      setPeopleData(filteredArray);
      return;
    }

    // Otherwise, update the existing person
    const newArray = [...peopleData];
    newArray[updatedPersonIndex] = newValue;
    setPeopleData(newArray);
  };

  const roleFilters: Record<string, (person: TMHPerson) => boolean> = {
    All: () => true,
    Coordinators: (person) => person?.isCoordinator === 'true',
    Staff: (person) => person?.isStaff === 'true',
    Teachers: (person) => person?.isTeacher === 'true',
    Overseers: (person) => person?.isOverseer === 'true',
  };

  const searchTermFilter = (person: TMHPerson) => {
    const terms = searchTerm.toLocaleLowerCase()?.trim().split(' ');

    if (!terms.length) return true;

    return terms.some(
      (term) =>
        person.firstName?.toLowerCase().includes(term) ||
        person.lastName?.toLowerCase().includes(term)
    );
  };

  const nameSort = (a: TMHPerson, b: TMHPerson) => {
    const AfirstName = a?.firstName?.toLowerCase();
    const BfirstName = b?.firstName?.toLowerCase();
    if (AfirstName && BfirstName) return AfirstName.localeCompare(BfirstName);
    return 0;
  };

  const filteredPeeps = peopleData
    .filter(roleFilters[filterType])
    .filter(searchTermFilter)
    .sort(nameSort);
  return (
    <div className="PeopleManagerContainer">
      <div
        style={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          rowGap: 20,
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontSize: 32,
            fontWeight: '700',
          }}
        >
          People
        </span>
        {!error && !isLoading ? (
          <div className="PersonSearchInputContainer">
            <img
              width="15"
              height="15"
              style={{
                position: 'absolute',
                marginLeft: 8,
                alignSelf: 'center',
              }}
              src="/static/svg/Search.svg"
              alt="Search"
            />
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              className="PersonSearchInput"
              placeholder="Search by name..."
            ></input>
          </div>
        ) : null}

        {!error && !isLoading ? (
          <select
            onChange={(e) => setFilterType(e.target.value)}
            value={filterType}
            style={{
              flex: 0.5,
              marginTop: 4,
              marginBottom: 4,
              marginRight: 16,
            }}
          >
            <option value="All">All</option>
            <option value="Coordinators">Coordinators</option>
            <option value="Staff">Staff</option>
            {false ? <option value="Teachers">Teachers</option> : null}
            <option value="Overseers">Overseers</option>
          </select>
        ) : null}
        {!error && !isLoading ? (
          <button
            className="SaveButton create"
            onClick={() => setShowModal(true)}
          >
            <span>Create</span>
            <img
              onClick={() => setShowModal(true)}
              width={20}
              height={20}
              alt="Plus Icon"
              src="/static/svg/Plus-Expand-White.svg"
            ></img>
          </button>
        ) : null}
      </div>
      <div>{error}</div>
      <div className="PeopleWrapper">
        {filteredPeeps.map((person) => (
          <PersonCard
            disabled={disableButtons}
            openModal={openModal}
            key={person?.id}
            personData={person}
          ></PersonCard>
        ))}
      </div>
      {!filteredPeeps?.length || isLoading ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          {isLoading ? (
            <Spinner />
          ) : !error ? (
            <>
              <img
                style={{ marginBottom: 16 }}
                src="/static/svg/undraw_team_re_0bfe.svg"
                width={150}
                height={150}
              />
              <span style={{ color: '#1a1a1a', fontSize: 14 }}>
                {peopleData?.length
                  ? 'No people found.'
                  : 'No people have been created. Click create to add people.'}
              </span>
            </>
          ) : null}
        </div>
      ) : null}
      {showModal ? (
        <PeopleManagerModalNew
          setSelectedUser={setSelectedUser}
          updateCallback={updatePeopleDataCallback}
          closeModal={closeModal}
          showModal={showModal}
          selectedUser={selectedUser}
        />
      ) : null}
    </div>
  );
}
