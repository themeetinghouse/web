import * as queries from '../../../graphql/queries';
import React from 'react';
import './PeopleManager.scss';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { ListTMHPeopleQuery, TMHPerson } from 'API';
import PersonCard from './PersonCard';
import PeopleManagerModal from './PeopleManagerModal';

export default function People() {
  const [peopleData, setPeopleData] = React.useState<TMHPerson[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<TMHPerson | null>(
    null
  );
  const [filterType, setFilterType] = React.useState('All');
  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };
  const openModal = (user: TMHPerson) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  React.useEffect(() => {
    const loadStaff = async () => {
      try {
        const { data } = (await API.graphql({
          query: queries.listTMHPeople,
          variables: { limit: 200 },
        })) as GraphQLResult<ListTMHPeopleQuery>;
        const people = (data?.listTMHPeople?.items as TMHPerson[]) ?? [];
        setPeopleData(people);
      } catch (error) {
        console.log({ error });
      }
    };
    loadStaff();
  }, []);
  const updatePeopleDataCallback = (newValue: TMHPerson, type?: string) => {
    let newTempArr = peopleData;
    const updatedPersonIndex = newTempArr.findIndex(
      (person) => person?.id === newValue?.id
    );
    if (updatedPersonIndex === -1) newTempArr.push(newValue);
    else {
      if (type === 'delete')
        newTempArr = newTempArr.filter(
          (tmhPerson) => tmhPerson?.id !== newValue?.id
        );
      else newTempArr[updatedPersonIndex] = newValue;
    }
    setPeopleData(newTempArr);
  };
  return (
    <div className="PeopleManagerContainer">
      <div
        style={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
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

        <select
          onChange={(e) => setFilterType(e.target.value)}
          value={filterType}
          style={{ flex: 0.5, marginTop: 4, marginBottom: 4 }}
        >
          <option value="All">All</option>
          <option value="Coordinators">Coordinators</option>
          <option value="Staff">Staff</option>
          <option value="Teachers">Teachers</option>
          <option value="Overseers">Overseers</option>
        </select>
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
      </div>

      <div className="PeopleWrapper">
        {peopleData
          .filter((person) => {
            if (filterType === 'All') return true;
            else if (
              filterType === 'Coordinators' &&
              person?.isCoordinator === 'true'
            )
              return true;
            else if (filterType === 'Staff' && person?.isStaff === 'true')
              return true;
            else if (filterType === 'Teachers' && person?.isTeacher === 'true')
              return true;
            else if (
              filterType === 'Overseers' &&
              person?.isOverseer === 'true'
            )
              return true;
            else return false;
          })
          .filter((person) => {
            const term = searchTerm.toLocaleLowerCase()?.trim().split(' ');
            let exists = false;
            if (!term.length) return true;
            term.forEach((term) => {
              if (person.firstName?.toLowerCase().includes(term)) {
                exists = true;
              }
              if (person.lastName?.toLowerCase().includes(term)) {
                exists = true;
              }
            });
            return exists;
          })
          .sort((a, b) => {
            const AfirstName = a?.firstName?.toLowerCase();
            const BfirstName = b?.firstName?.toLowerCase();
            if (AfirstName && BfirstName)
              return AfirstName.localeCompare(BfirstName);
            return 0;
          })
          .map((person) => (
            <PersonCard
              openModal={openModal}
              key={person?.email ?? person?.firstName + ' ' + person?.lastName}
              personData={person}
            ></PersonCard>
          ))}
      </div>
      {showModal ? (
        <PeopleManagerModal
          updateCallback={updatePeopleDataCallback}
          closeModal={closeModal}
          showModal={showModal}
          selectedUser={selectedUser}
        />
      ) : null}
    </div>
  );
}
