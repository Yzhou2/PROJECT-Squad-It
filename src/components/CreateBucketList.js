import React, { Component } from 'react';
import axios from 'axios';
import formatInput from './formatInput';


export default class CreateBucketList extends Component {
    constructor(props) {
      super(props);

      this.state = {
          title: null,
          description: null,
          stars: null,
          squad_id: this.props.squad_id,

      }
      this.CreateBktReset = this.handleChangeName.bind(this);
      this.handleChangeDesc = this.handleChangeDesc.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleClick = this.handleClick.bind(this);
  }


handleChangeName(event) {
  this.setState({
    title:formatInput(event.target.value)
  })
}

handleChangeDesc(event) {
  this.setState({
    description:event.target.value
  })
}





handleClick(){

  axios.post('/api/postBktList', {squad_id:this.state.squad_id, title: this.state.title, description:this.state.description}, {withCredentials:true}).then(res => {
    this.props.updateBktList();
  });

  this.props.CreateBktReset();

}


  render() {

    return (

        <div className="createSquadContainer">
          <div className="createSquadTop">
            <div>Create Your Bucket List</div>
          </div>

          <div className="innerWrapperContainer bucketContainer">
          <div>Title</div>
          <input onChange={this.handleChangeName}/>
          <div>Description</div>
          <textarea onChange={this.handleChangeDesc}></textarea>
          </div>


          <div className="createBtn">
            <button onClick={this.handleClick}>save</button>
            <button onClick={() => {this.props.CreateBktReset()}}>Cancel</button>
          </div>
      </div>
    )
  }
}
