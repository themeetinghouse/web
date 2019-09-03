
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";
import { withCookies } from 'react-cookie';
import "./TeachingItem.scss"
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
import VideoOverlay from '../VideoOverlay/VideoOverlay'

//import uuidv4 from 'uuid/v4'
Amplify.configure(awsmobile);

interface Props extends RouteComponentProps {
    content: any,
    cookies: any
}
interface State {
    content: any,
    selection: string | null
    listData:any,
    teachingId:any,
    overlayData:any
}
class TeachingItem extends React.Component<Props, State> {

    static contextTypes = {
        router: PropTypes.object,
        history: PropTypes.object
    }

    constructor(props: Props, context: any) {
        super(props, context);
        console.log(context);
        const { cookies } = props;
        if (cookies.get(this.props.content.group) == null)
            cookies.set(this.props.content.group, this.props.content.options[0], { path: '/' });
        var teachingId=cookies.get(this.props.content.group)==="Oakville"?0:1
        this.state = {
            content: props.content,
            selection: cookies.get(this.props.content.group),
            teachingId: teachingId,
            listData:null,
            overlayData:null
        }
        const listVideos = API.graphql(graphqlOperation(queries.getVideoByVideoType, { sortDirection:this.state.content.sortOrder, limit: 2, videoTypes: this.state.content.subclass, publishedDate: { lt: "a" } }));
        listVideos.then((json: any) => {
          console.log("Success queries.listVideos: " + json);
          console.log(json)
          this.setState({
            listData: json.data.getVideoByVideoType.items
          })
        }).catch((e: any) => { console.log(e) })
    }
    videoOverlayClose(){
        this.setState({
          overlayData: null
    
        })
      }
      handleClick(data:any) {
        this.setState({
          overlayData: data
    
        })
      }
    
    setSelection(selection: string) {
        const { cookies } = this.props;
        cookies.set(this.props.content.group,selection, { path: '/' });
        var teachingId=cookies.get(this.props.content.group)==="Oakville"?0:1
        this.setState({
            selection: selection,
            teachingId: teachingId
        })
        
    }
    //
    render() {
        // const [cookies, setCookie] = useCookies([this.props.content.group]);

        console.log(this.state.teachingId)
        if (this.state.content.style === "hero") {
            
            return (
                this.state.listData!=null?
                <div className="teaching" >
                   
                    <h1 className="teaching-h1" >{this.props.content.header1}</h1>
                    <div className="teaching-blackbox" >
                        <div style={{ padding: "0.5vw", color: "#C8C8C8" }}>{this.state.listData[this.state.teachingId].publishedDate}</div>
                        <div style={{ padding: "0.5vw", fontSize: "2.5vw", fontWeight: "bold", color: "#ffffff" }}>{this.state.listData[this.state.teachingId].episodeTitle}</div>
                        <div style={{ padding: "0.5vw", color: "#C8C8C8" }}>E2. <a href="">{this.state.listData[this.state.teachingId].series}</a>  •  {this.state.listData[this.state.teachingId].duration}</div>
                        <div style={{ padding: "0.5vw", color: "#C8C8C8" }}> {this.state.listData[this.state.teachingId].description}</div>
                        <div style={{ position: "absolute", bottom: "5vw" }}><Button onClick={()=>{this.handleClick(this.state.listData[this.state.teachingId])}} >Watch</Button></div>
                        <div><img onClick={()=>{this.handleClick(this.state.listData[this.state.teachingId])}} alt="TBD" className="teaching-image"  src={this.state.listData[this.state.teachingId].Youtube.snippet.thumbnails.standard.url} /></div>
                    </div>
                    <div className="teaching-mostrecent" >Most recent</div>
                    <div className="teaching-options" >
                        {this.props.content.options.map((item: any) => {
                            return (
                                <span style={{ margin: "1vw" }} className={this.state.selection===item?"TeachingSelected":"TeachingUnselected"} onClick={()=>{this.setSelection(item)}}>{item}</span>
                            )
                        }
                        )}
                    </div>
                    <VideoOverlay onClose={()=>{this.videoOverlayClose()}} data={this.state.overlayData}></VideoOverlay>

                </div>:null
            )
        }
        else return null
    }
}


export default withCookies(withRouter(TeachingItem))
