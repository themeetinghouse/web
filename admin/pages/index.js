
import React, { Container } from 'react';
import Menu from '../components/Menu/Menu.js';

import { Authenticator, SignIn, SignUp, SignOut, ConfirmSignUp, Greetings } from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import awsmobile from '../src/aws-exports';
Amplify.configure(awsmobile);

const Index = () => (
  <div>
    <Authenticator hide={[Greetings, SignOut]}>
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
        </div>
      );
  }
}
export default Index;