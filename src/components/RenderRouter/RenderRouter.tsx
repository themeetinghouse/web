
import React from 'react';
import HeaderItem from './HeaderItem';
import ContentItem from './ContentItem';
import ListItem from './ListItem';
import VideoItem from './VideoItem';
import SVGItem from './SVGItem';
import HeroItem from './HeroItem';
import TeachingItem from './TeachingItem';
import LocationItem from './LocationItem';
import { withRouter, RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps {
  content:any
}
interface State {
  data:any
}

class RenderRouter extends React.Component<Props, State> {

  renderItem() {
    if (this.props.content != null)
      return this.props.content.page.content.map((item:any,index:any) => {
        console.log(item.type)
        if (item.type === "header")
          return (<HeaderItem key={index} data={item}></HeaderItem>)
        else if (item.type === "content")
          return (<ContentItem key={index} data={item}></ContentItem>);
        else if (item.type === "video")
          return (<VideoItem key={index} data={item}></VideoItem>);
        else if (item.type === "list")
          return (<ListItem key={index} data={item}></ListItem>);
        else if (item.type === "svg")
          return (<SVGItem key={index} data={item}></SVGItem>);
        else if (item.type === "hero")
          return (<HeroItem key={index} data={item}></HeroItem>);
        else if (item.type === "locations")
          return (<LocationItem key={index} data={item}></LocationItem>);
          else if (item.type === "teaching")
          return (<TeachingItem key={index} data={item}></TeachingItem>);
        else return null
      })
    else return null
  }
  render() {
    return this.renderItem()
  }
}
export default withRouter(RenderRouter);