import { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';

const AccountMain = lazy(() => import('./pages/users/AccountMain'));

export default function App() {
  console.log('App');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/account" component={AccountMain} />
          <Route path="*" render={(props) => <HomePage {...props} />} />
        </Switch>
      </Router>
    </Suspense>
  );
}
