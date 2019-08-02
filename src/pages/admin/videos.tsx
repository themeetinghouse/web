
import React from 'react';
import Amplify from 'aws-amplify';
import AdminMenu from '../../components/Menu/AdminMenu';
import MetaData from '../../components/MetaData/MetaData';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);
const Videos = () => (
  <div>
    <AdminMenu />
    <MetaData />
  </div>
)
export default Videos;
