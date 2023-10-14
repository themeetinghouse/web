import { Auth } from 'aws-amplify';
import { Spinner } from 'reactstrap';
import {
  Link as ClickableText,
  LinkButton,
} from '../../../components/Link/Link';
import './ProfileCard.scss';
import { useUser } from '../Auth/UserContext';

export default function ProfileCard(): JSX.Element {
  const { state, dispatch } = useUser();
  const { user, tmhUserData } = state;
  return (
    <div className="Profile-Card">
      {!user || !tmhUserData ? (
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <p>
            <b>Loading profile data..</b>
          </p>
          <br></br>
          <Spinner />
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <h3 style={{ marginBottom: 36 }}>
              {tmhUserData?.given_name} {tmhUserData?.family_name}
            </h3>
            {tmhUserData.email && (
              <>
                <span>Email</span>
                <p style={{ overflowWrap: 'anywhere' }}>{tmhUserData.email}</p>
              </>
            )}
            {tmhUserData.phone && (
              <>
                <span>Mobile</span>
                <p>{tmhUserData.phone}</p>
              </>
            )}
            {tmhUserData.billingAddress?.line1 ||
            tmhUserData.billingAddress?.line2 ||
            tmhUserData.billingAddress?.postal_code ||
            tmhUserData.billingAddress?.city ||
            tmhUserData.billingAddress?.state ||
            tmhUserData.billingAddress?.country ? (
              <div className="AddressContainer">
                <span>Address</span>

                {tmhUserData.billingAddress?.line1 ? (
                  <p>{tmhUserData.billingAddress?.line1}</p>
                ) : null}
                {tmhUserData.billingAddress?.postal_code && (
                  <p>{tmhUserData.billingAddress?.postal_code}</p>
                )}
                {tmhUserData.billingAddress?.city ||
                  (tmhUserData.billingAddress?.state && (
                    <p>
                      {tmhUserData.billingAddress?.city}{' '}
                      {tmhUserData.billingAddress?.state}
                    </p>
                  ))}
                {tmhUserData.billingAddress?.country && (
                  <p>{tmhUserData.billingAddress?.country}</p>
                )}
              </div>
            ) : null}
            {[...new Set()].length ? (
              <p
                style={{
                  overflowWrap: 'anywhere',
                  marginBottom: 0,
                  fontWeight: 700,
                  color: '#212529',
                }}
              >
                Groups:
              </p>
            ) : null}

            <p
              style={{
                overflowWrap: 'anywhere',
                fontSize: 12,
                color: '#212529',
              }}
            >
              {[...new Set()]
                ?.filter((group) => group !== 'Participant')
                ?.map((a) => ` ${a},`)}
            </p>
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
              dispatch({
                type: 'SET_USER',
                payload: {
                  isProfileComplete: false,
                  tmhUserData: null,
                  user: null,
                },
              });
            }}
            type="button"
            style={{
              marginTop: 30,
              marginRight: 0,
              fontSize: 16,
              alignSelf: 'center',
              textAlign: 'center',
              width: 116,
              lineHeight: 'unset',
              padding: '12px 24px',
              height: 'unset',
              borderWidth: 4,
              borderColor: 'black',
            }}
            to={'/account/signin'}
          >
            Logout
          </LinkButton>
        </>
      )}
    </div>
  );
}
