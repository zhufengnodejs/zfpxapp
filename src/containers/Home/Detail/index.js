import React, {Component} from 'react';
import './index.less'
export default class Detail extends Component {
  render() {
    let {id, name, price, url} = this.props.location.state;
    return (
      <div className="lesson-detail">
        <div className="lesson-info">
          <img src={url}/>
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <div className="nav-bar">
          <i onClick={()=>this.props.history.goBack()}
            className="iconfont icon-fanhui"></i>
          课程详情
        </div>
      </div>

    )
  }
}