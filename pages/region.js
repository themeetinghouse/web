
import React, { Container } from 'react';

import Menu from '../components/Menu/Menu.js';
import { withRouter } from 'next/router'

 class Sites extends React.Component {
  constructor(props) {
      super(props)
      const {router} = this.props
      this.state={region:router.query.region}
     
  }
render(){
  
  return(
  <div>
    Welcome to {this.state.region} region
    
  </div>

)
}
}
export default withRouter(Sites)