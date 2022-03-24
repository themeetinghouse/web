import { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import { flipElementColor } from './navUtils';
type ExpandButtonProps = {
  setExpand: () => void;
  shouldExpand: boolean | undefined;
  expand: any;
  item: any;
};

export default function ExpandButton(props: ExpandButtonProps) {
  const { setExpand, shouldExpand, item, expand } = props;
  const [color, setColor] = useState('#1A1A1A');
  flipElementColor(
    `${item}+`,
    '#FFFFFF',
    '#1A1A1A',
    color,
    setColor,
    ['oneImageBlackBox', 'partialNoFooter', 'divPartial', 'partialConnect'],
    15
  );
  useEffect(() => {
    flipElementColor(
      `${item}+`,
      '#FFFFFF',
      '#1A1A1A',
      color,
      setColor,
      ['oneImageBlackBox', 'partialNoFooter', 'divPartial', 'partialConnect'],
      15
    );
  }, [expand]);
  return (
    <Button
      id={`${item}+`}
      aria-label="Expand Menu"
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
