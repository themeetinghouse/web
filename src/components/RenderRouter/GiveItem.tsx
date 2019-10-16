
import React from 'react';
import "./GiveItem.scss"

interface Props {
  content: any
}
interface State {
  content: any
}

export default class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content
    }
  }
  imgUrl(size: any) {
    if (window.location.hostname === "localhost")
      return "https://localhost:3006"
    else
      return "https://beta.themeetinghouse.com/cache/" + size
  }

  render() {
    return (<div className="giveItemDiv1" >
      <form>
      <h1>{this.state.content.header1}</h1>
      <h2>{this.state.content.header2}</h2>
      <hr />
      <div>{this.state.content.text1}</div>
      <div>
        <div>1. Choose your gift amount</div>
        <div>
          <button>$25</button>
          <button>$50</button>
          <button>$100</button>
          <button>$200</button>
          <button>Other amount</button>
        </div>
        <div>Gift this amount</div>
        <div>
          <input type="radio" name="frequency" value="one-time" />One-time
          <input type="radio" name="frequency" value="weekly" />Weekly
          <input type="radio" name="frequency" value="monthly" />Monthly
        </div>
      </div>
      <div>
        <div>2. Where would you like to give?</div>
        <div>
          <input type="radio" name="fund" value="general" />General Fund
          <input type="radio" name="fund" value="go-campaign" />GO Campaign Fund
          <input type="radio" name="fund" value="compassion" />Compassion Fund
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
      <button>Give Now</button>
      </form>
      <div>Other Ways to Give</div>
      <div>Bank Transfer</div>
      <div>Offering Envelopes</div>
      <div>Fellowship One</div>

      <div>Need help?</div>
      <div>donate@themeetinghouse.com</div>
    </div>)
  }
}
