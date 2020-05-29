
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


    navigate(to: string) {
        this.props.history.push(to, "as")
        const unblock = this.props.history.block('Are you sure you want to leave this page?');
        unblock();
    
      }
    render() {
        console.log("locations")
        return <div className="headerItem GoContentItem" >
            <div className="GoContentH1">Going beyond ourselves</div>
            <div className="GoContentH2">$6 Million</div>
            <div>
            This campaign is about being who we have always been and who God calls us to be: a community intentionally focused on others.  <br />
                 <br />
                 We have a history of radically and purposefully focusing on others so they can experience the Jesus-centred life. As the world changes, we realize that we need to be bold and invest in new and innovative ways of taking our evangelism and discipleship to the next level. <br />
                <br />
                Over the last two years, we have been listening to God, our community, and our neighbours – those close by and around the world – to understand how we can be even more effective as we introduce people to the Jesus-centred life. The projects, innovation, and technology funded by the Go Campaign will equip us as we evolve into a community that uses new and creative ways of engaging with those who have never meaningfully encountered the good news of Jesus. The campaign focuses on initiatives for people in <b>our church family</b>, such as Home Church revitalization and local site innovation, as well as <b>beyond our borders</b>, with projects like Jesus Collective and our Kids & Youth Curriculum. 
            </div>
            <div>
                <span className="GoContentSubItems">
                    <div className="GoContentSubH1">Our Church Family</div>
                    <div className="GoContentSubH2">$3 Million</div>
                    <div>
                    We can't do this alone. We are a movement of Jesus-centred churches, and we want to invest in each of these communities so that we will be equipped to connect with the spiritually curious in our neighbourhoods. This investment includes funding local innovation and creative church expressions, shaping and training the next generation of young leaders, and investing in new technology and communication tools to allow us to share our message in relevant ways. 
                    </div>
                    
                </span>
                <span className="GoContentSubItems">
                    <div className="GoContentSubH1">Beyond our Borders</div>
                    <div className="GoContentSubH2">$3 Million</div>
                    <div>As we listened to our community, locally and around the world, we recognized a clear opportunity and calling for The Meeting House to reach far beyond the borders of our current impact. This means embracing our role as a leader in a growing Anabaptist movement by working to unite, equip, and amplify a Jesus-centred movement through Jesus Collective. This also means widening the impact of our Kids & Youth Curriculum by preparing to share it in a sustainable way with churches around the world.</div>
                   
                </span>
            </div>
            <div className="GoContentClear">
            <div className="GoContentItemAContainer"><a className="GoContentItemA" href="/static/pdfs/go/TMH_GO_booklet_v7.pdf">Go Campaign Details</a></div>
            <div className="GoContentItemAContainer"><a className="GoContentItemA" href="/static/pdfs/go/Donor-FAQs-for-Go.pdf">Go Campaign FAQ</a></div>
            <div className="GoContentItemAContainer"><a className="GoContentItemA" href="https://www.jesuscollective.com">Learn more about Jesus Collective</a></div>
            <button onClick={() => this.navigate("go-choose")} className="GoContentButton">Pledge and Give</button>
            </div>
        </div>

    }
}


export default withRouter(LocationItem)
