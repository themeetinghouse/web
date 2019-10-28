
import React from 'react';
import "./GiveItem.scss"
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
    else
      return "https://beta.themeetinghouse.com/cache/" + size
  }
  renderPushPayCustom() {
    return (
      <div className="GiveItemGreyBox">
        <div>
          <div>1. Choose your gift amount</div>
          <div>
            <button className="GiveItemButton">$25</button>
            <button className="GiveItemButton">$50</button>
            <button className="GiveItemButton">$100</button>
            <button className="GiveItemButton">$200</button>
            <button className="GiveItemButton">Other amount</button>
          </div>
          <div>Gift this amount</div>
          <div>
            <div><input type="radio" name="frequency" value="one-time" />One-time</div>
            <div><input type="radio" name="frequency" value="weekly" />Weekly</div>
            <div><input type="radio" name="frequency" value="monthly" />Monthly</div>
          </div>
        </div>
        <div>
          <div>2. Where would you like to give?</div>
          <div>
            <div><input type="radio" name="fund" value="general" />General Fund</div>
            <div><input type="radio" name="fund" value="go-campaign" />GO Campaign Fund</div>
            <div><input type="radio" name="fund" value="compassion" />Compassion Fund</div>
          </div>
        </div>
        <div>
          <div>3. Enter your personal information <div>SECURE FORM</div></div>
          <input placeholder="Full Name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Street Address"></input>
          <input placeholder="City"></input>
          <input placeholder="Country"></input>
          <input placeholder="Province/State"></input>
          <input placeholder="Postal/Zip Code"></input>
        </div>
        <div>
          <div>4. Enter your payment information <div>SECURE FORM</div></div>
          <input placeholder="Credit Card Number"></input>
          <input placeholder="Expiry"></input>
          <input placeholder="CVC"></input>
        </div>
        <button className="GiveItemButton">Give Now</button>


      </div>
    )
  }
  navigateUrl(to: string) {
    console.log(to)
    window.location.href = to;
  }
  renderPushPay() {
    return <div>
      <Button className="GiveButton" onClick={() => { this.navigateUrl("https://pushpay.com/g/themeetinghouse?src=hpp") }}>Give Now</Button>
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
  renderOnlineBanking() {
    return <div className="GiveItemGreyBox">
      <b>Web Banking</b><br />
      To set up your giving as a bill payment through online banking:<br />
      Locate your Meeting House account number, found on your donations envelope. Don’t have an account number? Request one here.<br />
      Login to your online banking, and select the Bill Payment option.<br />
      Set up a new payee as “The Meeting House” (it may display as The Meeting House Church Family).<br />
      Enter your account number, followed by one of the three digit codes below to indicate which fund you would like to donate to. If your account number is less than 5 digits, enter zeros in front of of your number to make it the correct length<br />
      General Fund: #####GEN<br />
      Go Fund: #####GOF<br />
      Compassion Fund #####COM<br />
      Select the amount and frequency of your gift and submit.<br />
      Note: If you would like to make a donation to multiple funds, you must set each up as a separate bill payment.<br /><br />





      <b>Pre-Authorized Withdrawal</b><br />
      To have your giving deducted directly from your bank account:<br />
      Complete this form online. You will need your branch, transit, and account number.<br />
      <br />
      OR <br />
      <br />
      Print then complete this form. Drop it into the offering bucket with a VOID cheque, or mail to:<br />
      The Meeting House Donations<br />
      2700 Bristol Circle<br />
      Oakville, ON L6H 6E1<br />
      <br />
      Need to make a change? Click here to modify your gift.<br />
      <br />

    </div>
  }
  renderOfferingEnvelopes() {
    return <div >
              <iframe
            src={"https://meeting.formstack.com/forms/request_offering_envelopes_form"}
            title="The Meeting House - Forms"
            scrolling="yes" className="GiveFormId" style={{ height: "75vh" }}></iframe>

    </div>
  }
  renderFellowshipOne() {
    return <div className="GiveItemGreyBox">
      Update your personal contact information through your <a href="https://meetinghouse.infellowship.com/UserLogin/">Meeting House</a> account.<br />
      If you don't have an Meeting House account, you can create one <a href="https://meetinghouse.infellowship.com/UserLogin">here</a>.
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
          {
            this.state.currentPage === "PushPay" ?
              this.renderPushPay() :
              this.state.currentPage === "PushPayCustom" ?
                this.renderPushPayCustom() :
                this.state.currentPage === "FellowshipOne" ?
                  this.renderFellowshipOne() :
                  this.state.currentPage === "OfferingEnvelopes" ?
                    this.renderOfferingEnvelopes() :
                    this.state.currentPage === "OnlineBanking" ?
                      this.renderOnlineBanking() :
                      null
          }
          <div className="GiveItemOtherWayGroup">
            <div className="GiveItemOtherWays">Other Ways to Give</div>
            {this.state.currentPage === "OnlineBanking" ? null :
              <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton" onClick={() => { this.setState({ currentPage: "OnlineBanking" }) }}>Online Banking</button></div>
            }
            {this.state.currentPage === "OfferingEnvelopes" ? null :
              <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton" onClick={() => { this.setState({ currentPage: "OfferingEnvelopes" }) }}>Offering Envelopes</button></div>
            }
            {this.state.currentPage === "FellowshipOne" ? null :
              <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton" onClick={() => { this.setState({ currentPage: "FellowshipOne" }) }}>Fellowship One</button></div>
            }
            {this.state.currentPage === "PushPay" ? null :
              <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton" onClick={() => { this.setState({ currentPage: "PushPay" }) }}>Push Pay</button></div>
            }  </div>
          <div className="GiveItemNeedHelpGroup">
            <div className="GiveItemNeedHelp">Need help?</div>
            <div className="GiveItemNeedHelpEmail"><a className="GiveItemOtherWayButton" href="mailto:donate@themeetinghouse.com">donate@themeetinghouse.com</a></div>
          </div>
          <div style={{ clear: "both" }}></div>
        </form>

      </div >)
  }
}
