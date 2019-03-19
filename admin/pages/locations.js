

import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import React, { Container } from 'react';
import $ from 'jquery';
import Amplify, { API, Auth , graphqlOperation} from 'aws-amplify';
import awsmobile from '../src/aws-exports';
Amplify.configure(awsmobile);


  import gql from 'graphql-tag';
  import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
  import aws_config from '../src/aws-exports';
  
  
  import { listLocations, listRegions, listGroups } from '../src/graphql/queries';
  import { createLocations, createRegion, createGroup } from '../src/graphql/mutations';
  
import Menu from '../components/Menu/Menu.js';
import './locations.css'
 class Locations extends React.Component {
  constructor(props) {
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
      Groups:null
    };
    this.getGroupList();
    this.getLocationList();
    this.getRegionList();
  }
  
  handleRegionClick() {
    this.setState(state => ({
      LocationBoxVisible: false,
      RegionBoxVisible: true,
      GroupBoxVisible:false
    }));
  }
  handleLocationClick() {
    this.setState(state => ({
      LocationBoxVisible: true,
      RegionBoxVisible: false,
      GroupBoxVisible:false
    }));
  }
  handleGroupClick() {
    this.setState(state => ({
      LocationBoxVisible: false,
      RegionBoxVisible: false,
      GroupBoxVisible: true
    }));
  }
  async addRegion(){
    const CreateRegionInput = {
      name:"new region",
      status:"disabled"
    };
    API.graphql(graphqlOperation(createRegion,{input:CreateRegionInput})).then(location =>
      {
       console.log("region");
      // this.setState({userName:location});
      }
      ).catch(e=>{
        console.log("Error: ");
        console.log(e);
      });
  }

  async addGroup(){
    const CreateGroupInput = {
      name:"new group",
      status:"enabled",
      canJoin:"false",
      visibleToNonMembers:"false",
      type:"internal"
    };
   
    
    API.graphql(graphqlOperation(createGroup,{input:CreateGroupInput})).then(group =>
        {
         console.log("group");
        // this.setState({userName:location});
        }
        ).catch(e=>{
          console.log("Error: ");
          console.log(e);
        });
  }
  async addLocation(){
    const CreateLocationInput = {
      name:"new location",
      status:"enabled",
      canJoin:"false",
      visibleToNonMembers:"false"
    };
   
    
    API.graphql(graphqlOperation(createLocation,{input:CreateLocationInput})).then(location =>
        {
         console.log("location");
        // this.setState({userName:location});
        }
        ).catch(e=>{
          console.log("Error: ");
          console.log(e);
        });
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
  

  async getGroupList(){ 
    API.graphql(graphqlOperation(listGroups)).then(listGroups => 
        {
          this.setState(state =>({Groups:listGroups.data.listGroups.items}));
        }
        ).catch(e=>{
          console.log("Error (getGroupList): ");
          console.log(e);
        });
  }
  groupList(){
    if (this.state.Groups==null) return "";
    var groupList = this.state.Groups.map(group => {
      var z = (
        <div key={group.id} class="location" onClick={this.handleGroupClick}>{group.name}</div>
        );
        return z;
    });
    return groupList;
  }
  async getRegionList(){ 
    API.graphql(graphqlOperation(listRegions)).then(listRegions => 
        {
          this.setState(state =>({Regions:listRegions.data.listRegions.items}));
        }
        ).catch(e=>{
          console.log("Error (getRegionList): ");
          console.log(e);
        });
  }
  regionList(){
    if (this.state.Regions==null) return "";
    var regionList = this.state.Regions.map(region => {
      var z = (
        <div key={region.id} class="location region" onClick={this.handleRegionClick}>{region.name}</div>
        );
        return z;
    });
    return regionList;
  }
  
  async getLocationList(){ 
    API.graphql(graphqlOperation(listLocations)).then(listLocations => 
        {
          console.log("hello");
          console.log(listLocations);
          
          this.setState(state =>({Locations:listLocations.data.listLocations.items}));
          
        }
        ).catch(e=>{
          console.log("Error (getLocationList): ");
          console.log(e);
        });
  }

 
  locationList(){
    if (this.state.Locations==null) return "";
    var locationList = this.state.Locations.map(location => {
      var z = (
        <div key={location.id} class="location" onClick={this.handleLocationClick} >
          <div>{location.name}</div>
          <div>{location.location}</div>
        </div>
        );
        return z;
    });
    return locationList;
  }
  
  render() {
  return <div class="mainWindow">
    <Menu />
    <div>Location Admin</div>
    <div class="leftPanel">
      <div class="header">
        <div class="headerText">Groups</div>
        <div class="add" onClick={this.handleGroupAddClick}>+</div>
      </div>
      <div class="locationList">
          {this.groupList()}
         
      </div>
      <div class="header">
        <div class="headerText">Regions</div>
        <div class="add" onClick={this.handleRegionAddClick}>+</div>
      </div>
      <div class="locationList">
        {this.regionList()}
      </div>
      <div class="header">
        <div class="headerText">Locations</div>
        <div class="add" onClick={this.handleLocationAddClick}>+</div>
      </div>
      <div class="locationList">
        {this.locationList()}
      </div>
    </div>
    <div class="mainWorkArea">
      {this.state.RegionBoxVisible && <RegionBox />}
      {this.state.LocationBoxVisible && <LocationBox />}
      {this.state.GroupBoxVisible && <GroupBox />}
    </div>
  </div>
  }
}

