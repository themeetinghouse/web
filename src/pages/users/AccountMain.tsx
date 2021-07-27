import { Route, Switch, useHistory } from 'react-router-dom';
import './AccountMain.scss';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import DashboardFooter from './DashboardFooter';
import DashboardHome from './DashboardHome/DashboardHome';
import GivePage from './Give/GivePage';
import PaymentMethodsPage from './PaymentMethods/PaymentMethodsPage';
import TransactionsPage from './Transactions/TransactionsPage';
import { useContext, useState } from 'react';
import ProfilePage from './ProfilePage/ProfilePage';
import { UserContext } from 'components/Auth/UserContext';
import Admin from '../admin/index';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
let env = 'unknown';
if (window.location === undefined) env = 'mobile';
else if (window.location.hostname === 'localhost') env = 'dev';
else if (window.location.hostname.includes('beta')) env = 'beta';
else if (window.location.hostname.includes('dev')) env = 'dev';
else env = 'prod';
export default function AccountMain(): JSX.Element {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const { userState } = useContext(UserContext);
  const [stripePromise] = useState(() =>
    loadStripe(
      env == 'beta'
        ? 'pk_live_51HlyrYLTzrDhiQ9282ydxEkzCmGQuJ6w6m2J7pvWL3DslQGdyZHhi6NFa7lLgErh9YjboGdEs09ce0y9c3H5SfVx00K1massZP'
        : 'pk_test_51HlyrYLTzrDhiQ921sERNUY2GQBDgpHDOUYMiNZ0lTeTsse9u8oQoBfLg6UzWaxcNkYhek4tkNWILTlAiajet27k00FFv6z0RB'
    )
  );
  if (!userState || userState.authState !== 'signedIn') {
    console.log('userState', userState);
    history.push('/signin');
    return <p>Redirecting</p>;
  } else
    return (
      <div className="MyAccountContainer">
        <Elements stripe={stripePromise}>
          <MyAccountNav
            navigationItems={[
              ...[
                { label: 'Home', link: '/' },
                { label: 'Give', link: '/give' },
                { label: 'Transactions', link: '/transactions' },
                { label: 'Payment Methods', link: '/payments' },
                { label: 'Profile', link: '/profile' },
              ],
              ...(userState.groups?.includes('Admin')
                ? [
                    {
                      label: 'Admin',
                      link: '/admin',
                    },
                  ]
                : []),
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
              <Route path={`/account/admin`} component={Admin} />
            </Switch>
          </div>

          <DashboardFooter />
        </Elements>
      </div>
    );
}
