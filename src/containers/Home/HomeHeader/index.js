import React,{Component} from 'react';
import './index.less'
import logo from '../../../images/logo.png';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
export default class HomeHeader extends Component{
  constructor(props){
    super(props);
    this.state = {show:false};
  }
    render(){
        return (
            <div className="home-header">
              <div className="header-menu">
                  <img src={logo} alt="珠峰课堂"/>
                <div onClick={()=>this.setState({show:!this.state.show})}>
                  {
                    this.state.show? <i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>
                  }
                </div>
              </div>
              <TransitionGroup>
                {
                  this.state.show?
                    <CSSTransition
                      classNames="fadeIn"
                      timeout={500}
                    >
                    <ul className="menu-list">
                      <li data-id="1">Node课程培训</li>
                      <li data-id="1">HTML培训课程</li>
                      <li data-id="1">视频课程</li>
                      <li data-id="1">文档课件</li>
                    </ul>
                    </CSSTransition>
                      :null
                }
              </TransitionGroup>

            </div>
        )
    }
}