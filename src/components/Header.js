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
          notification: [],
          notificationOn:false,
          notificationClick: false
          // searchresult:null
      }
      this.handleChange = this.handleChange.bind(this);
      this.saveSocketInfo = this.saveSocketInfo.bind(this);
      this.accept = this.accept.bind(this);
      this.notificationClick = this.notificationClick.bind(this);

    }


handleChange(event) {
  this.setState({
    search: event.target.value
  })
}

notificationClick(){
  this.setState({
    notificationClick: true
  })
}


accept(){
  console.log('clicked')
  axios.post('http://localhost:3001/api/addSquadMember', {squad_id:this.state.notification.squad_id, user_id:this.state.notification.userid}, {withCredentials: true}).then(response => {
    console.log(response,'response from adding squad')
  });
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
    console.log(this.state.notification.squadName,  this.state.notification.city,   'notification saved on state')
    var unhide = {
      display: "block"
    }
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
        <i className="fa fa-bell" aria-hidden="true" onClick={this.notificationClick}></i>
        <div className="dot" style={this.state.notificationOn?unhide:{}}></div>
      </div>

      <div className="dropDown notif-drop" style={this.state.notificationClick?unhide:{}}>
        {
          this.state.notification.city?
          <div className="notifSingle">
          <div className="notif-noti"> You Are Invited to Join Squad "{this.state.notification.squadName}" in {this.state.notification.city} </div>
          <div className="notif-btn">
              <button className="notiBtn1" onClick={this.accept}>Accept</button>
              <button className="notiBtn1">Reject</button>
          </div>
          </div>
          :
          <div className="nonotif"> You have no notification yet</div>
        }
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
