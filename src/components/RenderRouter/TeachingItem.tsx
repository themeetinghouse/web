
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from "prop-types";
interface Props extends RouteComponentProps {
    content: any

}
interface State {
    content: any
}
class TeachingItem extends React.Component<Props, State> {
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
        console.log("navigate")
        console.log(this.props.history)
        this.props.history.push("spirituality", "as")
        const unblock = this.props.history.block('Are you sure you want to leave this page?');
        unblock();

    }
    //
    render() {
        if (this.state.content.style === "hero") {
            return (
                <div className="headerItem" style={{ position: "relative", left: "20vw", width: "80vw", height: "55vw", paddingBottom: "5vh" }}>
                    <h1 style={{ position:"relative",top:"3vw",fontSize:"3vw",fontWeight: "bold" }}>{this.props.content.header1}</h1>
                    <div style={{ padding:"3vw", paddingRight:"15vw",position: "absolute", left: "5vw", width: "50vw", top:"10vw",height: "40vw", backgroundColor: "#000000", color: "#ffffff" }}>
                        <div style={{padding:"0.5vw",color: "#C8C8C8"}}>June 9, 2019</div>
                        <div style={{padding:"0.5vw",fontSize:"2.5vw",fontWeight:"bold",color: "#ffffff"}}>Water from the Rock</div>
                        <div style={{padding:"0.5vw",color: "#C8C8C8"}}>E2. <a href="">Jesus by John</a>  •  56m</div>
                        <div style={{padding:"0.5vw",color: "#C8C8C8"}}> We discuss our human tendency to intellectually spectate rather than truly connect with Jesus through the Holy Spirit.</div>
                        <div style={{position:"absolute",bottom:"5vw"}}><Button >Watch</Button></div>
                        <div><img alt="TBD" style={{position:"absolute",top:"5vw",left:"35vw",width:"40vw"}} src="./static/images/teaching-1.png" /></div>
                    </div>
                    <div style={{ position: "absolute", left: "2vw", top: "50vw",transform: 'rotate(-90deg)',transformOrigin: "left top 0" }}>Most recent</div>
                    <div style={{ position: "absolute", right: "78vw", textAlign:"right", width:"20vw",top: "10vw",transform: 'rotate(-90deg)',transformOrigin: "right top 0" }}><a style={{margin:"1vw"}} href="">Oakville</a><a href="">Regional</a></div>

                </div>
            )
        }
        else return null
    }
}


export default withRouter(TeachingItem)
