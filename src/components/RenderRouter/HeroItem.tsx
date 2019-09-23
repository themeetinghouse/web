
import React from 'react';
import { Button } from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import PropTypes from "prop-types";
import "./HeroItem.scss"
interface Props extends RouteComponentProps {
    content: any

}
interface State {
    content: any
}
class HeroItem extends React.Component<Props, State> {
    static contextTypes = {
        router: PropTypes.object,
        history: PropTypes.object
    }
    constructor(props: Props, context: any) {
        super(props, context);
        console.log(context);
        this.state = {
            content: props.content
        }
        this.navigate = this.navigate.bind(this);
    }
    navigate() {
        this.props.history.push("spirituality", "as")
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
    return "http://heeetingouse-20190312104205-hostingbucket-dev.s3-website.us-east-1.amazonaws.com/cache/"+size
    }
    render() {
        var image1 = this.state.content.image1[Math.floor(Math.random() * this.state.content.image1.length)];
        if (this.state.content.style === "full") {

            return (
                <div className="headerItem" style={{ position: "relative", width: "100vw", height: "105vh", paddingBottom: "5vh" }}>
                    <div className="heroImageGradient" onClick={() => { this.scrollToNextPage() }}></div>
                    <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="heroImage"
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
                        {this.state.content.header2 && <h2 className="heroH2">{this.state.content.header2}</h2>}
                        <hr style={{ marginLeft: 0, marginRight: 0, marginTop: "1.5vw", marginBottom: "1.5vw", width: "5vw", backgroundColor: "#ffffff" }}></hr>
                        <div className="heroText1" >{this.state.content.text1}</div>
                        <div className="heroText2" >{this.state.content.text2}</div>
                        <div className="heroText2" >{this.state.content.text3}</div>
                        <div className="heroText2" >{this.state.content.text4}</div>
                        <div className="heroText2" >{this.state.content.text5}</div>
                        <div className="heroText2" >{this.state.content.text6}</div>
                        <div className="heroText2" >{this.state.content.text7}</div>
                        {this.state.content.button1Text ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}>{this.state.content.button1Text}</Button>) : null}
                        <a href={this.state.content.link1Action}>{this.state.content.link1Text}</a>
                        {this.state.content.addToCalendar ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="/static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>) : null}
                        {this.state.content.contactPastor ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="/static/Contact.png" alt="Contact Icon" />Contact the Pastor</Button>) : null}

                    </div>
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
                    <div style={{ position: "absolute", padding: "2vw", left: "5vw", width: "46vw", top: "6vh", zIndex: 100 }}>
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
                        {this.state.content.showLocationSearch ? (<div><input style={{fontFamily: "Graphik Web",padding:"4px",width:"40vw",marginTop:"2vw",marginBottom:"2vw"}} placeholder="Search for a church by city"></input></div>):null}
                        {this.state.content.button1Text ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}>{this.state.content.button1Text}</Button>) : null}
                        <a style={{color:"#ffffff"}} href={this.state.content.link1Action}>{this.state.content.link1Text}</a>
                        {this.state.content.addToCalendar ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="/static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>) : null}
                        {this.state.content.contactPastor ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="/static/Contact.png" alt="Contact Icon" />Contact the Pastor</Button>) : null}

                    </div>
                </div>
            )
        }
        else if (this.state.content.style === "partial") {

            return (
                <div className="headerItem" style={{ position: "relative", left: "20vw", width: "80vw", height: "43vw", paddingBottom: "5vh" }}>
                    <img src={image1.src} alt={image1.alt} className="example-mask" style={{ width: "80vw", height: "40vw", zIndex: 50, objectFit: "cover", position: "absolute" }} />
                </div>
            )
        }
        else return null
    }
}


export default withRouter(HeroItem)
