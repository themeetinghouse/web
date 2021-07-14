import { Route, Switch } from 'react-router-dom';
import './AccountMain.scss';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import DashboardFooter from './DashboardFooter';
import DashboardHome from './DashboardHome/DashboardHome';
import GivePage from './Give/GivePage';
import PaymentMethodsPage from './PaymentMethods/PaymentMethodsPage';
import TransactionsPage from './Transactions/TransactionsPage';
import { useState } from 'react';
import ProfilePage from './ProfilePage/ProfilePage';
export default function AccountMain(): JSX.Element {
  const [open, setOpen] = useState(false);
  return (
    <div className="MyAccountContainer">
      <MyAccountNav open={open} toggle={() => setOpen((prev) => !prev)} />
      <div className="DashboardContent" style={open ? { display: 'none' } : {}}>
        <Switch>
          <Route path={`/account`} component={DashboardHome} exact />
          <Route path={`/account/give`} component={GivePage} />
          <Route path={`/account/transactions`} component={TransactionsPage} />
          <Route path={`/account/payments`} component={PaymentMethodsPage} />
          <Route path={`/account/profile`} component={ProfilePage} />
        </Switch>
      </div>
      {false ? <DashboardFooter /> : null}
    </div>
  );
}
