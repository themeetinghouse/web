import {
  CreateTMHLocationMutation,
  TMHLocation,
  UpdateTMHLocationMutation,
} from 'API';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal, ModalHeader } from 'reactstrap';

import styles from './LocationsModal.module.scss';
import LocationsModalYouth from './LocationsModalYouth';
import LocationsModalSocials from './LocationsModalSocials';
import LocationsModalMeetings from './LocationsModalMeetings';
import LocationsModalGeneral from './LocationsModalGeneral';
import LocationsTMHButton from './LocationsTMHButton';
import { API, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as mutations from '../mutations';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import ToggleNavigationBar from '../../../components/ToggleNavBar/ToggleNavigationBar';

type LocationsModalProps = {
  locations: TMHLocation[];
  locationData?: TMHLocation | null;
  setLocations: React.Dispatch<React.SetStateAction<TMHLocation[]>>;
  editMode?: boolean;
  setLocationData: React.Dispatch<React.SetStateAction<TMHLocation | null>>;
  showModal: boolean;
  toggle: () => void;
};

type LocationsModalPages =
  | 'General Information'
  | 'Youth'
  | 'Socials'
  | 'Meeting Times';

const pages: LocationsModalPages[] = [
  'General Information',
  'Youth',
  'Socials',
  'Meeting Times',
];

export default function LocationsModal({
  locations,
  setLocationData,
  locationData,
  setLocations,
  editMode,
  showModal,
  toggle,
}: LocationsModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`updating ${e.target.name} to ${e.target.value}`);
    let newValue: string | boolean = e.target.value;
    let fieldName = e.target.name;
    if (
      e.target.name === 'showInLocationMap' ||
      e.target.name === 'showInLocationList'
    ) {
      newValue = e.target.checked;
    }
    if (e.target.name.includes('location.')) {
      fieldName = e.target.name.replace('location.', '');
      setLocationData((prev) => ({
        ...(prev as TMHLocation),
        location: {
          [fieldName]: newValue,
        } as any,
      }));
    } else
      setLocationData((prev) => ({
        ...(prev as TMHLocation),
        [fieldName]: newValue,
      }));
  };

  useEffect(() => {
    setLocationData(locationData as TMHLocation);
  }, [locationData]);

  const [currentPage, setCurrentPage] = useState<LocationsModalPages>(
    'General Information'
  );
  const clearData = () => {
    setLocationData(null);
    // setUpdated({});
    setResult(false);
    setCurrentPage('General Information');
  };
  const compareData = (oldData: TMHLocation, newData: TMHLocation) => {
    const updated: any = {};
    for (const key in newData) {
      if (
        oldData[key as keyof TMHLocation] !== newData[key as keyof TMHLocation]
      ) {
        if (newData[key as keyof TMHLocation] === '') updated[key] = null;
        updated[key] = newData[key as keyof TMHLocation];
      }
    }
    return updated;
  };
  const updateLocation = async () => {
    const currentEditLocation = locations.find(
      (location) => location.id === locationData?.id
    );

    if (!currentEditLocation) return;

    if (!locationData) return;
    const input: any = { ...locationData };
    delete input?.youth?.__typename;
    delete input?.socials?.__typename;
    delete input?.youth?.location?.__typename;
    delete input?.youth?.contact?.__typename;
    const updated = compareData(currentEditLocation as TMHLocation, input);
    if (!Object.keys(updated).length) {
      return;
    }
    console.log(input.id, 'is the id');
    console.log({ Updating: updated });
    try {
      setIsLoading(true);
      const response = (await API.graphql({
        query: mutations.updateTMHLocation,
        variables: { input: { id: input.id, ...updated } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateTMHLocationMutation>;
      console.log({ response });
      if (response.data?.updateTMHLocation?.id) {
        const updatedLocations = locations.map((location) => {
          if (location.id === response.data?.updateTMHLocation?.id) {
            return response.data?.updateTMHLocation as TMHLocation;
          }
          return location;
        });
        setLocations(updatedLocations);
        setResult(true);
      }
    } catch (error) {
      console.error({ error });
      setResult(false);
    } finally {
      setIsLoading(false);
    }
  };
  const validateLocation = () => {
    const errors = [];
    if (locationData?.id && locationData?.name) {
      return true;
    }
    if (!locationData?.id) {
      errors.push('Please enter a location ID');
    }
    if (!locationData?.name) {
      errors.push('Please enter a location name');
    }
    setErrorMessages(errors);
    return false;
  };
  const createLocation = async () => {
    const isValid = validateLocation();
    if (!isValid) return;
    console.log('creating location');
    if (!locationData) return;
    const input: any = { ...locationData };
    console.log({ input });
    delete input?.youth?.__typename;
    delete input?.socials?.__typename;
    delete input?.youth?.location?.__typename;
    delete input?.youth?.contact?.__typename;
    console.log({ Creating: input });
    try {
      setIsLoading(true);
      const response = (await API.graphql({
        query: mutations.createTMHLocation,
        variables: { input: input },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      })) as GraphQLResult<CreateTMHLocationMutation>;
      console.log({ response });
      if (response.data?.createTMHLocation?.id) {
        setLocations([response.data?.createTMHLocation, ...locations]);
        setResult(true);
      }
    } catch (error) {
      console.error({ error });
      setResult(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    if (editMode) {
      updateLocation();
    } else {
      createLocation();
    }
  };
  return (
    <Modal size="lg" isOpen={showModal} toggle={toggle} onClosed={clearData}>
      {result ? (
        <>
          <ModalHeader
            className={styles['LocationsModalHeader']}
            style={{ padding: '16px 32px' }}
            toggle={toggle}
          >
            <span>
              {result
                ? `Successfully ${editMode ? 'updated' : 'created'} location`
                : 'An error occurred.'}
            </span>
          </ModalHeader>
        </>
      ) : (
        <>
          <ModalHeader
            className={styles['LocationsModalHeader']}
            style={{ padding: '16px 32px' }}
            toggle={toggle}
          >
            <span>
              {editMode
                ? `Make changes to ${locationData?.name}`
                : 'Create a new location'}
            </span>
          </ModalHeader>
          <ToggleNavigationBar
            style={{ margin: '16px 32px' }}
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage as Dispatch<SetStateAction<string>>}
          />

          <div className={styles['LocationsModal']}>
            {currentPage === 'General Information' ? (
              <LocationsModalGeneral
                editMode={Boolean(editMode)}
                handleChange={handleChange}
                newLocData={locationData as TMHLocation}
              />
            ) : null}
            {currentPage === 'Youth' ? (
              <LocationsModalYouth
                setLocData={setLocationData}
                newLocData={locationData as TMHLocation}
              />
            ) : null}
            {currentPage === 'Socials' ? (
              <LocationsModalSocials
                setLocData={setLocationData}
                newLocData={locationData as TMHLocation}
              />
            ) : null}
            {currentPage === 'Meeting Times' ? (
              <LocationsModalMeetings
                setLocData={setLocationData}
                newLocData={locationData as TMHLocation}
              />
            ) : null}
          </div>
          {errorMessages.map((error) => (
            <div
              key={error}
              style={{
                color: 'tomato',
                marginLeft: 32,
              }}
            >
              {error}
            </div>
          ))}

          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '16px 32px',
            }}
          >
            <LocationsTMHButton disabled={isLoading} onClick={handleSave}>
              {isLoading ? 'Saving...' : 'Save'}
            </LocationsTMHButton>
          </div>
        </>
      )}
    </Modal>
  );
}
