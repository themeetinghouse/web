import './GiveAmountBanner.scss';
type GiveAmountBannerProps = {
  goBack: () => void;
  amount: string;
  recurring?: string;
};
export default function GiveAmountBanner(props: GiveAmountBannerProps) {
  const { recurring, goBack, amount } = props;
  return (
    <div className="GiveAmountBannerContainer">
      <div className="GiveAmountBannerLabelContainer">
        <span className="GiveAmountBannerLabel">Giving</span>
        <span className="GiveAmountBannerValue">
          ${amount}
          {recurring ? <small>{recurring}</small> : null}
        </span>
      </div>
      <button onClick={goBack} className="GiveAmountBannerEditButton">
        Edit Amount
      </button>
    </div>
  );
}
