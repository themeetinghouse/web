
import Menu from '../../components/Menu/Menu.js';
import React, { Component } from 'react'
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    if (typeof window !== 'undefined') {
      this.ReactQuill = require('react-quill')
    }
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    const ReactQuill = this.ReactQuill
    if (typeof window !== 'undefined' && ReactQuill) {
      return (
        <div>
          <Menu></Menu>
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
            onChange={this.props.onChange}
            theme="snow"
            value={this.props.value}
          />
        </div>
      )
    } else {
      return <div><Menu></Menu>
        News Editor
      <textarea />
      </div>;
    }
  }
}
export default News;

