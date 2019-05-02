
import React, { Container } from 'react';

import Menu from '../components/Menu/Menu.js';
import { withRouter } from 'next/router'

 class Sites extends React.Component {
  constructor(props) {
      super(props)
      const {router} = this.props
      this.state={video:router.query.video}
     
  }
render(){
  
  return(
  <div>
    Welcome to {this.state.video} video
    
  </div>

)
}
}
export default withRouter(Sites)