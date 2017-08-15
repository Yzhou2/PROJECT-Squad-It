import React, { Component } from 'react';
import axios from 'axios';


export default class SelectSquad extends Component {
    constructor(props) {
      super(props);

      this.state = {
          all_squads: null


      }
      // this.handleClick = this.handleClick.bind(this);
  }


handleClick(squad_id){
  axios.post('http://localhost:3001/api/addSquadMember', {squad_id:squad_id, user_id:this.props.userid}, {withCredentials: true}).then(response => {
    console.log(response)
  })
}

componentDidMount(){
  axios.get('http://localhost:3001/api/squadInfo', {withCredentials:true}).then( response => {
    this.setState({
      all_squads: response.data,
    })
  });
}


  render() {
    console.log(this.props, 'propsss for selectSquad!!!!!!')
    return (
      <div>
      hihi
      {
        this.state.all_squads?
        <div>
        {
          this.state.all_squads.map((squad, idx) => {
             return <div key={idx} onClick={()=>{this.handleClick(squad.squad_id)}}>{squad.name}</div>
          })
        }
        </div>
        :
        ""
      }
      </div>
    )
  }
}
