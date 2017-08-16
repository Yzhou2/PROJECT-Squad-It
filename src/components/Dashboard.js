import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateSquad from './CreateSquad';
import CreateTripPlan from './CreateTripPlan';
import EditTripPlan from './EditTripPlan';



export default class Dashboard extends Component{
  constructor() {
    super();

    this.state = {
      response:[],
      currentSquad: [],
      pastSquad: [],
      travelPlan: [],
      createSquad: false,
      CreateTripPlan: false,
      EditTripPlan: false,
      eachPlan: null,
      eachSquadInfo: null,
      eachsquadClicked: false,
      events: null

    }
  this.handleCSDelete = this.handleCSDelete.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.createSquadReset = this.createSquadReset.bind(this);
  this.CreateTripPlanReset = this.CreateTripPlanReset.bind(this);
  this.EditTripPlanReset = this.EditTripPlanReset.bind(this);
  this.handleClickAddTP = this.handleClickAddTP.bind(this);
  this.updateTravelPlan = this.updateTravelPlan.bind(this);
  this.updatecurrentSquad = this.updatecurrentSquad.bind(this);
  this.handleEachSquad = this.handleEachSquad.bind(this);
  }


  componentDidMount() {
    console.log('componentDidMount', this.props.location.query)
    this.setState({
      eachsquadClicked: this.props.location.query
    });

    axios.get('http://localhost:3001/api/squadInfo', {withCredentials:true}).then( response =>
      this.setState({
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
    });


  }

  //<Link to=`dashboard/squad/${id of the squad}`> once there pull Id from ulr match.params.id   CompDidMnt db for that squad


  // <Link to={{pathname: '', query:{the: 'query'}}} />


  handleCSDelete(eachSquad) {
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

EditTripPlanReset(){
  this.setState({
    EditTripPlan: false
  })
}

handleClickAddTP(){
  this.setState({
    CreateTripPlan: true
  })
}

updateTravelPlan(val) {
  this.setState({
    travelPlan: val
  })
}

updatecurrentSquad(val) {
  console.log(val)
  this.setState({
    currentSquad: [...this.state.currentSquad, val]
  })
}


sendEachPlanToState(val){
  this.setState({
    eachPlan: val,
    EditTripPlan: true
  });
}


handleEachSquad(eachSquad) {
  this.setState({
    eachsquadClicked: true,
    eachSquadInfo: eachSquad
  })
}


  render() {

    // console.log('propsssssss', this.state.eachsquadClicked)


    var style = {
      filter: 'blur(5px)'
    }

    var style2 = {
      display: 'none'
    }
    return (
    <div>

    {this.state.createSquad?<CreateSquad createSquadReset={this.createSquadReset} updatecurrentSquad={this.updatecurrentSquad}/>:''}
    {this.state.CreateTripPlan?<CreateTripPlan CreateTripPlanReset={this.CreateTripPlanReset} updateTravelPlan={this.updateTravelPlan}/>:''}
    {this.state.EditTripPlan?<EditTripPlan eachPlan={this.state.eachPlan} EditTripPlanReset={this.EditTripPlanReset} updateTravelPlan={this.updateTravelPlan}/>:''}

      <div style={this.state.eachsquadClicked?style2:this.state.createSquad || this.state.CreateTripPlan || this.state.EditTripPlan?style:{}}>

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
                      <button className="edittrip" onClick={()=>{this.sendEachPlanToState(eachPlan)}}>Edit</button>
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
                       <Link to={{pathname:"/logged/chat", query:{eachSquad: eachSquad}}}><div> {eachSquad.name} </div></Link>
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
