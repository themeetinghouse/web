import React from 'react';
import './GiveItem.scss';
import ReactGA from 'react-ga';
import { LinkButton, Link } from 'components/Link/Link';
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
      currentPage: 'PushPay',
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
        <button className="GiveItemButton">Give Now</button>
      </div>
    );
  }

  renderPushPay() {
    return (
      <div>
        <LinkButton
          className="inverted"
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
        <Link newWindow to="https://meetinghouse.infellowship.com/UserLogin/">
          Meeting House account
        </Link>
        .<br />
        If you don&apos;t have a Meeting House account, you can{' '}
        <Link
          newWindow
          to="https://meetinghouse.infellowship.com/UserLogin/New"
        >
          create one
        </Link>
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
          {this.props?.content?.taxReceiptLabel ? (
            <div className="GiveItemNeedHelpGroup">
              <div className="GiveItemOtherWays">
                {this.props?.content?.taxReceiptLabel}
              </div>
              <div className="GiveItemOtherWay">
                <Link
                  className="inverted"
                  newWindow
                  to={this.props?.content?.taxReceiptLink}
                >
                  {this.props?.content?.taxReceiptText}
                </Link>
              </div>
            </div>
          ) : null}

          <div style={{ clear: 'both' }}></div>
          {this.props.content?.needHelpLink ? (
            <div className="GiveItemNeedHelpGroup">
              <div className="GiveItemNeedHelp">
                {this.props?.content?.needHelpLabel}
              </div>
              <div className="GiveItemNeedHelpEmail">
                {this.props?.content?.needHelpText}{' '}
                <a
                  className="inverted"
                  href={`mailto:${this.props?.content?.needHelpLink}`}
                >
                  {this.props?.content?.needHelpLink}
                </a>
              </div>
            </div>
          ) : null}
          {this.props?.content?.taxReceiptLink2 ? (
            <div className="GiveItemNeedHelpGroup">
              <div className="GiveItemOtherWays">
                {this.props?.content?.taxReceiptLabel2}
              </div>
              <div className="GiveItemOtherWay">
                <Link
                  className="inverted"
                  newWindow
                  to={this.props?.content?.taxReceiptLink2}
                >
                  {this.props?.content?.taxReceiptText2}
                </Link>
              </div>
            </div>
          ) : null}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {this.props?.content?.taxReceiptLink3 ? (
              <div className="GiveItemOtherWayGroup">
                <div className="GiveItemOtherWays">
                  {this.props?.content?.taxReceiptLabel3}
                </div>
                <div className="GiveItemOtherWay">
                  <Link
                    className="inverted"
                    newWindow
                    to={this.props?.content?.taxReceiptLink3}
                  >
                    {this.props?.content?.taxReceiptText3}
                  </Link>
                </div>
              </div>
            ) : null}
            {this.props.content?.giveToExtendedTitle ? (
              <div className="GiveItemOtherWayGroup">
                <div className="GiveItemOtherWays">
                  {this.props.content?.giveToExtendedTitle}
                </div>
                <div
                  className="GiveItemOtherWay"
                  key={this.props.content?.giveExtendedLabel}
                >
                  <Link
                    className="inverted"
                    newWindow
                    to={this.props.content?.giveExtendedUrl}
                  >
                    {this.props.content?.giveExtendedLabel}
                  </Link>
                </div>
                {this.props.content?.giveExtendedUrl2 ? (
                  <div
                    className="GiveItemOtherWay"
                    key={this.props.content?.giveExtendedUrl2}
                  >
                    <Link
                      className="inverted"
                      newWindow
                      to={this.props.content?.giveExtendedUrl2}
                    >
                      {this.props.content?.giveExtendedLabel2}
                    </Link>
                  </div>
                ) : null}
                {this.props.content?.giveExtendedUrl3 ? (
                  <div
                    className="GiveItemOtherWay"
                    key={this.props.content?.giveExtendedUrl3}
                  >
                    <Link
                      className="inverted"
                      newWindow
                      to={this.props.content?.giveExtendedUrl3}
                    >
                      {this.props.content?.giveExtendedLabel3}
                    </Link>
                  </div>
                ) : null}
              </div>
            ) : null}
            <div className="GiveItemOtherWayGroup" style={{ marginTop: 60 }}>
              <div style={{ color: 'white', fontWeight: '600' }}>
                {this.props?.content?.CRA}
              </div>
            </div>
          </div>

          <div className="GiveItemBottom"></div>
        </form>
      </div>
    );
  }
}
