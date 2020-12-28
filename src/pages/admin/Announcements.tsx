import React, { useState } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import AdminMenu from '../../components/Menu/AdminMenu';
import './Announcements.scss';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
const federated = {
  facebookAppId: '579712102531269',
};

type AnnouncementData = {
  title: string;
  description: string;
  publishedDate: string;
  expirationDate: string;
  image: string;
  parish: string;
  crossRegional: string;
  callToAction: string;
};

interface AnnouncementProps {
  announcement: AnnouncementData;
}

export default function Announcements(): JSX.Element {
  const announcementInit = {
    publishedDate: '',
    expirationDate: '',
    title: '',
    description: '',
    crossRegional: 'false',
    callToAction: '',
    parish: '',
    image: '',
  };
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
  const [dummyData, setDummyData] = useState<Array<AnnouncementData>>([
    {
      publishedDate: 'November 22, 2020',
      expirationDate: 'December 31, 2020',
      title: 'November Weekly Outreach',
      description:
        "We'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreach",
      crossRegional: 'true',
      callToAction: '',
      parish: 'Oakville',
      image: '',
    },
    {
      publishedDate: 'November 25, 2020',
      expirationDate: 'December 31, 2020',
      title: '21 Day New Year Corporate Fast',
      description:
        "We'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting we Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville",
      crossRegional: 'false',
      callToAction: '',
      parish: 'Alliston',
      image: '',
    },
    {
      publishedDate: 'November 30, 2020',
      expirationDate: 'December 31, 2020',
      title: '21 Day New Year Corporate Fast',
      description:
        "We'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting we Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville",
      crossRegional: 'true',
      callToAction: '',
      parish: 'Burglinton',
      image: '',
    },
  ]);
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
          <h6>{announcement.publishedDate}</h6>
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
        {dummyData
          .filter((a: AnnouncementData) => {
            if (locationFilter === 'Cross-Regional') return true;
            else if (locationFilter === a.parish) return true;
            else return false;
          })
          .map((announcement: AnnouncementData, index: number) => {
            return (
              <RenderAnnouncementItem
                key={index}
                announcement={announcement}
              ></RenderAnnouncementItem>
            );
          })}
      </div>
    );
  };
  const CreateAnnouncementModal = (): JSX.Element => {
    const [announcement, setAnnouncement] = useState<AnnouncementData>(
      announcementInit
    );
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setDummyData([...dummyData, announcement]);
      console.log(dummyData);
    };
    return (
      <form onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
        <label>
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
        <label>
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
        <label>
          Cross-Regional:
          <input
            name="crossRegional"
            type="checkbox"
            checked={announcement.crossRegional === 'false' ? false : true}
            onChange={(e) =>
              setAnnouncement({
                ...announcement,
                [e.target.name]: e.target.checked.toString(),
              })
            }
          />
        </label>
        <label>
          Parish:
          <select
            name="parish"
            onChange={(e) =>
              setAnnouncement({
                ...announcement,
                [e.target.name]: e.target.value,
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
        <button type="submit">Submit</button>
      </form>
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
          <img
            className="addAnnouncementButton"
            onClick={() => setOpenCreateModal(!openCreateModal)}
            style={{ position: 'absolute', right: '50%' }}
            width={50}
            height={50}
            alt="DownArrow"
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
