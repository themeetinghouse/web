import { TMHPerson, UpdateTMHPersonInput } from 'API';
import React from 'react';
import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import * as customMutations from '../../../graphql-custom/customMutations';

import { Modal, Spinner } from 'reactstrap';
import {
  CreateTMHPersonInput,
  CreateTMHPersonMutation,
  DeleteTMHPersonMutation,
  UpdateTMHPersonMutation,
} from 'API';
import { Storage } from 'aws-amplify';
import './PeopleManager.scss';
import TMHSitesDropdown from './TMHSitesDropdown';

type EditModalProps = {
  selectedUser: TMHPerson | null;
  showModal: boolean;
  updateCallback: (updatedPerson: TMHPerson, type?: string) => void;
  setSelectedUser: React.Dispatch<React.SetStateAction<TMHPerson | null>>;
  closeModal: () => void;
};

const ProfileImage = ({
  url,
  large,
  setFile,
}: {
  url: string;
  setFile: any;
  large?: boolean;
}) => {
  const [uri, setUri] = React.useState(url);
  const uploadRef = React.useRef<any>(null);
  return (
    <div style={{ position: 'relative', alignSelf: 'center' }}>
      <img
        onError={() => {
          setUri('/static/svg/Profile.svg');
        }}
        width={large ? '100' : '45'}
        height={large ? '100' : '45'}
        style={{ borderRadius: 100, objectFit: 'cover' }}
        src={uri}
      ></img>
      {large ? (
        <div
          onClick={() => uploadRef?.current?.click()}
          className="PersonImageEditButton"
        >
          <img style={{ padding: 8 }} src={'/static/svg/Edit.svg'} />
        </div>
      ) : null}
      {uploadRef ? (
        <input
          onChange={(e) => {
            if (e.target.files?.[0]) {
              const file = e.target.files[0];
              if (file.size > 2097152) {
                alert('File must be smaller than 2mb');
              } else if (e?.target?.files?.[0]) {
                setUri(URL.createObjectURL(e.target.files[0]));
                setFile(e.target.files[0]);
              }
            }
          }}
          ref={uploadRef}
          name="upload"
          type="file"
          id="file"
          style={{ display: 'none' }}
        ></input>
      ) : null}
    </div>
  );
};

const isValidName = (name: string | undefined | null): boolean => {
  if (!name) return false;
  const regex = /^[a-zA-Z\s\-]+$/; // Allows alphabets, spaces, and hyphens
  return regex.test(name);
};

