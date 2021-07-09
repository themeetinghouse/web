import './DashboardFooter.scss';
export default function DashboardFooter(): JSX.Element {
  return (
    <div className="Footer">
      <div style={{ flexDirection: 'column', margin: '0px 32px 0px 0px' }}>
        <p className="footerText">2020 Tax Receipt</p>
        <p className="subText">
          Download <a href="/">here</a>
        </p>
      </div>
      <div style={{ flexDirection: 'column', margin: '0px 32px 0px 0px' }}>
        <p className="footerText">Need help?</p>
        <p className="subText">donate@themeetinghouse.com</p>
      </div>
    </div>
  );
}
