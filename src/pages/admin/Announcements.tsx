import React, { useState, useEffect } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import AdminMenu from '../../components/Menu/AdminMenu';
import './Announcements.scss';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { Modal } from 'reactstrap';
//import * as Sentry from '@sentry/browser';
import * as customQueries from '../../graphql-custom/customQueries';
import * as customMutations from '../../graphql-custom/customMutations';

import * as mutations from '../../graphql/mutations';

Amplify.configure(awsmobile);
const federated = {
  facebookAppId: '579712102531269',
};

type AnnouncementDataKey = keyof AnnouncementData;

type AnnouncementData = {
  id?: string;
  title: string;
  description: string;
  publishedDate: string;
  expirationDate: string;
  image?: string;
  parish?: string;
  crossRegional?: string;
  callToAction?: string;
};

interface AnnouncementProps {
  announcement: AnnouncementData;
}
type LocationFromJSON = {
  id: string;
  name: string;
  pastorEmail: string;
  servicesTimes: Array<string>;
  location: {
    longitude: number;
    latitude: number;
    address: string;
  };
};
const announcementInit = {
  publishedDate: moment()
    .utcOffset(moment().isDST() ? '-0400' : '-0500')
    .format('YYYY-MM-DD'),
  expirationDate: moment()
    .utcOffset(moment().isDST() ? '-0400' : '-0500')
    .add('day', 7)
    .format('YYYY-MM-DD'),
  title: '',
  description: '',
  crossRegional: 'true',
  callToAction: '',
  parish: 'Cross-Regional',
  image: 'false',
};
type Location = {
  label: string;
  value: string;
};

