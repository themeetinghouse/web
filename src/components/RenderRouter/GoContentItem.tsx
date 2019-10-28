
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import PropTypes from "prop-types";
import "./GoContentItem.scss"

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
        return <div className="headerItem GoContentItem" >
            <div className="GoContentH1">Going beyond ourselves</div>
            <div className="GoContentH2">$6 Million</div>
            <div>
                This campaign is about us being who we have always been and intentionally focusing on others. <br />
                <br />
                This is who God has called The Meeting House to be. <br />
                <br />
                We have a history of intentionally and radically focusing on others so they can experience the Jesus-centred life, but as the world changes we realize that we need to be bold and invest in innovative ways take our evangelism and discipleship focus to the next level. <br />
                <br />
                Over the last two years we have been listening to God, our community and our neighbours both close by and around the world, to understand how we can be even more effective as we introduce people to the Jesus-centred life. The innovation, technology and resources funded by the Go Campaign have been chosen to equip us to evolve into a community that can engage with people around us who have never meaningfully encountered the good news of Jesus, in new and creative ways. The campaign focuses on innovation and initiatives for people in <b>our church family</b>, such as Home Church revitalization and local site innovation, as well as <b>beyond our borders</b>, with initiatives like Jesus Collective and our kids and youth curriculum. <br />
            </div>
            <div>
                <span className="GoContentSubItems">
                    <div className="GoContentSubH1">Our Church Family</div>
                    <div className="GoContentSubH2">$3 Million</div>
                    <div>We can’t do this alone. We are a movement of Jesus-centred churches and we want to invest in these communities so that they will be equipped to connect with the spiritually curious in their local neighbourhoods. This investment includes funding local innovation and creative church expressions, shaping and training the next generation of young leaders, and investing in new technology and communication tools to allow us to share out and share our message in a relevant way. </div>
                    <div>Download PDF with more details</div>
                </span>
                <span className="GoContentSubItems">
                    <div className="GoContentSubH1">Beyond our Borders</div>
                    <div className="GoContentSubH2">$3 Million</div>
                    <div>As we listened to our community, locally and around the world, we recognized a clear opportunity and calling for The Meeting House to have an impact far beyond the borders of our current footprint. This means embracing our role as a leader in a growing anabaptist movement and helping to unite, equip and amplify a Jesus-centred movement through Jesus Collective. This also means taking the impact of our Kids & Youth Curriculum to the next level and preparing to share it sustainably to churches around the world.</div>
                    <div>Download PDF with more details</div>
                    <div>Learn more about Jesus Collective</div>
                </span>
            </div>
            <div className="GoContentClear">
            <button className="GoContentButton">Give Now</button>
            <button className="GoContentButton">Pledge</button>
            </div>
        </div>

    }
}


export default withRouter(LocationItem)
