

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//import $ from 'jquery';
import Amplify, { API,  graphqlOperation } from 'aws-amplify';
import awsmobile from '../../aws-exports';

//import gql from 'graphql-tag';
//import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
//import aws_config from '../../aws-exports';
import { listLocations, listRegions, listGroups } from '../../graphql/queries';
import {  createRegion, createGroup } from '../../graphql/mutations';
import AdminMenu from '../../components/Menu/AdminMenu';
import './locations.css'
Amplify.configure(awsmobile);
interface State{
  LocationBoxVisible: boolean,
  RegionBoxVisible: boolean,
  GroupBoxVisible: boolean,
  Locations: any,
  Regions: any,
  Groups: any
}
interface Props{

}
class Locations extends React.Component<Props, State>  {
  constructor(props:Props) {
    super(props);
    this.handleRegionClick = this.handleRegionClick.bind(this);
    this.handleLocationClick = this.handleLocationClick.bind(this);
    this.handleGroupClick = this.handleGroupClick.bind(this);

    this.handleRegionAddClick = this.handleRegionAddClick.bind(this);
    this.handleLocationAddClick = this.handleLocationAddClick.bind(this);
    this.handleGroupAddClick = this.handleGroupAddClick.bind(this);


    this.getLocationList = this.getLocationList.bind(this);
    this.locationList = this.locationList.bind(this);
    this.groupList = this.groupList.bind(this);
    this.getRegionList = this.getRegionList.bind(this);

    this.getGroupList = this.getGroupList.bind(this);
    this.regionList = this.regionList.bind(this);
    this.state = {
      LocationBoxVisible: true,
      RegionBoxVisible: false,
      GroupBoxVisible: false,
      Locations: null,
      Regions: null,
      Groups: null
    };
    this.getGroupList();
    this.getLocationList();
    this.getRegionList();
  }

  handleRegionClick() {
    this.setState({
      LocationBoxVisible: false,
      RegionBoxVisible: true,
      GroupBoxVisible: false
    });
  }
  handleLocationClick() {
    this.setState({
      LocationBoxVisible: true,
      RegionBoxVisible: false,
      GroupBoxVisible: false
    });
  }
  handleGroupClick() {
    this.setState({
      LocationBoxVisible: false,
      RegionBoxVisible: false,
      GroupBoxVisible: true
    });
  }
  async addRegion() {
    const CreateRegionInput = {
      name: "new region",
      status: "disabled"
    };
    API.graphql(graphqlOperation(createRegion, { input: CreateRegionInput })).then(() => {
      console.log("region");
      // this.setState({userName:location});
    }
    ).catch((e:any) => {
      console.log("Error: ");
      console.log(e);
    });
  }

  async addGroup() {
    const CreateGroupInput = {
      name: "new group",
      status: "enabled",
      canJoin: "false",
      visibleToNonMembers: "false",
      type: "internal"
    };


    API.graphql(graphqlOperation(createGroup, { input: CreateGroupInput })).then(() => {
      console.log("group");
      // this.setState({userName:location});
    }
    ).catch((e:any) => {
      console.log("Error: ");
      console.log(e);
    });
  }
  async addLocation() {
   /* const CreateLocationInput = {
      name: "new location",
      status: "enabled",
      canJoin: "false",
      visibleToNonMembers: "false"
    };
*/

  /*  API.graphql(graphqlOperation(createLocation, { input: CreateLocationInput })).then(location => {
      console.log("location");
      // this.setState({userName:location});
    }
    ).catch(e => {
      console.log("Error: ");
      console.log(e);
    });*/
  }
  handleGroupAddClick() {
    this.addGroup();
    this.getGroupList();
  }
  handleRegionAddClick() {
    this.addRegion();
    this.getRegionList();
  }
  handleLocationAddClick() {
    this.addLocation();
    this.getLocationList();
  }


  async getGroupList() {
    API.graphql(graphqlOperation(listGroups)).then((listGroups:any) => {
      this.setState({ Groups: listGroups.data.listGroups.items });
    }
    ).catch((e:any) => {
      console.log("Error (getGroupList): ");
      console.log(e);
    });
  }
  groupList() {
    if (this.state.Groups == null) return "";
    var groupList = this.state.Groups.map((group:any) => {
      var z = (
        <div key={group.id} className="location" onClick={this.handleGroupClick}>{group.name}</div>
      );
      return z;
    });
    return groupList;
  }
  async getRegionList() {
    API.graphql(graphqlOperation(listRegions)).then((listRegions:any) => {
      this.setState({ Regions: listRegions.data.listRegions.items });
    }
    ).catch((e:any) => {
      console.log("Error (getRegionList): ");
      console.log(e);
    });
  }
  regionList() {
    if (this.state.Regions == null) return "";
    var regionList = this.state.Regions.map((region:any) => {
      var z = (
        <div key={region.id} className="location region" onClick={this.handleRegionClick}>{region.name}</div>
      );
      return z;
    });
    return regionList;
  }

  async getLocationList() {
    API.graphql(graphqlOperation(listLocations)).then((listLocations:any) => {
      console.log("hello");
      console.log(listLocations);

      this.setState({ Locations: listLocations.data.listLocations.items });

    }
    ).catch((e:any) => {
      console.log("Error (getLocationList): ");
      console.log(e);
    });
  }


