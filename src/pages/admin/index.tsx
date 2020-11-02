import React from 'react';
import AdminMenu from '../../components/Menu/AdminMenu';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import Amplify from 'aws-amplify';
import awsmobile from '../../aws-exports';
import { NavLink } from 'components/Link/Link';

Amplify.configure(awsmobile);
const federated = {
  facebookAppId: '579712102531269',
};

class Index extends React.Component {
  render() {
    return (
      <AmplifyAuthenticator federated={federated}>
        <div>
          <AdminMenu />
          Welcome to The Meeting House Admin Site
          <NavLink to="/">Back to Main Site</NavLink>
        </div>
      </AmplifyAuthenticator>
    );
  }
}
export default Index;
