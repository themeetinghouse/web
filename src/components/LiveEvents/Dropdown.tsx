import React, {useEffect, useState} from 'react'
import './Dropdown.scss';
import moment from "moment-timezone";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { ListLivestreamsQuery } from '../../API'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


type Props ={
    close:any;
}
export const Dropdown = ({close} : Props) =>{
    /*
    Fetch events in the next 7 days
    Only display 3 days with events.
    */
   /*
    {
            eventName: "Yonge and Bloor Home Church",
            eventTime: "1:00PM",
            eventLink: "https://themeetinghouse.com/live"
        },
        {
            eventName: "Mississauga Rd. Home Church",
            eventTime: "3:00PM",
            eventLink: "https://themeetinghouse.com/live"
        },
        {
            eventName: "Ears to Hear Special Event",
            eventTime: "5:00PM",
            eventLink: "https://themeetinghouse.com/live"
        }
   */
    const [events, setEvents] :any = useState([]);

    const loadLiveStreams = async()  =>{
    const today = moment.tz("America/Toronto").format('YYYY-MM-DD')
    try {
      const json: any = await API.graphql({
        query: queries.listLivestreams,
        variables: { filter: { date: { eq: today } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      const livestreams: ListLivestreamsQuery = json.data
      livestreams?.listLivestreams?.items?.forEach(item => {
        const rightNow = moment().tz("America/Toronto").format('HH:mm')
        const showTime = item?.startTime && item?.endTime && rightNow >= item.startTime && rightNow <= item.endTime
        console.log(showTime)
        console.log(item)
        const event : any = {
            eventName:item?.id,
            eventTime:item?.videoStartTime ?? "",
            eventLink:item?.liveYoutubeId ? "/live" : "" 
        }
        setEvents([...events, event])
      })
     
    } catch (err) {
      console.error(err)
    }
  }
      
    useEffect(()=>{
        loadLiveStreams()
        console.log("a")
    },[])
    return (
        <ReactCSSTransitionGroup
        transitionName="Dropdown"
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
        transitionAppear={true}
      >
        <div className="MainContainer">
            <img onClick={close} className="close" style={{}}alt="Close Icon" src="/static/svg/Close-Cancel-White.svg"></img>
            <p className="Heading">{"Today's Livestreams"}</p>
            {events ? events.map((event: any, ind:any) =>{
                return (
                    <div style={ind === events.length-1 ? {marginBottom:"16px"} : {}} className="EventItem" key={ind}>
                        <p className="EventTime">{event.eventTime}<small>am EST</small> </p>
                        <p className="EventTitle">{event.eventName}</p>
                        <button className="EventButton">Join</button>
                    </div>
                )
            }): null}
        </div>
        </ReactCSSTransitionGroup>
    )
}