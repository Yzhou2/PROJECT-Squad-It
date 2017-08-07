import React, { Component } from 'react';
import axios from 'axios';


export default class Chat_room extends Component {
    constructor() {
      super();

      // this.state = {
      //
      // }

    }


handleChange(event) {
  this.setState({
    search: event.target.value
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
  return (
    <div>
    <div>title</div>
    <div>description</div>
    <div className="chatroomcss">
    chat area
    <input></input>
     </div>
    <div className="chatroomcss"> member area </div>
    <div className="chatroomcss">bucket list </div>

    </div>
  )
  }
}
