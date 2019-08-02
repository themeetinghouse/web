
import React, {Component} from 'react';

import AdminMenu from '../../components/Menu/AdminMenu';
import * as queries from '../../graphql/queries';
//import * as mutations from '../../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';

Amplify.configure(awsmobile);

class HomeChurch extends Component {
  
renderGroups() 
{
    
    const playlistItems = API.graphql(graphqlOperation(queries.f1ListGroupTypes, undefined));
    playlistItems.then((json:any) => {
      console.log("Success queries.f1ListGroupTypes: " + json)
      console.log(json)

    }).catch((err:any) => {
      console.log(err)
      console.log("Error queries.f1ListGroupTypes: " + err)

    });
    const f1ListGroups = API.graphql(graphqlOperation(queries.f1ListGroups, {itemId:"58082"}));
    f1ListGroups.then((json:any) => {
      console.log("Success queries.f1ListGroups: " + json)
      console.log(json)

    }).catch((err:any) => {
      console.log(err)
      console.log("Error queries.f1ListGroups: " + err)

    });
} 

  render() {

return (<div>
    <AdminMenu />HomeChurch Admin Coming Soon...
    {this.renderGroups()}
  </div>);
    
  }


}
export default HomeChurch;

