import { useUser } from 'pages/users/Auth/UserContext';
import { useLocation, Navigate } from 'react-router-dom';

export default function PublicRoute({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { state } = useUser();
  const location = useLocation();
  const { user } = state;
  return user ? (
    <Navigate to="/account" state={{ from: location.pathname }} replace />
  ) : (
    <>{children}</>
  );
}
