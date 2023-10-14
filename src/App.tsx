import { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(
  'pk_live_51HAcOAIlbu4bS03qno9sD7TKwDEp6QxFG4NcJ0hPmNsgVaotP9dn1yzlWv8X0lT7EN0F5stRW3WdfJ8NUyxucOfg00TILPz7wA'
);
const AccountMain = lazy(() => import('./pages/users/AccountMain'));

export default function App() {
  console.log('App');
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Elements stripe={stripePromise}>
        <Router>
          <Switch>
            <Route path="/account" component={AccountMain} />
            <Route path="*" render={(props) => <HomePage {...props} />} />
          </Switch>
        </Router>
      </Elements>
    </Suspense>
  );
}
