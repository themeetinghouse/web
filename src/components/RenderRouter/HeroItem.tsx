
import React from 'react';
import { Button } from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import PropTypes from "prop-types";
import "./HeroItem.scss"
import Select from 'react-select';
import DataLoader from './DataLoader';

interface Props extends RouteComponentProps {
    content: any
    data:any
}
interface State {
    content: any,
    locationData:any,
    arrowOpacity:any
}
class HeroItem extends React.Component<Props, State> {
    static contextTypes = {
        router: PropTypes.object,
        history: PropTypes.object
    }
    dataLoader:DataLoader

    constructor(props: Props, context: any) {
        super(props, context);
        this.state = {
            content: props.content,
            locationData:[],
            arrowOpacity:1
        }
        this.navigate = this.navigate.bind(this);
        this.setData=this.setData.bind(this);
        this.dataLoader=new DataLoader({...this.props,dataLoaded:(data:any)=>{this.setData(data)}},this.state)

    }
    componentDidMount(){
      
        this.dataLoader.loadData()
      }
      setData(data:any){
        this.setState({
            locationData:this.state.locationData.concat(data)
        })
      }
    
    locationChange(item:any){
        this.navigateTo(item.value)
    }
    navigate() {
        this.props.history.push("spirituality", "as")
        const unblock = this.props.history.block('Are you sure you want to leave this page?');
        unblock();

    }
    navigateTo(location:any) {
        this.props.history.push(location, "as")
        const unblock = this.props.history.block('Are you sure you want to leave this page?');
        unblock();

    }
    smoothScrollTo(endX: any, endY: any, duration: any) {
        let startX = window.scrollX || window.pageXOffset,
            startY = window.scrollY || window.pageYOffset,
            distanceX = endX - startX,
            distanceY = endY - startY,
            startTime = new Date().getTime();

        // Easing function
        let easeInOutQuart = function (time: any, from: any, distance: any, duration: any) {
            if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
            return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };

        let timer = window.setInterval(function () {
            let time = new Date().getTime() - startTime,
                newX = easeInOutQuart(time, startX, distanceX, duration),
                newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                window.clearInterval(timer);
            }
            window.scrollTo(newX, newY);
        }, 1000 / 60); // 60 fps
    };
    scrollToNextPage() {
        let pos = window.outerHeight;
        if ('scrollBehavior' in document.documentElement.style) { //Checks if browser supports scroll function
            window.scroll({
                top: pos,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            this.smoothScrollTo(0, pos, 500); //polyfill below
        }

    }
    imgUrl(size:any){
        if (window.location.hostname==="localhost")
            return "https://localhost:3006"
        else
         return "https://beta.themeetinghouse.com/cache/"+size
    }
    fadeIn(obj:any){
       
        obj.target.style.transition = "opacity 1s";
        obj.target.style.opacity = "1";
    }
    downArrowScroll(){
        //console.log(window.scrollY)
        var downArrow=document.getElementById('downArrow')
        if (downArrow)
            downArrow.style.opacity=((1-(window.scrollY/250))).toString()
    }
    render() {
        window.onscroll=()=>{this.downArrowScroll()}
        var image1 = this.state.content.image1[Math.floor(Math.random() * this.state.content.image1.length)];
        if (this.state.content.style === "full") {

            return (
                <div className="headerItem heroItem" >
                    <div className="heroImageGradient" onClick={() => { this.scrollToNextPage() }}></div>
                    <img  style={{opacity:0}} onLoad={(item)=>{this.fadeIn(item)}} src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="heroImage"
                        srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                        this.imgUrl(480)+image1.src+" 480w,"+
                        this.imgUrl(640)+image1.src+" 640w,"+
                        this.imgUrl(1280)+image1.src+" 1280w,"+
                        this.imgUrl(1920)+image1.src+" 1920w,"+
                        this.imgUrl(2560)+image1.src+" 2560w"}
                        sizes="(max-width: 320px) 320px,
                               (max-width: 480px) 480px,
                               (max-width: 640px) 640px,
                               (max-width: 1280px) 1280px,
                               (max-width: 1920) 1920,
                                2560px"
                    />
                    <div className="heroBlackBox" >
                        <h1 className="heroH1" >{this.state.content.header1}</h1>
                        
                        {this.state.locationData.length===1?<h2 className="heroH2">{this.state.locationData[0].location.address}</h2>
                        :this.state.content.header2 && <h2 className="heroH2">{this.state.content.header2}</h2>}
                        <hr className="heroHr"></hr>
                        <div className="heroText1" >{this.state.content.text1}</div>
                        <div className="heroText2" >{this.state.content.text2}</div>
                        <div className="heroText2" >{this.state.content.text3}</div>
                        <div className="heroText2" >{this.state.content.text4}</div>
                        <div className="heroText2" >{this.state.content.text5}</div>
                        <div className="heroText2" >{this.state.content.text6}</div>
                        <div className="heroText2" >{this.state.content.text7}</div>
                        {this.state.content.button1Text ? (<Button className="heroButton" onClick={this.navigate}>{this.state.content.button1Text}</Button>) : null}
                        <a href={this.state.content.link1Action}>{this.state.content.link1Text}</a>
                        {this.state.content.addToCalendar ? (<Button style={{ fontFamily:"Graphik Web", fontSize:"1vw",marginTop: "1vw", color: "#ffffff", backgroundColor: "#000000", borderWidth:0, borderRadius: 0 }} onClick={this.navigate}><img style={{marginRight:"5px"}} src="/static/Calendar-white.png" alt="Calendar Icon" />Add To Calendar</Button>) : null}
                        {this.state.content.contactPastor ? (<Button style={{ fontFamily:"Graphik Web", fontSize:"1vw",marginTop: "1vw", color: "#ffffff", backgroundColor: "#000000", borderWidth:0, borderRadius: 0 }} onClick={this.navigate}><img style={{marginRight:"5px"}} src="/static/Contact-white.png" alt="Contact Icon" />Contact the Pastor</Button>) : null}

                    </div>
                     <div><img id="downArrow" style={{ opacity:this.state.arrowOpacity,cursor:"pointer" }} src="/static/svg/DownArrow.svg" className="downarrow animated bounce" alt="Down Arrow" onClick={()=>{this.scrollToNextPage()}} /> </div>

                </div>

            )
        }
        else if (this.state.content.style === "partialNoFooter") {

            return (
                <div className="partialNoFooter" >
                    {
                        image1.src.includes(".svg")?

                    <img src={image1.src} alt={image1.alt} className="partialNoFooterImage"/>:
                    <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="partialNoFooterImage"
                    srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                    this.imgUrl(480)+image1.src+" 480w,"+
                    this.imgUrl(640)+image1.src+" 640w,"+
                    this.imgUrl(1280)+image1.src+" 1280w,"+
                    this.imgUrl(1920)+image1.src+" 1920w,"+
                    this.imgUrl(2560)+image1.src+" 2560w"}
                    sizes="(max-width: 320px) 320px,
                           (max-width: 480px) 480px,
                           (max-width: 640px) 640px,
                           (max-width: 1280px) 1280px,
                           (max-width: 1920) 1920,
                            2560px"
                />

                    }
                    <div className="partialNoFooterBox" >
                        <h1 className="heroH1" >{this.state.content.header1}</h1>
                        {this.state.content.header2 && <h2 className="heroH2" >{this.state.content.header2}</h2>}
                        <hr style={{ marginLeft: 0, marginRight: 0, marginTop: "1.5vw", marginBottom: "1.5vw", width: "5vw", backgroundColor: "#ffffff" }}></hr>
                        <div className="heroText1">{this.state.content.text1}</div>
                        <div className="heroText1">{this.state.content.text2}</div>
                        <div className="heroText2">{this.state.content.text3}</div>
                        <div className="heroText2">{this.state.content.text4}</div>
                        <div className="heroText2">{this.state.content.text5}</div>
                        <div className="heroText2">{this.state.content.text6}</div>
                        <div className="heroText2">{this.state.content.text7}</div>
                        {this.state.content.showLocationSearch ? (
                            <div>
                                {this.state.locationData!=null?
                                <Select onChange={(item)=>{this.locationChange(item)}} 
                                placeholder="Search for a church by city" className="partialNoFooterLocationDropDown"  
                                options={this.state.locationData.map(
                                    (item:any)=>{
                                        return {label:item.name,value:item.id}}
                                    ).sort((a:any,b:any)=>{
                                        return a.label.localeCompare(b.label)
                                    })
                                    }></Select>
                              :null}
                            </div>):null}
                        {this.state.content.button1Text ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}>{this.state.content.button1Text}</Button>) : null}
                        <a style={{fontFamily:"Graphik Web",color:"#ffffff"}} href={this.state.content.link1Action}>{this.state.content.link1Text}</a>
                        {this.state.content.addToCalendar ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="/static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>) : null}
                        {this.state.content.contactPastor ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="/static/Contact.png" alt="Contact Icon" />Contact the Pastor</Button>) : null}

                    </div>
                </div>
            )
        }
        else if (this.state.content.style === "partial") {

            return (
                <div className="headerItem" style={{ position: "relative", left: "20vw", width: "80vw", height: "43vw", paddingBottom: "5vh" }}>
                     {
                        image1.src.includes(".svg")?
                    
                    <img src={image1.src} alt={image1.alt} className="partial"/>:
                    <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="partial"
                    srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                    this.imgUrl(480)+image1.src+" 480w,"+
                    this.imgUrl(640)+image1.src+" 640w,"+
                    this.imgUrl(1280)+image1.src+" 1280w,"+
                    this.imgUrl(1920)+image1.src+" 1920w,"+
                    this.imgUrl(2560)+image1.src+" 2560w"}
                    sizes="(max-width: 320px) 320px,
                           (max-width: 480px) 480px,
                           (max-width: 640px) 640px,
                           (max-width: 1280px) 1280px,
                           (max-width: 1920) 1920,
                            2560px"
                />
                     }
                    <div className="heroPartialBlackBox" >
                        <h1 className="heroH1" >{this.state.content.header1}</h1>
                        {this.state.content.header2 && <h2 className="heroH2">{this.state.content.header2}</h2>}
                        <hr className="heroHr"></hr>
                        <div className="heroText1" >{this.state.content.text1}</div>
                        <div className="heroText2" >{this.state.content.text2}</div>
                        <div className="heroText2" >{this.state.content.text3}</div>
                        <div className="heroText2" >{this.state.content.text4}</div>
                        <div className="heroText2" >{this.state.content.text5}</div>
                        <div className="heroText2" >{this.state.content.text6}</div>
                        <div className="heroText2" >{this.state.content.text7}</div>
                        {this.state.content.button1Text ? (<Button className="heroButton" onClick={this.navigate}>{this.state.content.button1Text}</Button>) : null}
                        <a style={{fontFamily:"Graphik Web"}} href={this.state.content.link1Action}>{this.state.content.link1Text}</a>
                        {this.state.content.addToCalendar ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="/static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>) : null}
                        {this.state.content.contactPastor ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="/static/Contact.png" alt="Contact Icon" />Contact the Pastor</Button>) : null}

                    </div>

                </div>
            )
        }
        else return null
    }
}


export default withRouter(HeroItem)
