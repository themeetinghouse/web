import React from 'react';
import {
  GoogleApiWrapper,
  IProvidedProps,
  Marker,
  Map,
} from 'google-maps-react';
import { RouteComponentProps, useHistory } from 'react-router-dom';

import './DistanceGroupItem.scss';
import { DistanceGroupItemContent } from 'components/types';

interface Props extends IProvidedProps {
  content: DistanceGroupItemContent;
}
interface DistanceGroupItemProps extends Props {
  history: RouteComponentProps['history'];
}
interface State {
  listData: DistanceGroup[];
}

interface DistanceGroup {
  howManyPeopleAreLeadingTheGroup: number;
  l1FirstName: string;
  l1LastName: string;
  l1Email: string;
  l2FirstName?: string;
  l2LastName?: string;
  l2Email?: string;
  l3FirstName?: string;
  l3LastName?: string;
  l3Email?: string;
  l4FirstName?: string;
  l4LastName?: string;
  l4Email?: string;

  name: string;

  location: {
    city: string;
    state: string;
    country: string;
    latitude: string;
    longitude: string;
  };
  frequency: string;
  dayofweek: string;
  howManyPeopleAreAttendingYourDistanceGroup: string;
  wouldYouLikeToAddAnySocialMediaInfoToYourDistanceGroupListing: string;
  facebook: string;
  facebookLink: string;
}

export class DistanceGroupItem extends React.Component<
  DistanceGroupItemProps,
  State
> {
  constructor(props: DistanceGroupItemProps) {
    super(props);
    console.log(props);
    this.state = {
      listData: [],
    };
    this.navigate = this.navigate.bind(this);

    fetch('/static/data/distance-groups.json')
      .then(function (response): Promise<Array<DistanceGroup>> {
        return response.json();
      })
      .then((myJson) => {
        this.setState({ listData: myJson });
      })
      .catch((e: any) => console.log(e));
  }
  navigate(to: string) {
    this.props.history.push(to, 'as');
    const unblock = this.props.history.block(
      'Are you sure you want to leave this page?'
    );
    unblock();
  }

  render() {
    const inititalCenter = {
      lat: 0,
      lng: -0,
    };
    const initalZoom = 1;

    return (
      <div className="ContentItem oneImage distancegroupitem1">
        <div className="distancegroupitemdiv1">
          <div>
            <h1>{this.props.content.header1}</h1>
            <div className="distancegroupitemdiv2">
              <div className="distancegroupmap">
                <Map
                  google={this.props.google}
                  zoom={initalZoom}
                  initialCenter={inititalCenter}
                >
                  {this.state.listData.map((item, index) => (
                    <Marker
                      key={index}
                      position={{
                        lat: Number(item.location.latitude),
                        lng: Number(item.location.longitude),
                      }}
                    />
                  ))}
                </Map>
              </div>
            </div>
            <div className="distancegroupitemdiv3">
              {this.state.listData.map((item, index) => (
                <div key={index} className="distancegroupitemdiv4">
                  <h3>{item.name}</h3>
                  <div>
                    {item.dayofweek}/{item.frequency}
                  </div>
                  <div>
                    Leaders:{' '}
                    <a href={'mailto:' + item.l1Email}>
                      {item.l1FirstName} {item.l1LastName} ({item.l1Email})
                    </a>
                  </div>
                  {item.l2Email ? (
                    <div>
                      <a href={'mailto:' + item.l2Email}>
                        {item.l2FirstName} {item.l2LastName} ({item.l2Email})
                      </a>
                    </div>
                  ) : null}
                  {item.l3Email ? (
                    <div>
                      <a href={'mailto:' + item.l3Email}>
                        {item.l3FirstName} {item.l3LastName} ({item.l3Email})
                      </a>
                    </div>
                  ) : null}
                  {item.l4Email ? (
                    <div>
                      <a href={'mailto:' + item.l4Email}>
                        {item.l4FirstName} {item.l4LastName} ({item.l4Email})
                      </a>
                    </div>
                  ) : null}
                  {item.facebook ? (
                    <div>
                      <a
                        href={item.facebookLink}
                        className="distancegroupitemA"
                      >
                        <img
                          className="distancegroupitemImage"
                          src="/static/svg/Facebook.svg"
                          alt="Facebook Logo"
                        />
                        {item.facebook}
                      </a>{' '}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function DistanceGroupItemWrapper(props: Props) {
  const history = useHistory();
  return <DistanceGroupItem {...props} history={history} />;
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDXxLzyv5pYsIPl3XnVX5ONklXvs48zjn0',
})(DistanceGroupItemWrapper);
