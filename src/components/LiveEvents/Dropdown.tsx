import React, {useEffect, useState, useRef} from 'react'
import './Dropdown.scss';
import moment from "moment-timezone";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import { ListLivestreamsQuery } from '../../API'; 
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
    const loadLiveStreams = async()  => {
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
        if(item?.endTime && rightNow > item.endTime){
          console.log("Event time has passed.")
        }
        else{
          tempEvents.push({...event, live:showTime})
        }

      })
      setEvents(tempEvents.sort((a:any,b:any) => a.eventStartTime.localeCompare(b.eventStartTime)))
      setisLoading(false)
      } catch (err) {
        setisLoading(false)
        console.error(err)
      }
    }

    customUseOnClickOutside(ref,close)
    useEffect(()=>{
        setTimeout(()=>{
          loadLiveStreams()
        },500)

    },[])
    useEffect(()=>{
      if(events?.length> 0){
      const interval = setInterval(() => {
      const rightNow = moment.tz("America/Toronto").format('HH:mm')
      const temp = [...events];
      events.map((event:any, index:number)=>{
        const startTime = moment(event.eventStartTime, "HH:mm").format("HH:mm")
        const endTime = moment(event.eventEndTime, "HH:mm").format("HH:mm")
        if(rightNow > endTime) {
          if(rightNow >= events[events?.length-1]?.eventEndTime){
            clearInterval(interval);
            end()
          }
          else{
          temp.splice(index, 1)
          setEvents(temp)
          }
        }
        else{
        if(rightNow >= startTime && rightNow <endTime){
          if(!temp[index]?.live)
            temp[index].live = true;
            setEvents(temp)
        }
        else{
          if(temp[index]?.live){
            temp[index].live=false;
            setEvents(temp)
          }
        }
        
      }
      })
      }, 1000);
      
      return () => clearInterval(interval);
    }
    
    },[events])

    return (
        <div ref={ref} className="DropdownMainContainer">
          <div className="triangle"></div>
          <div className="DropdownFill">
          <img onClick={close} className="closeButton" style={{}}alt="Close Icon" src="/static/svg/Close-Cancel-White.svg"></img>
            {!isLoading ? 
              <>{
              events.map((event: any, ind:any) =>{
                return (
                    <div style={ind === events?.length-1 ? {marginBottom:"16px"} : {}} className={ind === 0 ? "EventItem FirstItemOffset" : "EventItem"} key={ind}>
                        <p className="EventTime">{moment.tz(event?.eventStartTime, "HH:mm","America/Toronto").utc().local().format("h:mm")}<small style={{fontWeight:700}}>{moment.tz(event?.eventStartTime, "HH:mm","America/Toronto").utc().local().format('A')}</small> </p>
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
                        style={event.live ? {display: "grid"} : {display: "grid", color:"lightgrey", pointerEvents:"none"}} 
                        href={!event.eventLink.includes("https://") ? `https://${event.eventLink}` : event.eventLink}
                        >
                          Join
                        </a>
                        }
                    </div>
                )
              })
            }
            <p className="EventFooter">All times displayed in {moment.tz(moment.tz.guess()).zoneAbbr()}</p>
            </>
            : 
              <div style={{ marginTop:"5vh",display:"flex", zIndex:100}}>
                <Spinner style={{ margin:"auto", width:'3rem', height:'3rem', }} color="light"/>
              </div>
              }

            </div>

        </div>
    )
}