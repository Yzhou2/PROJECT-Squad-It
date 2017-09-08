import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import socket from './socket';
import formatInput from './formatInput';
export default class Header extends Component {
    constructor(props) {
      super(props);

      this.state = {
          myUserId: null,
          firstname:null,
          profile_img_url: '',
          search: null,
          notification: [],
          notificationOn:false,
          notificationClick: false,
          userDD: false// searchresult:null
      }
      this.handleChange = this.handleChange.bind(this);
      this.saveSocketInfo = this.saveSocketInfo.bind(this);
      this.accept = this.accept.bind(this);
      this.reject = this.reject.bind(this);
      this.updateProfile = this.updateProfile.bind(this);
      // this.toggle = this.toggle.bind(this);
      // this.toggleUser = this.toggleUser.bind(this);

    }


handleChange(event) {
  this.setState({
    search: formatInput(event.target.value)
  })
}



accept(){
  // console.log('clicked')
  axios.post('/api/addSquadMember', {squad_id:this.state.notification.squad_id, user_id:this.state.notification.userid}, {withCredentials: true}).then(response => {
    console.log(response,'response from adding squad')
  });

  this.setState({
    notificationOn:false
  })
}


reject(){
  this.setState({
    notification: [],
    notificationOn: false
  })
}



saveSocketInfo(val){
  if (val.userid == this.state.myUserId) {
  this.setState({
    notification: val,
    notificationOn: val.stat
  })
  }
}


componentDidMount() {
  // console.log('mounted', this.props)
  // socket.on('new-notification', function(val){
  //   console.log('lets check out the val', val)
  // })
  socket.on('new-notification', this.saveSocketInfo)
  axios.get( '/api/me', {withCredentials:true} ).then( response => {
  // console.log('response!!!!!!!',response.data)//empty
  this.setState({
    firstname: response.data[0].firstname,
    profile_img_url: response.data[0].profile_img_url,
    myUserId: response.data[0].userid
  });
});
}


updateProfile(){
  axios.get( '/api/me', {withCredentials:true} ).then( response => {
  // console.log('response!!!!!!!',response.data)//empty
  this.setState({
    profile_img_url: response.data[0].profile_img_url,
  });
});
}

  render() {
    // console.log(this.state.search, 'formated?????|||||')
    // console.log('this is the userDD', this.state.userDD)
    console.log(this.state,  this.state.notification,   'notification saved on state')
    var unhide = {
      display: "block"
    }
  return (
    <div className="header">
      <div className="headerInner">
      <Link to="/logged/dashboard"><div className="leftMargin headerlogo"><img src='https://i.imgur.com/E7Zuby6.png' alt="fixed"/></div></Link>

        <div className="searchInput">
        <input onChange={this.handleChange} placeholder="Currently Only Has Users For 'London' In Our Database"/>

        <Link to={`/logged/searchresultCT/${this.state.search}`}><button className="search"><i className="fa fa-search" aria-hidden="true"></i></button></Link>
        </div>

      </div>

    <div className="headerInner">
      <i className="message_header fa fa-comments" aria-hidden="true"></i>
      <div className="notification">
        <i className="fa fa-bell" aria-hidden="true"></i>
        <div className="dot" style={this.state.notificationOn?unhide:{}}></div>
        <div className="notif-drop">
          {
            this.state.notification.city?
            <div className="notifSingle">
            <div className="notif-noti"> You Are Invited to Join Squad "{this.state.notification.squadName}" in {this.state.notification.city} </div>
            <div className="notif-btn">
                <button className="notiBtn1" onClick={this.accept}>Accept</button>
                <button className="notiBtn1" onClick={this.reject}>Reject</button>
            </div>
            </div>
            :
            <div className="nonotif"> You have no notification yet</div>
          }
        </div>
      </div>



      <div className="headerNav" onClick={this.toggleUser}>
        <div>{this.state.firstname}</div>
        <div className="navDrop" style={this.state.userDD?unhide:{}}>
          <Link to="/logged/dashboard"><div className="drop_menu"><div>Dashboard</div></div></Link>
          <Link to={{pathname:'/logged/profile', query:{flag:true, userid: this.state.userid}}}><div className="drop_menu"><div>Profile</div></div></Link>
          <div className="drop_menu"><div>Log Out</div></div>
        </div>
      </div>
      <Link to="/logged/dashboard"><div className="headerNav headerimg"><img src={this.state.profile_img_url} alt="fixed"/></div></Link>

      <div className="mobileSearch">
          <i className="fa fa-search" aria-hidden="true"></i>
          <div className="dropDownSearch">


              <div className="searchInput dropInput">
              <input onChange={this.handleChange} />

              <Link to={`/logged/searchresultCT/${this.state.search}`}><button className="search"><i className="fa fa-search" aria-hidden="true"></i></button></Link>
              </div>


          </div>
      </div>



      <div className="mobileHam">
        <i className="fa fa-bars" aria-hidden="true"></i>
        <div className="mobileNav">
            <Link to="/logged/dashboard"><div className="mobileNavBlock dashBlock">Dashboard</div></Link>
            <Link to={{pathname:'/logged/profile', query:{flag:true, userid: this.state.userid}}}><div className="mobileNavBlock">Profile</div></Link>
            <div className="mobileNavBlock">Log Out</div>
        </div>
      </div>

    </div>




    </div>
  )
  }
}
