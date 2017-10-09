import React, {Component} from 'react';
import './index.less'
import NavHeader from "../../components/NavHeader/index";
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
        <NavHeader title="课程详情"/>
      </div>
    )
  }
}