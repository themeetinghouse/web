
import React from 'react';
import { Button } from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import PropTypes from "prop-types";
interface Props extends RouteComponentProps {
    data: any

}
interface State {
    data: any
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
            data: props.data
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

    render() {
        var image1 = this.state.data.image1[Math.floor(Math.random() * this.state.data.image1.length)];
        if (this.state.data.style === "full") {

            return (
                <div className="headerItem" style={{ position: "relative", width: "100vw", height: "105vh", paddingBottom: "5vh" }}>
                    <div className="heroImageGradient" onClick={() => { this.scrollToNextPage() }}></div>
                    <img src={image1.src} alt={image1.alt} className="heroImage" />
                    <div style={{ position: "absolute", backgroundColor: "#000000", padding: "2vw", left: "20vw", width: "36vw", top: "30vh", zIndex: 100 }}>
                        <h1 style={{ fontFamily: "Graphik Web", fontWeight: "bold", color: "#ffffff", fontSize: "3vw" }}>{this.state.data.header1}</h1>
                        {this.state.data.header2 && <h2>{this.state.data.header2}</h2>}
                        <hr style={{ marginLeft: 0, marginRight: 0, marginTop: "1.5vw", marginBottom: "1.5vw", width: "5vw", backgroundColor: "#ffffff" }}></hr>
                        <div style={{ fontFamily: "Graphik Web", width: "32vw", color: "#ffffff", fontSize: "1.5vw" }}>{this.state.data.text1}</div>
                        <div style={{ fontFamily: "Graphik Web", width: "32vw", color: "#ffffff", fontSize: "1vw" }}>{this.state.data.text2}</div>
                        <div style={{ fontFamily: "Graphik Web", width: "32vw", color: "#ffffff", fontSize: "1vw" }}>{this.state.data.text3}</div>
                        <div style={{ fontFamily: "Graphik Web", width: "32vw", color: "#ffffff", fontSize: "1vw" }}>{this.state.data.text4}</div>
                        <div style={{ fontFamily: "Graphik Web", width: "32vw", color: "#ffffff", fontSize: "1vw" }}>{this.state.data.text5}</div>
                        <div style={{ fontFamily: "Graphik Web", width: "32vw", color: "#ffffff", fontSize: "1vw" }}>{this.state.data.text6}</div>
                        <div style={{ fontFamily: "Graphik Web", width: "32vw", color: "#ffffff", fontSize: "1vw" }}>{this.state.data.text7}</div>
                        {this.state.data.button1Text ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}>{this.state.data.button1Text}</Button>) : null}
                        <a href={this.state.data.link1Action}>{this.state.data.link1Text}</a>
                        {this.state.data.addToCalendar ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="./static/Calendar.png" alt="Calendar Icon" />Add To Calendar</Button>) : null}
                        {this.state.data.contactPastor ? (<Button style={{ marginTop: "1.5vw", color: "#000000", backgroundColor: "#ffffff", borderRadius: 0 }} onClick={this.navigate}><img src="./static/Contact.png" alt="Contact Icon" />Contact the Pastor</Button>) : null}

                    </div>
                </div>

            )
        }
        else if (this.state.data.style === "partialNoFooter") {

            return (
                <div className="headerItem" style={{ position: "relative", left: "20vw", width: "80vw", height: "38vw", paddingBottom: "0vh" }}>
                    <img src={image1.src} alt={image1.alt} className="example-mask" style={{ width: "80vw", height: "40vw", zIndex: 50, objectFit: "cover", position: "absolute" }} />
                </div>
            )
        }
        else if (this.state.data.style === "partial") {

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
