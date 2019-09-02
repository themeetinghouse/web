
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";
import { withCookies } from 'react-cookie';
import "./TeachingItem.scss"
import * as queries from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';
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
    teachingId:any
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
        var teachingId=cookies.get(this.props.content.group)=="Oakville"?0:1
        this.state = {
            content: props.content,
            selection: cookies.get(this.props.content.group),
            teachingId: teachingId,
            listData:null
        }
        this.navigate = this.navigate.bind(this);
        const listVideos = API.graphql(graphqlOperation(queries.getVideoByVideoType, { sortDirection:this.state.content.sortOrder, limit: 2, videoTypes: this.state.content.subclass, publishedDate: { lt: "a" } }));
        listVideos.then((json: any) => {
          console.log("Success queries.listVideos: " + json);
          console.log(json)
          this.setState({
            listData: json.data.getVideoByVideoType.items
          })
        }).catch((e: any) => { console.log(e) })
    }
    navigate() {
        console.log("navigate")
        console.log(this.props.history)
        this.props.history.push("spirituality", "as")
        const unblock = this.props.history.block('Are you sure you want to leave this page?');
        unblock();

    }
    setSelection(selection: string) {
        const { cookies } = this.props;
        cookies.set(this.props.content.group,selection, { path: '/' });
        var teachingId=cookies.get(this.props.content.group)=="Oakville"?0:1
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
                <div className="headerItem" style={{ position: "relative", left: "20vw", width: "80vw", height: "55vw", paddingBottom: "5vh" }}>
                   
                    <h1 style={{ position: "relative", top: "3vw", fontSize: "3vw", fontWeight: "bold" }}>{this.props.content.header1}</h1>
                    <div style={{ padding: "3vw", paddingRight: "15vw", position: "absolute", left: "5vw", width: "50vw", top: "10vw", height: "40vw", backgroundColor: "#000000", color: "#ffffff" }}>
                        <div style={{ padding: "0.5vw", color: "#C8C8C8" }}>{this.state.listData[this.state.teachingId].publishedDate}</div>
                        <div style={{ padding: "0.5vw", fontSize: "2.5vw", fontWeight: "bold", color: "#ffffff" }}>{this.state.listData[this.state.teachingId].episodeTitle}</div>
                        <div style={{ padding: "0.5vw", color: "#C8C8C8" }}>E2. <a href="">{this.state.listData[this.state.teachingId].series}</a>  •  {this.state.listData[this.state.teachingId].duration}</div>
                        <div style={{ padding: "0.5vw", color: "#C8C8C8" }}> {this.state.listData[this.state.teachingId].description}</div>
                        <div style={{ position: "absolute", bottom: "5vw" }}><Button >Watch</Button></div>
                        <div><img alt="TBD" style={{ position: "absolute", top: "5vw", left: "35vw", width: "40vw" }} src={this.state.listData[this.state.teachingId].Youtube.snippet.thumbnails.standard.url} /></div>
                    </div>
                    <div style={{ position: "absolute", left: "2vw", top: "50vw", transform: 'rotate(-90deg)', transformOrigin: "left top 0" }}>Most recent</div>
                    <div style={{ position: "absolute", right: "78vw", textAlign: "right", width: "20vw", top: "10vw", transform: 'rotate(-90deg)', transformOrigin: "right top 0" }}>
                        {this.props.content.options.map((item: any) => {
                            return (
                                <span style={{ margin: "1vw" }} className={this.state.selection===item?"TeachingSelected":"TeachingUnselected"} onClick={()=>{this.setSelection(item)}}>{item}</span>
                            )
                        }
                        )}
                    </div>

                </div>:null
            )
        }
        else return null
    }
}


export default withCookies(withRouter(TeachingItem))
