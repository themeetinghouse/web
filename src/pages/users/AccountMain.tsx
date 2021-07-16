import { Route, Switch, useHistory } from 'react-router-dom';
import './AccountMain.scss';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import DashboardFooter from './DashboardFooter';
import DashboardHome from './DashboardHome/DashboardHome';
import GivePage from './Give/GivePage';
import PaymentMethodsPage from './PaymentMethods/PaymentMethodsPage';
import TransactionsPage from './Transactions/TransactionsPage';
import { useState } from 'react';
import ProfilePage from './ProfilePage/ProfilePage';
import { useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { UserContext } from 'components/Auth/UserContext';
import Admin from '../admin/index';
export default function AccountMain(): JSX.Element {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const UserConsumer = UserContext.Consumer;
  useEffect(() => {
    const checkAuthStatus = async () => {
      const user = await Auth.currentAuthenticatedUser();
      const session = await Auth.userSession(user);
      if (!session.isValid()) {
        setIsLoggedIn(false);
        console.log('invalid session');
        history.push('/signin');
      } else {
        console.log('Valid session');
        setIsLoggedIn(true);
      }
    };
    checkAuthStatus();
  });
  return isLoggedIn ? (
    <UserConsumer>
      {({ userState }) => {
        if (!userState) return null;
        console.log(userState.groups);
        return (
          <div className="MyAccountContainer">
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
            {false ? <DashboardFooter /> : null}
          </div>
        );
      }}
    </UserConsumer>
  ) : (
    <div />
  );
}
