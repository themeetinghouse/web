import './DashboardFooter.scss';
export default function DashboardFooter(): JSX.Element {
  const hideFooter = window?.location?.href?.includes('admin');
  return (
    <div className="Footer" style={hideFooter ? { display: 'none' } : {}}>
      <div style={{ flexDirection: 'column', margin: '0px 32px 0px 0px' }}>
        <p className="footerText">Tax Receipt</p>
        <p className="subText">
          Download <a href="">here</a>
        </p>
      </div>
      <div style={{ flexDirection: 'column', margin: '0px 32px 0px 0px' }}>
        <p className="footerText">Need help?</p>
        <a
          href="mailto: donate@themeetinghouse.com"
          className="subText"
          style={{ borderBottom: 'none' }}
        >
          donate@themeetinghouse.com
        </a>
      </div>
    </div>
  );
}
