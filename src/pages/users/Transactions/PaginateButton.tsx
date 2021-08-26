import './PaginateButton.scss';
type ButtonProps = {
  handlePaginate: () => void;
  direction: 'Right' | 'Left';
};

export default function PaginateButton(props: ButtonProps): JSX.Element {
  const { handlePaginate, direction } = props;
  return (
    <button className="PaginateButton" onClick={handlePaginate}>
      <img src={`/static/svg/Arrow${direction}.svg`}></img>
    </button>
  );
}
