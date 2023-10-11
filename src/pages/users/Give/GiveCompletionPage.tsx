import { useContext } from 'react';
import './GiveCompletionPage.scss';
import { GEContext } from 'components/RenderRouter/GiveComponents/GEContext';
import { GEActionType } from 'components/RenderRouter/GiveComponents/GETypes';

export default function GiveCompletionPage() {
  const { state, dispatch } = useContext(GEContext);
  return (
    <div className="GiveResultPageContainer">
      {state.status === 'complete' ? (
        <>
          <h1 className="CompletionHeader">Thank You</h1>
          <p>Thank you for your gift of ${state.content.amount}</p>
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
                dispatch({ type: GEActionType.NAVIGATE_TO_RECURRING_GIFT })
              }
            >
              Manage my recurring giving
            </span>
          </div>
        </>
      ) : (
        <>
          <h1 className="CompletionHeader">{state.errorMessage}</h1>
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
              onClick={() => dispatch({ type: GEActionType.NAVIGATE_GIVE_NOW })}
            >
              Go back
            </span>
          </div>
        </>
      )}
    </div>
  );
}
