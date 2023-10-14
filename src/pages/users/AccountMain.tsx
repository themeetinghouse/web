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
import AdminWrapper from './AdminWrapper';
import { GEProvider } from 'components/RenderRouter/GiveComponents/GEContext';
import { UserProvider, useUser } from './Auth/UserContext';

const RequireNewPassword = lazy(
  () => import('../users/Auth/RequireNewPassword')
);
const ForgotPassword = lazy(() => import('../users/Auth/ForgotPassword'));
const ConfirmSignUp = lazy(() => import('../users/Auth/ConfirmSignUp'));
const SignIn = lazy(() => import('../users/Auth/SignIn'));
const SignUp = lazy(() => import('../users/Auth/SignUp'));
function AccountMainContent(): JSX.Element {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Home', link: '/' },
    { label: 'Give', link: '/give' },
    { label: 'Transactions', link: '/transactions' },
    { label: 'Payment Methods', link: '/payments' },
    { label: 'Profile', link: '/profile' },
    { label: 'Admin', link: '/admin' },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="MyAccountContainer">
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
          </Switch>
        </div>

        <DashboardFooter />
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
