import React, {useEffect, useState, useRef} from 'react'
import './Dropdown.scss';
import moment from "moment-timezone";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { ListLivestreamsQuery } from '../../API'; 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link} from 'components/Link/Link';
import customUseOnClickOutside from "../Menu/customUseOnClickOutside";
import { Spinner } from 'reactstrap';

type Props ={
    end: () => void;
    close: () => void;
}
export const Dropdown = ({end, close} : Props) =>{
    const ref = useRef(null)
    const [events, setEvents] :any = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const loadLiveStreams = async()  =>{
    const today = moment.tz("America/Toronto").format('YYYY-MM-DD')
    try {
      const json: any = await API.graphql({
        query: queries.listLivestreams,
        variables: {filter: { date: { eq: today } } },
        authMode: GRAPHQL_AUTH_MODE.API_KEY
      });
      const livestreams: ListLivestreamsQuery = json.data
      const tempEvents:any =[];
      livestreams?.listLivestreams?.items?.forEach(item => {
        const rightNow = moment().tz("America/Toronto").format('HH:mm')
        const showTime = item?.videoStartTime && item?.endTime && rightNow >= item.videoStartTime && rightNow <= item.endTime
        const event : any = {
            eventName:item?.eventTitle ? item.eventTitle : item?.homepageLink,  
            eventStartTime:item?.videoStartTime ?? item?.startTime,
            eventEndTime:item?.endTime,
            eventLink:item?.liveYoutubeId ? "/live" : item?.externalEventUrl 
        }
        tempEvents.push({...event, live:showTime})
      })
      setEvents(tempEvents.map((a:any) => {
        console.log(a.eventStartTime)
        return a;
      }).sort((a:any,b:any) => a.eventStartTime.localeCompare(b.eventStartTime)))
      setisLoading(false)
    } catch (err) {
      setisLoading(false)
      console.error(err)
    }
  }
    customUseOnClickOutside(ref,close)
    useEffect(()=>{
        loadLiveStreams()
    },[])
    useEffect(()=>{
      if(events?.length> 0){
      const interval = setInterval(() => {
      const rightNow = moment().tz("America/Toronto").format('HH:mm')
      const temp = [...events];
      events.map((event:any, index:number)=>{
        const startTime = moment(event.eventStartTime, "HH:mm").subtract('10', 'minutes').format("HH:mm")
        if(rightNow >= startTime && rightNow <event.eventEndTime){
          console.log()
          if(!temp[index].live)
            temp[index].live = true;
            setEvents(temp)
        }
        else{
          if(temp[index].live){
            temp[index].live=false;
            setEvents(temp)
          }
        }
        if(rightNow >= events[events.length-1].eventEndTime){
          clearInterval(interval);
          end()
        }
      })
      }, 1000);
      
      return () => clearInterval(interval);
    }
    
    },[events])

    return (
        <ReactCSSTransitionGroup
        transitionName="Dropdown"
        transitionAppearTimeout={400}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        transitionAppear={true}
      >
        <div ref={ref} className="DropdownMainContainer">
          <div className="triangle"></div>
          <div className="DropdownFill">
          <img onClick={close} className="closeButton" style={{}}alt="Close Icon" src="/static/svg/Close-Cancel-White.svg"></img>
            {!isLoading ? events.map((event: any, ind:any) =>{
                return (
                    <div style={ind === events?.length-1 ? {marginBottom:"16px"} : {}} className={ind === 0 ? "EventItem FirstItemOffset" : "EventItem"} key={ind}>
                        <p className="EventTime" style={{margin:"auto"}}>{moment(event?.eventStartTime, 'HH:mm').format('h:mm')}<small style={{fontWeight:700}}>{moment(event?.eventStartTime, 'HH:mm').format('A')}</small> </p>
                        <p className="EventTitle">{event?.eventName}</p>
                        {event.eventLink === "/live" ?
                            <Link
                              className="EventButton"
                              style={event?.live ? {display: "grid", justifyContent: "center", alignItems:"center"} : {display: "grid", justifyContent: "center", alignItems:"center", color:"lightgrey", pointerEvents:"none"}}
                              to={"/live"}                          
                            >
                            Join
                            </Link> : 
                        <a className="EventButton" 
                        style={event.live ? {display: "grid", justifyContent: "center", alignItems:"center"} : {display: "grid", justifyContent: "center", alignItems:"center", color:"lightgrey", pointerEvents:"none"}} 
                        href={!event.eventLink.includes("https://") ? `https://${event.eventLink}` : event.eventLink}
                        >
                          Join
                        </a>
                        }
                    </div>
                )
            }): 
              <div style={{ marginTop:"5vh",display:"flex", zIndex:100}}>
                <Spinner style={{ margin:"auto", width:'3rem', height:'3rem', }} color="light"/>
              </div>
              }
            </div>
            {!isLoading ? <p className="EventFooter">All times displayed in {false ? moment.tz(moment.tz.guess()).zoneAbbr() : "EST"}</p> : null}
        </div>
        </ReactCSSTransitionGroup>
    )
}