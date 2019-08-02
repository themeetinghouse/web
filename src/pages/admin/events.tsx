
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminMenu from '../../components/Menu/AdminMenu';
import React from 'react'
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import './events.css'
import ReactQuill from 'react-quill'

interface Props{

}
interface State{
  startDate:Date,
  ServiceBoxVisible:boolean,
  KidsBoxVisible:boolean
}
class Events extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = {
      startDate: new Date(),
      ServiceBoxVisible: true,
      KidsBoxVisible: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.ServiceBox = this.ServiceBox.bind(this);
    this.KidsBox = this.KidsBox.bind(this);
   
  }

  handleChange(date:Date) {
    this.setState({
      startDate: date,
      ServiceBoxVisible: true,
      KidsBoxVisible: true
    });
  }
  render() {

    return (
      <div className="mainWindow">
        <AdminMenu />
        <div>Event Admin</div>
        <div className="leftPanel">
          <div className="header">
            <div className="headerText">Teaching</div>
            <div className="add" //onClick={this.handleGroupAddClick}
            >+</div>
          </div>
          <div className="locationList">


          </div>
          <div className="header">
            <div className="headerText">Kids Teaching</div>
            <div className="add" //onClick={this.handleRegionAddClick}
            >+</div>
          </div>
          <div className="locationList">

          </div>
          <div className="header">
            <div className="headerText">Other</div>
            <div className="add" //onClick={this.handleLocationAddClick}
            >+</div>
          </div>
          <div className="locationList">

          </div>
        </div>
        <div className="mainWorkArea">
          {this.state.ServiceBoxVisible && this.ServiceBox() }
          {this.state.KidsBoxVisible && this.KidsBox() }

        </div>
      </div>
    )


  }
  KidsBox() {

    if (typeof window !== 'undefined' && ReactQuill) {

      return (
        <div className="locationInfo form-group">
          <div className="locationInfo">Kids</div>
          <div><input className="form-control" placeholder="Title"></input></div>

          <div><input className="form-control" placeholder="Audience"></input></div>
          <div>Goes Live<DatePicker
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time" />
          </div>

          <div>Advertising</div>
          <div><input className="form-control" placeholder="Description"></input></div>
          <div><input className="form-control" placeholder="Bumper - Pre-Service"></input></div>
          <div><input className="form-control" placeholder="Bumper - Online Video"></input></div>
          <div><input className="form-control" placeholder="Bumper - Online Image"></input></div>
          <div><input className="form-control" placeholder="Bumper - Print "></input></div>
          <div><input className="form-control" placeholder="Bumper - Social "></input></div>

          <div>Pre-Service</div>
          <div>Group 1</div>
          <div><input className="form-control" placeholder="Crafts"></input></div>
          <div><input className="form-control" placeholder="Printouts"></input></div>
          <div>Group 2</div>
          <div><input className="form-control" placeholder="Crafts"></input></div>
          <div><input className="form-control" placeholder="Printouts"></input></div>
          <div>Group 3</div>
          <div><input className="form-control" placeholder="Crafts"></input></div>
          <div><input className="form-control" placeholder="Printouts"></input></div>

          <div>Post-Service</div>
          <div>Group 1</div>
          <div><input className="form-control" placeholder="Video"></input></div>
          <div>Group 1</div>
          <div><input className="form-control" placeholder="Video"></input></div>
          <div>Group 1</div>
          <div><input className="form-control" placeholder="Video"></input></div>


        </div>
      )
    }
    else { return "test1" }
  }
  ServiceBox() {

    if (typeof window !== 'undefined' && ReactQuill) {

      return (
        <div className="locationInfo">
          <div className="locationInfo">Service</div>
          <div><input className="form-control" placeholder="Title"></input></div>

          <div><input className="form-control" placeholder="Audience"></input></div>
          <div>Goes Live<DatePicker
            onChange={this.handleChange}
            showTimeSelect

            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time" />
          </div>

          <div>Advertising</div>
          <div><input className="form-control" placeholder="Description"></input></div>
          <div><input className="form-control" placeholder="Bumper - Pre-Service"></input></div>
          <div><input className="form-control" placeholder="Bumper - Online Video"></input></div>
          <div><input className="form-control" placeholder="Bumper - Online Image"></input></div>
          <div><input className="form-control" placeholder="Bumper - Print "></input></div>
          <div><input className="form-control" placeholder="Bumper - Social "></input></div>

          <div>Pre-Service</div>
          <div><input className="form-control" placeholder="Notes"></input></div>
          <div><input className="form-control" placeholder="Quotes"></input></div>
          <div><input className="form-control" placeholder="Pre-Roll - Quotes Video"></input></div>
          <div><input className="form-control" placeholder="Pre-Roll - Bumper Videos"></input></div>

          <div>Post-Service</div>
          <div><input className="form-control" placeholder="Description"></input></div>
          <div><input className="form-control" placeholder="LiveVideo"></input></div>
          <div><input className="form-control" placeholder="EditedVideo"></input></div>
          <div><input className="form-control" placeholder="LiveAudio"></input></div>
          <div><input className="form-control" placeholder="EditedAudio"></input></div>


        </div>
      )
    }
    else { return "test1" }
  }
}
export default Events;