  locationList() {
    if (this.state.Locations == null) return "";
    var locationList = this.state.Locations.map((location:any) => {
      var z = (
        <div key={location.id} className="location" onClick={this.handleLocationClick} >
          <div>{location.site_name}</div>
          <div>{location.location.address}</div>
        </div>
      );
      return z;
    });
    return locationList;
  }

  render() {
    return <div className="mainWindow">
      <AdminMenu />
      <div>Location Admin</div>
      <div className="leftPanel">
        <div className="header">
          <div className="headerText">Groups</div>
          <div className="add" onClick={this.handleGroupAddClick}>+</div>
        </div>
        <div className="locationList">
          {this.groupList()}

        </div>
        <div className="header">
          <div className="headerText">Regions</div>
          <div className="add" onClick={this.handleRegionAddClick}>+</div>
        </div>
        <div className="locationList">
          {this.regionList()}
        </div>
        <div className="header">
          <div className="headerText">Locations</div>
          <div className="add" onClick={this.handleLocationAddClick}>+</div>
        </div>
        <div className="locationList">
          {this.locationList()}
        </div>
      </div>
      <div className="mainWorkArea">
        {this.state.RegionBoxVisible && <RegionBox />}
        {this.state.LocationBoxVisible && <LocationBox />}
        {this.state.GroupBoxVisible && <GroupBox />}
      </div>
    </div>
  }
}

export default Locations;
const GroupBox = () => (
  <div className="locationInfo">
    <div className="locationInfo">Group</div>
    <div className="form-group">
      <input type="textbox" className="form-control" id="groupNameInput" placeholder="Group Name"></input>
    </div>
    <div className="regionList">
      <div><input type="checkbox"></input>Visible</div>
      <div><input type="checkbox"></input>Joinable</div>
      <div>Type</div>
    </div>
  </div>
)
const RegionBox = () => (
  <div className="locationInfo">
    <div className="locationInfo">Region</div>
    <div className="form-group">
      <input type="textbox" className="form-control" id="regionNameInput" placeholder="Region Name"></input>
    </div>
    <div className="regionList">
      <div><input type="checkbox"></input>Oakville</div>
      <div><input type="checkbox"></input>Downtown Toronto</div>
    </div>
  </div>
)
const LocationBox = () => (

  <div>
    <div className="locationInfo">
      <div>Location</div>

      <div className="locationLeft">
        <div className="form-group">
          <div><input type="textbox" className="form-control" placeholder="Location Name"></input></div>
          <div><input type="textbox" className="form-control" placeholder="Site Name"></input></div>
          <div><input type="textbox" className="form-control" placeholder="Location Address"></input></div>
          <div><input type="textbox" className="form-control" placeholder="Location Phone"></input></div>

        </div>
        <div className="form-group">
          <div><input type="textbox" className="form-control" placeholder="Location Email"></input></div>
          <div><input type="textbox" className="form-control" placeholder="Location Twitter"></input></div>
          <div><input type="textbox" className="form-control" placeholder="Location Instagram"></input></div>
          <div><input type="textbox" className="form-control" placeholder="Location Facebook"></input></div>
          <div><input type="textbox" className="form-control" placeholder="Location Website"></input></div>
        </div>
      </div>
      <div className="locationLeft">
        <div><input type="textbox" className="form-control" placeholder="Location Description"></input></div>
        <div><input type="textbox" className="form-control" placeholder="Location Photo"></input></div>
        <div><input type="textbox" className="form-control" placeholder="Location Video"></input></div>
      </div>
    </div>

    <div className="staffWorkArea">
      <div className="staffLeftPanel">
        <div className="header">
          <div className="headerText">Staff</div>
          <div className="add">+</div>
        </div>
        <div className="locationList">
          <div className="location">
            <div>Pastor 1</div>
            <div>Sr. Pastor</div>
          </div>
        </div>
        <div className="header">
          <div className="headerText">Volunteers</div>
          <div className="add">+</div>
        </div>
        <div className="locationList">
          <div className="location">
            <div>Kids 1</div>
            <div>Kids Max</div>
          </div>
        </div>
      </div>
      <div className="staffPanel">
        <div>Staff Info</div>
        <div className="locationLeft">
          <div className="form-group">
            <div><input type="textbox" className="form-control" placeholder="Staff Title"></input></div>
            <div><input type="textbox" className="form-control" placeholder="Staff Name"></input></div>
            <div><input type="textbox" className="form-control" placeholder="Staff Phone"></input></div>
          </div>
          <div className="form-group">
            <div><input type="textbox" className="form-control" placeholder="Staff Email"></input></div>
            <div><input type="textbox" className="form-control" placeholder="Staff Twitter"></input></div>
            <div><input type="textbox" className="form-control" placeholder="Staff Instagram"></input></div>
            <div><input type="textbox" className="form-control" placeholder="Staff Facebook"></input></div>
            <div><input type="textbox" className="form-control" placeholder="Staff Website"></input></div>
          </div>
        </div>
        <div className="locationLeft">
          <div><input type="textbox" className="form-control" placeholder="Staff Photo"></input></div>
          <div><input type="textbox" className="form-control" placeholder="Staff Bio"></input></div>
        </div>
      </div>
    </div>
  </div>

)
