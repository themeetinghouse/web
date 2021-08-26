import './GiveToggleButton.scss';
type Props = {
  selection: string;
  setSelection: React.Dispatch<React.SetStateAction<string>>;
};
export default function GiveButtonToggle({
  selection,
  setSelection,
}: Props): JSX.Element {
  return (
    <div>
      <button
        className="GiveFrequencyButton"
        style={
          selection === 'Give once'
            ? { backgroundColor: 'black', color: 'white' }
            : {
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid #C8C8C8',
              }
        }
        onClick={() => setSelection('Give once')}
      >
        Give once
      </button>
      <button
        className="GiveFrequencyButton"
        style={
          selection === 'Recurring'
            ? { backgroundColor: 'black', color: 'white' }
            : {
                backgroundColor: 'white',
                color: 'black',
                border: '2px solid #C8C8C8',
              }
        }
        onClick={() => setSelection('Recurring')}
      >
        Recurring
      </button>
    </div>
  );
}
