import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import dateCreator from './dateCreator';
import axios from 'axios';
// import subscribeToTimer from './socket';
// import socket from 'socket.io';
const io = require('socket.io-client')
const socket = io();


export default class Chat_room extends Component {
    constructor() {
      super();

      this.state = {
        message: [],
        newMessage: null,


      }
    // subscribeToTimer((err, timestamp) => this.setState({
    //   timestamp
    // }))



    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    }


handleChange(event) {
  this.setState({
    newMessage: event.target.value
  })
}


// handleClick(ev){
//   subscribeToTimer.emit('message', 'hi')
// }

// componentDidMount() {
//   console.log('view msg mounted')
//   axios.get( `http://localhost:3001/api/viewMessages${this.props.squad_id}`, {withCredentials:true} ).then( response => {
//   console.log('response for message!!!!!!!',response.data)
//   this.setState({
//     message: response.data,
//   });
// });
// }

  render() {
    console.log(this.props,'prop sent to chat_room')
  return (
    <div>

        <div className="chatRoomContainer">

          <div className="chatLeft">
            <div className="chatTop">
              <div className="chatTitlte">Young & Free</div>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
                <div className="chatArea">
                  <div className="innerChat">
                    <div className="chatProfile"></div>
                    <div className="messageRight">
                        <div className="messageRightTop">
                          <div className="chatName">Yiran Zhou</div>
                          <div className="time">2:35pm</div>
                        </div>
                      <div className="message">hey yo, how ya doin?</div>
                    </div>
                  </div>
                </div>
                <div className="chatInput">
                  <input className="chat" onChange={this.handleChange}></input>
                </div>



          </div>

          <div className="chatRight">
            <div className="memberArea">
              <div className="mbrTitle">Members</div>
              <div className="member">
                <div className="avatar"></div>
                <div className="name">Sam Heathcote</div>
              </div>
            </div>
            <div className="bucketList">
              <div className="mbrTitle">bucket list</div> 
            </div>
          </div>

        </div>
    </div>

  )
  }
}
