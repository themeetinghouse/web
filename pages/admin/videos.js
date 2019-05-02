
import React, { Container } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import Menu from '../../components/Menu/Menu.js';
import MetaData from '../../components/MetaData/MetaData.js';
import awsmobile from '../../src/aws-exports';

Amplify.configure(awsmobile);
const Videos = () => (
  <div>
    <Menu />
    <MetaData />
  </div>
)
export default Videos;
