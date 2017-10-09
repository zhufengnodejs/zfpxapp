import React, {Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class LessonList extends Component {
  render() {
    return (
      <ul className="lesson-list">
        <li className="title">
          <i className="iconfont icon-book"></i>
          <h4>全部课程</h4>
        </li>
        {
          this.props.lessons.list.map((lesson, index) => (
            <li
              onClick={this.handleClick}
              className="lesson"
              key={index}>
              <Link to={{pathname:'/detail',state:lesson}}>
                <img src={lesson.url} alt={lesson.name}/>
                <h3 >{lesson.name}</h3>
                <h3 >{lesson.price}</h3>
              </Link>
            </li>
          ))
        }
        <li>
          {
            this.props.lessons.loading ?
              <div className="loading">加载中...</div> : <button onClick={this.props.loadMore} className="load-more">加载更多</button>
          }
        </li>
      </ul>
    )
  }
}