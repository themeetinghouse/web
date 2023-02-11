import { useState, useEffect } from 'react';
import './Announcements.scss';
import { v4 as uuidv4 } from 'uuid';
import { GraphQLResult, GRAPHQL_AUTH_MODE, API } from '@aws-amplify/api';

import {
  Announcement as AnnouncementType,
  CreateAnnouncementMutationVariables,
  ListAnnouncementsQuery,
  TmhPinpointCreateCampaignQuery,
  TmhPinpointListSegmentsQuery,
} from 'API';
import moment from 'moment';
import { Modal } from 'reactstrap';
import * as Sentry from '@sentry/browser';
import * as queries from '../../graphql/queries';
import * as customQueries from '../../graphql-custom/customQueries';
import * as customMutations from '../../graphql-custom/customMutations';

import * as mutations from '../../graphql/mutations';
import {
  CreateAnnouncementMutation,
  DeleteAnnouncementMutation,
  UpdateAnnouncementMutation,
} from 'API';
import DataLoader, { LocationData } from 'components/RenderRouter/DataLoader';
import Announcement from 'pages/admin/Announcements/Announcement';

type AnnouncementData = CreateAnnouncementMutationVariables['input'];

type NonNullAnnouncements = NonNullable<
  NonNullable<
    NonNullable<ListAnnouncementsQuery['listAnnouncements']>['items']
  >[0]
>[];

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
  callToAction: '',
  callToActionTitle: '',
  parish: 'Cross-Regional',
  image: '',
};
type Location = {
  label: string;
  value: string;
};

