import { Route, Switch } from 'react-router-dom';
import './AccountMain.scss';
import MyAccountNav from './MyAccountNav/MyAccountNav';
import DashboardFooter from './DashboardFooter';
import DashboardHome from './DashboardHome/DashboardHome';
import GivePage from './Give/GivePage';
import PaymentMethodsPage from './PaymentMethods/PaymentMethodsPage';
import TransactionsPage from './Transactions/TransactionsPage';
export default function AccountMain(): JSX.Element {
  return (
    <div className="MyAccountContainer">
      <MyAccountNav />
      <div className="DashboardContent">
        <Switch>
          <Route path={`/account`} component={DashboardHome} exact />

          <Route path={`/account/give`} component={GivePage} />
          <Route path={`/account/transactions`} component={TransactionsPage} />
          <Route path={`/account/payments`} component={PaymentMethodsPage} />
        </Switch>
      </div>
      {false ? <DashboardFooter /> : null}
    </div>
  );
}
