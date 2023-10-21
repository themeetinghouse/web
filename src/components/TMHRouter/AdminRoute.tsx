import { Auth } from 'aws-amplify';
import { useUser } from 'pages/users/Auth/UserContext';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function AdminRoute({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { state } = useUser();
  const location = useLocation();
  const [shouldShowAdmin, setShouldShowAdmin] = useState(true);
  const { user } = state;
  useEffect(() => {
    (async () => {
      try {
        const user1 = await Auth.currentAuthenticatedUser();
        const groups =
          user1.signInUserSession.accessToken.payload['cognito:groups'];
        const isAdmin = groups?.includes('Admin');
        console.log({ groups, isAdmin });
        const isLocationManager =
          groups?.includes('LocationManager') || isAdmin;
        const isNotesManager = groups?.includes('Notes') || isAdmin;
        const isBlogsManager = groups?.includes('Bloggers') || isAdmin;
        const isEditorManager = groups?.includes('WebEditorManager') || isAdmin;
        const isGlobalContentManager =
          groups?.includes('GlobalContentManager') || isAdmin;
        const shouldShow =
          isAdmin ||
          isLocationManager ||
          isNotesManager ||
          isBlogsManager ||
          isEditorManager ||
          isGlobalContentManager;
        setShouldShowAdmin(shouldShow);
      } catch (error6) {
        console.log({ error6 });
      }
    })();
  }, [user]);

  return !shouldShowAdmin ? (
    <Navigate to="/account" state={{ from: location.pathname }} replace />
  ) : (
    <>{children}</>
  );
}
