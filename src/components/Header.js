import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import socket from './socket';

export default class Header extends Component {
    constructor(props) {
      super(props);

      this.state = {
          firstname:null,
          profile_img_url: null,
          search: null,
          notification: null,
          notificationOn:false
          // searchresult:null
      }
      this.handleChange = this.handleChange.bind(this);
      this.saveSocketInfo = this.saveSocketInfo.bind(this);
    }


handleChange(event) {
  this.setState({
    search: event.target.value
  })
}


saveSocketInfo(val){
  this.setState({
    notification: val,
    notificationOn: val.stat
  })
}


componentDidMount() {
  console.log('mounted', this.props)
  // socket.on('new-notification', function(val){
  //   console.log('lets check out the val', val)
  // })
  socket.on('new-notification', this.saveSocketInfo)
  axios.get( 'http://localhost:3001/api/user', {withCredentials:true} ).then( response => {
  // console.log('response!!!!!!!',response.data)//empty
  this.setState({
    firstname: response.data[0].firstname,
    profile_img_url: response.data[0].profile_img_url

  });
});
}

  render() {
    console.log(this.state, 'notification saved on state')
  return (
    <div className="header">
      <div className="headerInner">
      <Link to="/logged/dashboard"><div className="leftMargin headerlogo"><img src='https://i.imgur.com/E7Zuby6.png' alt="fixed"/></div></Link>

        <div className="searchInput">
        <input onChange={this.handleChange} />

        <Link to={`/logged/searchresultCT/${this.state.search}`}><button className="search"><i className="fa fa-search" aria-hidden="true"></i></button></Link>
        </div>

      </div>

    <div className="headerInner">
      <i className="message_header fa fa-comments" aria-hidden="true"></i>
      <div className="notification">
        <i className="fa fa-bell" aria-hidden="true"></i>
        <div className="dot"></div>
      </div>
      <div className="headerNav">
        <div>{this.state.firstname}</div>
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </div>
      <div className="dropDown">
        <Link to="/logged/dashboard"><div className="drop_menu"><div>Dashboard</div></div></Link>
        <Link to={{pathname:'/logged/profile', query:{flag:true, userid: this.state.userid}}}><div className="drop_menu"><div>Profile</div></div></Link>
        <div className="drop_menu"><div>Log Out</div></div>
      </div>
      <Link to="/logged/dashboard"><div className="headerNav headerimg"><img src={this.state.profile_img_url} alt="fixed"/></div></Link>
    </div>



    </div>
  )
  }
}
