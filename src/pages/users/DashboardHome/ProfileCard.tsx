import { Auth } from 'aws-amplify';
import { UserContext } from 'components/Auth/UserContext';
import { useContext, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import {
  Link as ClickableText,
  LinkButton,
} from '../../../components/Link/Link';
import './ProfileCard.scss';

export default function ProfileCard(): JSX.Element {
  const UserConsumer = useContext(UserContext);
  //const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    UserConsumer.userActions
      .getCurrentUserProfile()
      .then((ok) => {
        console.log({ 'UserConsumer.userState': UserConsumer.userState });
      })
      .catch((error) => console.error({ error }));
  }, []);
  const userData = UserConsumer.userState?.user;
  const userGroups = UserConsumer?.userState?.groups ?? [];
  return (
    <div className="Profile-Card">
      {userData == null ? (
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <p>
            <b>Loading profile data..</b>
          </p>
          <br></br>
          <Spinner />
        </div>
      ) : (
        <>
          <img
            alt="User Profile"
            className="profilePicture"
            src="/static/svg/Profile.svg"
          ></img>
          {userData.given_name && userData.family_name && (
            <h3>
              {userData.given_name} {userData.family_name}
            </h3>
          )}
          {userData.email && (
            <>
              <span>Email</span>
              <p style={{ overflowWrap: 'anywhere' }}>{userData.email}</p>
            </>
          )}
          {userData.phone && (
            <>
              <span>Mobile</span>
              <p>{userData.phone}</p>
            </>
          )}

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

          <p
            style={{
              overflowWrap: 'anywhere',
              fontSize: 12,
              color: '#212529',
            }}
          >
            {[...new Set(userGroups)]
              ?.filter((group) => group !== 'Participant')
              ?.map((a) => ` ${a},`)}
          </p>
          <ClickableText style={{ display: 'block' }} to={'/account/profile'}>
            <img
              alt="Edit Icon"
              className="edit"
              style={{ marginRight: 11 }}
              src="/static/svg/Edit.svg"
            ></img>
            Edit
          </ClickableText>
          <div style={{ flex: 1 }}></div>
          <LinkButton
            onClick={async () => {
              await Auth.signOut();
              //history.push('/');
            }}
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
            to={''}
          >
            Logout
          </LinkButton>
        </>
      )}
    </div>
  );
}
