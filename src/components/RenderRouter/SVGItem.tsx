
import React from 'react';
import Lottie from 'react-lottie';
interface Props{
  data:any,
}
interface State {
  data:any,
  animationData:any,
  isStopped:boolean,
  isPaused:boolean
}
export default class ContentItem extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      data: props.data,
      animationData: null,
      isStopped: false, 
      isPaused: false

    }
    fetch('static/svg/test_svg/data.json').then(function (response) {
      return response.json();
    })
      .then((myJson) => {
        this.setState({ animationData: myJson });
      })
  }
  renderSVG() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: this.state.animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    if (this.state.animationData != null)
      return (<Lottie options={defaultOptions}
        
        width={"100vw"}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused} />)
    else
      return null
  }
  render() {
    if (this.state.data.style === "full") return (
      <div className="SVGItem full" style={{ position: "static", paddingLeft: "0vw",paddingBottom: "5vw" }}>
        {this.renderSVG()}
      </div>
    )



    return (null)
  }
}