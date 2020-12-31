import React, { useState, useEffect } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import AdminMenu from '../../components/Menu/AdminMenu';
import './Announcements.scss';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import * as queries from '../../graphql/queries';
import moment from 'moment';
import { Modal } from 'reactstrap';
/*
import * as customQueries from '../../graphql-custom/customQueries';
 import * as customMutations from '../../graphql-custom/customMutations' */ import * as mutations from '../../graphql/mutations';

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
const announcementInit = {
  publishedDate: '',
  expirationDate: '',
  title: '',
  description: '',
  crossRegional: 'true',
  callToAction: '',
  parish: 'Cross-Regional',
  image: 'false',
};

export default function Announcements(): JSX.Element {
  const [count, setCount] = useState(10);
  const [locations, setLocations] = useState<any>([]);

  const fetchLocations = async (): Promise<void> => {
    const response = await fetch('/static/data/locations.json');
    const data = await response.json();
    if (data) {
      const locationArr = [
        { label: 'Cross-Regional', value: 'Cross-Regional' },
      ];
      const transformedLocations = [
        ...locationArr,
        ...data.map((a: any) => {
          return { label: a.name, value: a.name };
        }),
      ];
      setLocations(transformedLocations);
    }
  };

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [locationFilter, setlocationFilter] = useState('Cross-Regional');

  /* ============================= Query and Mutation Functions ======================================*/
  const createAnnouncement = async (
    announcement: AnnouncementData,
    parishes: Array<string>
  ): Promise<void> => {
    const toSaveAnnouncement: AnnouncementData = { ...announcement };
    const keys: Array<string> = Object.keys(announcement);
    if (toSaveAnnouncement.image === 'true') {
      toSaveAnnouncement.image = `https://themeetinghouse.com/cached/640/static/photos/announcements/${
        toSaveAnnouncement.publishedDate
      }_${toSaveAnnouncement.title.replaceAll(' ', '_')}.jpg}`;
    } else {
      delete toSaveAnnouncement.image;
    }
    keys.forEach((key) => {
      if (toSaveAnnouncement[key as AnnouncementDataKey] === '') {
        delete toSaveAnnouncement[key as AnnouncementDataKey];
      }
    });
    for (let i = 0; i < parishes.length; i++) {
      toSaveAnnouncement.parish = parishes[i];
      try {
        const addAnnouncement: any = await API.graphql({
          query: mutations.createAnnouncement,
          variables: {
            input: { ...toSaveAnnouncement, id: uuidv4() },
          },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        });
        console.log({
          'Success mutations.createAnnouncement: ': addAnnouncement,
        });
        fetchAnnouncements();
        setOpenCreateModal(false);
        // must trigger a fetch to refresh the list
      } catch (e) {
        if (!e.errors[0].message.includes('access'))
          console.log(e.errors[0].message);
        else if (e.data) console.error(e);
      }
    }
  };
  const deleteAnnouncement = async (
    announcement: AnnouncementData
  ): Promise<void> => {
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
      alert('Removed successfully');
      //trigger a fetch to refresh the list
      fetchAnnouncements();
    } catch (e) {
      if (!e.errors[0].message.includes('access'))
        console.log(e.errors[0].message);
      else if (e.data) console.error(e);
    }
  };
  const fetchAnnouncements = async (): Promise<void> => {
    const today = moment()
      .utcOffset(moment().isDST() ? '-0400' : '-0500')
      .format('YYYY-MM-DD');
    try {
      const getAnnouncements: any = await API.graphql({
        query: queries.listAnnouncements,
        variables: { filter: { expirationDate: { gt: today } } },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      });
      console.log({
        'Success queries.listAnnouncements: ': getAnnouncements,
      });
      setAnnouncements(getAnnouncements?.data?.listAnnouncements?.items);
    } catch (e) {
      if (!e.errors[0].message.includes('access'))
        console.log(e.errors[0].message);
      else if (e.data) console.error(e);
    }
  };

  /* ==================================================================================*/

  const [announcements, setAnnouncements] = useState<Array<AnnouncementData>>(
    []
  );
  const RenderAnnouncementItem = ({
    announcement,
  }: AnnouncementProps): JSX.Element => {
    const [expand, setExpand] = useState(false);

    return (
      <div
        onClick={() => setExpand(!expand)}
        className="announcementBox"
        style={
          expand
            ? { maxHeight: '360px' }
            : { maxHeight: '200px', overflow: 'hidden' }
        }
        data-custom={expand ? 'open' : 'close'}
      >
        <h5>{announcement.title}</h5>
        <div className="announcementIcons">
          <img
            className="addAnnouncementButton"
            onClick={(e) => {
              e.stopPropagation();
            }}
            width={33}
            height={33}
            alt="EditAnnouncementIcon"
            src="/static/svg/Edit_Icon.svg"
          ></img>
          <img
            className="addAnnouncementButton"
            onClick={(e) => {
              e.stopPropagation();
              if (
                confirm('Are you sure you want to delete this announcement?')
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

          {expand ? (
            <p className="announcementBoxBodyText">
              {announcement.description}
            </p>
          ) : null}
        </div>

        <div style={expand ? { display: 'none' } : {}}>
          <img
            style={{ marginTop: 4 }}
            width={16}
            height={24}
            alt="DownArrow"
            src="/static/svg/DownArrow.svg"
          ></img>
        </div>
      </div>
    );
  };
  const RenderAnnouncementList = (): JSX.Element => {
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
        {announcements ? (
          announcements.filter((a: AnnouncementData) => {
            if (a.parish === locationFilter) {
              return true;
            } else return false;
          }).length === 0 ? (
            <h2>No Announcements found</h2>
          ) : null
        ) : null}
        <button onClick={() => setCount(count + 5)}>Load More</button>
      </>
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
              ) : null}
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
              Expiry Date:{' '}
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
                          if (e.target.name === 'Cross-Regional')
                            setParishes(['Cross-Regional']);
                          else {
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
                checked={announcement.image === 'true' ? true : false}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.checked.toString(),
                  })
                }
              />
              <p style={{ marginLeft: 24, fontSize: 12, display: 'inline' }}>
                {announcement.image === 'true' && announcement.title !== ''
                  ? `PATH : /static/photos/announcements/${
                      announcement.publishedDate
                    }_${announcement.title.replaceAll(' ', '_')}.jpg`
                  : null}
              </p>
            </label>
            <label style={{ display: 'block', fontWeight: 700 }}>
              Call to Action:
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
  useEffect(() => {
    fetchLocations();
    //fetchAnnouncements();
  }, []);
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
            onChange={(e) => setlocationFilter(e.target.value)}
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
        <button
          style={{ display: 'none' }}
          onClick={() => fetchAnnouncements()}
        >
          Fetch Announcements
        </button>
        <img
          className="addAnnouncementButton"
          onClick={() => setOpenCreateModal(!openCreateModal)}
          style={{ marginLeft: 16 }}
          width={33}
          height={33}
          alt="AddAnnouncementIcon"
          src="/static/svg/Plus_Icon.svg"
        ></img>
      </div>
      <div className="announcementContainer">
        <RenderAnnouncementList></RenderAnnouncementList>
        {openCreateModal ? (
          <CreateAnnouncementModal></CreateAnnouncementModal>
        ) : null}
      </div>
    </AmplifyAuthenticator>
  );
}
