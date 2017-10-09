import React,{Component} from 'react';
import HomeHeader from "./HomeHeader/index";
import actions from '../../store/actions/home';
import {connect} from 'react-redux';
import Carousel from "./Carousel/index";
@connect(
  state=>state.home,
  actions
)
export default class Home extends Component{
    componentDidMount(){
        this.props.fetchSliders();
    }
    render(){
        return (
            <div>
              <HomeHeader
                changeLesson={this.props.changeLesson}
                currentLesson={this.props.currentLesson} />
              <div className="container">
                <Carousel sliders = {this.props.sliders}/>
              </div>
            </div>
        )
    }
}