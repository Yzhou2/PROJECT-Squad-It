import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import dateCreator from './dateCreator';
import axios from 'axios';
import socket from '../socket';
// const io = require('socket.io-client');
// const socket = io();



export default class Chat_room extends Component {
    constructor(props) {
      super(props);

      this.state = {
        messagePack: [],
        newMessage: null,
        user: null,
        members: [],


      }




    this.handleChange = this.handleChange.bind(this);
    this.getMsg = this.getMsg.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    }





handleChange(event) {
  this.setState({
    newMessage: event.target.value
  })
}


handleKeyPress(event){
   if ( event.key === "Enter" && this.state.newMessage.length !== 0 ) {
     socket.emit('message', {
       message: this.state.newMessage,
       name: this.state.user.firstname + ' ' + this.state.user.lastname,
       profile_url: this.state.user.profile_img_url,
       time: dateCreator()
     })
        this.setState({
          newMessage: ''
        })
   }
}


componentDidMount(){
  socket.on('receive-msg', this.getMsg);
  axios.get('http://localhost:3001/api/user', {withCredentials:true}).then(res=>{
    this.setState({
      user: res.data[0]
    })
  });
  axios.post(`http://localhost:3001/api/getSquadMembers/${this.props.location.query.eachSquad.squad_id}`, {withCredentials:true} ).then(
    response => {
      this.setState({
        members: response.data
      })
    }
  )
}




getMsg(msg){
  this.setState({
    messagePack: [...this.state.messagePack, msg],
  })
}



  render() {
    // console.log(this.state.members,'members from state??????')
    console.log(this.props, 'any props passed in chatroom???')

  return (
    <div>

        <div className="chatRoomContainer">

          <div className="chatLeft">
            <div className="chatTop">
              <div className="chatTitlte">{this.props.location.query.eachSquad.name}</div>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
                <div className="chatArea">
                {
                  this.state.messagePack.map((mes,idx) => {
                    return (
                      <div className="innerChat" key={idx}>
                        <div className="chatProfile"></div>
                        <div className="messageRight">
                            <div className="messageRightTop">
                              <div className="chatName">{mes.name}</div>
                              <div className="time">{mes.time}</div>
                            </div>
                          <div className="message">{mes.message}</div>
                        </div>
                      </div>
                    )
                  })
                }
                </div>
                <div className="chatInput">
                  <input className="chat"
                    value={this.state.newMessage}
                    onChange= {this.handleChange}
                    onKeyPress={ this.handleKeyPress }></input>
                </div>




          </div>

          <div className="chatRight">
            <div className="memberArea">
              <div className="mbrTitle">Members</div>
                { this.state.members.map((member, idx) => {
                return (
                  <div className="member" key={idx}>
                    <div className="avatar"><img src={member.profile_img_url} alt="fixed"/></div>
                    <div className="name">{member.firstname + ' ' + member.lastname}</div>
                  </div>
                )
              })}
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
