import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Sidebar extends Component {
  constructor(){
    super()

    this.state = {
      firstname: null,
      lastname: null,
      profile_img_url: null,
      userid: null
    }


  }




  componentDidMount() {
    // console.log('mounted')
  axios.get( 'http://localhost:3001/api/user', {withCredentials:true} ).then( response => {
    // console.log('response!!!!!!!',response.data[0].firstname)
    this.setState({
      firstname: response.data[0].firstname,
      lastname: response.data[0].lastname,
      profile_img_url: response.data[0].profile_img_url,
      userid: response.data[0].userid

    });
  });
}
// <div className="sideBarSelection">News Feed</div>
  render() {
    // console.log('state!!!!!!', this.state)
    // console.log('user on state!!!!', this.state.user)
    // console.log('firstname in user obj!!!!', this.state.user.firstname)

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <div className="sidebarImg"><img src={this.state.profile_img_url} alt="fixed"/></div>
        <div className="sidebarName">{this.state.firstname+" "+this.state.lastname}</div>
      </div>

      <Link to="/logged/dashboard"><div className="sideBarSelection">Dashboard</div></Link>
<<<<<<< HEAD
      <div className="sideBarSelection"><Link to={{pathname:'/logged/profile', query:{flag:true, userid: this.state.userid}}}>Profile</Link></div>
      <div className="sideBarSelection bottomLine">Messages</div>
=======
      <div className="sideBarSelection"><Link to={{pathname:'/logged/profile', query:{flag:true, userid:this.state.userid}}}>Profile</Link></div>
      <div className="sideBarSelection">Messages</div>
      <div className="sideBarSelection bottomLine">News Feed</div>
>>>>>>> master

    </div>
    )
  }
}
