import { Auth } from 'aws-amplify';
import { useUser } from 'pages/users/Auth/UserContext';
import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const determinePermittedPage = (pathname: string, permissions: string[]) => {
  if (permissions.includes('Admin')) return true;
  switch (pathname) {
    case 'compassion':
      return permissions.includes('LocationManager');
    case 'announcements':
      return (
        permissions.includes('LocationManager') ||
        permissions.includes('GlobalContentManager')
      );
    case 'import-video':
      return permissions.includes('GlobalContentManager');
    case 'create-blog':
      return (
        permissions.includes('Bloggers') ||
        permissions.includes('GlobalContentManager')
      );
    case 'create-notes':
      return (
        permissions.includes('Notes') ||
        permissions.includes('GlobalContentManager')
      );
    case 'livestream':
      return permissions.includes('GlobalContentManager');
    case 'videos':
      return permissions.includes('GlobalContentManager');
    case 'editor':
      return permissions.includes('WebEditorManager');
    case 'homechurches':
      return permissions.includes('LocationManager');
    case 'locations':
      return permissions.includes('LocationManager');
    case 'redirects':
      return permissions.includes('GlobalContentManager');
    case 'people':
      return permissions.includes('LocationManager');
    case '/':
      return false;

    default:
      return false;
  }
};
export default function PermittedRoute({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { state } = useUser();
  const location = useLocation();
  const [isPermitted, setIsPermitted] = useState(true);
  const { user } = state;
  useEffect(() => {
    (async () => {
      try {
        const user1 = await Auth.currentAuthenticatedUser();
        const groups =
          user1.signInUserSession.accessToken.payload['cognito:groups'];
        console.log({ path: location.pathname });

        const page = location.pathname.split('/').at(-1);
        if (page) {
          const shouldShow = determinePermittedPage(page, groups);
          setIsPermitted(shouldShow);
        }
      } catch (error6) {
        console.log({ error6 });
      }
    })();
  }, [user, location]);
  console.log(!isPermitted ? location : 'allowed');
  return !isPermitted ? (
    <Navigate to="/account" state={{ from: location.pathname }} replace />
  ) : (
    <>{children}</>
  );
}