export default function Announcements(): JSX.Element {
  const [count, setCount] = useState(5);
  const [showExpired, setShowExpired] = useState(false);
  const [locations, setLocations] = useState<Array<Location>>([]);
  const [currentAnnouncement, setCurrentAnnouncement] =
    useState<AnnouncementData>();
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [locationFilter, setlocationFilter] = useState('Cross-Regional');
  const [announcements, setAnnouncements] = useState<Array<AnnouncementData>>(
    []
  );

  /* ========================== Populates Location Filter Dropdown ========================= */
  const fetchLocations = async (): Promise<void> => {
    const data: LocationData[] = await DataLoader.getLocations({
      class: 'locations',
    });
    if (data) {
      const locationArr = [
        { label: 'Cross-Regional', value: 'Cross-Regional' },
      ];
      const transformedLocations = [
        ...locationArr,
        ...data.map((location) => {
          return { label: location.name, value: location.name };
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
    const toSaveAnnouncement = { ...announcement } as AnnouncementData;
    for (const a of parishes) {
      if (toSaveAnnouncement) {
        toSaveAnnouncement.parish = a;
        await createQuery(toSaveAnnouncement);
      }
    }
    fetchAnnouncements();
    setOpenCreateModal(false);
  };

  const createQuery = async (announcement: AnnouncementData) => {
    try {
      const addAnnouncement = (await API.graphql({
        query: mutations.createAnnouncement,
        variables: {
          input: { ...announcement, id: uuidv4() },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as Promise<GraphQLResult<CreateAnnouncementMutation>>;
      console.log({
        'Success mutations.createAnnouncement: ': addAnnouncement,
      });
    } catch (e) {
      Sentry.captureException(e);
    }
  };
  const updateQuery = async (announcement: AnnouncementData) => {
    try {
      const updateAnnouncement = (await API.graphql({
        query: customMutations.updateAnnouncement,
        variables: {
          input: { ...announcement },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as Promise<GraphQLResult<UpdateAnnouncementMutation>>;
      console.log({
        'Success mutations.updateAnnouncement: ': updateAnnouncement,
      });
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  const editAnnouncement = async (
    announcement: AnnouncementData,
    ogAnnouncement: AnnouncementData,
    parishes: Array<string>,
    originalParishes: Array<string>
  ): Promise<void> => {
    const announcementListToUpdate = announcements.filter(
      (a) =>
        a &&
        ogAnnouncement &&
        a.title === ogAnnouncement.title &&
        a.publishedDate === ogAnnouncement.publishedDate
    );

    for (const item of announcementListToUpdate) {
      await updateQuery({
        ...announcement,
        id: item?.id ?? '',
        parish: item?.parish,
        image: announcement?.image,
      } as AnnouncementData);
    }
    const addArray: Array<string> = [];
    const deleteArray: Array<string> = [];
    for (let i = 0; i < parishes.length; i++) {
      if (!originalParishes.find((a) => a === parishes[i])) {
        addArray.push(parishes[i]);
      }
    }
    for (let i = 0; i < originalParishes.length; i++) {
      if (!parishes.find((a) => a === originalParishes[i])) {
        deleteArray.push(originalParishes[i]);
      }
    }
    // need to await these before fetching
    if (deleteArray?.length > 0) {
      for (const item of deleteArray) {
        const i = announcementListToUpdate.find((a) => a && a.parish === item);
        if (i) {
          await deleteQuery(i);
        }
      }
    }

    if (addArray?.length > 0) {
      for (const item of addArray) {
        if (item === 'Cross-Regional')
          announcement = {
            ...announcement,
            crossRegional: 'true',
          } as AnnouncementData;
        announcement = { ...announcement, parish: item } as AnnouncementData;
        await createQuery(announcement);
      }
    }
    fetchAnnouncements();
    setOpenEditModal(false);
  };

  const deleteQuery = async (announcement: AnnouncementData) => {
    try {
      const removeAnnouncement = (await API.graphql({
        query: mutations.deleteAnnouncement,
        variables: {
          input: { id: announcement?.id },
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as Promise<GraphQLResult<DeleteAnnouncementMutation>>;
      console.log({
        'Success mutations.removeAnnouncement: ': removeAnnouncement,
      });
      return true;
    } catch (e) {
      Sentry.captureException(e);
      return false;
    }
  };
  const deleteAnnouncement = async (
    announcement: AnnouncementData
  ): Promise<void> => {
    const announcementListToDelete = announcements.filter(
      (a: AnnouncementData) =>
        a &&
        announcement &&
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
      const getAnnouncements = (await API.graphql({
        query: customQueries.listAnnouncements,
        variables: variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<ListAnnouncementsQuery>;
      console.log({
        'Success queries.listAnnouncements: ': getAnnouncements,
      });

      setAnnouncements(
        (
          getAnnouncements.data?.listAnnouncements
            ?.items as NonNullAnnouncements
        ).sort((a, b) => a.publishedDate.localeCompare(b.publishedDate))
      );
    } catch (e) {
      Sentry.captureException(e);
    }
  };

  const imageHelper = (
    announcement: AnnouncementData,
    conditional: boolean
  ) => {
    switch (conditional) {
      case true:
        return `https://themeetinghouse.com/static/photos/announcements/${
          announcement?.publishedDate
        }_${announcement?.title.replaceAll(' ', '_')}.jpg`;
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
    const [errorTxt, setErrorTxt] = useState('');
    const getParishes = () => {
      const tempArr: Array<string> = [];
      const b = announcements.filter(
        (a) =>
          a &&
          ogAnnouncement &&
          a.title === ogAnnouncement.title &&
          a.publishedDate === ogAnnouncement.publishedDate
      );
      for (let i = 0; i < b.length; i++) {
        if (b && b[i]) tempArr.push(b![i]?.parish ?? 'Cross-Regional');
      }
      return tempArr;
    };
    const originalParishes = getParishes();
    const [parishes, setParishes] = useState(originalParishes);
    if (!announcement) return <></>;
    return (
      <Modal size="lg" isOpen={openEditModal}>
        <div className="announcementModal">
          <div>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Title:{' '}
              {!announcement?.title ? <b style={{ color: 'red' }}>*</b> : null}
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
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Description:{' '}
              {!announcement.description ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}
              <textarea
                className="genericTextArea"
                name="description"
                required
                rows={5}
                value={announcement.description}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Date:{' '}
              {!announcement.publishedDate ? (
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
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Expiration Date:{' '}
              {!announcement.expirationDate ? (
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
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Region/Community:<br></br>
            </label>
            {locations.length > 0
              ? locations.map((location, index) => {
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
                checked={announcement.image !== ''}
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
                        e.target.checked
                      ),
                    } as AnnouncementData);
                  } else {
                    setErrorTxt('Title and date must be set');
                  }
                }}
              />
              <p style={{ marginLeft: 24, fontSize: 12, display: 'inline' }}>
                {announcement.image
                  ? `static/photos/announcements/${
                      announcement.publishedDate
                    }_${announcement.title.replaceAll(' ', '_')}.jpg`
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
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Button Label <small>Call to action button label</small>
              <input
                className="genericTextField"
                name="callToActionTitle"
                maxLength={12}
                type="text"
                value={announcement.callToActionTitle ?? ''}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  } as AnnouncementData)
                }
              />
            </label>
            <p style={{ color: 'red', whiteSpace: 'pre' }}>{errorTxt}</p>
            <button
              onClick={() => {
                let errorMessage = '';
                if (!announcement.title) {
                  errorMessage += `Title must be set.\n`;
                }
                if (!announcement.description) {
                  errorMessage += 'Description must be set.\n';
                }
                if (!announcement.publishedDate) {
                  errorMessage += 'Date must be set.\n';
                }
                if (!announcement.expirationDate) {
                  errorMessage += 'Expiry date must be set.\n';
                }
                if (!errorMessage) {
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
    const [announcement, setAnnouncement] =
      useState<AnnouncementData>(announcementInit);
    const [parishes, setParishes] = useState<Array<string>>(['Cross-Regional']);
    const [notification, setNotification] = useState<any>({
      shouldNotify: false,
      name: '',
      description: '',
      schedule: {
        Frequency: 'ONCE',
        StartTime: 'IMMEDIATE',
      },
      segment: null,
      url: null,
    });
    const [segments, setSegments] = useState<any>([]);
    const [errorTxt, setErrorTxt] = useState<string>('');
    if (!announcement) return <></>;
    const validateNotif = (notifObj: any) => {
      console.log('Validating Object');
      if (announcement.title === '' && notifObj.name === '') {
        setErrorTxt('Must fill in title');
        return false;
      }
      if (announcement.description === '' && notifObj.description === '') {
        setErrorTxt('Must fill in description');
        return false;
      }
      if (notifObj.name === '' || notifObj.description === '') {
        setErrorTxt('Failed to validate notification name/description');
        return false;
      }
      if (
        notifObj.androidMessage.Title === '' ||
        notifObj.androidMessage.Body === ''
      ) {
        setErrorTxt('Failed to validate android Title/Body');
        return false;
      }

      if (
        notifObj.appleMessage.Title === '' ||
        notifObj.appleMessage.Body === ''
      ) {
        setErrorTxt('Failed to validate apple Title/Body');
        return false;
      }

      if (notifObj.segmentId === '' || notifObj.segmentVersion === '') {
        setErrorTxt('Failed to validate segmentId/segmentVersion');
        return false;
      }

      if (notifObj.schedule.StartTime === '') {
        setErrorTxt('Failed to validate StartTime');
        return false;
      }
      if (notifObj) {
        setErrorTxt('');
        return true;
      }
    };
    useEffect(() => {
      const loadSegments = async () => {
        try {
          const getSegments = (await API.graphql({
            query: queries.tmhPinpointListSegments,
            variables: { nextToken: null },
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
          })) as GraphQLResult<TmhPinpointListSegmentsQuery>;
          console.log({ getSegments });
          setSegments(getSegments?.data?.tmhPinpointListSegments?.Item ?? []);
          setNotification((prev: any) => ({
            ...notification,
            segment: getSegments?.data?.tmhPinpointListSegments?.Item?.[0],
          }));
        } catch (err) {
          console.error({ err });
        }
      };
      loadSegments();
    }, []);
    const today = new Date().toISOString().split('.')[0].slice(0, 16);
    const createCampaign = async () => {
      const title =
        notification.name === '' ? announcement.title : notification.name;
      const description =
        notification.description === ''
          ? announcement.description
          : notification.description;
      const schedule = {
        ...notification.schedule,
        StartTime:
          notification.schedule.StartTime !== 'IMMEDIATE' &&
          notification.schedule.StartTime !== ''
            ? new Date(notification.schedule.StartTime).toISOString()
            : notification.schedule.StartTime,
      };
      const message =
        notification.url === null || notification.url === ''
          ? {
              Title: title,
              Body: description,
              SilentPush: false,
            }
          : {
              Action: 'URL',
              Title: title,
              Url: notification.url,
              Body: description,
              SilentPush: false,
            };
      const notifObj = {
        name: 'Announcement Push Notification',
        description: 'Announcement Push Notification Description',
        segmentId: notification.segment.Id,
        segmentVersion: notification.segment.Version,
        schedule,
        appleMessage: message,
        androidMessage: message,
      };

      if (!validateNotif(notifObj)) {
        console.log('Validation failed');
        return;
      }
      try {
        const createCampaignMutation = (await API.graphql({
          query: queries.tmhPinpointCreateCampaign,
          variables: notifObj,
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        })) as GraphQLResult<TmhPinpointCreateCampaignQuery>;
        console.log({ createCampaignMutation });
        if (createCampaignMutation?.data?.tmhPinpointCreateCampaign) {
          alert(
            `Successfully created notification ${
              notifObj?.schedule?.StartTime !== 'IMMEDIATE'
                ? `for ${moment(notifObj?.schedule?.StartTime).format(
                    'YYYY-MM-DD hh:mm A'
                  )}`
                : 'to be sent immediately'
            }`
          );
        }
      } catch (err) {
        alert(`an error occurred`);
        console.error({ err });
      }
    };
    return (
      <Modal size="lg" isOpen={openCreateModal}>
        <div className="announcementModal">
          <div>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Title:{' '}
              {!announcement.title ? <b style={{ color: 'red' }}>*</b> : null}
              <input
                className="genericTextField"
                name="title"
                type="text"
                value={announcement.title}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Description:{' '}
              {!announcement.description ? (
                <b style={{ color: 'red' }}>*</b>
              ) : null}
              <textarea
                className="genericTextArea"
                name="description"
                rows={5}
                value={announcement.description}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Date:{' '}
              {!announcement.publishedDate ? (
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
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Expiration Date:{' '}
              {!announcement.expirationDate ? (
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
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Region/Community:<br></br>
            </label>
            {locations && locations.length > 0
              ? locations.map((location: Location, index: number) => {
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
                checked={announcement.image !== ''}
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
                        e.target.checked
                      ),
                    } as AnnouncementData);
                  } else {
                    setErrorTxt('Title and date must be set');
                  }
                }}
              />
              <p style={{ marginLeft: 24, fontSize: 12, display: 'inline' }}>
                {announcement.image &&
                announcement.title &&
                announcement.publishedDate
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
                  } as AnnouncementData)
                }
              />
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Button Label <small>Call to action button label</small>
              <input
                className="genericTextField"
                name="callToActionTitle"
                maxLength={12}
                type="text"
                value={announcement.callToActionTitle ?? ''}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  } as AnnouncementData)
                }
              />
            </label>
            <div style={{ marginTop: 20 }}>
              <label>
                Notify users?
                <input
                  style={{
                    transform: 'scale(1.5)',
                    marginLeft: 8,
                    marginTop: 4,
                  }}
                  name={`notify`}
                  type="checkbox"
                  checked={notification.shouldNotify}
                  onChange={() =>
                    setNotification((prev: any) => ({
                      ...prev,
                      shouldNotify: !prev.shouldNotify,
                    }))
                  }
                />
              </label>
              <div
                style={
                  notification.shouldNotify
                    ? { width: '100%' }
                    : { display: 'none' }
                }
              >
                <label>
                  Segment{' '}
                  <small style={{ fontWeight: 400, fontSize: 12 }}>
                    (Choose which group will receive notifications)
                  </small>
                </label>
                <select
                  style={{ marginBottom: 10 }}
                  className="genericTextField"
                  value={notification?.segment?.Name ?? ''}
                  onChange={(e) => {
                    e.persist();
                    setNotification((prev: any) => ({
                      ...prev,
                      segment: segments.find(
                        (a: any) => a.Name === e.target.value
                      ),
                    }));
                  }}
                >
                  {segments?.map((segment: any) => (
                    <option value={segment.Name} key={segment.Id}>
                      {segment.Name}
                    </option>
                  ))}
                </select>
                <label style={{ marginBottom: 10 }}>
                  Send Immediately{' '}
                  <input
                    style={{
                      transform: 'scale(1.5)',
                      marginLeft: 8,
                      marginTop: 4,
                    }}
                    type="checkbox"
                    checked={notification.schedule.StartTime === 'IMMEDIATE'}
                    onChange={(e) => {
                      setNotification((prev: any) => ({
                        ...prev,
                        schedule: {
                          StartTime:
                            notification.schedule.StartTime === 'IMMEDIATE'
                              ? ''
                              : 'IMMEDIATE',
                          Frequency: 'ONCE',
                        },
                      }));
                    }}
                  />
                </label>

                <label style={{ display: 'block', fontWeight: 700 }}>
                  Notification Date:{' '}
                  <input
                    min={today}
                    className="genericTextField"
                    type="datetime-local"
                    value={notification?.schedule?.StartTime}
                    onChange={(e) => {
                      e.persist();
                      setNotification((prev: any) => ({
                        ...prev,
                        schedule: {
                          StartTime: e.target.value,
                          Frequency: 'ONCE',
                        },
                      }));
                    }}
                  />
                </label>
                <label>Title</label>
                <input
                  value={notification.name}
                  maxLength={100}
                  onChange={(e) => {
                    e.persist();
                    setNotification((prev: any) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  }}
                  className="genericTextField"
                ></input>
                <label>Description</label>
                <textarea
                  maxLength={300}
                  value={notification.description}
                  onChange={(e) => {
                    e.persist();
                    setNotification((prev: any) => ({
                      ...prev,
                      description: e.target.value,
                    }));
                  }}
                  rows={2}
                  className="genericTextArea"
                ></textarea>
                <label>URL</label>
                <input
                  maxLength={2000}
                  value={notification.value}
                  onChange={(e) => {
                    e.persist();
                    setNotification((prev: any) => ({
                      ...prev,
                      url: e.target.value,
                    }));
                  }}
                  className="genericTextField"
                ></input>
                <button style={{ marginTop: 10 }} onClick={createCampaign}>
                  Create Notification
                </button>
              </div>
            </div>

            <p style={{ color: 'red', whiteSpace: 'pre' }}>{errorTxt}</p>

            <button
              onClick={() => {
                let errorMessage = '';
                if (!announcement.title) {
                  errorMessage += `Title must be set.\n`;
                }
                if (!announcement.description) {
                  errorMessage += 'Description must be set.\n';
                }
                if (!announcement.publishedDate) {
                  errorMessage += 'Date must be set.\n';
                }
                if (!announcement.expirationDate) {
                  errorMessage += 'Expiry date must be set.\n';
                }
                if (!errorMessage) createAnnouncement(announcement, parishes);
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
  const announcementsLength = announcements?.filter(
    (a) => a && a.parish === locationFilter
  )?.length;
  return (
    <>
      <div className="AnnouncementHeader">
        <span style={{ flex: 1, fontWeight: 700, fontSize: 20 }}>
          {locationFilter} Announcements
        </span>

        <label
          style={{ display: 'flex', flexDirection: 'column', marginRight: 32 }}
        >
          Filter By Region
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
              ? locations.map((location: Location, index: number) => {
                  return (
                    <option key={index} value={location.value}>
                      {location.label}
                    </option>
                  );
                })
              : null}
          </select>
        </label>
        <button
          type="button"
          className="CreateAnnouncementButton"
          onClick={() => setOpenCreateModal(!openCreateModal)}
        >
          <img
            width={24}
            height={24}
            alt="AddAnnouncementIcon"
            src="/static/svg/New-Announcement.svg"
          ></img>
          <span className="CreateAnnouncementButtonLabel">Create</span>
        </button>

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
        <label>Show Expired</label>
      </div>
      <div className="AnnouncementContainer">
        <>
          {announcements
            .filter((a) => a && a.parish === locationFilter)
            .map((announcement, index) => {
              if (index < count)
                return (
                  <Announcement
                    announcement={announcement as AnnouncementType}
                    deleteAnnouncement={deleteAnnouncement}
                    setCurrentAnnouncement={setCurrentAnnouncement}
                    setOpenEditModal={setOpenEditModal}
                  />
                );
              return null;
            })}
          {announcementsLength === 0 ? (
            <span>No active announcements</span>
          ) : null}
          {announcementsLength > count ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <button
                style={{
                  backgroundColor: '#FFF',
                  border: 'none',
                  color: '#000',
                }}
                onClick={() => setCount(count + 5)}
              >
                Load More...
              </button>
            </div>
          ) : null}
        </>
        {openCreateModal ? (
          <CreateAnnouncementModal></CreateAnnouncementModal>
        ) : null}
        {openEditModal ? <EditAnnouncementModal></EditAnnouncementModal> : null}
      </div>
    </>
  );
}
