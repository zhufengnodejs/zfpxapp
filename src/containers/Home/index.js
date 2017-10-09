import React,{Component} from 'react';
import HomeHeader from "./HomeHeader/index";
import actions from '../../store/actions/home';
import {connect} from 'react-redux';
@connect(
  state=>state.home,
  actions
)
export default class Home extends Component{
    render(){
        return (
            <div>
              <HomeHeader
                changeLesson={this.props.changeLesson}
                currentLesson={this.props.currentLesson} />
            </div>
        )
    }
}