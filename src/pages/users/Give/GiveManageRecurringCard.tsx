import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import './GiveManageRecurringCard.scss';
import { GiveActionType } from './GivePage';
import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as queries from '../../../../src/graphql/queries';
import { v4 as uuidv4 } from 'uuid';
import { TmhStripeListSubscriptionsQuery } from 'API';

type GiveRecurringProps = {
  giveState: any;
  dispatch: any;
};
type ListSubscriptions = NonNullable<
  NonNullable<
    GraphQLResult<TmhStripeListSubscriptionsQuery>['data']
  >['tmhStripeListSubscriptions']
>['data'];
type Subscription = NonNullable<ListSubscriptions>[0];
export default function GiveManageRecurringCard(
  props: GiveRecurringProps
): JSX.Element {
  const [givings, setGivings] = useState<ListSubscriptions>([]);
  const [isLoading, setIsLoading] = useState(true);
  const deleteSubscription = async (giving: Subscription) => {
    try {
      (await API.graphql({
        query: queries.tmhStripeDeleteSubscription,
        variables: {
          subscriptionId: giving?.id,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeListSubscriptionsQuery>;
      setGivings(givings?.filter((x) => x?.id != giving?.id));
      return true;
    } catch (e: any) {
      console.log({ Error: e });
      return false;
    }
    return;
  };
  const listSubscriptions = async () => {
    try {
      const tmhStripeListSubscriptions = (await API.graphql({
        query: queries.tmhStripeListSubscriptions,
        variables: {
          idempotency: uuidv4(),
          starting_after: '',
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeListSubscriptionsQuery>;
      console.log(tmhStripeListSubscriptions);
      setGivings(
        tmhStripeListSubscriptions.data?.tmhStripeListSubscriptions?.data
      );
      return true;
    } catch (e: any) {
      console.log({ Error: e });
      return false;
    }
    return;
  };
  useEffect(() => {
    setIsLoading(true);
    listSubscriptions();
    setIsLoading(false);
  }, []);
  return (
    <div className="GiveManageRecurringCard">
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>
            <b>Loading recurring givings..</b>
          </p>

          <br />
          <Spinner />
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h1
              style={{
                fontWeight: 700,
                fontSize: 32,
                lineHeight: '40px',
                color: 'black',
                marginBottom: 44,
              }}
            >
              My Recurring Giving
            </h1>
          </div>

          <div className="PaymentMethodCardGrid">
            {givings?.map((giving) => {
              return (
                <div key={giving?.id} className="PaymentMethodCard">
                  <p className="PaymentMethodCardHeader">${giving?.status}</p>
                  <p className="PaymentMethodCardLabel">Fund</p>
                  <p>{giving?.status}</p>
                  <p className="PaymentMethodCardLabel">Next payment</p>
                  <p>undefined</p>
                  <p className="PaymentMethodCardLabel">Frequency:</p>
                  <p style={{ margin: 0 }}>{giving?.status}</p>
                  <p>Starting recurring start date</p>
                  <p className="PaymentMethodCardLabel">Payment method</p>
                  <p style={{ marginTop: 26 }}>
                    <img
                      width={46}
                      style={{ marginRight: 22 }}
                      src={`/static/svg/${giving?.status}.svg`}
                    />
                    {giving?.status} Exp
                    {giving?.status}
                  </p>

                  <div className="PaymentMethodCardButtonContainer">
                    <button
                      onClick={async () => {
                        await deleteSubscription(giving);
                        props.dispatch({
                          type: GiveActionType.NAVIGATE_TO_GIVE,
                        });
                      }}
                      className="PaymentMethodCardButton white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() =>
                        props.dispatch({
                          type: GiveActionType.SHOW_GIVE,
                          payload: giving,
                        })
                      }
                      className="PaymentMethodCardButton"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
