import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Sidebar extends Component {
  constructor(){
    super()

    this.state = {
      user: null
    }


  }




  componentDidMount() {
    console.log('mounted')
  axios.get( 'http://localhost:3001/api/user', {withCredentials:true} ).then( response => {
    console.log('response!!!!!!!',response)
    this.setState({ user: response });
  });
}

  render() {
    console.log(this.state.user)
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <div className="sidebarImg"></div>
        <div className="sidebarName">Name</div>
      </div>

      <div className="sideBarSelection">Dashboard</div>
      <Link to='/editProfile'><div className="sideBarSelection">Profile</div></Link>
      <div className="sideBarSelection">Messages</div>
      <div className="sideBarSelection">News Feed</div>

    </div>
    )
  }
}
