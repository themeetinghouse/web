
import React  from 'react';
import { Button, Collapse } from 'reactstrap';
import "./FAQItem.scss"
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  content: any
}
interface State {
  content: any
  isOpen:any
}
class ContentItem extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: props.content,
      isOpen:[]
    }
  }
  navigateTo(location:any) {
    this.props.history.push(location, "as")
    const unblock = this.props.history.block('Are you sure you want to leave this page?');
    unblock();

}
  imgUrl(size:any){
    if (window.location.hostname==="localhost")
        return "https://localhost:3006"
    else if (window.location.hostname.includes("beta"))
      return "https://beta.themeetinghouse.com/cache/"+size
    else
      return "https://www.themeetinghouse.com/cache/"+size
    }
toggle = (id:any) => {
  var list=this.state.isOpen
  list[id]=!list[id]
  this.setState({isOpen:list})
}

renderList(image1:any){
  return this.state.content.list?
    this.state.content.list.map((item:any,id:any)=>{
    
     
     
      return (
        item.type==="question"?
      
        <div key={id}>
          <div onClick={()=>{this.toggle(id)}}  className={this.state.content.style==="white"?"FAQQuestion whiteText":"FAQQuestion"} >
            <div className={image1?"FAQFullWidth":"FAQPartialWidth"}>{item.question}</div>
            <div className={image1?'FAQFloatLeft':"FAQFloatRight"}>+</div>
            <div style={{clear:"both"}}></div>
          </div>
          <Collapse  isOpen={this.state.isOpen[id]} >
          <div  className={this.state.content.style==="white"?"FAQAnswer whiteText":"FAQAnswer"} >
            {item.answer.map((item:any)=>{return (<div>{item} <div>&nbsp;</div></div>)})}
          </div>
          </Collapse>
          <div><hr></hr></div>
        </div>:
        item.type==="button"?
        <div key={id}>
          <Button className="contentButton" onClick={()=>{this.navigateTo(item.navigateTo)}}>{item.title}</Button>
        </div>
        :item.type==="link"?
      <div key={id}>{item.openNewBrowser?
       <a className="oneImageA" target="_blank" rel="noopener noreferrer" href={item.navigateTo}>{item.title}</a>:
       <a className="oneImageA" href={item.navigateTo}>{item.title}</a>
      }</div>
      :item.type==="text"?
      <div key={id} className={item.class}>
        {item.title}
      </div>
      :item.type==="event"?
      <div className="oneImageEventDetails" key={id}>
        <div >{item.date}</div>
        <div >{item.location}</div>
      </div>
      :null
      )
    })
    :null
} 
  render() {


    var image1 
    if (this.state.content.image1!=null)
     image1= this.state.content.image1[Math.floor(Math.random() * this.state.content.image1.length)];
  
      return (
        <div className="FAQItem faq">
          <div className="faqPosition">
            <div className={image1?"faqGreyBox right":"faqGreyBox full"} >
              <h1 className={this.state.content.style==="white"?"faqH1 whiteText":"faqH1"} >{this.state.content.header1}</h1>
              <h2 className={this.state.content.style==="white"?"faqH2 whiteText":"faqH2"} >{this.state.content.header2}</h2>
              <div className={this.state.content.style==="white"?"faqText whiteText":"faqText"} >{this.state.content.text1}</div>
             {this.renderList(image1)}
            </div>
            {image1?
            <img src={this.imgUrl(2560)+image1.src} alt={image1.alt} className="faqImage right"
                        srcSet={this.imgUrl(320)+image1.src+" 320w,"+
                        this.imgUrl(480)+image1.src+" 480w,"+
                        this.imgUrl(640)+image1.src+" 640w,"+
                        this.imgUrl(1280)+image1.src+" 1280w,"+
                        this.imgUrl(1920)+image1.src+" 1920w,"+
                        this.imgUrl(2560)+image1.src+" 2560w"}
                        sizes="(max-width: 320px) 320px,
                               (max-width: 480px) 480px,
                               (max-width: 640px) 640px,
                               (max-width: 1280px) 1280px,
                               (max-width: 1920) 1920,
                                2560px"
                    />:null}
          </div>
        </div>
      )
   
  }
}
export default withRouter(ContentItem)
