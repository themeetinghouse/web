import React from 'react';
import ReactDOM from 'react-dom';

export default class Preview extends React.PureComponent {
    containerEl: HTMLDivElement;
    externalWindow: any;
    constructor(props: any) {
      super(props);
      // STEP 1: create a container <div>
      this.containerEl = document.createElement('div');
      this.externalWindow = null;
    }
  
    render() {
      return ReactDOM.createPortal(this.props.children, this.containerEl);
    }
  
    componentDidMount() {
      this.externalWindow = window.open('', '');
      this.externalWindow.document.body.appendChild(this.containerEl);
    }
  
    componentWillUnmount() {
      this.externalWindow.close();
    }
  }