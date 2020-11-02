import React from 'react';
import './SimpleItem.scss';
import ReactGA from 'react-ga';
if (window.location.hostname === 'localhost')
  ReactGA.initialize('UA-4554612-19');
else if (window.location.hostname.includes('beta'))
  ReactGA.initialize('UA-4554612-19');
else ReactGA.initialize('UA-4554612-3');

interface Props {
  content: any;
}
interface State {
  content: any;
  currentPage: any;
}

export default class ContentItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      currentPage: 'PushPay',
    };
  }
  imgUrl(size: any) {
    if (window.location.hostname === 'localhost')
      return 'https://localhost:3006';
    else if (window.location.hostname.includes('beta'))
      return 'https://beta.themeetinghouse.com/cache/' + size;
    else return 'https://www.themeetinghouse.com/cache/' + size;
  }

  render() {
    return (
      <div className="simpleItemDiv1">
        <form>
          <h1 className="SimpleItemH1">{this.state.content.header1}</h1>
          <h2 className="SimpleItemH2">{this.state.content.header2}</h2>
          <hr className="SimpleItemHR" />
          {this.state.content.text.map((item: any) => {
            return item.type === 'video' ? (
              <iframe
                title="Youtube Player"
                className={item.class}
                allowFullScreen
                src={
                  'https://www.youtube.com/embed/' +
                  item.id +
                  '?color=white&autoplay=0&cc_load_policy=1&showTitle=0&controls=1&modestbranding=1&rel=0'
                }
                frameBorder="0"
                allow="speakers; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            ) : (
              <div className={item.class}>{item.text}</div>
            );
          })}

          <div className="SimpleItemText">{this.state.content.text2}</div>
          <div className="SimpleItemText">{this.state.content.text3}</div>
          <div className="SimpleItemText">{this.state.content.text4}</div>
          <div className="SimpleItemText">{this.state.content.text5}</div>

          {this.state.content.hasBigBottom ? (
            <div className="SimpleItemBigBottom"></div>
          ) : (
            <div className="SimpleItemBottom"></div>
          )}
        </form>
      </div>
    );
  }
}
