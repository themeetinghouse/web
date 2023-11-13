import { useUser } from 'pages/users/Auth/UserContext';
import { useLocation, Navigate } from 'react-router-dom';

export default function PrivateRoute({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { state } = useUser();
  const location = useLocation();
  const { user, tmhUserData, isProfileComplete } = state;
  return !user ? (
    <Navigate
      to="/account/signin"
      state={{ from: location.pathname }}
      replace
    />
  ) : (
    <IncompleteProfileRoute
      tmhUserData={tmhUserData}
      isProfileComplete={isProfileComplete}
      location={location}
    >
      <>{children}</>
    </IncompleteProfileRoute>
  );
}

export function IncompleteProfileRoute({
  children,
  location,
  tmhUserData,
  isProfileComplete,
}: {
  children?: React.ReactNode;
  location?: any;
  tmhUserData?: any;
  isProfileComplete?: boolean;
}) {
  if (!tmhUserData) return null;
  return !isProfileComplete && location.pathname !== '/account/profile' ? (
    <Navigate
      to="/account/profile"
      state={{ from: location.pathname }}
      replace
    />
  ) : (
    <>{children}</>
  );
}