export const validateTMHPerson = (
  person: TMHPerson | null | undefined
): string[] => {
  const errors: string[] = [];

  if (!person) {
    errors.push('An unknown error occurred. Please try again later.');
    return errors;
  }

  if (!isValidName(person.firstName)) {
    errors.push('First name must be entered.');
  }

  if (!isValidName(person.lastName)) {
    errors.push('Last name must be entered.');
  }
  if (!person.position) {
    errors.push('Position must be entered.');
  }
  return errors;
};
const determineInputStyle = (error: string[], key: string) => {
  return error.includes(key) ? { outline: '2px solid tomato' } : {};
};
export default function PeopleManagerModal({
  selectedUser,
  setSelectedUser,
  showModal,
  updateCallback,
  closeModal,
}: EditModalProps) {
  const [userData, setUserData] = React.useState<TMHPerson | null>(
    selectedUser
  );
  const [created, setCreated] = React.useState(false);
  const [error, setError] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [file, setFile] = React.useState<any>(null);
  const updateTMHPerson = async (
    propsToUpdate: UpdateTMHPersonInput,
    fullName: string
  ) => {
    try {
      setIsLoading(true);
      let s3Result = null;
      if (file) s3Result = await uploadToS3(fullName);
      if (s3Result) propsToUpdate.image = s3Result;
      console.log({ propsToUpdate });
      const updatedPerson = (await API.graphql({
        query: customMutations.updateTMHPerson,
        variables: {
          input: propsToUpdate,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<UpdateTMHPersonMutation>;
      console.log({ updatedPerson });
      if (updatedPerson?.data?.updateTMHPerson) {
        const newData = updatedPerson?.data?.updateTMHPerson;
        updateCallback(newData);
      } else {
        console.log('NOT CALLING');
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTMHPerson = async (userID: string) => {
    try {
      setIsDeleting(true);
      const deletedTMHPerson = (await API.graphql({
        query: customMutations.deleteTMHPerson,
        variables: {
          input: {
            id: userID,
          },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<DeleteTMHPersonMutation>;
      if (deletedTMHPerson?.data?.deleteTMHPerson?.image) {
        // delete from s3
      }
      console.log({ deletedTMHPerson });
      updateCallback(
        deletedTMHPerson?.data?.deleteTMHPerson as TMHPerson,
        'delete'
      );
    } catch (error: unknown) {
      const e = error as { errors: any[]; data: { deleteTMHPerson?: any } };
      console.log({ e });
      if (e?.data?.deleteTMHPerson)
        updateCallback(e?.data?.deleteTMHPerson as TMHPerson, 'delete');
      else {
        console.log('An error occurred while deleting a user');
        setError(e.errors.map((error) => error.message));
      }
    } finally {
      setIsDeleting(false);
    }
  };
  const createTMHPerson = async (newUser: TMHPerson) => {
    setIsLoading(true);
    if (!newUser.firstName && !newUser.lastName) return;
    const fullName = `${newUser.firstName}_${newUser.lastName}`;
    const fieldsThatExist = Object.keys(newUser).filter(
      (key) => newUser[key as keyof CreateTMHPersonInput] !== ''
    );
    const newNewUser: any = {};
    fieldsThatExist.forEach((field) => {
      if (field)
        newNewUser[field] = newUser[field as keyof CreateTMHPersonInput];
    });
    let s3Result = null;
    if (file) s3Result = await uploadToS3(fullName);
    if (s3Result) newNewUser.image = s3Result;
    try {
      console.log({ creating: newNewUser });
      const newTMHPerson = (await API.graphql({
        query: mutations.createTMHPerson,
        variables: {
          input: newNewUser,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<CreateTMHPersonMutation>;
      console.log({ newTMHPerson });
      if (newTMHPerson?.data?.createTMHPerson) {
        const newData = newTMHPerson?.data?.createTMHPerson;
        setUserData(newData);
        setCreated(true);
        updateCallback(newData);
      }
      console.log({ newTMHPerson });
    } catch (error: unknown) {
      const e = error as Error;
      console.log({ e });
      console.log(e.message || 'An error occurred while creating a new user');
    } finally {
      setIsLoading(false);
    }
  };
  const handleSaveTMHPerson = async () => {
    console.log('saving', selectedUser);
    const validationErrors = validateTMHPerson(userData);
    if (validationErrors.length) {
      setError(validationErrors);
      return;
    }
    if (created) {
      if (userData) updateCallback(userData);
      clearFields();
      closeModal();
      return;
    }
    if (!userData) return;

    if (!selectedUser) {
      await createTMHPerson(userData);
    } else {
      const fieldsToUpdate = Object.keys(userData).filter((key) => {
        const typedKey = key as keyof UpdateTMHPersonInput;
        return (
          key !== 'tmhSites' &&
          userData[typedKey] !== '' &&
          selectedUser[typedKey] !== '' &&
          userData[typedKey] !== selectedUser[typedKey]
        );
      }) as Array<keyof UpdateTMHPersonInput>;
      console.log({ fieldsToUpdate });

      if (file) fieldsToUpdate.push('image');
      if (!fieldsToUpdate.length) {
        clearFields();
        closeModal();
        return;
      }
      const newValues: any = { id: userData?.id };
      for (const key of fieldsToUpdate) {
        if (key) newValues[key] = userData[key as keyof UpdateTMHPersonInput];
      }
      console.log({ newValues });
      await updateTMHPerson(
        newValues,
        `${userData?.firstName}_${userData?.lastName}`
      );
      clearFields();
      closeModal();
    }
  };
  const clearFields = () => {
    setCreated(false);
    setError([]);
    setSelectedUser(null);
    setUserData(null);
  };
  const uploadToS3 = async (fullName: string) => {
    const S3_BUCKET =
      'https://themeetinghouse-usercontent221608-prodnew.s3.amazonaws.com/public/';
    if (!file || !fullName) return;
    try {
      if (selectedUser?.image) {
        const oldKey = `personimages/${selectedUser?.image?.split('/').pop()}`;
        if (oldKey) await Storage.remove(oldKey);
      }
      const extension = file.name.split('.').pop();
      const path = 'personimages/';
      const key = `${path}${fullName.replaceAll(
        /\s/g,
        '_'
      )}-${new Date().getTime()}.${extension}`;
      const result = await Storage.put(key, file, {
        acl: 'public-read',
        cacheControl: 'max-age=604800',
      });
      console.log({ result });
      if (!result) return;
      return S3_BUCKET + key;
    } catch (error) {
      console.log({ error });
    }
  };
  const updateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'position' && event.target.value) {
      setError((prev) => [
        ...prev.filter((str) => str !== 'Position must be entered.'),
      ]);
    } else if (event.target.name === 'firstName' && event.target.value) {
      setError((prev) => [
        ...prev.filter((str) => str !== 'First name must be entered.'),
      ]);
    } else if (event.target.name === 'lastName' && event.target.value) {
      setError((prev) => [
        ...prev.filter((str) => str !== 'Last name must be entered.'),
      ]);
    }
    event.persist();
    setUserData(
      (prev) =>
        ({
          ...prev,
          [event.target.name]: event.target.value,
        } as TMHPerson)
    );
  };
  const updateCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const value = event.target.checked.toString() ?? '';
    setUserData(
      (prev) =>
        ({
          ...prev,
          [event.target.name]: value,
        } as TMHPerson)
    );
  };
  return (
    <Modal size="md" isOpen={showModal}>
      <form
        className="PersonModalContentContainer"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSaveTMHPerson();
        }}
      >
        {created ? (
          <TMHSitesDropdown
            passIsLoading={setIsLoading}
            userData={{
              ...userData,
              tmhSites: userData?.tmhSites?.items ?? [],
            }}
            setUserData={setUserData}
            callback={(data) => updateCallback(data)}
          />
        ) : (
          <>
            <ProfileImage setFile={setFile} large url={userData?.image ?? ''} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                gap: 8,
                marginTop: 60,
              }}
            >
              <label>
                <span>
                  First Name {!userData?.firstName ? <strong>*</strong> : null}
                </span>

                <input
                  onChange={updateValue}
                  value={userData?.firstName ?? ''}
                  name="firstName"
                  placeholder="First Name"
                  style={determineInputStyle(
                    error,
                    'First name must be entered.'
                  )}
                  type="text"
                />
              </label>
              <label>
                <span>
                  Last Name {!userData?.lastName ? <strong>*</strong> : null}
                </span>

                <input
                  onChange={updateValue}
                  type="text"
                  name="lastName"
                  value={userData?.lastName ?? ''}
                  style={determineInputStyle(
                    error,
                    'Last name must be entered.'
                  )}
                  placeholder="Last Name"
                />
              </label>
            </div>
            <label>
              <span>
                Position {!userData?.position ? <strong>*</strong> : null}
              </span>

              <input
                onChange={updateValue}
                name="position"
                value={userData?.position ?? ''}
                style={determineInputStyle(error, 'Position must be entered.')}
                type="text"
                placeholder="Position"
              />
            </label>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                gap: 8,
              }}
            >
              <label>
                <span>Phone</span>

                <input
                  onChange={updateValue}
                  name="phone"
                  value={userData?.phone ?? ''}
                  type="text"
                  placeholder="Phone"
                />
              </label>
              <label>
                <span>Extension</span>

                <input
                  onChange={updateValue}
                  value={userData?.extension ?? ''}
                  type="text"
                  name="extension"
                  placeholder="Extension"
                />
              </label>
            </div>

            <label>
              <span>Email</span>

              <input
                onChange={updateValue}
                value={userData?.email ?? ''}
                name="email"
                type="text"
                placeholder="Email"
              />
            </label>
            {userData?.id ? (
              <TMHSitesDropdown
                passIsLoading={setIsLoading}
                userData={{
                  ...userData,
                  tmhSites: userData?.tmhSites?.items ?? [],
                }}
                callback={(data) => updateCallback(data)}
                setUserData={setUserData}
              />
            ) : null}
            <label htmlFor="isCoordinator" style={{ flexDirection: 'row' }}>
              <input
                name={'isCoordinator'}
                style={{ marginRight: 8, scale: 1.2 }}
                checked={userData?.isCoordinator === 'true'}
                onChange={updateCheckBox}
                type="checkbox"
              />
              Coordinator
            </label>
            <label htmlFor="isStaff" style={{ flexDirection: 'row' }}>
              <input
                name={'isStaff'}
                style={{ marginRight: 8, scale: 1.2 }}
                checked={userData?.isStaff === 'true'}
                onChange={updateCheckBox}
                type="checkbox"
              />
              Staff
            </label>
            <label htmlFor="isTeacher" style={{ flexDirection: 'row' }}>
              <input
                name={'isTeacher'}
                style={{ marginRight: 8, scale: 1.2 }}
                checked={userData?.isTeacher === 'true'}
                onChange={updateCheckBox}
                type="checkbox"
              />
              Teacher
            </label>
            <label htmlFor="isOverseer" style={{ flexDirection: 'row' }}>
              <input
                style={{ marginRight: 8, scale: 1.2 }}
                name={'isOverseer'}
                checked={userData?.isOverseer === 'true'}
                onChange={updateCheckBox}
                type="checkbox"
              />
              Overseer
            </label>
          </>
        )}
        <div>
          {error.map((errorMessage) => (
            <p key={errorMessage} style={{ color: 'tomato' }}>
              {errorMessage}
            </p>
          ))}
        </div>

        <div
          style={{
            marginTop: 16,
            alignSelf: 'flex-end',
            flex: 1,
          }}
        >
          {selectedUser && userData?.id ? (
            <button
              className="SaveButton"
              type="button"
              style={{ marginRight: 8, backgroundColor: 'tomato' }}
              disabled={isLoading || isDeleting}
              onClick={async () => {
                if (
                  confirm(
                    `Are you sure you want to delete ${
                      userData?.firstName + ' ' + userData?.lastName
                    }`
                  )
                ) {
                  await deleteTMHPerson(userData.id);
                  clearFields();
                  closeModal();
                }
              }}
            >
              {isDeleting ? (
                <>
                  <Spinner type="grow" size="sm" />
                  <span> Deleting</span>
                </>
              ) : (
                'Delete'
              )}
            </button>
          ) : null}
          {userData?.id || created ? (
            <button
              type="submit"
              disabled={isLoading || isDeleting}
              className="SaveButton"
            >
              {isLoading ? (
                <>
                  <Spinner type="grow" size="sm" />
                  <span>Saving</span>
                </>
              ) : (
                'Save'
              )}
            </button>
          ) : (
            <button type="submit" disabled={isLoading} className="SaveButton">
              {isLoading ? (
                <>
                  <Spinner type="grow" size="sm" />
                  <span>Next</span>
                </>
              ) : (
                'Next'
              )}
            </button>
          )}
          <button
            type="button"
            className="SaveButton white"
            style={{ marginLeft: 8 }}
            disabled={isLoading || isDeleting}
            onClick={(e) => {
              clearFields();
              closeModal();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
