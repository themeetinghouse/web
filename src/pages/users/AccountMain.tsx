import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import './AccountMain.scss';
import DashboardFooter from './DashboardFooter';
import DashboardHome from './DashboardHome/DashboardHome';
import GivePage from './Give/GivePage';
import PaymentMethodsPage from './PaymentMethods/PaymentMethodsPage';
import TransactionsPage from './Transactions/TransactionsPage';
export default function AccountMain(): JSX.Element {
  const { url } = useRouteMatch();
  const Navi = () => {
    return (
      <div className="navContainer">
        <ul className="nav">
          <Link to={`${url}`}>
            <li className="selected">Home</li>
          </Link>
          <Link to={`${url}/give`}>
            <li>Give</li>
          </Link>
          <Link to={`${url}/transactions`}>
            <li>Transactions</li>
          </Link>
          <Link to={`${url}/payments`}>
            <li>Payment Methods</li>
          </Link>
        </ul>
      </div>
    );
  };
  return (
    <div className="accountContainer">
      <Navi />
      <div className="pageContainer">
        <Switch>
          <Route path={`/account`} component={DashboardHome} exact />
          <Route path={`/account/give`} component={GivePage} />
          <Route path={`/account/transactions`} component={TransactionsPage} />
          <Route path={`/account/payments`} component={PaymentMethodsPage} />
        </Switch>
      </div>
      <DashboardFooter />
    </div>
  );
}
