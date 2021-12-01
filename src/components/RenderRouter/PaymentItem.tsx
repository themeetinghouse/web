import React from 'react';
import './PaymentItem.scss';
import ReactGA from 'react-ga';
import { LinkButton, Link } from 'components/Link/Link';

//const monerisCheckout=require("https://gatewayt.moneris.com/chkt/js/chkt_v1.00.js")

if (window.location.hostname === 'localhost')
  ReactGA.initialize('UA-4554612-19');
else if (window.location.hostname.includes('beta'))
  ReactGA.initialize('UA-4554612-19');
else ReactGA.initialize('UA-4554612-3');

interface Props {
  content: any;
}
interface State {
  content: any;
  currentPage: any;
}

export default class ContentItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      currentPage: 'PushPayCustom',
    };
  }
  imgUrl(size: any) {
    if (window.location.hostname === 'localhost')
      return 'https://localhost:3006';
    else if (window.location.hostname.includes('beta'))
      return 'https://beta.themeetinghouse.com/cache/' + size;
    else return 'https://www.themeetinghouse.com/cache/' + size;
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
            <div>
              <input type="radio" name="frequency" value="one-time" />
              One-time
            </div>
            <div>
              <input type="radio" name="frequency" value="weekly" />
              Weekly
            </div>
            <div>
              <input type="radio" name="frequency" value="monthly" />
              Monthly
            </div>
          </div>
        </div>
        <div>
          <div>2. Where would you like to give?</div>
          <div>
            <div>
              <input type="radio" name="fund" value="prod_KInCIvOsifKMlP" />
              General Fund
            </div>
            <div>
              <input type="radio" name="fund" value="prod_KInZRDoUXidWHj" />
              GO Campaign Fund
            </div>
            <div>
              <input type="radio" name="fund" value="prod_KInaLwdyfHnFNR" />
              Compassion Fund
            </div>
          </div>
        </div>
        <div>
          <div>
            3. Enter your personal information <div>SECURE FORM</div>
          </div>
          <input placeholder="Full Name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Street Address"></input>
          <input placeholder="City"></input>
          <input placeholder="Country"></input>
          <input placeholder="Province/State"></input>
          <input placeholder="Postal/Zip Code"></input>
        </div>
        <div>
          <div>
            4. Enter your payment information <div>SECURE FORM</div>
          </div>
          <input placeholder="Credit Card Number"></input>
          <input placeholder="Expiry"></input>
          <input placeholder="CVC"></input>
        </div>
        <div id="outerDiv" style={{ width: '400px', height: '300px' }}>
          <div id="monerisCheckout"></div>
        </div>
        <button className="GiveItemButton">Give Now</button>
      </div>
    );
  }

  renderPushPay() {
    return (
      <div>
        <LinkButton
          newWindow
          to="https://pushpay.com/g/themeetinghouse?src=hpp"
        >
          GIVE NOW
        </LinkButton>
      </div>
    );
  }
  renderPushPay2() {
    return (
      <div className="GiveItemGreyBox">
        <iframe
          src={'https://pushpay.com/g/themeetinghouse'}
          title="The Meeting House - Forms"
          scrolling="yes"
          className="FormId"
          style={{ height: '75vh' }}
        ></iframe>
      </div>
    );
  }
  renderOnlineBanking() {
    return (
      <div className="GiveItemGreyBox">
        <b>Web Banking</b>
        <br />
        <ul className="GiveItem">
          <li>
            To set up your giving as a bill payment through online banking:
          </li>
          <ul className="GiveItemNumber">
            <li>
              Locate your Meeting House account number, found on your donations
              envelope. Don&apos;t have an account number?{' '}
              <button
                className="GiveItemOtherWayLink"
                onClick={() => {
                  this.setState({ currentPage: 'RequestAccountNumber' });
                }}
              >
                Request one
              </button>
              .
            </li>
            <li>
              Login to your online banking, and select the Bill Payment option.
            </li>
            <li>
              Set up a new payee as “The Meeting House” (it may display as The
              Meeting House Church Family).
            </li>
            <li>
              Enter your account number, followed by one of the three digit
              codes below to indicate which fund you would like to donate to. If
              your account number is less than 5 digits, enter zeros in front of
              of your number to make it the correct length
            </li>
            <ul className="GiveItem">
              <li>General Fund: #####GEN</li>
              <li>Go Fund: #####GOF</li>
              <li>Compassion Fund #####COM</li>
            </ul>
            <li>Select the amount and frequency of your gift and submit.</li>
          </ul>
          <li>
            Note: If you would like to make a donation to multiple funds, you
            must set each up as a separate bill payment.
          </li>
        </ul>

        <b>Pre-Authorized Withdrawal</b>
        <br />
        <ul className="GiveItem">
          <li>To have your giving deducted directly from your bank account:</li>
          <ul className="GiveItem">
            <li>
              Complete{' '}
              <button
                className="GiveItemOtherWayLink"
                onClick={() => {
                  this.setState({ currentPage: 'PreAuthorizedWithdrawl' });
                }}
              >
                this form
              </button>{' '}
              online. You will need your branch, transit, and account number.
            </li>
          </ul>
        </ul>
      </div>
    );
  }
  renderOfferingEnvelopes() {
    return (
      <div>
        <iframe
          src={
            'https://meeting.formstack.com/forms/request_offering_envelopes_form'
          }
          title="The Meeting House - Forms"
          scrolling="yes"
          className="GiveFormId"
          style={{ height: '75vh' }}
        ></iframe>
      </div>
    );
  }
  renderFellowshipOne() {
    return (
      <div className="GiveItemGreyBox">
        You can give with credit or debit card through your{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://meetinghouse.infellowship.com/UserLogin/"
        >
          Meeting House account
        </a>
        .<br />
        If you don&apos;t have a Meeting House account, you can{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://meetinghouse.infellowship.com/UserLogin/New"
        >
          create one
        </a>
        .
      </div>
    );
  }
  renderPreAuthorizedWithdrawl() {
    return (
      <div>
        <iframe
          src={
            'https://meeting.formstack.com/forms/preauthorized_withdrawal_form'
          }
          title="The Meeting House - Forms"
          scrolling="yes"
          className="GiveFormId"
          style={{ height: '75vh' }}
        ></iframe>
      </div>
    );
  }
  renderRequestAccountNumber() {
    return (
      <div>
        <iframe
          src={'https://meeting.formstack.com/forms/request_account_number'}
          title="The Meeting House - Forms"
          scrolling="yes"
          className="GiveFormId"
          style={{ height: '75vh' }}
        ></iframe>
      </div>
    );
  }
  render() {
    return (
      <div className="giveItemDiv1">
        <form>
          <h1 className="GiveItemH1">{this.state.content.header1}</h1>
          <h2 className="GiveItemH2">{this.state.content.header2}</h2>
          <hr className="GiveItemHR" />
          <div className="GiveItemText">{this.state.content.text1}</div>
          <div className="GiveItemText">{this.state.content.text2}</div>
          <div className="GiveItemText">{this.state.content.text3}</div>
          <div className="GiveItemText">{this.state.content.text4}</div>
          <div className="GiveItemText">{this.state.content.text5}</div>
          {this.renderPushPay()}
          {this.state.currentPage === 'PushPayCustom'
            ? this.renderPushPayCustom()
            : this.state.currentPage === 'FellowshipOne'
            ? this.renderFellowshipOne()
            : this.state.currentPage === 'OfferingEnvelopes'
            ? this.renderOfferingEnvelopes()
            : this.state.currentPage === 'OnlineBanking'
            ? this.renderOnlineBanking()
            : this.state.currentPage === 'PreAuthorizedWithdrawl'
            ? this.renderPreAuthorizedWithdrawl()
            : this.state.currentPage === 'RequestAccountNumber'
            ? this.renderRequestAccountNumber()
            : null}
          <div className="GiveItemOtherWayGroup">
            <div className="GiveItemOtherWays">Other Ways to Give</div>
            {this.state.currentPage === 'OnlineBanking' ? (
              <div className="GiveItemOtherWay">
                <button
                  className="GiveItemOtherWayButton2"
                  onClick={() => {
                    ReactGA.modalview('/give/PushPay');
                    this.setState({ currentPage: 'PushPay' });
                  }}
                >
                  Online Banking
                </button>
              </div>
            ) : null}
            {this.state.currentPage === 'OnlineBanking' ? null : (
              <div className="GiveItemOtherWay">
                <button
                  className="GiveItemOtherWayButton"
                  onClick={() => {
                    ReactGA.modalview('/give/OnlineBanking');
                    this.setState({ currentPage: 'OnlineBanking' });
                  }}
                >
                  Online Banking
                </button>
              </div>
            )}

            {this.state.currentPage === 'FellowshipOne' ? (
              <div className="GiveItemOtherWay">
                <button
                  className="GiveItemOtherWayButton2"
                  onClick={() => {
                    ReactGA.modalview('/give/PushPay');
                    this.setState({ currentPage: 'PushPay' });
                  }}
                >
                  TMH Account
                </button>
              </div>
            ) : null}
            {this.state.currentPage === 'FellowshipOne' ? null : (
              <div className="GiveItemOtherWay">
                <button
                  className="GiveItemOtherWayButton"
                  onClick={() => {
                    ReactGA.modalview('/give/FellowshipOne');
                    this.setState({ currentPage: 'FellowshipOne' });
                  }}
                >
                  TMH Account
                </button>
              </div>
            )}
          </div>
          <div className="GiveItemNeedHelpGroup">
            <div className="GiveItemOtherWays">2019 Tax Receipt</div>
            <div className="GiveItemOtherWay">
              <Link
                className="inverted"
                newWindow
                to="https://meetinghouse.infellowship.com/UserLogin"
              >
                Login &amp; Download
              </Link>
            </div>
          </div>

          <div style={{ clear: 'both' }}></div>
          <div className="GiveItemNeedHelpGroup">
            <div className="GiveItemNeedHelp">Need help?</div>
            <div className="GiveItemNeedHelpEmail">
              Please email Rachel at{' '}
              <a
                className="GiveItemOtherWayButton"
                href="mailto:donate@themeetinghouse.com"
              >
                donate@themeetinghouse.com
              </a>
            </div>
          </div>
          <div className="GiveItemOtherWayGroup">
            <div className="GiveItemOtherWays">Give To Extended Family</div>
            <div className="GiveItemOtherWay">
              <Link
                className="inverted"
                newWindow
                to="https://tithe.ly/give_new/www/#/tithely/give-one-time/674673"
              >
                Alliston
              </Link>
            </div>
            <div className="GiveItemOtherWay">
              <Link
                className="inverted"
                newWindow
                to="https://www.canadahelps.org/en/charities/west-lake-community-church/"
              >
                Sandbanks
              </Link>
            </div>
          </div>
          <div className="GiveItemBottom"></div>
        </form>
      </div>
    );
  }
}
