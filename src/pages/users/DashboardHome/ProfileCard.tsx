import { GraphQLResult } from '@aws-amplify/api';
import { GetTmhUserQuery } from 'API';
import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import {
  Link as ClickableText,
  LinkButton,
} from '../../../components/Link/Link';
import paymentsCommon from '../paymentsCommon';
import './ProfileCard.scss';

export default function ProfileCard(): JSX.Element {
  const [userData, setUserData] = useState<
    | NonNullable<
        NonNullable<GraphQLResult<GetTmhUserQuery>['data']>['getTMHUser']
      >
    | null
    | undefined
  >(null);
  //const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    paymentsCommon.getCurrentUserProfile(setUserData);
  }, []);
  return (
    <div className="Profile-Card">
      {userData == null ? (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      ) : (
        <>
          <img
            alt="User Profile"
            className="profilePicture"
            src="/static/svg/Profile.svg"
          ></img>
          <h3>
            {userData.given_name} {userData.family_name}
          </h3>
          <span>Email</span>
          {userData.email && <p>{userData.email}</p>}
          <span>Mobile</span>
          <p>{userData.phone}</p>
          <div className="AddressContainer">
            {userData.billingAddress?.line1 ||
              userData.billingAddress?.line2 ||
              userData.billingAddress?.postal_code ||
              userData.billingAddress?.city ||
              userData.billingAddress?.state ||
              (userData.billingAddress?.country && <span>Address</span>)}

            {userData.billingAddress?.line1 && (
              <p>{userData.billingAddress?.line1}</p>
            )}
            {userData.billingAddress?.postal_code && (
              <p>{userData.billingAddress?.postal_code}</p>
            )}
            {userData.billingAddress?.city ||
              (userData.billingAddress?.state && (
                <p>
                  {userData.billingAddress?.city}{' '}
                  {userData.billingAddress?.state}
                </p>
              ))}
            {userData.billingAddress?.country && (
              <p>{userData.billingAddress?.country}</p>
            )}
          </div>
          <ClickableText style={{ display: 'block' }} to={'/account/profile'}>
            <img
              alt="Edit Icon"
              className="edit"
              style={{ marginRight: 11 }}
              src="/static/svg/Edit.svg"
            ></img>
            Edit
          </ClickableText>
          <LinkButton
            onClick={async () => {
              await Auth.signOut();
              //history.push('/');
            }}
            style={{
              marginTop: 30,
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: 16,
              textAlign: 'center',
              width: 116,
              lineHeight: 'unset',
              padding: '12px 24px',
              height: 'unset',
              borderWidth: 4,
              borderColor: 'black',
            }}
            to={''}
          >
            Logout
          </LinkButton>
        </>
      )}
    </div>
  );
}
