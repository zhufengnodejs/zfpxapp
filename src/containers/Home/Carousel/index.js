import React,{Component} from 'react'
import ReactSwipe from 'react-swipe';
import './index.less'
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {index:0};
  }
  render() {
    let options = {
      continuous: true,
      auto:3000,
      callback:(index)=>{
        this.setState({index});
      }
    }
    return (
      <div className="sliders">
        {
          this.props.sliders.length>0?<ReactSwipe className="carousel" swipeOptions={options}>
            {
              this.props.sliders.map((item,index)=>(
                <div key={index}>
                  <img  src={item}></img>
                </div>
              ))
            }
          </ReactSwipe>:<div className="loading">正在加载</div>
        }
        <div className="dots">
          {
            this.props.sliders.map((item,index)=>(
              <span className={this.state.index==index?"active":""} key={index}></span>
            ))
          }
        </div>
      </div>

    );
  }
}