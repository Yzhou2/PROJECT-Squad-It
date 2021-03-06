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
  axios.post('/api/postReviews', {userid:this.props.userid, review:this.state.review}, {withCredentials: true}).then(response => {
    this.props.updateReview();
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
          <textarea className="reviewInput" onChange={this.handleChange}></textarea>
          <div className="createBtn">
            <button onClick={this.handleClick}>Post</button>
            <button onClick={()=>{this.props.unPostReview()}}>Cancel</button>
          </div>
      </div>
    )
  }
}
