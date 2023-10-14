import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './AccountMain.scss';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import DashboardFooter from './DashboardFooter';
import DashboardHome from './DashboardHome/DashboardHome';
import GivePage from './Give/GivePage';
import PaymentMethodsPage from './PaymentMethods/PaymentMethodsPage';
import TransactionsPage from './Transactions/TransactionsPage';
import { Suspense, lazy, useEffect, useState } from 'react';
import ProfilePage from './ProfilePage/ProfilePage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AdminWrapper from './AdminWrapper';
import { GEProvider } from 'components/RenderRouter/GiveComponents/GEContext';
//import Authenticator from './Auth/Authenticator';
import { UserProvider, useUser } from './Auth/UserContext';

const RequireNewPassword = lazy(
  () => import('../users/Auth/RequireNewPassword')
);
const ForgotPassword = lazy(() => import('../users/Auth/ForgotPassword'));
const ConfirmSignUp = lazy(() => import('../users/Auth/ConfirmSignUp'));
const SignIn = lazy(() => import('../users/Auth/SignIn'));
const SignUp = lazy(() => import('../users/Auth/SignUp'));
let env = 'unknown';
if (window.location === undefined) env = 'mobile';
else if (window.location.hostname === 'localhost') env = 'dev';
else if (window.location.hostname.includes('beta')) env = 'beta';
else if (window.location.hostname.includes('dev')) env = 'dev';
else env = 'prod';
const stripePromise = loadStripe(
  env == 'beta'
    ? 'pk_live_51HAcOAIlbu4bS03qno9sD7TKwDEp6QxFG4NcJ0hPmNsgVaotP9dn1yzlWv8X0lT7EN0F5stRW3WdfJ8NUyxucOfg00TILPz7wA'
    : 'pk_test_51HAcOAIlbu4bS03qE6aactYWmVDkD3scHYRNRWSFhZHIontFxTcf8eWb9ZzYAR9aIBug7Xr9xuyXFXzgTz5MMeJg00VDuFFRTk'
);
function AccountMainContent(): JSX.Element {
  //const history = useHistory();
  const [open, setOpen] = useState(false);
  //const { state } = useUser();
  //const { userState, userActions } = useContext(UserContext);
  // const { state, dispatch } = useContext(GEContext);
  // const refreshSession = async (): Promise<boolean> => {
  //   try {
  //     const cognitoUser = await Auth.currentAuthenticatedUser();
  //     const currentSession = await Auth.currentSession();
  //     if (currentSession.isValid()) return true;
  //     try {
  //       cognitoUser.refreshSession(
  //         currentSession.getRefreshToken(),
  //         (err: any) => {
  //           if (err) throw err;
  //         }
  //       );
  //       console.log('Successfully refreshed session');
  //       return true;
  //     } catch (error) {
  //       console.error({ error });
  //       return false;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // };
  // useEffect(() => {
  //   let interval: NodeJS.Timeout;
  //   const shouldUpdate = async () => {
  //     const isValidSession = await refreshSession();
  //     if (!isValidSession) history.push('/signin');
  //     else {
  //       if (userState?.authState !== 'signedIn') {
  //         await userActions.onStateChange('signedIn', null);
  //       }
  //     }
  //   };
  //   const runInterval = () => {
  //     shouldUpdate();
  //     interval = setInterval(shouldUpdate, 5000);
  //   };
  //   runInterval();
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [userState?.authState]);
  const navLinks = [
    { label: 'Home', link: '/' },
    { label: 'Give', link: '/give' },
    { label: 'Transactions', link: '/transactions' },
    { label: 'Payment Methods', link: '/payments' },
    { label: 'Profile', link: '/profile' },
    { label: 'Admin', link: '/admin' },
  ];
  console.log('Account Main');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="MyAccountContainer">
        <Elements stripe={stripePromise}>
          <MyAccountNav
            navigationItems={navLinks}
            open={open}
            toggle={() => setOpen((prev) => !prev)}
          />
          <div
            className="DashboardContent"
            style={open ? { display: 'none' } : {}}
          >
            <Switch>
              <PublicRoute path="/account/signin">
                <SignIn />
              </PublicRoute>
              <PublicRoute path="/account/signup">
                <SignUp />
              </PublicRoute>
              <PublicRoute path="/account/requirenewpassword">
                <RequireNewPassword />
              </PublicRoute>
              <PublicRoute path="/account/confirmsignup">
                <ConfirmSignUp />
              </PublicRoute>
              <PublicRoute path="/account/forgotpassword">
                <ForgotPassword />
              </PublicRoute>
              <PrivateRoute path={`/account`} exact>
                <DashboardHome />
              </PrivateRoute>
              <PrivateRoute path={`/account/give`}>
                <GivePage />
              </PrivateRoute>
              <PrivateRoute path={`/account/transactions`}>
                <TransactionsPage />
              </PrivateRoute>
              <PrivateRoute path={`/account/payments`}>
                <PaymentMethodsPage />
              </PrivateRoute>
              <PrivateRoute path={`/account/admin`}>
                <AdminWrapper />
              </PrivateRoute>
              <PrivateRoute path={`/account/profile`}>
                <ProfilePage />
              </PrivateRoute>
              {/* <Route path="/account/signin">
                <SignIn />
              </Route>
              <Route path="/account/signup">
                <SignUp />
              </Route>
              <Route path="/account/requirenewpassword">
                <RequireNewPassword />
              </Route>
              <Route path="/account/confirmsignup">
                <ConfirmSignUp />
              </Route>
              <Route path="/account/forgotpassword">
                <ForgotPassword />
              </Route>
              <Route path={`/account`} exact>
                <DashboardHome />
              </Route>
              <Route path={`/account/give`}>
                <GivePage />
              </Route>
              <Route path={`/account/transactions`}>
                <TransactionsPage />
              </Route>
              <Route path={`/account/payments`}>
                <PaymentMethodsPage />
              </Route>
              <Route path={`/account/admin`}>
                <AdminWrapper />
              </Route>
              <Route path={`/account/profile`}>
                <ProfilePage />
              </Route> */}
            </Switch>
          </div>

          <DashboardFooter />
        </Elements>
      </div>
    </Suspense>
  );
}

export default function AccountMain(props: any) {
  return (
    <UserProvider>
      <GEProvider>
        <AccountMainContent {...props} />
      </GEProvider>
    </UserProvider>
  );
}
function PublicRoute({
  children,
  ...rest
}: {
  children?: React.ReactNode;
  [x: string]: any;
}) {
  const { state } = useUser();
  const { user: isAuthenticated } = state;
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated ? (
          <Redirect
            exact
            to={{
              pathname: '/account',
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    />
  );
}
function PrivateRoute({
  children,
  ...rest
}: {
  children?: React.ReactNode;
  [x: string]: any;
}) {
  const { state } = useUser();
  const history = useHistory();
  const { user, isProfileComplete, tmhUserData } = state;
  console.log({ isProfileComplete });
  useEffect(() => {
    if (!isProfileComplete && user && tmhUserData) {
      console.log('replaciong');
      history.replace('/account/profile');
    }
  }, [isProfileComplete, user, tmhUserData]);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user ? (
          <Redirect
            exact
            to={{
              pathname: '/account/signin',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
