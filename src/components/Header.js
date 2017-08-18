import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// const io = require('socket.io-client');
// const socket = io();
import socket from './socket';


export default class Header extends Component {
    constructor(props) {
      super(props);

      this.state = {
          firstname:null,
          profile_img_url: null,
          search: null,
          // searchresult:null
      }
      this.handleChange = this.handleChange.bind(this);


    }


handleChange(event) {
  this.setState({
    search: event.target.value
  })
}



componentDidMount() {
  socket.on('receive-not', function(res){
    console.log(res,'this is res received')
  })
  // console.log('mounted', this.props)
  axios.get( 'http://localhost:3001/api/user', {withCredentials:true} ).then( response => {
  // console.log('response!!!!!!!',response.data)//empty
  this.setState({
    firstname: response.data[0].firstname,
    profile_img_url: response.data[0].profile_img_url

  });
});
}

// compontWillMount(){
//   socket.on('receive-not', function(res){
//     console.log(res,'res from socket')
//   })
// }

  render() {
    // console.log(this.state.search)
  return (
    <div className="header">
      <div className="headerInner">
        <Link to="/logged/dashboard"><div className="leftMargin headerlogo"><img src='https://i.imgur.com/E7Zuby6.png' alt="fixed"/></div></Link>

        <div>
        <input onChange={this.handleChange}/>
        <Link to={`/logged/searchresultCT/${this.state.search}`}><button className="search"><i className="fa fa-search" aria-hidden="true"></i></button></Link>
        </div>

      </div>

    <div className="headerInner">
      <div className="notification"><i className="fa fa-bell"></i><div className="dot"></div></div>
      <div className="headerNav">
        <div>{this.state.firstname}</div>
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      </div>
      <Link to="/logged/dashboard"><div className="headerNav headerimg"><img src={this.state.profile_img_url} alt="fixed"/></div></Link>

      <div className="dropDown">

      </div>

    </div>



    </div>
  )
  }
}
