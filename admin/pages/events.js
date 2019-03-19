
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Menu/Menu.js';
import React, { Component } from 'react'
import 'react-quill/dist/quill.snow.css'; 
import "react-datepicker/dist/react-datepicker.css";
import  DatePicker  from 'react-datepicker';
import './events.css'
class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date(),
      ServiceBoxVisible:true,
      KidsBoxVisible:true
    };
    this.handleChange = this.handleChange.bind(this);
    this.ServiceBox=this.ServiceBox.bind(this);
    this.KidsBox=this.KidsBox.bind(this);
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill')
    }
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      ServiceBoxVisible:true,
      KidsBoxVisible:true
    });
  }
  render() {
  
      return (
        <div class="mainWindow">
    <Menu />
    <div>Event Admin</div>
    <div class="leftPanel">
      <div class="header">
        <div class="headerText">Teaching</div>
        <div class="add" onClick={this.handleGroupAddClick}>+</div>
      </div>
      <div class="locationList">
         
         
      </div>
      <div class="header">
        <div class="headerText">Kids Teaching</div>
        <div class="add" onClick={this.handleRegionAddClick}>+</div>
      </div>
      <div class="locationList">
       
      </div>
      <div class="header">
        <div class="headerText">Other</div>
        <div class="add" onClick={this.handleLocationAddClick}>+</div>
      </div>
      <div class="locationList">
        
      </div>
    </div>
    <div class="mainWorkArea">
       {this.state.ServiceBoxVisible && <this.ServiceBox />}
       {this.state.KidsBoxVisible && <this.KidsBox />}

     </div>
   </div>
      )
     
      
    }
    KidsBox ()  {
  
      if (typeof window !== 'undefined' && this.ReactQuill) {
      
        return (
      <div class="locationInfo form-group">
        <div class="locationInfo">Kids</div>
          <div><input class="form-control" placeholder="Title"></input></div>
    
          <div><input class="form-control" placeholder="Audience"></input></div>
          <div>Goes Live<DatePicker
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"/>
            </div>
    
          <div>Advertising</div>
          <div><input class="form-control" placeholder="Description"></input></div>
          <div><input class="form-control" placeholder="Bumper - Pre-Service"></input></div>
          <div><input class="form-control" placeholder="Bumper - Online Video"></input></div>
          <div><input class="form-control" placeholder="Bumper - Online Image"></input></div>
          <div><input class="form-control" placeholder="Bumper - Print "></input></div>
          <div><input class="form-control" placeholder="Bumper - Social "></input></div>
    
          <div>Pre-Service</div>
          <div>Group 1</div>
          <div><input class="form-control" placeholder="Crafts"></input></div>
          <div><input class="form-control" placeholder="Printouts"></input></div>
          <div>Group 2</div>
          <div><input class="form-control" placeholder="Crafts"></input></div>
          <div><input class="form-control" placeholder="Printouts"></input></div>
          <div>Group 3</div>
          <div><input class="form-control" placeholder="Crafts"></input></div>
          <div><input class="form-control" placeholder="Printouts"></input></div>
    
          <div>Post-Service</div>
          <div>Group 1</div>
          <div><input class="form-control" placeholder="Video"></input></div>
          <div>Group 1</div>
          <div><input class="form-control" placeholder="Video"></input></div>
          <div>Group 1</div>
          <div><input class="form-control" placeholder="Video"></input></div>
    
    
      </div>
        )
      }
      else {return "test1"}
    }
ServiceBox ()  {
  
  if (typeof window !== 'undefined' && this.ReactQuill) {
  
    return (
  <div class="locationInfo">
    <div class="locationInfo">Service</div>
      <div><input class="form-control" placeholder="Title"></input></div>

      <div><input class="form-control" placeholder="Audience"></input></div>
      <div>Goes Live<DatePicker
            onChange={this.handleChange}
            showTimeSelect
            
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"/>
        </div>

      <div>Advertising</div>
      <div><input class="form-control" placeholder="Description"></input></div>
      <div><input class="form-control"  placeholder="Bumper - Pre-Service"></input></div>
      <div><input class="form-control" placeholder="Bumper - Online Video"></input></div>
      <div><input class="form-control" placeholder="Bumper - Online Image"></input></div>
      <div><input class="form-control" placeholder="Bumper - Print "></input></div>
      <div><input class="form-control" placeholder="Bumper - Social "></input></div>

      <div>Pre-Service</div>
      <div><input class="form-control" placeholder="Notes"></input></div>
      <div><input class="form-control" placeholder="Quotes"></input></div>
      <div><input class="form-control" placeholder="Pre-Roll - Quotes Video"></input></div>
      <div><input class="form-control" placeholder="Pre-Roll - Bumper Videos"></input></div>

      <div>Post-Service</div>
      <div><input class="form-control" placeholder="Description"></input></div>
      <div><input class="form-control" placeholder="LiveVideo"></input></div>
      <div><input class="form-control" placeholder="EditedVideo"></input></div>
      <div><input class="form-control" placeholder="LiveAudio"></input></div>
      <div><input class="form-control" placeholder="EditedAudio"></input></div>


  </div>
    )
    }
    else {return "test1"}
}
}
export default Events;

