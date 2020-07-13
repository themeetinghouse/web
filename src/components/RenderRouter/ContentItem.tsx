
import React from 'react';
import { Button } from 'reactstrap';
import "./ContentItem.scss"
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ScaledImage from 'components/ScaledImage/ScaledImage';

interface Props extends RouteComponentProps {
  content: any;
}
interface State {
  content: any;
}

interface BannerImage {
  src: string;
  alt: string;
  linkto?: string;
}

class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content
    }
  }
  navigateTo(location: any) {
    if (location.includes("http")) {
      window.open(location, '_blank', 'noopener noreferrer')
    } else {
      this.props.history.push(location, "as")
      const unblock = this.props.history.block('Are you sure you want to leave this page?');
      unblock();
    }
  }

  renderList(boxColor = "grey") {
    return this.state.content.list ?
      this.state.content.list.map((item: any, id: any) => {
        return (
          item.type === "button" ?
            <div key={id}>
              <Button className="contentButton" onClick={() => { this.navigateTo(item.navigateTo) }}>{item.title}</Button>
            </div>
            : item.type === "link" ?
              <div className="oneImageAContainer" key={id}>{item.openNewBrowser ?
                <a className={boxColor === "black" ? "oneImageA blackBox" : "oneImageA"} target="_blank" rel="noopener noreferrer" href={item.navigateTo}>{item.title}</a> :
                <a className={boxColor === "black" ? "oneImageA blackBox" : "oneImageA"} href={item.navigateTo}>{item.title}</a>
              }</div>
              : item.type === "text" ?
                <div key={id}>
                  {item.title}
                </div>
                : item.type === "event" ?
                  <div className="oneImageEventDetails" key={id}>
                    <div >{item.date}</div>
                    <div >{item.location}</div>
                  </div>
                  : null
        )
      })
      : null
  }
  render() {
    let image1
    if (this.state.content.image1 != null)
      image1 = this.state.content.image1[Math.floor(Math.random() * this.state.content.image1.length)];

    const heroBreakpoints = {
      320: 320,
      480: 480,
      640: 640,
      1280: 1280,
      1920: 1920,
      2560: 2560,
    };
    if (this.state.content.style === "oneImage") {

      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageGreyBox" >
              <h1 className="oneImageH1" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2">{this.state.content.header2}</h2>
              <div className="oneImageText" >{this.state.content.text1}</div>
              <div className="oneImageList" >{this.renderList()}</div>
            </div>
            <ScaledImage image={image1} className="oneImageImage" breakpointSizes={heroBreakpoints} />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "greenImage") {

      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageGreenBox" >
              <h1 className="oneImageH1" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2">{this.state.content.header2}</h2>
              <div className="oneImageText" >{this.state.content.text1}</div>
              {this.renderList()}
            </div>
            <ScaledImage image={image1} className="oneImageImage" breakpointSizes={heroBreakpoints} />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "oneImageBlack") {

      return (
        <div className="ContentItem oneImage">
          <div className="oneImagePosition">
            <div className="oneImageBlackBox" >
              <h1 className="oneImageH1 white" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2 white">{this.state.content.header2}</h2>
              <div className="oneImageText white" >{this.state.content.text1}</div>
              {this.renderList("black")}
            </div>
            <ScaledImage image={image1} className="oneImageImage" breakpointSizes={heroBreakpoints} />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "oneImageBlackRight") {

      return (
        <div className="ContentItem oneImage ContentItemMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageBlackBox right" >
              <h1 className="oneImageH1 white" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2 white">{this.state.content.header2}</h2>
              <div className="oneImageText white" >{this.state.content.text1}</div>
              {this.renderList("black")}
            </div>
            <ScaledImage image={image1} className="oneImageImage right secondImg" breakpointSizes={heroBreakpoints} />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "goRegionalEventsOneImageBlackRight") {

      return (
        <div className="ContentItem oneImage goRegionalEventsMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageBlackBox right" >
              <h1 className="oneImageH1 white" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2 white">{this.state.content.header2}</h2>
              <div className="oneImageText white" >{this.state.content.text1}</div>
              {this.renderList()}
            </div>
            <ScaledImage image={image1} className="oneImageImage right secondImg" breakpointSizes={heroBreakpoints} />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "oneImageGreenRight") {

      return (
        <div className="ContentItem oneImage ContentItemMarginBottom">
          <div className="oneImagePosition right">
            <div className="oneImageGreenBox right" >
              <h1 className="oneImageH1 white" >{this.state.content.header1}</h1>
              <h2 className="oneImageH2 white">{this.state.content.header2}</h2>
              <div className="oneImageText white" >{this.state.content.text1}</div>
              {this.renderList()}
            </div>
            <ScaledImage image={image1} className="oneImageImage right secondImg bottom" breakpointSizes={heroBreakpoints} />
          </div>
        </div>
      )
    }
    else if (this.state.content.style === "greyTwoText") {
      return (
        <div className="ContentItem greyTwoText">
          {this.state.content.showCircle ? <div>
            <div className="pieChart">

              <div className="pie" data-start="0" data-value="30"></div>
              <div className="pie highlight" data-start="30" data-value="30"></div>
              <div className="pie" data-start="60" data-value="40"></div>
              <div className="pie big" data-start="100" data-value="260"></div>
            </div>
            <div className="pieChart2">
              <div className="pie2" data-start="0" data-value="30"></div>
              <div className="pie2 highlight" data-start="30" data-value="30"></div>
              <div className="pie2" data-start="60" data-value="40"></div>
              <div className="pie2 big" data-start="100" data-value="260"></div>
            </div>
            <div className="circleHeader">{this.state.content.circleHeader}</div>
            <div className="circleText">{this.state.content.circleText}</div>
          </div> : null}
          <div className="greyTwoTextH1" >{this.state.content.header1}
          </div>

          <div className="greyTwoTextText" ><div className="greyTwoTextJustText">{this.state.content.text1}</div>
            {this.renderList()}
          </div>
          <div className="greyTwoClear"></div>

        </div>
      )
    }
    else if (this.state.content.style === "banner-cards") {
      const banners: BannerImage[] = this.state.content.images;
      return (
        banners.length === 2 ?
          <div className="ContentItem bannerCards">
            {this.state.content.images.map((img: BannerImage, index: number) => {
              return img.linkto ?
                <img onClick={(): void => this.navigateTo(img.linkto)} className="bannerCardImage canClick" key={index} src={img.src} alt={img.alt}></img>
                : <img className="bannerCardImage cannotClick" key={index} src={img.src} alt={img.alt}></img>
            })}
          </div>
          : null
      )
    }
    else if (this.state.content.style === "greenTwoText") {
      return (
        <div className="ContentItem greenTwoText">
          <div className="greenTwoTextH1" >{this.state.content.header1}</div>
          <div className="greenTwoTextText" >{this.state.content.text1}
            {this.renderList()}
          </div>
          <div className="greenTwoClear"></div>

        </div>
      )
    }
    return (null)
  }
}
export default withRouter(ContentItem)
