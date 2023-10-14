import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'reactstrap';
import './GiveManageRecurringCard.scss';
import API, { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import * as queries from '../../../../src/graphql/queries';
import {
  TmhStripeDeleteSubscriptionQuery,
  TmhStripeListSubscriptionsQuery,
  TmhStripePauseSubscriptionQuery,
  TmhStripeResumeSubscriptionQuery,
  TransformedStripeSubscription,
} from 'API';
import moment from 'moment';
import { GEContext } from 'components/RenderRouter/GiveComponents/GEContext';
import { GEActionType } from 'components/RenderRouter/GiveComponents/GETypes';
//import { GEActionType } from 'components/RenderRouter/GiveComponents/GETypes';

//type Subscription = NonNullable<ListSubscriptions>[0];
export default function GiveManageRecurringCard(): JSX.Element {
  const { dispatch } = useContext(GEContext);
  //props: GiveRecurringProps
  const [givings, setGivings] = useState<TransformedStripeSubscription[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const listSubscriptions = async () => {
    try {
      console.log('listing subscriptions');
      setIsLoading(true);
      const tmhStripeListSubscriptions = (await API.graphql({
        query: queries.tmhStripeListSubscriptions,
        variables: {
          starting_after: '',
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeListSubscriptionsQuery>;
      console.log({ tmhStripeListSubscriptions });
      setGivings(
        tmhStripeListSubscriptions.data?.tmhStripeListSubscriptions
          ?.subscriptions as TransformedStripeSubscription[]
      );
      return true;
    } catch (e: any) {
      console.log({ Error: e });
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    listSubscriptions();
  }, []);
  console.log({ isLoading, givings });
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
          {!isLoading && givings?.length == 0 ? (
            <span>
              You have no reccurring givings at this time. Click{' '}
              <button
                type="button"
                style={{
                  color: '#0053b3',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  textDecoration: 'underline',
                }}
                onClick={() => {
                  dispatch({
                    type: GEActionType.NAVIGATE_GIVE_NOW,
                  });
                  dispatch({
                    type: GEActionType.SET_GIFT_TYPE,
                    payload: 'Recurring',
                  });
                }}
              >
                here
              </button>{' '}
              to add one.
            </span>
          ) : (
            <div className="PaymentMethodCardGrid">
              {givings?.map((giving) => {
                return (
                  <GiveRecurringCard
                    key={giving?.id}
                    giving={giving}
                    setGivings={setGivings}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

const GiveRecurringCard = ({
  giving,
  setGivings,
}: {
  giving: TransformedStripeSubscription;
  setGivings: React.Dispatch<
    React.SetStateAction<TransformedStripeSubscription[]>
  >;
}) => {
  const startDate = giving?.billing_cycle_anchor ?? 0;
  const startingDate = moment(startDate * 1000).format('ll');
  const nextDate = giving?.current_period_end ?? 0;
  const nextPaymentDate = moment(nextDate * 1000).format('ll');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const deleteSubscription = async (giving: any) => {
    try {
      setIsDeleting(true);
      const deleteSub = (await API.graphql({
        query: queries.tmhStripeDeleteSubscription,
        variables: {
          subscriptionId: giving?.id,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeDeleteSubscriptionQuery>;
      console.log({ deleteSub });
      if (deleteSub.data?.tmhStripeDeleteSubscription?.message == 'SUCCESS')
        setGivings((prev) => prev?.filter((x) => x?.id != giving?.id));
      return false;
    } catch (e: any) {
      console.log({ Error: e });
      return false;
    } finally {
      setIsDeleting(false);
    }
    return;
  };
  const pauseSubscription = async () => {
    try {
      if (!giving?.id) return;
      setIsLoading(true);
      const pauseSub = (await API.graphql({
        query: queries.tmhStripePauseSubscription,
        variables: {
          subscriptionID: giving?.id,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripePauseSubscriptionQuery>;
      console.log({ pauseSub });
      if (pauseSub.data?.tmhStripePauseSubscription?.message === 'SUCCESS') {
        setGivings((prev) =>
          prev?.map((givingItem) => {
            if (givingItem?.id === giving?.id) {
              return {
                ...givingItem,
                isPaused: true,
              };
            }
            return givingItem;
          })
        );
      }
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  };
  const resumeSubscription = async () => {
    try {
      if (!giving?.id) return;
      setIsLoading(true);
      const resumeSub = (await API.graphql({
        query: queries.tmhStripeResumeSubscription,
        variables: {
          subscriptionID: giving?.id,
        },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as GraphQLResult<TmhStripeResumeSubscriptionQuery>;
      console.log({ resumeSub });
      if (resumeSub.data?.tmhStripeResumeSubscription?.message === 'SUCCESS') {
        setGivings((prev) =>
          prev?.map((givingItem) => {
            if (givingItem?.id === giving?.id) {
              return {
                ...givingItem,
                isPaused: false,
              };
            }
            return givingItem;
          })
        );
      }
    } catch (error) {
      console.error({ error });
    } finally {
      setIsLoading(false);
    }
  };
  const isTrial = giving?.status === 'trialing';
  const hasCard = giving?.cardLast4;
  const isActive = giving?.status === 'active';
  console.log({ giving });
  return (
    <div key={giving?.id} className="PaymentMethodCard">
      <p className="PaymentMethodCardHeader">
        ${giving?.unit_amount?.toFixed(2)}
      </p>
      <p className="PaymentMethodCardLabel">Fund</p>
      <p>{giving?.name}</p>
      <p className="PaymentMethodCardLabel">Next payment</p>
      <div style={{ display: 'flex' }}>
        <p style={{ flex: 1 }}>{nextPaymentDate}</p>
        <button
          disabled={isLoading || isDeleting}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            textDecoration: 'underline',
            textUnderlineOffset: 6,
            color: '#000000',
            marginBottom: 16,
            alignSelf: 'flex-end',
          }}
          type="button"
          onClick={giving?.isPaused ? resumeSubscription : pauseSubscription}
        >
          {isLoading ? (
            <Spinner size="sm" />
          ) : giving?.isPaused ? (
            'Resume'
          ) : (
            'Pause'
          )}
        </button>
      </div>

      <p className="PaymentMethodCardLabel">Frequency:</p>
      <p>
        Every {giving.interval_count === 1 ? '' : giving.interval_count}{' '}
        <span style={{ textTransform: 'capitalize' }}>
          {giving.interval}
          {giving?.interval_count && giving.interval_count > 1 ? 's' : ''}
        </span>
      </p>
      <p>
        {moment(startingDate).isAfter(moment.now()) ? 'Starting' : 'Started'}{' '}
        {startingDate}
      </p>
      {hasCard ? (
        <>
          <p className="PaymentMethodCardLabel">Payment method</p>
          <div
            style={{
              display: 'flex',
              flex: 1,
              marginTop: 16,
            }}
          >
            <img
              style={{ marginRight: 16 }}
              height={29}
              width={46}
              src={`/static/svg/${giving.cardBrand}.svg`}
            ></img>
            <span
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flex: 1,
              }}
            >
              &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022;
              &#x2022;&#x2022;&#x2022;&#x2022; {giving?.cardLast4} Exp{' '}
              {giving?.cardExpiry}
            </span>
          </div>
        </>
      ) : (
        <>
          {!giving?.cardLast4 ? (
            <span style={{ color: 'tomato' }}>
              Payment information could not be retrieved at this time. Please
              try again later.
            </span>
          ) : null}
        </>
      )}
      {isTrial ? (
        <span
          style={{
            color: '#004c00',
            marginTop: 8,
          }}
        >
          This subscription has not yet begun. You will be charged on{' '}
          {nextPaymentDate}
        </span>
      ) : null}
      <div className="PaymentMethodCardButtonContainer">
        <button
          type="button"
          disabled={isDeleting || isLoading}
          onClick={() => deleteSubscription(giving)}
          className="PaymentMethodCardButton white"
        >
          {isDeleting ? (
            <Spinner size="sm" />
          ) : !isActive && !isTrial ? (
            'Dismiss'
          ) : (
            'Cancel'
          )}
        </button>
        {/* <button
          onClick={
            () => null
            // props.dispatch({
            //   type: GiveActionType.SHOW_GIVE,
            //   payload: giving,
            // })
          }
          className="PaymentMethodCardButton"
        >
          Edit
        </button> */}
      </div>
    </div>
  );
};
