import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Sidebar extends Component {
  constructor(){
    super()

    this.state = {
      firstname: null,
      lastname: null,
      profile_img_url: null
    }


  }




  componentDidMount() {
    // console.log('mounted')
  axios.get( 'http://localhost:3001/api/user', {withCredentials:true} ).then( response => {
    // console.log('response!!!!!!!',response.data[0].firstname)
    this.setState({
      firstname: response.data[0].firstname,
      lastname: response.data[0].lastname,
      profile_img_url: response.data[0].profile_img_url

    });
  });
}

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

      <div className="sideBarSelection">Dashboard</div>
      <div className="sideBarSelection" onClick={()=>{this.props.updateFlag(false)}}><Link to='/logged/profile'>Profile</Link></div>
      <div className="sideBarSelection">Messages</div>
      <div className="sideBarSelection bottomLine">News Feed</div>

    </div>
    )
  }
}
