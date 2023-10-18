import { useEffect } from 'react';
import { Button } from 'reactstrap';
import useAndUpdateNavColor from './useAndUpdateNavColor';
type ExpandButtonProps = {
  setExpand: () => void;
  shouldExpand: boolean | undefined;
  expand: any;
  item: any;
};

export default function ExpandButton(props: ExpandButtonProps) {
  const { setExpand, shouldExpand, item, expand } = props;
  const { color, forceCheck } = useAndUpdateNavColor('#1A1A1A', `${item}+`);

  useEffect(() => {
    forceCheck();
  }, [expand, forceCheck]);
  return (
    <Button
      id={`${item}+`}
      aria-label={`Expand ${item}`}
      aria-expanded={shouldExpand}
      className="expanderButton"
      onClick={setExpand}
    >
      <div
        style={{ backgroundColor: color }}
        className={shouldExpand ? 'vertical-line xstate' : 'vertical-line'}
      ></div>
      <div
        style={{ backgroundColor: color }}
        className={shouldExpand ? 'horizontal-line xstate' : 'horizontal-line'}
      ></div>
    </Button>
  );
}
