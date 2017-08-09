import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
// import axios from 'axios';


export default class Chat_room extends Component {
    constructor() {
      super();

      this.state = {
        message: null
      }
    this.handleChange = this.handleChange.bind(this);
    }


handleChange(event) {
  this.setState({
    message: event.target.value
  })
}


// componentDidMount() {
//   console.log('mounted')
//   axios.get( 'http://localhost:3001/api/user', {withCredentials:true} ).then( response => {
//   // console.log('response!!!!!!!',response.data[0].firstname)
//   this.setState({
//     firstname: response.data[0].firstname,
//     profile_img_url: response.data[0].profile_img_url
//
//   });
// });
// }

  render() {
    console.log(this.state.message,'chat message')
  return (
    <div>

    <Header />
    <Sidebar />

        <div className="chatRoomContainer">

          <div className="chatLeft">
            <div className="chatTop">
              <div>title</div>
              <div>description</div>
            </div>
                <div className="chatArea">chat area</div>
                <div className="chatInput">
                  <input onChange={this.handleChange}></input>
                  <button>send</button>
                </div>
          </div>

          <div className="chatRight">
            <div className="memberArea"> member area </div>
            <div className="bucketList">bucket list </div>
          </div>

        </div>
    </div>

  )
  }
}
