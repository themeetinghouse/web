import { useState } from 'react';
import './TransactionCollapsibleItem.scss';
type CollapsibleItemProps = {
  item: any;
};
export default function TransactionCollapsibleItem(
  props: CollapsibleItemProps
): JSX.Element {
  const [open, setOpen] = useState(false);
  const { item } = props;
  return (
    <div className="TransactionCollapsibleItemContainer">
      <p className="Header">{item?.receivedDate}</p>
      <div className="Content">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ flex: 1 }}>{item?.fund?.name}</p>
          <p style={{ flex: 1 }}>{item?.amount} </p>
          <p
            onClick={() => setOpen((prev) => !prev)}
            style={{ paddingRight: 40 }}
          >
            {!open ? '+' : '-'}
          </p>
        </div>

        {open ? (
          <>
            <p>Transaction No.:{'  ' + item?.id}</p>
            <p>Time: {'  ' + item?.receivedDate}</p>
            <p>
              Payment Method: {'  '}
              {item?.accountReference}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
