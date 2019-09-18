
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import PropTypes from "prop-types";
import "./LocationItem.scss"

interface Props extends RouteComponentProps {
    content: any

}
interface State {
    content: any
}
class LocationItem extends React.Component<Props, State> {
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

    render() {
        console.log("locations")
        return <div className="headerItem" style={{ position: "relative", width: "80vw", left:"20vw", height: "105vh", paddingBottom: "5vh" }}>
            {this.state.content.locations.map((item: string) => { return <div><a href={item}>{item}</a></div> })}
        </div>

    }
}


export default withRouter(LocationItem)
