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
  announcement: {
    title: string;
    date: string;
    description: string;
  };
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
    { label: 'Alliston', value: '' },
    { label: 'Ancaster', value: '' },
    { label: 'Brampton', value: '' },
    { label: 'Brantford', value: '' },
    { label: 'Burlington', value: '' },
    { label: 'Hamilton - Downtown', value: '' },
    { label: 'Hamilton - Mountain', value: '' },
    { label: 'Kitchener', value: '' },
    { label: 'London', value: '' },
    { label: 'Newmarket', value: '' },
    { label: 'Oakville', value: '' },
    { label: 'Ottawa', value: '' },
    { label: 'Owen Sound', value: '' },
    { label: 'Parry Sound', value: '' },
    { label: 'Richmond Hill', value: '' },
    { label: 'Sandbanks', value: '' },
    { label: 'Toronto - Downtown', value: '' },
    { label: 'Toronto - East', value: '' },
    { label: 'Toronto - High Park', value: '' },
    { label: 'Toronto - Uptown', value: '' },
    { label: 'Waterloo', value: '' },
  ];
  const [locationFilter, setlocationFilter] = useState('Cross-Regional');
  const [announcement, setAnnouncement] = useState<AnnouncementData>(
    announcementInit
  );
  const [dummyData, setDummyData] = useState<Array<AnnouncementData>>([
    {
      publishedDate: 'November 12, 2020',
      expirationDate: 'December 31, 2020',
      title: 'November Weekly Outreach',
      description:
        "We'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreach",
      crossRegional: 'true',
      callToAction: '',
      parish: '',
      image: '',
    },
    {
      publishedDate: 'November 12, 2020',
      expirationDate: 'December 31, 2020',
      title: '21 Day New Year Corporate Fast',
      description:
        "We'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreachWe'll be meeting weekly on Thursday evenings at the clock downtown Oakville @ 5:30 pm for community outreach",
      crossRegional: 'true',
      callToAction: '',
      parish: '',
      image: '',
    },
  ]);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setDummyData([...dummyData, announcement]);
    console.log(dummyData);
  };
  const RenderAnnouncementItem = (props: AnnouncementProps): JSX.Element => {
    const [expand, setExpand] = useState(false);
    return (
      <div
        onClick={() => setExpand(!expand)}
        className="announcementBox"
        style={expand ? { maxHeight: '500px' } : { maxHeight: '200px' }}
      >
        <h3>{props.announcement.title}</h3>
        <h4>{props.announcement.date}</h4>
        <p>{props.announcement.description}</p>
        <div className="announcementBoxFooter"></div>
      </div>
    );
  };
  const RenderAnnouncementList = (): JSX.Element => {
    return (
      <div>
        {dummyData.map((announcement: any, index: number) => {
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
        </div>

        <RenderAnnouncementList></RenderAnnouncementList>

        <form onSubmit={(e) => handleSubmit(e)}>
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
              <option value="Oakville">Oakville</option>
              <option value="Ancaster">Ancaster</option>
              <option value="Toronto Downtown">Toronto Downtown</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </AmplifyAuthenticator>
  );
}
