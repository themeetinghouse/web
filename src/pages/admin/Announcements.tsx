import React, { useState } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import AdminMenu from '../../components/Menu/AdminMenu';
import './Announcements.scss';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import * as queries from '../../graphql/queries';
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
  image: '',
};

export default function Announcements(): JSX.Element {
  const locations = [
    { label: 'Cross-Regional', value: 'Cross-Regional' },
    { label: 'Alliston', value: 'Alliston' },
    { label: 'Ancaster', value: 'Ancaster' },
    { label: 'Brampton', value: 'Brampton' },
    { label: 'Brantford', value: 'Brantford' },
    { label: 'Burlington', value: 'Burlington' },
    { label: 'Hamilton - Downtown', value: 'Hamilton - Downtown' },
    { label: 'Hamilton - Mountain', value: 'Hamilton - Mountain' },
    { label: 'Kitchener', value: 'Kitchener' },
    { label: 'London', value: 'London' },
    { label: 'Newmarket', value: 'Newmarket' },
    { label: 'Oakville', value: 'Oakville' },
    { label: 'Ottawa', value: 'Ottawa' },
    { label: 'Owen Sound', value: 'Owen Sound' },
    { label: 'Parry Sound', value: 'Parry Sound' },
    { label: 'Richmond Hill', value: 'Richmond Hill' },
    { label: 'Sandbanks', value: 'Sandbanks' },
    { label: 'Toronto - Downtown', value: 'Toronto - Downtown' },
    { label: 'Toronto - East', value: 'Toronto - East' },
    { label: 'Toronto - High Park', value: 'Toronto - High Park' },
    { label: 'Toronto - Uptown', value: 'Toronto - Uptown' },
    { label: 'Waterloo', value: 'Waterloo' },
  ];
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [locationFilter, setlocationFilter] = useState('Cross-Regional');

  const createAnnouncement = async (
    announcement: AnnouncementData
  ): Promise<void> => {
    const toSaveAnnouncement: AnnouncementData = { ...announcement };
    const keys: Array<string> = Object.keys(announcement);
    keys.forEach((key) => {
      if (toSaveAnnouncement[key as AnnouncementDataKey] === '') {
        delete toSaveAnnouncement[key as AnnouncementDataKey];
      }
    });
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
      setOpenCreateModal(false);
    } catch (e) {
      if (!e.errors[0].message.includes('access'))
        console.log(e.errors[0].message);
      else if (e.data) console.error(e);
    }
  };
  const fetchAnnouncements = async (): Promise<void> => {
    try {
      const getAnnouncements: any = await API.graphql({
        query: queries.listAnnouncements,
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
  const [announcements, setAnnouncements] = useState<Array<AnnouncementData>>(
    []
  );
  const ellipsisHelper = (description: string): string => {
    if (description.length > 200) {
      description = description.slice(0, 230) + '\n.\n.\n';
      return description;
    } else return description;
  };

  const RenderAnnouncementItem = ({
    announcement,
  }: AnnouncementProps): JSX.Element => {
    const [expand, setExpand] = useState(false);

    return (
      <div
        onClick={() => {
          if (announcement.description.length > 200) setExpand(!expand);
        }}
        className="announcementBox"
        style={expand ? { maxHeight: '360px' } : { maxHeight: '200px' }}
        data-custom={expand ? 'open' : 'close'}
      >
        <div style={{ padding: '32px' }}>
          <img
            className="addAnnouncementButton"
            onClick={(e) => {
              e.stopPropagation();
              setOpenCreateModal(!openCreateModal);
            }}
            width={50}
            height={50}
            alt="EditAnnouncementIcon"
            src="/static/svg/Edit_Icon.svg"
          ></img>
          <img
            className="addAnnouncementButton"
            onClick={(e) => {
              e.stopPropagation();
              setOpenCreateModal(!openCreateModal);
            }}
            width={50}
            height={50}
            alt="DeleteAnnouncementIcon"
            src="/static/svg/Minus_Icon.svg"
          ></img>
          <h6>Published Date:{announcement.publishedDate}</h6>
          <h6>Expiration Date:{announcement.expirationDate}</h6>
          <h6>Parish:{announcement.parish}</h6>
          <h6>CrossRegional:{announcement.crossRegional}</h6>
          <h6>image:{announcement.image}</h6>
          <h6>id:{announcement.id}</h6>
          <h5>{announcement.title}</h5>
          <p className="announcementBoxBodyText">
            {expand
              ? announcement.description
              : ellipsisHelper(announcement.description)}
          </p>
        </div>

        <div
          style={
            expand || announcement.description.length < 200
              ? { display: 'none' }
              : {}
          }
          className="announcementBoxFooter"
        >
          <img
            style={{ position: 'absolute', right: '50%', marginTop: 4 }}
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
      <div>
        {announcements
          .filter((a: AnnouncementData) => {
            if (a.parish === locationFilter) {
              return true;
            } else return false;
          })
          .map((announcement: AnnouncementData) => {
            return (
              <RenderAnnouncementItem
                key={announcement.id}
                announcement={announcement}
              ></RenderAnnouncementItem>
            );
          })}
        {announcements ? (
          announcements.filter((a: AnnouncementData) => {
            console.log(a);
            if (a.parish === locationFilter) {
              return true;
            } else return false;
          }).length === 0 ? (
            <h2>No Announcements found</h2>
          ) : null
        ) : null}
      </div>
    );
  };
  const CreateAnnouncementModal = (): JSX.Element => {
    const [announcement, setAnnouncement] = useState<AnnouncementData>(
      announcementInit
    );
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    };
    return (
      <div className="addAnnouncementModal">
        <div className="addAnnouncementModalContainer">
          <form onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
            <label style={{ display: 'block' }}>
              Title:
              <input
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
            <label style={{ display: 'block' }}>
              Description:
              <textarea
                name="description"
                maxLength={1000}
                value={announcement.description}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block' }}>
              Date:
              <input
                name="publishedDate"
                type="text"
                value={announcement.publishedDate}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block' }}>
              Expiry Date:
              <input
                name="expirationDate"
                type="text"
                value={announcement.expirationDate}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block' }}>
              Parish:
              <select
                name="parish"
                value={announcement.parish}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                    crossRegional:
                      e.target.value === 'Cross-Regional' ? 'true' : 'false',
                  })
                }
              >
                {locations.map((location, index: number) => {
                  return (
                    <option key={index} value={location.value}>
                      {location.label}
                    </option>
                  );
                })}
              </select>
            </label>
            <label style={{ display: 'block' }}>
              Image:
              <input
                name="image"
                type="text"
                value={announcement.image}
                onChange={(e) =>
                  setAnnouncement({
                    ...announcement,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </label>
            <label style={{ display: 'block' }}>
              Call to Action:
              <input
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
            <button
              onClick={() => createAnnouncement(announcement)}
              type="submit"
            >
              Submit
            </button>
            <button onClick={() => setOpenCreateModal(false)} type="reset">
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <AmplifyAuthenticator federated={federated}>
      <AdminMenu></AdminMenu>
      <div className="announcementContainer">
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
              {locations.map((location, index: number) => {
                return (
                  <option key={index} value={location.value}>
                    {location.label}
                  </option>
                );
              })}
            </select>
          </label>
          <button onClick={() => fetchAnnouncements()}>
            Fetch Announcements
          </button>
          <img
            className="addAnnouncementButton"
            onClick={() => setOpenCreateModal(!openCreateModal)}
            style={{ position: 'absolute', right: '50%' }}
            width={50}
            height={50}
            alt="AddAnnouncementIcon"
            src="/static/svg/Plus_Icon.svg"
          ></img>
        </div>

        <RenderAnnouncementList></RenderAnnouncementList>
        {openCreateModal ? (
          <CreateAnnouncementModal></CreateAnnouncementModal>
        ) : null}
      </div>
    </AmplifyAuthenticator>
  );
}
