
import React from 'react';
import HeaderItem from './HeaderItem';
import ContentItem from './ContentItem';
import ListItem from './ListItem';
import VideoPlayer from './VideoPlayer';
import SVGItem from './SVGItem';
import HeroItem from './HeroItem';
import TeachingItem from './TeachingItem';
import LocationItem from './LocationItem';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import HomeMenu from '../Menu/HomeMenu';
import HomeFooter from '../Menu/HomeFooter'

interface Props extends RouteComponentProps {
  content: any
  data:any
}
interface State {
  data: any
}

class RenderRouter extends React.Component<Props, State> {

  renderItem() {
    if (this.props.content != null)
      return this.props.content.page.content.map((item: any, index: any) => {
        console.log(item.type)
        if (item.type === "header")
          return (<HeaderItem key={index} content={item}></HeaderItem>)
        else if (item.type === "content")
          return (<ContentItem key={index} content={item}></ContentItem>);
        else if (item.type === "videoPlayer")
          return (<VideoPlayer data={this.props.data} key={index} content={item}></VideoPlayer>);
        else if (item.type === "list")
          return (<ListItem key={index} content={item}></ListItem>);
        else if (item.type === "svg")
          return (<SVGItem key={index} content={item}></SVGItem>);
        else if (item.type === "hero")
          return (<HeroItem key={index} content={item}></HeroItem>);
        else if (item.type === "locations")
          return (<LocationItem key={index} content={item}></LocationItem>);
        else if (item.type === "teaching")
          return (<TeachingItem key={index} content={item}></TeachingItem>);
        else return null
      })
    else return null
  }
  render() {
    return (
    
      this.props.content != null ? (
        <div>
          <HomeMenu pageConfig={this.props.content.page.pageConfig} ></HomeMenu>
          {this.renderItem()}
          {this.props.content.page.pageConfig.showFooter?<HomeFooter></HomeFooter>:null}
        </div>)
        : null
    )


  }
}
export default withRouter(RenderRouter);