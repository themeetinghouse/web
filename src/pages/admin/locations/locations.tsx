// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styles from './locations.module.scss';
import { useState } from 'react';
import { TMHLocation } from 'API';
import { Spinner } from 'reactstrap';
import TransactionPaginate from 'pages/users/Transactions/TransactionsPaginate';
import LocationsModal from './LocationsModal';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import useLocations from './useLocations';

export default function Locations() {
  const [showModal, setShowModal] = useState(false);
  const [deleteID, setDeleteID] = useState('');
  const [locationData, setLocationData] = useState<TMHLocation | null>(null);
  const {
    locations,
    isLoading,
    removeLocation,
    setLocations,
    userAccessMessage,
  } = useLocations();
  const [page, setPage] = useState(0);
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={styles['LocationsContainer']}>
      <div className={styles['LocationsHeaderContainer']}>
        <div className={styles['LocationsHeaderTextContainer']}>
          <span className={styles['LocationsHeaderText']}>
            Locations
            {isLoading ? <Spinner style={{ marginLeft: 8 }} size="sm" /> : null}
          </span>
          <span className={styles['LocationsSubHeaderText']}>
            Create and manage locations
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className={styles['LocationsCreateButton']}
        >
          Create
        </button>
      </div>
      <div>{!isLoading ? userAccessMessage : null}</div>
      {!isLoading ? (
        <div className={styles['LocationsListContainer']}>
          <div className={styles['LocationsListHeader']}>
            <span>ID</span>
            <span>Name</span>
            <span>Region</span>
            <span>Actions</span>
          </div>

          <div className={styles['LocationsListItemContainer']}>
            {locations.slice(page, page + 10).map((location, index) => (
              <div
                className={styles['LocationsListItem']}
                key={location.id + index}
              >
                <span>{location.id}</span>
                <span>{location.name}</span>
                <span>{location.region}</span>
                <span>
                  <button
                    className={styles['LocationsListButton']}
                    type="button"
                    onClick={() => {
                      setDeleteID(location.id);
                    }}
                  >
                    <img src="/static/svg/Delete.svg" />
                  </button>
                  <button
                    className={styles['LocationsListButton']}
                    type="button"
                    onClick={() => {
                      setLocationData(location);
                      setEditMode(true);
                      setShowModal(true);
                    }}
                  >
                    <img src="/static/svg/Register.svg" />
                  </button>
                </span>
              </div>
            ))}
          </div>

          <TransactionPaginate
            paginationIndex={page}
            setPaginationIndex={setPage}
            paginateCount={10}
            length={locations.length}
          ></TransactionPaginate>
        </div>
      ) : null}
      <DeleteConfirmationModal
        removeLocation={removeLocation}
        showModal={Boolean(deleteID)}
        locationId={deleteID}
        dismiss={() => setDeleteID('')}
      />
      <LocationsModal
        locations={locations}
        setLocations={setLocations}
        editMode={editMode}
        setLocationData={setLocationData}
        locationData={locationData}
        showModal={showModal}
        toggle={() => {
          setShowModal((prev) => {
            if (prev) {
              setLocationData(null);
              setEditMode(false);
            }
            return !prev;
          });
        }}
      />
    </div>
  );
}
