import React from 'react';
import { buildUrl } from 'react-instafeed';
//import useAbortableFetch from 'use-abortable-fetch'
//import Image from '@components/Image'

interface Props {
  content: any;
}
interface State {
  content: any;
}
const options = {
  accessToken: 'access...',
  clientId: 'client...',
  get: 'user', // popular, user
  locationId: null,
  resolution: 'standard_resolution', // thumbnail, low_resolution, standard_resolution
  sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
  tagName: null,
  userId: 123,
};
export default class ContentItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
    };
  }

  render() {
    fetch(buildUrl(options))
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });

    //    console.log(data)

    return <div className="ContentItem oneImage InstagramItemDiv"></div>;
  }
}
