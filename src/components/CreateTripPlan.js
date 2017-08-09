import React, { Component } from 'react';
import axios from 'axios';


export default class Header extends Component {
    constructor() {
      super();

      this.state = {
          City: null,
          State: null,
          Country: null,
          GoingDay: null,
          GoingMonth: null,
          GoingYear: null,
          LeavingDay: null,
          LeavingMonth: null,
          LeavingYear: null,
          TripAvaliable: null,
          LVCity: null,
          LVState: null,
          LVCountry: null

      }
      this.handleChangeCity = this.handleChangeCity.bind(this);
      this.handleChangeState = this.handleChangeState.bind(this);
      this.handleChangeCountry = this.handleChangeCountry.bind(this);
      this.handleChangeGoingDay = this.handleChangeGoingDay.bind(this);
      this.handleChangeGoingMonth = this.handleChangeGoingMonth.bind(this);
      this.handleChangeGoingYear = this.handleChangeGoingYear.bind(this);
      this.handleChangeLeavingDay = this.handleChangeLeavingDay.bind(this);
      this.handleChangeLeavingMonth = this.handleChangeLeavingMonth.bind(this);
      this.handleChangeLeavingYear = this.handleChangeLeavingYear.bind(this);
      this.handleChangeSquad = this.handleChangeSquad.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handleChangeLVCity = this.handleChangeLVCity.bind(this);
      this.handleChangeLVState = this.handleChangeLVState.bind(this);
      this.handleChangeLVCountry = this.handleChangeLVCountry.bind(this);
  }


handleChangeCity(event) {
  this.setState({
    City:event.target.value
  })
}

handleChangeState(event) {
  this.setState({
    State:event.target.value
  })
}

handleChangeCountry(event) {
  this.setState({
    Country:event.target.value
  })
}

handleChangeGoingDay(event) {
  this.setState({
    GoingDay:event.target.value
  })
}

handleChangeGoingMonth(event) {
  this.setState({
    GoingMonth:event.target.value
  })
}

handleChangeGoingYear(event) {
  this.setState({
    GoingYear:event.target.value
  })
}

handleChangeLeavingDay(event) {
  this.setState({
    LeavingDay:event.target.value
  })
}

handleChangeLeavingMonth(event) {
  this.setState({
    LeavingMonth:event.target.value
  })
}

handleChangeLeavingYear(event) {
  this.setState({
    LeavingYear:event.target.value
  })
}

handleChangeSquad(event) {
  this.setState({
    TripAvaliable:event.target.value
  })
}

handleChangeLVCity(event) {
  this.setState({
    LVCity:event.target.value
  })
}

handleChangeLVState(event) {
  this.setState({
    LVState:event.target.value
  })
}

handleChangeLVCountry(event) {
  this.setState({
    LVCountry:event.target.value
  })
}



handleClick(){

  var Arrival = this.state.GoingYear + "-" + this.state.GoingMonth + "-" + this.state.GoingDay;
  var Depart = this.state.LeavingYear + "-" + this.state.LeavingMonth + "-" + this.state.LeavingDay;
  axios.post('http://localhost:3001/api/createTrip', {
    City: this.state.City,
    State: this.state.State,
    Country: this.state.Country,
    Arrival: Arrival,
    Depart: Depart,
    LVCity: this.state.LVCity,
    LVState: this.state.LVState,
    LVCountry: this.state.LVCountry,
    TripAvaliable: this.state.TripAvaliable

  }, {withCredentials:true}).then(res => res);

  this.props.CreateTripPlanReset();

  axios.get('http://localhost:3001/api/viewTrip', {withCredentials:true}).then( response =>
    this.setState({
      travelPlan: response.data,
    })
   );
}


  render() {
    console.log(this.props, 'our first bug')
    return (

        <div className="createSquadContainer">
          <div className="createSquadTop">
            <div>Create Your Trip</div>
          </div>

            <div className="innerWrapperContainer">
              <div className="innerWrapper">
                <div>Where are You Going?</div>
                <div className="innerInput">
                  <input placeholder="City" onChange={this.handleChangeCity} placeholder="City"></input>
                  <input placeholder="State" onChange={this.handleChangeState} placeholder="State"></input>
                  <input placeholder="Country" onChange={this.handleChangeCountry} placeholder="Country"></input>
                </div>
              </div>


            <div className="innerWrapper">
              <div>When are You going?</div>
            <div className="innerInput">
              <input onChange={this.handleChangeGoingDay} placeholder="Day"></input>
              <input onChange={this.handleChangeGoingMonth} placeholder="Month"></input>
              <input onChange={this.handleChangeGoingYear} placeholder="Year"></input>
            </div>
          </div>


            <div className="innerWrapper">
              <div>When are You leaving?</div>
            <div className="innerInput">
              <input onChange={this.handleChangeLeavingDay} placeholder="Day"></input>
              <input onChange={this.handleChangeLeavingMonth} placeholder="Month"></input>
              <input onChange={this.handleChangeLeavingYear} placeholder="Year"></input>
            </div>
            </div>

            <div className="innerWrapper">
              <div>Where are you Leaving From?</div>
              <div className="innerInput">
                <input onChange={this.handleChangeLVCity} placeholder="City"></input>
                <input onChange={this.handleChangeLVState} placeholder="State"></input>
                <input onChange={this.handleChangeLVCountry} placeholder="Country"></input>
              </div>
            </div>


            <div className="innerWrapper innerselect">
              <div>Avaliable to Join Squad There?</div>
              <select onChange={this.handleChangeSquad}>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div className="createBtn">
            <button onClick={this.handleClick}>save</button>
            <button onClick={() => {this.props.CreateTripPlanReset()}}>Cancel</button>
          </div>
      </div>
    )
  }
}
