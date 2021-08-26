import { Dispatch } from 'react';
import './GiveCompletionPage.scss';
import { GiveAction, GiveActionType, GiveState } from './GivePage';

type GiveCompletionPageProps = {
  giveState: GiveState;
  dispatch: Dispatch<GiveAction>;
};

export default function GiveCompletionPage(props: GiveCompletionPageProps) {
  const { giveState } = props;
  console.log('giveState', giveState);
  return (
    <div className="GiveResultPageContainer">
      {giveState.currentPayload.status === 'complete' ? (
        <>
          <h1 className="CompletionHeader">Thank You</h1>
          <p>Thank you for your gift of ${giveState.currentPayload.amount}</p>
          <p className="CompletionMessage">
            A few clicks later and you are now part of this great mission of
            growing loving communities of Jesus followers who live and share his
            irreligious message.
          </p>
          <div className="ManageRecurringButton">
            <span
              style={{
                cursor: 'pointer',
                paddingTop: 16,
                margin: '16px 0px',
                borderBottom: '1px solid black',
              }}
              onClick={() =>
                props.dispatch({ type: GiveActionType.SHOW_RECURRING })
              }
            >
              Manage my recurring giving
            </span>
          </div>
        </>
      ) : (
        <>
          <h1 className="CompletionHeader">
            {giveState.currentPayload.errorMessage}
          </h1>
          <p className="CompletionMessage">
            Please contact support at{' '}
            <a href="mailto: donate@themeetinghouse.com">
              donate@themeetinghouse.com
            </a>
          </p>
          <div className="ManageRecurringButton">
            <span
              style={{
                display: 'inline',
                cursor: 'pointer',
                paddingTop: 16,
                margin: '16px 0px',
                borderBottom: '1px solid black',
              }}
              onClick={() => props.dispatch({ type: GiveActionType.SHOW_GIVE })}
            >
              Go back
            </span>
          </div>
        </>
      )}
    </div>
  );
}
