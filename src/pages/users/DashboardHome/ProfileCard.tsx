import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import {
  Link as ClickableText,
  LinkButton,
} from '../../../components/Link/Link';
import './ProfileCard.scss';

type User = {
  name: string;
  email: string;
  mobile: string;
  address: string;
};

export default function ProfileCard(): JSX.Element {
  const [userData, setUserData] = useState<User>({
    name: '',
    email: '',
    mobile: '',
    address: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setUserData({
        name: 'Simon McTaggart',
        email: 'S.Mctaggart@gmail.com',
        mobile: '+1 416 927 1234',
        address: '80 Parish Cres Mississauga ON L5M 7Q4 Canada',
      });
      setIsLoading(false);
    }, 1300);
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