export default Locations;
const GroupBox = () =>  ( 
  <div class="locationInfo">
    <div class="locationInfo">Group</div>
    <div class="form-group">
      <input type="textbox" class="form-control" id="groupNameInput" placeholder="Group Name"></input>
    </div>
    <div class="regionList">
      <div><input type="checkbox"></input>Visible</div>
      <div><input type="checkbox"></input>Joinable</div>
      <div>Type</div>
    </div>
  </div>
)
const RegionBox = () =>  ( 
    <div class="locationInfo">
      <div class="locationInfo">Region</div>
      <div class="form-group">
        <input type="textbox" class="form-control" id="regionNameInput" placeholder="Region Name"></input>
      </div>
      <div class="regionList">
        <div><input type="checkbox"></input>Oakville</div>
        <div><input type="checkbox"></input>Downtown Toronto</div>
      </div>
    </div>
)
const LocationBox = () =>(

  <div>
    <div class="locationInfo">
      <div>Location</div>
      
      <div class="locationLeft">
        <div class="form-group">
          <div><input type="textbox" class="form-control" placeholder="Location Name"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Site Name"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Location Address"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Location Phone"></input></div>
          
        </div>
        <div class="form-group">
          <div><input type="textbox" class="form-control" placeholder="Location Email"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Location Twitter"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Location Instagram"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Location Facebook"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Location Website"></input></div>
        </div>
      </div>
      <div class="locationLeft"> 
         <div><input type="textbox" class="form-control" placeholder="Location Description"></input></div>
         <div><input type="textbox" class="form-control" placeholder="Location Photo"></input></div>
         <div><input type="textbox" class="form-control" placeholder="Location Video"></input></div>
      </div>
    </div>
   
    <div class="staffWorkArea">
      <div class="staffLeftPanel">
        <div class="header">
          <div class="headerText">Staff</div>
          <div class="add">+</div>
        </div>
        <div class="locationList">
          <div class="location">
            <div>Pastor 1</div>
            <div>Sr. Pastor</div>
          </div>
        </div>
        <div class="header">
          <div class="headerText">Volunteers</div>
          <div class="add">+</div>
        </div>
        <div class="locationList">
          <div class="location">
            <div>Kids 1</div>
            <div>Kids Max</div>
          </div>
        </div>
      </div>
      <div class="staffPanel">
        <div>Staff Info</div>
        <div class="locationLeft">
        <div class="form-group">
          <div><input type="textbox" class="form-control" placeholder="Staff Title"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Staff Name"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Staff Phone"></input></div>
        </div>
        <div class="form-group">
          <div><input type="textbox" class="form-control" placeholder="Staff Email"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Staff Twitter"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Staff Instagram"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Staff Facebook"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Staff Website"></input></div>
        </div>
        </div>
        <div  class="locationLeft">
          <div><input type="textbox" class="form-control" placeholder="Staff Photo"></input></div>
          <div><input type="textbox" class="form-control" placeholder="Staff Bio"></input></div>
        </div>
      </div>
    </div>
   </div>

)
