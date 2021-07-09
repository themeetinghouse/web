import { Auth } from 'aws-amplify';
import { TMHCognitoUser } from 'components/Auth/UserContext';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import {
  Link as ClickableText,
  LinkButton,
} from '../../../components/Link/Link';
import './ProfileCard.scss';
import { useHistory } from 'react-router-dom';

type User = {
  name: string;
  email: string;
  mobile: string;
  address: string;
};

export default function ProfileCard(): JSX.Element {
  const history = useHistory();
  const [userData, setUserData] = useState<User>({
    name: '',
    email: '',
    mobile: '',
    address: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        const user: TMHCognitoUser = await Auth.currentAuthenticatedUser();
        if (user?.attributes?.sub) {
          if (
            user?.attributes?.given_name &&
            user?.attributes?.email &&
            user?.attributes?.phone_number
          )
            setUserData({
              name:
                user.attributes?.given_name +
                ' ' +
                user.attributes?.family_name,
              email: user.attributes?.email,
              mobile: user.attributes?.phone_number,
              address: '',
            });
          setIsLoading(false);
        }
      } catch (err) {
        console.log('Failed to get logged in user.', err);
        if (err === 'The user is not authenticated') {
          alert('Your token has expired. Please sign in again.');
          history.push('/signin');
        }
      }
    };
    getUser();
  }, []);
  return (
    <div className="Profile-Card">
      {isLoading ? (
        <div className="spinnerContainer">
          <Spinner />
        </div>
      ) : (
        <>
          <img className="profilePicture" src="/static/svg/Profile.svg"></img>
          <h3>{userData.name}</h3>
          <span>Email</span>
          <p>{userData.email}</p>
          <span>Mobile</span>
          <p>{userData.mobile}</p>
          <span>Address</span>
          <p>{userData.address}</p>
          <ClickableText style={{ display: 'block' }} to={'/'}>
            <img
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
