import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateSquad from './CreateSquad';
import CreateTripPlan from './CreateTripPlan';

export default class Dashboard extends Component{
  constructor() {
    super();

    this.state = {
      response:[],
      currentSquad: [],
      pastSquad: [],
      travelPlan: null,
      createSquad: false,
      CreateTripPlan: false
    }
  this.handleCSDelete = this.handleCSDelete.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.createSquadReset = this.createSquadReset.bind(this);
  this.CreateTripPlanReset = this.CreateTripPlanReset.bind(this);
  this.handleClickAddTP = this.handleClickAddTP.bind(this);
  }


  componentDidMount() {
    axios.get('http://localhost:3001/api/squadInfo', {withCredentials:true}).then( response =>
      this.setState({
        response: response.data,
        currentSquad: response.data,
      })
    );

    axios.get('http://localhost:3001/api/viewTrip', {withCredentials:true}).then( response =>
      this.setState({
        travelPlan: response.data,
      })
     );

     axios.get('http://localhost:3001/api/getPastSquad', {withCredentials:true}).then( response => {
       this.setState({
         pastSquad: response.data
       })
    })

  }



  handleCSDelete(eachSquad) {
    console.log('clicked delete')
    axios.put('http://localhost:3001/api/updateSquad',{eachSquad}, {withCredentials:true}).then(res => {
      axios.get('http://localhost:3001/api/getPastSquad', {withCredentials:true}).then( response => {
        this.setState({
          pastSquad: response.data
        })
        axios.get('http://localhost:3001/api/squadInfo', {withCredentials:true}).then( response =>
          this.setState({
            response: response.data,
            currentSquad: response.data
          })
        );
      });

    })
  }

  handlePSDelete(id){
    console.log('id passed into psdelete', id)
    axios.delete(`http://localhost:3001/api/removeSquad/${id}`,{withCredentials:true}).then(res => {
      axios.get('http://localhost:3001/api/getPastSquad', {withCredentials:true}).then( response => {
        this.setState({
          pastSquad: response.data
        })
     })
    })

  }

  deleteTrip(id){
  console.log(id, 'this is the data send to function delete')
  axios.delete(`http://localhost:3001/api/removeTrip/${id}`,{withCredentials:true}).then(res => {
    axios.get('http://localhost:3001/api/viewTrip', {withCredentials:true}).then( response =>
      this.setState({
        travelPlan: response.data,
      })
     );


  })
}

handleClick() {
  this.setState({
    createSquad: true
  })
}

createSquadReset(){
  this.setState({
    createSquad: false
  })
}

CreateTripPlanReset(){
  console.log('here')
  this.setState({
    CreateTripPlan: false
  })
}

handleClickAddTP(){
  this.setState({
    CreateTripPlan: true
  })
}


  render() {

    console.log(this.state.pastSquad, 'im the pastSquad!!')
    var style = {
      filter: 'blur(5px)'
    }

    return (
    <div>

    {this.state.createSquad?<CreateSquad createSquadReset={this.createSquadReset}/>:''}
    {this.state.CreateTripPlan?<CreateTripPlan CreateTripPlanReset={this.CreateTripPlanReset}/>:''}


      <div style={this.state.createSquad || this.state.CreateTripPlan?style:{}}>
      <Header />
      <Sidebar />

      <div className="DashboardContainer">
          <div className="tripPlan">

              <div className="TopBox">
                <div className="YourTrip">Your Travel Plans</div>
                <button className="AddTrip" onClick={this.handleClickAddTP}> + Add Trip Plans</button>
              </div>

              <div className="tripList">Your List of Trips </div>
              <div className="line"></div>

            <div>

              {this.state.travelPlan ? this.state.travelPlan.map( (eachPlan, idx) => {
                return (
              <div className="listWrapper" key={idx}>
                <div className="lists">
                    <div className="tripList1">
                      <div className="triploc">{eachPlan.city +', ' + eachPlan.country}</div>
                      <div className="tripdate">{eachPlan.arrival}</div>
                    </div>

                    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>


                    <div className="tripList2">
                      <div className="triploc">{eachPlan.city +', ' + eachPlan.country}</div>
                      <div className="tripdate">{eachPlan.depart}</div>
                    </div>
                </div>

                <div className="listbtn">
                    <div>
                      <button className="edittrip">Edit</button>
                      <button className="deletetrip" onClick={()=>{this.deleteTrip(eachPlan.travelplan_id)}}>Delete</button>
                    </div>
                </div>
              </div>
                )
              }):[]}







          </div>
        </div>


        <div className="tripPlan">

            <div className="TopBox topBarColor">
              <div className="YourTrip">Your Squads</div>

              <div>
                  <button className="AddTrip" onClick={this.handleClick}>+ Create a Squad</button>
                  <button className="AddTrip">+ Join a Squad</button>
              </div>
            </div>

            <div className="squadBoxcontainer">
              <div className="squadBox">
                <div className="squadTop">Current Squads</div>
                <div className="line"></div>

                <div className="squadList">
                 {this.state.currentSquad ? this.state.currentSquad.map( (eachSquad, idx) => {
                   return (
                     <div className="squadListInner" key={idx}>
                       <div> {eachSquad.name} </div>
                       <button className="squaddelete" onClick={()=>{this.handleCSDelete(eachSquad)}}>DELETE</button>
                     </div>
                   )
                 }):[]}
                </div>
              </div>


              <div className="squadBox">
                <div className="squadTop">Past Squads</div>
                <div className="line"></div>

                <div className="squadList">
                {this.state.pastSquad ? this.state.pastSquad.map( (eachSquad, idx) => {
                  return (
                    <div className="squadListInner" key={idx}>
                      <div> {eachSquad.name} </div>
                      <button className="squaddelete" onClick={()=>{this.handlePSDelete(eachSquad.squad_id)}}>DELETE</button>
                    </div>
                  )
                }):[]}

                </div>
              </div>



              <div className="squadBox">
                <div className="squadTop">Bucket List</div>
                <div className="line"></div>

                <div className="squadList">


                </div>
              </div>
            </div>
        </div>


      </div>
      </div>
    </div>
    )
  }
}
