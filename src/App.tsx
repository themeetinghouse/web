import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import HomePage from './pages/HomePage';
import Authenticator from './components/Auth/Authenticator';

interface Props extends RouteComponentProps<any> {
  match: any;
  history: History;
}
interface State {
  content: any;
}
const RequireNewPassword = lazy(
  () => import('./components/Auth/RequireNewPassword')
);
const VerifyContact = lazy(() => import('./components/Auth/VerifyContact'));
const ForgotPassword = lazy(() => import('./components/Auth/ForgotPassword'));
const ConfirmSignUp = lazy(() => import('./components/Auth/ConfirmSignUp'));
const SignIn = lazy(() => import('./components/Auth/SignIn'));
const SignUp = lazy(() => import('./components/Auth/SignUp'));

const AccountMain = lazy(() => import('./pages/users/AccountMain'));

class App extends React.Component<Props, State> {
  render() {
    return (
      <Suspense fallback={<div></div>}>
        <Authenticator {...this.props}>
          <Switch key={this.props.location.pathname}>
            <Route path="/signin" render={() => <SignIn />} />
            <Route path="/signup" render={() => <SignUp />} />
            <Route
              path="/requireNewPassword"
              render={() => <RequireNewPassword />}
            />
            <Route path="/verifyContact" render={() => <VerifyContact />} />
            <Route path="/confirmsignup" render={() => <ConfirmSignUp />} />
            <Route path="/forgotpassword" render={() => <ForgotPassword />} />
            <Route path="/account" render={() => <AccountMain />} />
            <Route path="*" render={(props) => <HomePage {...props} />} />
          </Switch>
        </Authenticator>
      </Suspense>
    );
  }
}
export default withRouter(App);
