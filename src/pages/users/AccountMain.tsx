import { Route, Switch, useHistory } from 'react-router-dom';
import './AccountMain.scss';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import DashboardFooter from './DashboardFooter';
import DashboardHome from './DashboardHome/DashboardHome';
import GivePage from './Give/GivePage';
import PaymentMethodsPage from './PaymentMethods/PaymentMethodsPage';
import TransactionsPage from './Transactions/TransactionsPage';
import { useContext, useEffect, useState } from 'react';
import ProfilePage from './ProfilePage/ProfilePage';
import { UserContext } from 'components/Auth/UserContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Auth } from 'aws-amplify';
import AdminWrapper from './AdminWrapper';
let env = 'unknown';
if (window.location === undefined) env = 'mobile';
else if (window.location.hostname === 'localhost') env = 'dev';
else if (window.location.hostname.includes('beta')) env = 'beta';
else if (window.location.hostname.includes('dev')) env = 'dev';
else env = 'prod';
export default function AccountMain(): JSX.Element {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const { userState, userActions } = useContext(UserContext);
  const [stripePromise] = useState(() =>
    loadStripe(
      env == 'beta'
        ? 'pk_live_51HAcOAIlbu4bS03qno9sD7TKwDEp6QxFG4NcJ0hPmNsgVaotP9dn1yzlWv8X0lT7EN0F5stRW3WdfJ8NUyxucOfg00TILPz7wA'
        : 'pk_test_51HAcOAIlbu4bS03qE6aactYWmVDkD3scHYRNRWSFhZHIontFxTcf8eWb9ZzYAR9aIBug7Xr9xuyXFXzgTz5MMeJg00VDuFFRTk'
    )
  );
  const refreshSession = async (): Promise<boolean> => {
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      const currentSession = await Auth.currentSession();
      if (currentSession.isValid()) return true;
      try {
        cognitoUser.refreshSession(
          currentSession.getRefreshToken(),
          (err: any) => {
            if (err) throw err;
          }
        );
        console.log('Successfully refreshed session');
        return true;
      } catch (error) {
        console.error({ error });
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const shouldUpdate = async () => {
      const isValidSession = await refreshSession();
      if (!isValidSession) history.push('/signin');
      else {
        if (userState?.authState !== 'signedIn') {
          await userActions.onStateChange('signedIn', null);
        }
      }
    };
    const runInterval = () => {
      shouldUpdate();
      interval = setInterval(shouldUpdate, 5000);
    };
    runInterval();
    return () => {
      clearInterval(interval);
    };
  }, [userState?.authState]);
  if (!userState || userState.authState !== 'signedIn') {
    return <div>Loading...</div>;
  } else
    return (
      <div className="MyAccountContainer">
        <Elements stripe={stripePromise}>
          <MyAccountNav
            navigationItems={[
              { label: 'Home', link: '/' },
              { label: 'Give', link: '/give' },
              { label: 'Transactions', link: '/transactions' },
              { label: 'Payment Methods', link: '/payments' },
              { label: 'Profile', link: '/profile' },
              { label: 'Admin', link: '/admin' },
            ]}
            open={open}
            toggle={() => setOpen((prev) => !prev)}
          />
          <div
            className="DashboardContent"
            style={open ? { display: 'none' } : {}}
          >
            <Switch>
              <Route path={`/account`} component={DashboardHome} exact />
              <Route path={`/account/give`} component={GivePage} />
              <Route
                path={`/account/transactions`}
                component={TransactionsPage}
              />
              <Route
                path={`/account/payments`}
                component={PaymentMethodsPage}
              />
              <Route path={`/account/profile`} component={ProfilePage} />
              <Route path={`/account/admin`} component={AdminWrapper} />
            </Switch>
          </div>

          <DashboardFooter />
        </Elements>
      </div>
    );
}
