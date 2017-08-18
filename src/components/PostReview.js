import React, { Component } from 'react';
import axios from 'axios';


export default class SelectSquad extends Component {
    constructor(props) {
      super(props);

      this.state = {
          review: null


      }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


handleClick(squad_id){
  axios.post('http://localhost:3001/api/postReviews', {userid:this.props.userid, review:this.state.review}, {withCredentials: true}).then(response => {
    console.log(response, 'this is the response for post review')
  });

  this.props.unPostReview();
}

handleChange(event){
  this.setState({
    review: event.target.value
  })
}


  render() {
    // console.log(this.props, 'propsss for selectSquad!!!!!!')
    console.log(this.props, 'props for post reviews')
    return (
      <div className="createSquadContainer selectSquadContainer">
        <div className="createSquadTop">
          <div>Leave a Review</div>
        </div>
          <input className="reviewInput" onChange={this.handleChange}></input>
          <div className="createBtn">
            <button onClick={this.handleClick}>Post</button>
            <button onClick={()=>{this.props.unPostReview()}}>Cancel</button>
          </div>
      </div>
    )
  }
}