export default function Announcements(): JSX.Element {
  const [count, setCount] = useState(5);
  const [showExpired, setShowExpired] = useState(false);
  const [locations, setLocations] = useState<Array<Location>>([]);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<
    AnnouncementData
  >();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [locationFilter, setlocationFilter] = useState('Cross-Regional');
  const [announcements, setAnnouncements] = useState<Array<AnnouncementData>>(
    []
  );

  /* ========================== Populates Location Filter Dropdown ========================= */
  const fetchLocations = async (): Promise<void> => {
    const response = await fetch('/static/data/locations.json');
    const data: Array<LocationFromJSON> = await response.json();
    if (data) {
      const locationArr = [
        { label: 'Cross-Regional', value: 'Cross-Regional' },
      ];
      const transformedLocations = [
        ...locationArr,
        ...data.map((a: LocationFromJSON) => {
          return { label: a.name, value: a.name };
        }),
      ];
      setLocations(transformedLocations);
    }
  };
  /* ======================================================================================== */

  /* ============================= Query and Mutation Functions ============================= */
  const createAnnouncement = async (
    announcement: AnnouncementData,
    parishes: Array<string>
  ): Promise<void> => {
    const toSaveAnnouncement: AnnouncementData = { ...announcement };
    const keys: Array<string> = Object.keys(announcement);
    keys.forEach((key) => {
      // Removes any empty fields from object
      if (
        toSaveAnnouncement[key as AnnouncementDataKey] === '' ||
        toSaveAnnouncement[key as AnnouncementDataKey] === 'false'
      ) {
        if (key !== 'crossRegional' && key !== 'callToAction')
          delete toSaveAnnouncement[key as AnnouncementDataKey];
      }
    });
    for (const a of parishes) {
      toSaveAnnouncement.parish = a;
      await createQuery(toSaveAnnouncement);
    }
    fetchAnnouncements();
    setOpenCreateModal(false);
  };

  const createQuery = async (announcement: AnnouncementData) => {
    try {
      const addAnnouncement: any = await API.graphql({
        query: mutations.createAnnouncement,
        variables: {
          input: { ...announcement, id: uuidv4() },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({
        'Success mutations.createAnnouncement: ': addAnnouncement,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const updateQuery = async (announcement: AnnouncementData) => {
    try {
      const updateAnnouncement: any = await API.graphql({
        query: customMutations.updateAnnouncement,
        variables: {
          input: { ...announcement },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({
        'Success mutations.updateAnnouncement: ': updateAnnouncement,
      });
    } catch (e) {
      console.log(e);
      //Sentry.captureException(e);
    }
  };

  const editAnnouncement = async (
    announcement: AnnouncementData,
    ogAnnouncement: AnnouncementData,
    parishes: Array<string>,
    originalParishes: Array<string>
  ): Promise<void> => {
    const announcementListToUpdate = announcements.filter(
      (a: AnnouncementData) =>
        a.title === ogAnnouncement.title &&
        a.publishedDate === ogAnnouncement.publishedDate
    );

    for (const item of announcementListToUpdate) {
      await updateQuery({
        ...announcement,
        id: item.id,
        parish: item.parish,
        image: announcement.image,
      });
    }
    const addArray: Array<string> = [];
    const deleteArray: Array<string> = [];
    for (let i = 0; i < parishes.length; i++) {
      if (
        originalParishes.find((a: string) => a === parishes[i]) === undefined
      ) {
        addArray.push(parishes[i]);
      }
    }
    for (let i = 0; i < originalParishes.length; i++) {
      if (
        parishes.find((a: string) => a === originalParishes[i]) === undefined
      ) {
        deleteArray.push(originalParishes[i]);
      }
    }
    // need to await these before fetching
    if (deleteArray?.length > 0) {
      for (const item of deleteArray) {
        const i = announcementListToUpdate.find(
          (a: AnnouncementData) => a.parish === item
        );
        if (i) {
          await deleteQuery(i);
        }
      }
    }

    if (addArray?.length > 0) {
      for (const item of addArray) {
        if (item === 'Cross-Regional')
          announcement = { ...announcement, crossRegional: 'true' };
        announcement = { ...announcement, parish: item };
        await createQuery(announcement);
      }
    }
    fetchAnnouncements();
    setOpenEditModal(false);
  };

  const deleteQuery = async (announcement: AnnouncementData) => {
    try {
      const removeAnnouncement: any = await API.graphql({
        query: mutations.deleteAnnouncement,
        variables: {
          input: { id: announcement.id },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({
        'Success mutations.removeAnnouncement: ': removeAnnouncement,
      });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const deleteAnnouncement = async (
    announcement: AnnouncementData
  ): Promise<void> => {
    const announcementListToDelete = announcements.filter(
      (a: AnnouncementData) =>
        a.title === announcement.title &&
        a.publishedDate === announcement.publishedDate
    );
    for (const [index, item] of announcementListToDelete.entries()) {
      if (await deleteQuery(item)) {
        if (index === announcementListToDelete.length - 1)
          alert('Removed Successfully.');
      } else {
        alert('An Error Occurred');
      }
    }
    fetchAnnouncements();
  };
  const fetchAnnouncements = async (): Promise<void> => {
    const today = moment()
      .utcOffset(moment().isDST() ? '-0400' : '-0500')
      .format('YYYY-MM-DD');
    let variables = {};
    if (showExpired) {
    } else {
      variables = { filter: { expirationDate: { gt: today } } };
    }
    try {
      const getAnnouncements: any = await API.graphql({
        query: customQueries.listAnnouncements,
        variables: variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({
        'Success queries.listAnnouncements: ': getAnnouncements,
      });
      setAnnouncements(
        getAnnouncements?.data?.listAnnouncements?.items.sort(
          (a: AnnouncementData, b: AnnouncementData) =>
            a.publishedDate.localeCompare(b.publishedDate)
        )
      );
    } catch (e) {
      console.log(e);
    }
  };

  /* ==================================================================================== */

  /* ============================= Single Announcement Item ============================= */
  const RenderAnnouncementItem = ({
    announcement,
  }: AnnouncementProps): JSX.Element => {
    return (
      <div
        className="announcementBox"
        onClick={(e) => {
          e.stopPropagation();
          setCurrentAnnouncement(announcement);
          setOpenEditModal(true);
        }}
      >
        <h5>{announcement.title}</h5>
        <div className="announcementIcons">
          <img
            className="addAnnouncementButton"
            onClick={(e) => {
              e.stopPropagation();
              if (
                confirm(
                  'Are you sure you want to delete all instances of this announcement?'
                )
              ) {
                deleteAnnouncement(announcement);
              } else {
              }
            }}
            width={33}
            height={33}
            alt="DeleteAnnouncementIcon"
            src="/static/svg/Minus_Icon.svg"
          ></img>
        </div>
        <div>
          <div className="announcementSummary">
            <p>
              <b>Announcement Date:</b>
              {announcement.publishedDate}
              <br></br>
              <b>Expiration Date:</b>
              {announcement.expirationDate}
              <br></br>
              <b>Parish:</b>
              {announcement.parish}
            </p>
          </div>
        </div>
      </div>
    );
  };
  /* ============================= List of announcements ============================= */
  const RenderAnnouncementList = (): JSX.Element => {
    const announcementsLength: number = announcements?.filter(
      (a: AnnouncementData) => {
        if (a.parish === locationFilter) {
          return true;
        } else return false;
      }
    )?.length;
    return (
      <>
        {announcements
          .filter((a: AnnouncementData) => {
            if (a.parish === locationFilter) {
              return true;
            } else return false;
          })
          .map((announcement: AnnouncementData, index: number) => {
            if (index < count)
              return (
                <RenderAnnouncementItem
                  key={announcement.id}
                  announcement={announcement}
                ></RenderAnnouncementItem>
              );
            else return null;
          })}
        {announcementsLength && announcementsLength === 0 ? (
          <h2>No Announcements found</h2>
        ) : null}
        {announcementsLength &&
        announcementsLength > 0 &&
        announcementsLength > count ? (
          <button onClick={() => setCount(count + 5)}>Load More</button>
        ) : null}
      </>
    );
  };

  const imageHelper = (announcement: AnnouncementData, conditional: string) => {
    switch (conditional) {
      case 'true':
        return `https://themeetinghouse.com/cached/640/static/photos/announcements/${
          announcement.publishedDate
        }_${announcement.title.replaceAll(' ', '_')}.jpg`;
      default:
        return '';
    }
  };
  /* ============================= Modals ============================= */
  const EditAnnouncementModal = (): JSX.Element => {
    const [announcement, setAnnouncement] = useState<AnnouncementData>(
      currentAnnouncement ?? announcementInit
    );
    const [ogAnnouncement] = useState(announcement);
    const [errorTxt, setErrorTxt] = useState<string>('');
    const getParishes = () => {
      const tempArr: Array<string> = [];
      const ayy = announcements.filter(
        (a: AnnouncementData) =>
          a.title === ogAnnouncement.title &&
          a.publishedDate === ogAnnouncement.publishedDate
      );
      for (let i = 0; i < ayy.length; i++) {
        tempArr.push(ayy[i].parish ?? 'Cross-Regional');
      }
      return tempArr;
    };
    const [originalParishes] = useState<Array<string>>(getParishes());
    const [parishes, setParishes] = useState<Array<string>>(originalParishes);

    return (
      <Modal size="lg" isOpen={openEditModal}>
        <div className="announcementModal">
          <div>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Title:{' '}
              {announcement.title === '' ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}
              <input
                required
                className="genericTextField"
                name="title"
                type="text"
                value={announcement.title}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Description:{' '}
              {announcement.description === '' ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}
              <textarea
                className="genericTextArea"
                name="description"
                required
                maxLength={1000}
                rows={5}
                value={announcement.description}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Date:{' '}
              {announcement.publishedDate === '' ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}{' '}
              <small>Announcement will show after this date</small>
              <input
                className="genericTextField"
                name="publishedDate"
                type="date"
                required
                value={announcement.publishedDate}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Expiration Date:{' '}
              {announcement.expirationDate === '' ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}
              <input
                name="expirationDate"
                required
                className="genericTextField"
                type="date"
                value={announcement.expirationDate}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Parishes:<br></br>
            </label>
            {locations && locations.length > 0
              ? locations.map((location: any, index: number) => {
                  return (
                    <div
                      key={index}
                      style={{ minWidth: '30%', display: 'inline-block' }}
                    >
                      <input
                        style={{ transform: 'scale(1.5)' }}
                        name={`${location.label}`}
                        type="checkbox"
                        checked={
                          parishes.find((a: string) => a === location.label) ===
                          location.label
                        }
                        onChange={(e) => {
                          if (e.target.name === 'Cross-Regional') {
                            setParishes(['Cross-Regional']);
                            announcement.crossRegional = 'true';
                          } else {
                            announcement.crossRegional = 'false';
                            const tempArr = [...parishes].filter(
                              (a: string) => a !== 'Cross-Regional'
                            );
                            const index = tempArr.findIndex((el) => {
                              return el === location.label;
                            });
                            if (index === -1) {
                              tempArr.push(location.label);
                            } else {
                              tempArr.splice(index, 1);
                              if (tempArr.length === 0)
                                tempArr.push('Cross-Regional');
                              announcement.crossRegional = 'true';
                            }
                            setParishes(tempArr);
                          }
                        }}
                      />{' '}
                      <label
                        style={{
                          flex: 1,
                          marginLeft: '8px',
                          lineHeight: '16px',
                        }}
                      >
                        {location.label}
                      </label>
                    </div>
                  );
                })
              : null}
            <label style={{ display: 'block', fontWeight: 700 }}>
              Image:
              <input
                name="image"
                type="checkbox"
                checked={
                  announcement.image === 'true' ||
                  (announcement.image && announcement.image !== 'false')
                    ? true
                    : false
                }
                onChange={(e) => {
                  if (
                    announcement.title !== '' &&
                    announcement.publishedDate !== ''
                  ) {
                    setErrorTxt('');
                    setAnnouncement({
                      ...announcement,
                      [e.target.name]: imageHelper(
                        announcement,
                        e.target.checked.toString()
                      ),
                    });
                  } else {
                    setErrorTxt('Title and date must be set');
                  }
                }}
              />
              <p style={{ marginLeft: 24, fontSize: 12, display: 'inline' }}>
                {announcement.image !== 'true' && announcement.image !== 'false'
                  ? announcement.image
                  : null}
              </p>
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Button URL <small>Call to action URL</small>
              <input
                className="genericTextField"
                name="callToAction"
                type="text"
                value={announcement.callToAction ?? ''}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <p style={{ color: 'red', whiteSpace: 'pre' }}>{errorTxt}</p>
            <button
              onClick={() => {
                let errorMessage = '';
                if (announcement.title === '') {
                  errorMessage += `Title must be set.\n`;
                }
                if (announcement.description === '') {
                  errorMessage += 'Description must be set.\n';
                }
                if (announcement.publishedDate === '') {
                  errorMessage += 'Date must be set.\n';
                }
                if (announcement.expirationDate === '') {
                  errorMessage += 'Expiry date must be set.\n';
                }
                if (errorMessage === '') {
                  editAnnouncement(
                    announcement,
                    ogAnnouncement,
                    parishes,
                    originalParishes
                  );
                } else {
                  setErrorTxt(errorMessage);
                }
              }}
              type="submit"
            >
              {' '}
              Save
            </button>
            <button
              style={{ background: 'red' }}
              onClick={() => {
                setOpenEditModal(false);
                setCurrentAnnouncement(announcementInit);
              }}
              type="reset"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    );
  };
  const CreateAnnouncementModal = (): JSX.Element => {
    const [announcement, setAnnouncement] = useState<AnnouncementData>(
      announcementInit
    );
    const [parishes, setParishes] = useState<Array<string>>(['Cross-Regional']);
    const [errorTxt, setErrorTxt] = useState<string>('');
    return (
      <Modal size="lg" isOpen={openCreateModal}>
        <div className="announcementModal">
          <div>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Title:{' '}
              {announcement.title === '' ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}
              <input
                className="genericTextField"
                name="title"
                type="text"
                value={announcement.title}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Description:{' '}
              {announcement.description === '' ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}
              <textarea
                className="genericTextArea"
                name="description"
                maxLength={1000}
                rows={5}
                value={announcement.description}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Date:{' '}
              {announcement.publishedDate === '' ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}{' '}
              <small>Announcement will show after this date</small>
              <input
                className="genericTextField"
                name="publishedDate"
                type="date"
                value={announcement.publishedDate}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Expiration Date:{' '}
              {announcement.expirationDate === '' ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}
              <input
                name="expirationDate"
                className="genericTextField"
                type="date"
                value={announcement.expirationDate}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Parishes:<br></br>
            </label>
            {locations && locations.length > 0
              ? locations.map((location: any, index: number) => {
                  return (
                    <div
                      key={index}
                      style={{ minWidth: '30%', display: 'inline-block' }}
                    >
                      <input
                        style={{ transform: 'scale(1.5)' }}
                        name={`${location.label}`}
                        type="checkbox"
                        checked={
                          parishes.find((a: string) => a === location.label) ===
                          location.label
                        }
                        onChange={(e) => {
                          if (e.target.name === 'Cross-Regional') {
                            setParishes(['Cross-Regional']);
                            announcement.crossRegional = 'true';
                          } else {
                            announcement.crossRegional = 'false';
                            const tempArr = [...parishes].filter(
                              (a: string) => a !== 'Cross-Regional'
                            );
                            const index = tempArr.findIndex((el) => {
                              return el === location.label;
                            });
                            if (index === -1) {
                              tempArr.push(location.label);
                            } else {
                              tempArr.splice(index, 1);
                              if (tempArr.length === 0)
                                tempArr.push('Cross-Regional');
                              announcement.crossRegional = 'true';
                            }
                            setParishes(tempArr);
                          }
                        }}
                      />{' '}
                      <label
                        style={{
                          flex: 1,
                          marginLeft: '8px',
                          lineHeight: '16px',
                        }}
                      >
                        {location.label}
                      </label>
                    </div>
                  );
                })
              : null}
            <label style={{ display: 'block', fontWeight: 700 }}>
              Image:
              <input
                name="image"
                type="checkbox"
                checked={
                  announcement.image !== '' && announcement.image !== 'false'
                    ? true
                    : false
                }
                onChange={(e) => {
                  if (
                    announcement.title !== '' &&
                    announcement.publishedDate !== ''
                  ) {
                    setErrorTxt('');
                    setAnnouncement({
                      ...announcement,
                      [e.target.name]: imageHelper(
                        announcement,
                        e.target.checked.toString()
                      ),
                    });
                  } else {
                    setErrorTxt('Title and date must be set');
                  }
                }}
              />
              <p style={{ marginLeft: 24, fontSize: 12, display: 'inline' }}>
                {announcement.image !== '' &&
                announcement.image !== 'false' &&
                announcement.title !== '' &&
                announcement.publishedDate !== ''
                  ? announcement.image
                  : null}
              </p>
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Button URL <small>Call to action URL</small>
              <input
                className="genericTextField"
                name="callToAction"
                type="text"
                value={announcement.callToAction}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <p style={{ color: 'red', whiteSpace: 'pre' }}>{errorTxt}</p>
            <button
              onClick={() => {
                let errorMessage = '';
                if (announcement.title === '') {
                  errorMessage += `Title must be set.\n`;
                }
                if (announcement.description === '') {
                  errorMessage += 'Description must be set.\n';
                }
                if (announcement.publishedDate === '') {
                  errorMessage += 'Date must be set.\n';
                }
                if (announcement.expirationDate === '') {
                  errorMessage += 'Expiry date must be set.\n';
                }
                if (errorMessage === '')
                  createAnnouncement(announcement, parishes);
                else {
                  setErrorTxt(errorMessage);
                }
              }}
              type="submit"
            >
              {' '}
              Save
            </button>
            <button
              style={{ background: 'red' }}
              onClick={() => setOpenCreateModal(false)}
              type="reset"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    );
  };
  /* ========================================================== */

  useEffect(() => {
    fetchLocations();
  }, []);
  useEffect(() => {
    fetchAnnouncements();
  }, [showExpired]);
  return (
    <AmplifyAuthenticator federated={federated}>
      <AdminMenu></AdminMenu>
      <div className="announcementHeader">
        <p className="announcementHeaderText">Announcements</p>

        <label style={{ marginLeft: 60 }}>
          Filter By Parish
          <select
            className="regionalFilter"
            value={locationFilter}
            name="locationFilter"
            onChange={(e) => {
              setCount(5);
              setlocationFilter(e.target.value);
            }}
          >
            {locations && locations.length > 0
              ? locations.map((location: any, index: number) => {
                  return (
                    <option key={index} value={location.value}>
                      {location.label}
                    </option>
                  );
                })
              : null}
          </select>
        </label>

        <img
          className="addAnnouncementButton"
          onClick={() => setOpenCreateModal(!openCreateModal)}
          style={{ marginLeft: 16 }}
          width={33}
          height={33}
          alt="AddAnnouncementIcon"
          src="/static/svg/Plus_Icon.svg"
        ></img>

        <input
          style={{
            marginLeft: '16px',
            marginRight: '8px',
            transform: 'scale(1.5)',
          }}
          type="checkbox"
          checked={showExpired}
          onChange={() => {
            setShowExpired(!showExpired);
          }}
        ></input>
        <label>Show Expired Announcements</label>
      </div>
      <div className="announcementContainer">
        <RenderAnnouncementList></RenderAnnouncementList>
        {openCreateModal ? (
          <CreateAnnouncementModal></CreateAnnouncementModal>
        ) : null}
        {openEditModal ? <EditAnnouncementModal></EditAnnouncementModal> : null}
      </div>
    </AmplifyAuthenticator>
  );
}
