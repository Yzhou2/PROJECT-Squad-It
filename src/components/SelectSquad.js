import React, { Component } from 'react';
import axios from 'axios';


export default class SelectSquad extends Component {
    constructor(props) {
      super(props);

      this.state = {
          all_squads: null


      }

  }


handleClick(squad_id){
  axios.post('http://localhost:3001/api/addSquadMember', {squad_id:squad_id, user_id:this.props.userid}, {withCredentials: true}).then(response => {
    console.log(response)
  });

  this.props.unSelectSquad();
}

componentDidMount(){
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
    console.log(this.props, 'propsss for selectSquad!!!!!!')
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
