import React, { Component } from 'react';
import axios from 'axios';
import socket from './socket';


export default class SelectSquad extends Component {
    constructor(props) {
      super(props);

      this.state = {
          all_squads: null


      }

  }


handleClick(squad_id){
  // axios.post('http://localhost:3001/api/addSquadMember', {squad_id:squad_id, user_id:this.props.userid}, {withCredentials: true}).then(response => {
  //   console.log(response)
  // });
  socket.emit('notification', {
    squad_id: squad_id,
    user_id: this.props.userid,
    city: this.props.city,
    stat: true
  });
  this.props.unSelectSquad();
}

componentDidMount(){
  console.log(this.state, 'this is the state for search result')
  socket.emit('notification', 'just wanna see if you get it');



  axios.get('http://localhost:3001/api/squadInfo', {withCredentials:true}).then( response => {
    this.setState({
      all_squads: response.data,
    })
  });
}

// {
//   this.state.all_squads?
//   <div className="innerWrapperContainer">
//   {
//     this.state.all_squads.map((squad, idx) => {
//        return <div key={idx} onClick={()=>{this.handleClick(squad.squad_id)}}>{squad.name}</div>
//     })
//   }
//   </div>
//   :
//   ""
// }


  render() {
    console.log(this.props, 'states for selectSquad!!!!!!')

    return (
      <div className="createSquadContainer selectSquadContainer">
        <div className="createSquadTop">
          <div>Select a Squad</div>
        </div>

          <div className="selectSquadWrapper">


            {
              this.state.all_squads?


                this.state.all_squads.map((squad, idx) => {
                   return (<div  className="innerWrapperContainer selectSquad" key={idx} onClick={()=>{this.handleClick(squad.squad_id)}}>
                            <span>{squad.name}</span>
                          </div>)
                })

              :
              ""
            }


          <button className="selectCancel" onClick={()=>{this.props.unSelectSquad()}}>Cancel</button>
        </div>

      </div>
    )
  }
}
