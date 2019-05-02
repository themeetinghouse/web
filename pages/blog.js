
import React, { Container } from 'react';

import Menu from '../components/Menu/Menu.js';
import { withRouter } from 'next/router'

 class Blog extends React.Component {
  constructor(props) {
      super(props)
      const {router} = this.props
      this.state={blog:router.query.blog}
     
  }
render(){
  
  return(
  <div>
    Welcome to {this.state.blog} blog
    
  </div>

)
}
}
export default withRouter(Blog)