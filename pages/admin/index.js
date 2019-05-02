
import React, { Container } from 'react';
import Menu from '../../components/Menu/Menu.js';

import { Authenticator, SignIn, SignUp, SignOut, ConfirmSignUp, Greetings } from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../../src/aws-exports';
import { NavLink } from 'reactstrap';
Amplify.configure(awsmobile);
const federated = {
  google_client_id: '',
  facebook_app_id: '579712102531269',
  amazon_client_id: ''
};

const Index = () => (
  <div>
    <Authenticator federated={federated} hide={[Greetings, SignOut]}>
      <AuthIndexApp></AuthIndexApp>
    </Authenticator>
  </div>
)
class AuthIndexApp extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    if (this.props.authState == "signedIn") {
      return (
        <div>
          <Menu />
          <IndexApp></IndexApp>
        </div>
      );
    } else {
      return null;
    }
  }
}

class IndexApp extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
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