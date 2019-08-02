
import AdminMenu from '../../components/Menu/AdminMenu';
import React from 'react'
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';
import ReactQuill from 'react-quill'
import { Sources, Delta } from 'quill';
interface Props{
  onChange?: ((content: string, delta: Delta, source: Sources, editor: any) => void) | undefined,
  
}
interface State{
  startDate:Date,
  value:any
}
class Blog extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props)
    this.state = {
      startDate: new Date(),
      value:"test"
    };
    this.handleChange = this.handleChange.bind(this);
    if (typeof window !== 'undefined') {
      
    //  this.ReactQuill=ReactQuill
    }
  }
 // ReactQuill:any;
  handleChange(date:Date) {
    this.setState({
      startDate: date
    });
  }
  render() {
   // const ReactQuill = ReactQuill
    if (typeof window !== 'undefined' && ReactQuill) {
      return (
        <div>
          <AdminMenu></AdminMenu>
          Blog Editor
        <div><input placeholder="Title"></input></div>
          <div><input placeholder="Audience"></input></div>
          <div>Goes Live<DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time" />
          </div>

          <ReactQuill
            onChange={this.props.onChange}
            theme="snow"
            value={this.state.value}
          />

        </div>
      )
    } else {
      return <div>
        <AdminMenu></AdminMenu>
        <textarea />
      </div>;
    }
  }


}
export default Blog;

