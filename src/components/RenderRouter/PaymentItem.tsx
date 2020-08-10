
import React from 'react';
import "./PaymentItem.scss"
import { Button } from 'reactstrap';
//const monerisCheckout=require("https://gatewayt.moneris.com/chkt/js/chkt_v1.00.js")

import ReactGA from 'react-ga';
if (window.location.hostname === "localhost")
  ReactGA.initialize('UA-4554612-19');
else if (window.location.hostname.includes("beta"))
  ReactGA.initialize('UA-4554612-19');
else
  ReactGA.initialize('UA-4554612-3');

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
      currentPage: "PushPayCustom"
    }
  }
  imgUrl(size: any) {
    if (window.location.hostname === "localhost")
      return "https://localhost:3006"
    else if (window.location.hostname.includes("beta"))
      return "https://beta.themeetinghouse.com/cache/" + size
    else
      return "https://www.themeetinghouse.com/cache/" + size
  }

  renderPushPayCustom() {

    //    const myCheckout = new this.monerisCheckout();
    //  myCheckout.setMode("qa");
    //myCheckout.setCheckoutDiv("monerisCheckout");

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
        <div id="outerDiv" style={{ width: "400px", height: "300px" }}>
          <div id="monerisCheckout"></div>
        </div>
        <button className="GiveItemButton">Give Now</button>


      </div >
    )
  }
  myErrorEvent = () => {
    return null
  }
  request = {
    "store_id": "moneris",
    "api_token": "chktLZAMGtore3",
    "checkout_id": "chkt5BF66neris",
    "txn_total": "452.00",
    "environment": "qa",
    "action": "preload",
    "order_no": "",
    "cust_id": "chkt - cust - 0303",
    "dynamic_descriptor": "dyndesc",
    "language": "en",
    "recur": {
      "bill_now": "true",
      "recur_amount": "1.00",
      "start_date": "2020-1-1",
      "recur_unit": "month",
      "recur_period": "1",
      "number_of_recurs": "10"
    },
    "cart": {
      "items": [
        {
          "url": "https:\/\/example.com\/examples\/item1.jpg",
          "description": "One item",
          "product_code": "one_item",
          "unit_cost": "100.00",
          "quantity": "1"
        },
        {
          "url": "https:\/\/example.com\/examples\/item2.jpg",
          "description": "Two item",
          "product_code": "two_item",
          "unit_cost": "200.00",
          "quantity": "1"
        },
        {
          "url": "https:\/\/example.com\/examples\/item3.jpg",
          "description": "Three item",
          "product_code": "three_item",
          "unit_cost": "100.00",
          "quantity": "1"
        }
      ],
      "subtotal": "400.00",
      "tax": {
        "amount": "52.00",
        "description": "Taxes",
        "rate": "13.00"
      }
    },
    "contact_details": {
      "first_name": "bill",
      "last_name": "smith",
      "email": "test@moneris.com",
      "phone": "4165551234"
    },
    "shipping_details": {
      "address_1": "1 main st",
      "address_2": "Unit 2012",
      "city": "Toronto",
      "province": "ON",
      "country": "CA",
      "postal_code": "M1M1M1"
    },
    "billing_details": {
      "address_1": "1 main st",
      "address_2": "Unit 2000",
      "city": "Toronto",
      "province": "ON",
      "country": "CA",
      "postal_code": "M1M1M1"
    }
  }
  url = "https://gatewayt.moneris.com/chkt/request/request.php"
  async startPayment() {
    const response = await fetch(this.url, {
      method: 'POST',
      mode: 'cors',
      headers: {

        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
        'Access-Control-Max-Age': '86400',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(this.request)
    })
    console.log(response)
    const script = document.createElement('script');
    script.setAttribute('id', 'monerisCheckoutEmbed');
    script.onload = function () {
      const newScript = document.createElement('script');
      const inlineScript = document.createTextNode('var myCheckout = new monerisCheckout(); \
      myCheckout.setMode("qa"); \
      myCheckout.setCheckoutDiv("monerisCheckout"); \
      myCheckout.setCallback("page_loaded", this.myPageLoad); \
      myCheckout.setCallback("cancel_transaction", this.myCancelTransaction); \
      myCheckout.setCallback("error_event", this.myErrorEvent); \
      myCheckout.setCallback("payment_receipt", this.myPaymentReceipt); \
      myCheckout.setCallback("payment_complete", this.myPaymentComplete); \
      ');
      newScript.setAttribute('id', 'monerisCheckout');
      newScript.appendChild(inlineScript);
      document.getElementsByTagName('head')[0].appendChild(newScript);

    };

    script.src = "https://gatewayt.moneris.com/chkt/js/chkt_v1.00.js";
    document.getElementsByTagName('head')[0].appendChild(script);

  }
  UNSAFE_componentWillMount() {
    this.startPayment()
  }
  componentWillUnmount() {
    const monerisCheckoutEmbed = document.getElementById('monerisCheckoutEmbed');
    const monerisCheckout = document.getElementById('monerisCheckout');
    if (monerisCheckoutEmbed && monerisCheckout) {
      monerisCheckoutEmbed.remove();
      monerisCheckout.remove();
    }
  }
  navigateUrl(to: string) {
    console.log(to)
    window.location.href = to;
  }
  navigateUrlNewWindow(to: string) {
    window.open(
      to,
      '_blank', // <- This is what makes it open in a new window.
      'noopener noreferrer'
    );
  }
  renderPushPay() {
    return <div>
      <Button className="GiveButton" onClick={() => { this.navigateUrlNewWindow("https://pushpay.com/g/themeetinghouse?src=hpp") }}>GIVE NOW</Button>
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
      <ul className="GiveItem">
        <li>To set up your giving as a bill payment through online banking:</li>
        <ul className="GiveItemNumber">
          <li>Locate your Meeting House account number, found on your donations envelope. Don&apos;t have an account number? <button className="GiveItemOtherWayLink" onClick={() => { this.setState({ currentPage: "RequestAccountNumber" }) }}>Request one</button>.</li>
          <li>Login to your online banking, and select the Bill Payment option.</li>
          <li>Set up a new payee as “The Meeting House” (it may display as The Meeting House Church Family).</li>
          <li>Enter your account number, followed by one of the three digit codes below to indicate which fund you would like to donate to. If your account number is less than 5 digits, enter zeros in front of of your number to make it the correct length</li>
          <ul className="GiveItem">
            <li>General Fund: #####GEN</li>
            <li>Go Fund: #####GOF</li>
            <li>Compassion Fund #####COM</li>
          </ul>
          <li>Select the amount and frequency of your gift and submit.</li>
        </ul>
        <li>Note: If you would like to make a donation to multiple funds, you must set each up as a separate bill payment.</li>
      </ul>

      <b>Pre-Authorized Withdrawal</b><br />
      <ul className="GiveItem">
        <li>To have your giving deducted directly from your bank account:</li>
        <ul className="GiveItem">
          <li>Complete <button className="GiveItemOtherWayLink" onClick={() => { this.setState({ currentPage: "PreAuthorizedWithdrawl" }) }}>this form</button> online. You will need your branch, transit, and account number.</li>

        </ul>
      </ul>
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
      You can give with credit or debit card through your  <a target="_blank" rel="noopener noreferrer" href="https://meetinghouse.infellowship.com/UserLogin/">Meeting House account</a>.<br />
      If you don&apos;t have a Meeting House account, you can <a target="_blank" rel="noopener noreferrer" href="https://meetinghouse.infellowship.com/UserLogin/New">create one</a>.
    </div>
  }
  renderPreAuthorizedWithdrawl() {
    return <div >
      <iframe
        src={"https://meeting.formstack.com/forms/preauthorized_withdrawal_form"}
        title="The Meeting House - Forms"
        scrolling="yes" className="GiveFormId" style={{ height: "75vh" }}></iframe>

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
          {this.renderPushPay()}
          {
            this.state.currentPage === "PushPayCustom" ?
              this.renderPushPayCustom() :
              this.state.currentPage === "FellowshipOne" ?
                this.renderFellowshipOne() :
                this.state.currentPage === "OfferingEnvelopes" ?
                  this.renderOfferingEnvelopes() :
                  this.state.currentPage === "OnlineBanking" ?
                    this.renderOnlineBanking() :
                    this.state.currentPage === "PreAuthorizedWithdrawl" ?
                      this.renderPreAuthorizedWithdrawl() :
                      this.state.currentPage === "RequestAccountNumber" ?
                        this.renderRequestAccountNumber() :
                        null
          }
          <div className="GiveItemOtherWayGroup">
            <div className="GiveItemOtherWays">Other Ways to Give</div>
            {this.state.currentPage === "OnlineBanking" ?
              <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton2" onClick={() => { ReactGA.modalview('/give/PushPay'); this.setState({ currentPage: "PushPay" }) }}>Online Banking</button></div>
              : null
            }
            {this.state.currentPage === "OnlineBanking" ? null :
              <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton" onClick={() => { ReactGA.modalview('/give/OnlineBanking'); this.setState({ currentPage: "OnlineBanking" }) }}>Online Banking</button></div>
            }

            {this.state.currentPage === "FellowshipOne" ?
              <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton2" onClick={() => { ReactGA.modalview('/give/PushPay'); this.setState({ currentPage: "PushPay" }) }}>TMH Account</button></div>
              : null
            }
            {this.state.currentPage === "FellowshipOne" ? null :
              <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton" onClick={() => { ReactGA.modalview('/give/FellowshipOne'); this.setState({ currentPage: "FellowshipOne" }) }}>TMH Account</button></div>
            }
          </div>
          <div className="GiveItemNeedHelpGroup">
            <div className="GiveItemOtherWays">2019 Tax Receipt</div>
            <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton" onClick={() => { this.navigateUrlNewWindow("https://meetinghouse.infellowship.com/UserLogin") }}>{"Login & Download"}</button></div>
          </div>

          <div style={{ clear: "both" }}></div>
          <div className="GiveItemNeedHelpGroup">
            <div className="GiveItemNeedHelp">Need help?</div>
            <div className="GiveItemNeedHelpEmail">Please email Rachel at <a className="GiveItemOtherWayButton" href="mailto:donate@themeetinghouse.com">donate@themeetinghouse.com</a></div>
          </div>
          <div className="GiveItemOtherWayGroup">
            <div className="GiveItemOtherWays">Give To Extended Family</div>
            <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton" onClick={() => { this.navigateUrlNewWindow("https://tithe.ly/give_new/www/#/tithely/give-one-time/674673") }}>Alliston</button></div>
            <div className="GiveItemOtherWay"><button className="GiveItemOtherWayButton" onClick={() => { this.navigateUrlNewWindow("https://www.canadahelps.org/en/charities/west-lake-community-church/") }}>Sandbanks</button></div>

          </div>
          <div className="GiveItemBottom"></div>
        </form>

      </div >)
  }
}
