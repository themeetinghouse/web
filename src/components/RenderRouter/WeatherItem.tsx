import React from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import './WeatherItem.scss';
import moment from 'moment';

interface Content {
  style: string;

  header1: string;
  header2: string;
  text1: string;

  list: Array<{
    type: string;
    title: string;
  }>;
}

interface Props {
  content: Content;
  data: any;
}
interface WeatherItemProps extends Props {
  history: RouteComponentProps['history'];
}
class HeroItem extends React.Component<WeatherItemProps> {
  constructor(props: WeatherItemProps) {
    super(props);
  }

  getCalendarEventForLocation(locationItem: any) {
    let nextSunday = (
      moment().day() === 0 ? moment().add(1, 'week') : moment().day(0)
    ).startOf('day');
    let serviceHour =
      locationItem.serviceTimes[locationItem.serviceTimes.length - 1];
    serviceHour = serviceHour.substr(0, serviceHour.indexOf(':'));
    nextSunday = nextSunday.hour(+serviceHour);
    const event = {
      title: 'Church at The Meeting House',
      description: 'Join us at The Meeting House on Sunday!',
      location: locationItem.location.address,
      startTime: nextSunday.format(),
      endTime: moment(nextSunday).add(90, 'minutes').format(),
    };
    return event;
  }

  locationChange(item: any) {
    this.navigateTo(item.value);
  }
  navigateTo(location: any) {
    this.props.history.push(location, 'as');
  }
  smoothScrollTo(endX: any, endY: any, duration: any) {
    const startX = window.scrollX || window.pageXOffset,
      startY = window.scrollY || window.pageYOffset,
      distanceX = endX - startX,
      distanceY = endY - startY,
      startTime = new Date().getTime();

    // Easing function
    const easeInOutQuart = function (
      time: any,
      from: any,
      distance: any,
      duration: any
    ) {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = window.setInterval(function () {
      const time = new Date().getTime() - startTime,
        newX = easeInOutQuart(time, startX, distanceX, duration),
        newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        window.clearInterval(timer);
      }
      window.scrollTo(newX, newY);
    }, 1000 / 60); // 60 fps
  }
  scrollToNextPage() {
    const pos = window.outerHeight;
    if ('scrollBehavior' in document.documentElement.style) {
      //Checks if browser supports scroll function
      window.scroll({
        top: pos,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      this.smoothScrollTo(0, pos, 500); //polyfill below
    }
  }

  imgUrl(size: any) {
    if (window.location.hostname === 'localhost')
      return 'https://localhost:3006';
    else if (window.location.hostname.includes('beta'))
      return 'https://beta.themeetinghouse.com/cache/' + size;
    else return 'https://www.themeetinghouse.com/cache/' + size;
  }
  render() {
    const { content } = this.props;

    if (content.style === 'yellow') {
      return (
        <div className="weather weatherPartial">
          <h1 className="weatherH1">{content.header1}</h1>
          {content.header2 && <h2 className="weatherH2">{content.header2}</h2>}
          <hr className="weatheroHr"></hr>
          <div className="weatherText1">{content.text1}</div>
          <div className="weatherText1">
            <b>Closed Locations</b>
            {content.list.map((item: any, index: any) => {
              return <div key={index}>{item.title}</div>;
            })}
          </div>
          <div className="heroText1 weatherText3">
            <b>All other locations are open.</b>
          </div>
        </div>
      );
    } else return null;
  }
}
function WeatherItemWrapper(props: Props) {
  const history = useHistory();
  return <HeroItem {...props} history={history} />;
}

export default WeatherItemWrapper;
