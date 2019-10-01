
import React from 'react';
import "./GiveItem.scss"

interface Props {
  content: any
}
interface State {
  content: any
}

export default class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content
    }
  }
  imgUrl(size:any){
    if (window.location.hostname==="localhost")
        return "https://localhost:3006"
    else
     return "https://beta.themeetinghouse.com/cache/"+size
}

  render() {
    return (<div style={{position:"relative",top:"2vw",left:"20vw"}}>Give<div style={{height:"100vw"}}>Results:</div></div>)
  }
}
