
import React from 'react';
import "./GiveItem.scss"

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
  renderPushPay() {
    return <div className="GiveItemGreyBox">
      Text <b>TMH</b> to <b>77977*</b><br />
      OR<br />
      <a href="https://pushpay.com/g/themeetinghouse?src=hpp">Use a Credit Card</a><br /><br />

      *When you text 'TMH' to 77977 you will receive a one time reply containing a link to give to The Meeting House (1msg/request). Please be aware that Msg & Data rates may apply. For full Terms & Conditions please visit <a href="pushpay.com/terms">pushpay.com/terms</a>. For the Privacy Policy please visit <a href="pushpay.com/privacy">pushpay.com/privacy</a>. For help reply HELP or STOP to cancel.
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
      <b>Pre-Authorized Withdrawal</b><br />
      If you would like to give regularly, your gifts can be deducted directly from your bank account. It’s convenient, easy, and the most cost effective way to give to The Meeting House.<br />
      1. Please complete this form.<br />
      2. Drop it into the offering basket with a VOID cheque, or mail to:<br />
      The Meeting House Donations<br />
      2700 Bristol Circle<br />
      Oakville, ON L6H 6E1<br />
      3. Need to change? Click here to modify your gift.<br />
      <br />
      <b>Web Banking</b><br />
      To give through your bank, you will need an account number. It’s the same as your donations envelopes. If you do not have an account number, request one here.<br />
      1. Go to the “Bill Pay” section of your online banking<br />
      2. Set up a new payee as “The Meeting House” (It may display as The Meeting House Church Family)<br />
      3. If your account number is less than five digits, enter zeros ahead of your number to make it the correct length.<br />
      4. Using your five-digit account number in place of the asterisks, select which fund you wish to donate to:<br />
      General Fund: *****GEN<br />
      Growth Fund: *****GRW<br />
      Compassion Fund *****COM<br />
      5. Select the amount and frequency of your gifts and submit<br />
    </div>
  }
  renderOfferingEnvelopes() {
    return <div className="GiveItemGreyBox">
      Form is being made...
    </div>
  }
  renderFellowshipOne() {
    return <div className="GiveItemGreyBox">
      Update your personal contact information through your <a href="https://meetinghouse.infellowship.com/UserLogin/">InFellowship</a> account.
If you don't have an InFellowship account, you can create one <a href="https://meetinghouse.infellowship.com/UserLogin">here</a>.
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
              <div className="GiveItemOtherWay"><a href="" onClick={(e: any) => { this.setState({ currentPage: "OnlineBanking" }); e.preventDefault() }}>Online Banking</a></div>
            }
            {this.state.currentPage === "OfferingEnvelopes" ? null :
              <div className="GiveItemOtherWay"><a href="" onClick={(e: any) => { this.setState({ currentPage: "OfferingEnvelopes" }); e.preventDefault() }}>Offering Envelopes</a></div>
            }
            {this.state.currentPage === "FellowshipOne" ? null :
              <div className="GiveItemOtherWay"><a href="" onClick={(e: any) => { this.setState({ currentPage: "FellowshipOne" }); e.preventDefault() }}>Fellowship One</a></div>
            }
            {this.state.currentPage === "PushPay" ? null :
              <div className="GiveItemOtherWay"><a href="" onClick={(e: any) => { this.setState({ currentPage: "PushPay" }); e.preventDefault() }}>Push Pay</a></div>
            }  </div>
          <div className="GiveItemNeedHelpGroup">
            <div className="GiveItemNeedHelp">Need help?</div>
            <div className="GiveItemNeedHelpEmail">donate@themeetinghouse.com</div>
          </div>
          <div style={{ clear: "both" }}></div>
        </form>

      </div >)
  }
}
