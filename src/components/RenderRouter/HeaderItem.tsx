
import React from 'react';
import { Button } from 'reactstrap';
interface Props {
    content: any
}
interface State {
    content: any
}
export default class HeaderItem extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            content: props.content
        }
    }
    parallaxDetail = [200, 250];
    render() {
        const image1 = this.state.content.image1[Math.floor(Math.random() * this.state.content.image1.length)];

        return (
            <div className="headerItem">
                <div className="headerItemDiv">
                    <h1 className="header1H1" >{this.state.content.header1}</h1>
                    <h2>{this.state.content.header2}</h2>
                    <div className="headerText1" >{this.state.content.text1}</div>
                    <div className="headerText2" >{this.state.content.text2}</div>
                    <Button>{this.state.content.button1Text}</Button>
                    <a href={this.state.content.link1Action}>{this.state.content.link1Text}</a>
                    <img src={image1.src} alt={image1.alt} className="example-mask" style={{ maskImage: 'url("' + this.state.content.image1Mask + '")', WebkitMaskImage: 'url("' + this.state.content.image1Mask + '")', width: this.state.content.image1Width }} />
                </div>
            </div>
        )
    }
}
