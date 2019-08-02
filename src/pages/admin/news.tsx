
import AdminMenu from '../../components/Menu/AdminMenu';
import React from 'react'
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import ReactQuill from 'react-quill'
interface Props{
 // onChange():void,
  //value:any
}
interface State{
  startDate:Date,
  value:any
  
}
class News extends React.Component<Props, State>  {
  constructor(props:Props) {
    super(props)
    this.state = {
      startDate: new Date(),
      value:""
    };
    this.handleChange = this.handleChange.bind(this);
   
  }
  handleChange(date:any) {
    this.setState({
      startDate: date
    });
  }
  render() {
    if (typeof window !== 'undefined' && ReactQuill) {
      return (
        <div>
          <AdminMenu></AdminMenu>
          News Editor
        <div><input placeholder="Title"></input></div>
          <div><input placeholder="Audience"></input></div>
          <div>Goes Live At<DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time" />
          </div>
          <div>Remove At <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time" />
          </div>
          <ReactQuill
            onChange={this.handleChange}
            theme="snow"
            value={this.state.value}
          />
        </div>
      )
    } else {
      return <div><AdminMenu></AdminMenu>
        News Editor
      <textarea />
      </div>;
    }
  }
}
export default News;

