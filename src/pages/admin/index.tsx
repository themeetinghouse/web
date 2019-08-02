
import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';

import { Authenticator, SignOut, Greetings } from 'aws-amplify-react';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { NavLink } from 'reactstrap';
Amplify.configure(awsmobile);
const federated = {
  google_client_id: '',
  facebook_app_id: '579712102531269',
  amazon_client_id: ''
};
interface Props2 { }
interface State2 { }

class Index extends React.Component<Props2, State2>  {
  render() {
    return (
      <div>
        <Authenticator federated={federated} hide={[Greetings, SignOut]}>
          <AuthIndexApp></AuthIndexApp>
        </Authenticator>
      </div>
    )
  }
}
interface Props {
  authState?: any
}
interface State { }
class AuthIndexApp extends React.Component<Props, State>  {

  render() {
    if (this.props.authState === "signedIn") {
      return (
        <div>
          <AdminMenu />
          <IndexApp></IndexApp>
        </div>
      );
    } else {
      return null;
    }
  }
}

class IndexApp extends React.Component {

  render() {
    return (
      <div>
        Welcome to The Meeting House Admin Site
        <NavLink href="/">Back to Main Site</NavLink>
      </div>
    );
  }
}
export default Index;