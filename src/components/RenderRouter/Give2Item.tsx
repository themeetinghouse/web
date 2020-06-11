
import React from 'react';
import "./Give2Item.scss"
import { Button } from 'reactstrap';
interface Props {
  content: any
}
interface State {
  content: any
  currentPage: any
}

export default class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      currentPage: "PushPay"
    }
  }
  imgUrl(size: any) {
    if (window.location.hostname === "localhost")
      return "https://localhost:3006"
    else if (window.location.hostname.includes("beta"))
      return "https://beta.themeetinghouse.com/cache/"+size
    else
      return "https://www.themeetinghouse.com/cache/"+size
  }
  
  navigateUrl(to: string) {
    console.log(to)
    window.location.href = to;
  }
  renderPushPay() {
    return <div>
      
    </div>
  }
  renderPushPay2() {
    return <div className="GiveItemGreyBox">
      <iframe
        src={"https://pushpay.com/g/themeetinghouse"}
        title="The Meeting House - Forms"
        scrolling="yes" className="FormId" style={{ height: "75vh" }}></iframe>

    </div>
  }
  renderRequestAccountNumber() {
    return <div >
      <iframe
        src={"https://meeting.formstack.com/forms/request_account_number"}
        title="The Meeting House - Forms"
        scrolling="yes" className="GiveFormId" style={{ height: "75vh" }}></iframe>

    </div>
  }
  render() {
    return (
      <div className="giveItemDiv1" >
        <form >
          <h1 className="GiveItemH1">{this.state.content.header1}</h1>
          <h2 className="GiveItemH2">{this.state.content.header2}</h2>
          <hr className="GiveItemHR" />
          <div className="GiveItemText">{this.state.content.text1}</div>
          <div className="GiveItemText">{this.state.content.text2}</div>
          <div className="GiveItemText">{this.state.content.text3}</div>
          <div className="GiveItemText">{this.state.content.text4}</div>
          <div className="GiveItemText">{this.state.content.text5}</div>
          <Button className="GiveButton" onClick={() => { this.navigateUrl("go-pledge") }}>Pledge Now</Button>
          <Button className="GiveButton" onClick={() => { this.navigateUrl("go-give") }}>Give Without Pledging</Button>
          <div className="GiveItemBottom"></div>
        </form>

      </div >)
  }
}
