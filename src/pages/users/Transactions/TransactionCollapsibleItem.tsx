import { useState } from 'react';
import './TransactionCollapsibleItem.scss';
import moment from 'moment';
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
      <p className="Header">{moment(item.date * 1000).format('ll')}</p>

      <div className="Content">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ flex: 1 }}>{item?.fund?.name}</p>
          <p style={{ flex: 1 }}>
            {item?.currency} ${parseFloat(item?.amount ?? '0').toFixed(2)}{' '}
          </p>
          <p
            onClick={() => setOpen((prev) => !prev)}
            style={{ paddingRight: 40 }}
          >
            {!open ? '+' : '-'}
          </p>
        </div>

        {open ? (
          <div style={{ paddingRight: 40 }}>
            <p style={{ display: 'flex' }}>
              <span style={{ flex: 1 }}>Transaction No.:</span>
              {'  ' + item?.transactionNumber}
            </p>
            <p style={{ display: 'flex' }}>
              <span style={{ flex: 1 }}>Time:</span>
              {'  ' + moment(item?.date * 1000).format('hh:mm a')}
            </p>
            <p style={{ display: 'flex' }}>
              <span style={{ flex: 1 }}>Payment Method: {'  '}</span>
              {item?.paymentMethod}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
