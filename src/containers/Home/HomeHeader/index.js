import React, {Component} from 'react';
import './index.less'
import logo from '../../../images/logo.png';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  handleClick = (event) => {
    let lesson = event.target.dataset.id;
    this.props.changeLesson(lesson);
    this.setState({show:false});
  }

  render() {
    return (
      <div className="home-header">
        <div className="header-menu">
          <img src={logo} alt="珠峰课堂"/>
          <div onClick={() => this.setState({show: !this.state.show})}>
            {
              this.state.show ? <i className="iconfont icon-guanbi"></i> : <i className="iconfont icon-uilist"></i>
            }
          </div>
        </div>
        <TransitionGroup>
          {
            this.state.show ?
              <CSSTransition
                classNames="fadeIn"
                timeout={500}
              >
                <ul className="menu-list" onClick={this.handleClick}>
                  <li className={this.props.currentLesson == '1'?'active':''} data-id="1">Node课程培训</li>
                  <li className={this.props.currentLesson == '2'?'active':''}  data-id="2">HTML培训课程</li>
                  <li className={this.props.currentLesson == '3'?'active':''}  data-id="3">视频课程</li>
                  <li className={this.props.currentLesson == '4'?'active':''}  data-id="4">文档课件</li>
                </ul>
              </CSSTransition>
              : null
          }
        </TransitionGroup>

      </div>
    )
  }
}