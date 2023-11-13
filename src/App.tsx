import { Suspense } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import TMHRouter from 'components/TMHRouter/TMHRouter';
import LoadingPage from 'components/TMHRouter/LoadingPage';

const stripePromise = loadStripe(
  'pk_live_51HAcOAIlbu4bS03qno9sD7TKwDEp6QxFG4NcJ0hPmNsgVaotP9dn1yzlWv8X0lT7EN0F5stRW3WdfJ8NUyxucOfg00TILPz7wA'
);

export default function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Elements stripe={stripePromise}>
        <TMHRouter />
      </Elements>
    </Suspense>
  );
}
