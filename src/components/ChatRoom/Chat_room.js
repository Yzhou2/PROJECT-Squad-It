import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import dateCreator from './dateCreator';
import axios from 'axios';
const io = require('socket.io-client');
const socket = io();



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
    this.handleClick = this.handleClick.bind(this);
    this.getMsg = this.getMsg.bind(this);
    }





handleChange(event) {
  this.setState({
    newMessage: event.target.value
  })
}


componentDidMount(){
  socket.on('receive-msg', this.getMsg);
  axios.get('http://localhost:3001/api/user', {withCredentials:true}).then(res=>{
    this.setState({
      user: res.data[0]
    })
  });
  axios.post(`http://localhost:3001/api/getSquadMembers/${this.props.eachSquadInfo.squad_id}`, {withCredentials:true} ).then(
    response => {
      this.setState({
        members: response.data
      })
    }
  )
}


handleClick(val){
  socket.emit('message', {
    message: val,
    name: this.state.user.firstname + ' ' + this.state.user.lastname,
    profile_url: this.state.user.profile_img_url,
    time: dateCreator()
  })
}

getMsg(msg){
  this.setState({
    messagePack: [...this.state.messagePack, msg],
  })
}



  render() {
    console.log(this.state.user,'user on state??')

  return (
    <div>

        <div className="chatRoomContainer">

          <div className="chatLeft">
            <div className="chatTop">
              <div className="chatTitlte">Young & Free</div>
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
                  <input className="chat" onChange={this.handleChange}></input>
                </div>
                <button onClick={()=>{this.handleClick(this.state.newMessage)}}>send</button>



          </div>

          <div className="chatRight">
            <div className="memberArea">
              <div className="mbrTitle">Members</div>
                { this.state.members.map((member, idx) => {
                return (
                  <div className="member" key={idx}>
                    <div className="avatar"></div>
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
