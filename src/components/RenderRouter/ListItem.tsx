
import React from 'react';
import { Button } from 'reactstrap';
interface Props {
  data: any
}
interface State {
  data: any
}
export default class ListItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: props.data
    }
  }
  parallaxDetail = [-50, 0];
  render() {

    if (this.state.data.style === "text") return (
      <div className="ListItem text">
        <h1>{this.state.data.header1}</h1>
        <div>List TBD</div>
        <Button>{this.state.data.button1Text}</Button>
      </div>
    )
    else if (this.state.data.style === "images") return (
      <div className="ListItem images">
        <h1>{this.state.data.header1}</h1>
        <h2>{this.state.data.header2}</h2>
        <div>{this.state.data.text1}</div>
        <div>List TBD</div>
        <Button>{this.state.data.button1Text}</Button><Button>{this.state.data.button2Text}</Button>
      </div>
    )
    else if (this.state.data.style === "horizontal") return (
      <div className="ListItem horizontal" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 100 }}>
          <h1 style={{ position: "relative", left: "20vw", width:"80vw",fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
          <div style={{ position: "relative", left: "20vw",width:"80vw" }}>
            <div style={{ float: "left" }}>
              <img alt="TBD" style={{ width: "20vw", marginRight: "1vw" }} src="./static/images/teaching-3.png" />
              <div style={{ fontWeight: "bold" }}>Praying Like Jesus</div>
              <div>July 1, 1999</div>
            </div>
            <div style={{ float: "left" }}>
              <img alt="TBD" style={{ width: "20vw", marginRight: "1vw" }} src="./static/images/teaching-3.png" />
              <div style={{ fontWeight: "bold" }}>Praying Like Jesus</div>
              <div>July 1, 1999</div>
            </div>
            <div style={{ clear: "left" }} ></div>
          </div>
        </div>
      </div>
    )
    else if (this.state.data.style === "horizontalBig") return (
      <div className="ListItem horizontalBig" style={{ position: "static", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", zIndex: 100 }}>
          <h1 style={{ position: "relative", left: "20vw", width:"80vw",fontWeight: "bold", fontSize: "3vw" }}>{this.state.data.header1}</h1>
          <div style={{ position: "relative", left: "20vw",width:"80vw"}}>
            <div style={{ float: "left" }}>
              <img alt="TBD" style={{ width: "20vw", marginRight: "1vw" }} src="./static/images/teaching-4.png" />
              <div style={{ fontWeight: "bold" }}>Faithful One</div>
              <div>2019 • 4 Episodes</div>
            </div>
            <div style={{ float: "left" }}>
              <img alt="TBD" style={{ width: "20vw", marginRight: "1vw" }} src="./static/images/teaching-4.png" />
              <div style={{ fontWeight: "bold" }}>Faithful One</div>
              <div>2019 • 4 Episodes</div>
          </div>
            <div style={{ clear: "left" }} ></div>

          </div>
        </div>
      </div>
    )
    else if (this.state.data.style === "imageList") return (
      <div className="ListItem imageList" style={{ position: "static", width: "50vw", paddingBottom: "5vw" }}>
        <div style={{ position: "relative", left: "20vw", width: "50vw", zIndex: 100 }}>
          <h1>{this.state.data.header1}</h1>
          <h2>{this.state.data.header2}</h2>
          <div style={{ width: "50vw" }}>{this.state.data.text1}</div>
          <div>
            {
              this.state.data.list.map((item: any, index: any) => {
                return (
                  <div style={{ width: "50vw" }} key={index}>
                    <h3 style={{ width: "50vw" }}>{item.title}</h3>
                    <div style={{ width: "50vw" }}>{item.text}</div>
                    <img src={item.imageSrc} alt={item.imageAlt} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
    return (null)
  }
}