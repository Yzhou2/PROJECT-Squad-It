import React, { Component } from 'react';
import axios from 'axios';


export default class EditTripPlan extends Component {
    constructor(props) {
      super(props);

      this.state = {
          eachPlan: this.props.eachPlan,


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
      // this.handleClick = this.handleClick.bind(this);
      this.handleChangeLVCity = this.handleChangeLVCity.bind(this);
      this.handleChangeLVState = this.handleChangeLVState.bind(this);
      this.handleChangeLVCountry = this.handleChangeLVCountry.bind(this);
  }


handleChangeCity(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {city: event.target.value})
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



// handleClick(){
//
//   var Arrival = this.state.GoingYear + "-" + this.state.GoingMonth + "-" + this.state.GoingDay;
//   var Depart = this.state.LeavingYear + "-" + this.state.LeavingMonth + "-" + this.state.LeavingDay;
//   axios.post('http://localhost:3001/api/createTrip', {
//     City: this.state.City,
//     State: this.state.State,
//     Country: this.state.Country,
//     Arrival: Arrival,
//     Depart: Depart,
//     LVCity: this.state.LVCity,
//     LVState: this.state.LVState,
//     LVCountry: this.state.LVCountry,
//     TripAvaliable: this.state.TripAvaliable
//
//   }, {withCredentials:true}).then(res => {
//     axios.get('http://localhost:3001/api/viewTrip', {withCredentials:true}).then( response =>
//       this.props.updateTravelPlan(response.data)
//      );
//   });
//
//   this.props.CreateTripPlanReset();
//
// }


  render() {
    console.log(this.state, 'whats on state')
    return (

        <div className="createSquadContainer">
          <div className="createSquadTop">
            <div>Create Your Trip</div>
          </div>

            <div className="innerWrapperContainer">
              <div className="innerWrapper">
                <div>Where are You Going?</div>
                <div className="innerInput">
                  <input onChange={this.handleChangeCity} defaultValue={this.state.eachPlan.city}></input>
                  <input onChange={this.handleChangeState} placeholder={this.state.eachPlan.state}></input>
                  <input onChange={this.handleChangeCountry} placeholder={this.state.eachPlan.country}></input>
                </div>
              </div>


            <div className="innerWrapper">
              <div>When are You Arriving?</div>
            <div className="innerInput">
              <input onChange={this.handleChangeGoingDay} placeholder={this.state.eachPlan.arday}></input>
              <input onChange={this.handleChangeGoingMonth} placeholder={this.state.eachPlan.armonth}></input>
              <input onChange={this.handleChangeGoingYear} placeholder={this.state.eachPlan.aryear}></input>
            </div>
          </div>


            <div className="innerWrapper">
              <div>When are You leaving?</div>
            <div className="innerInput">
              <input onChange={this.handleChangeLeavingDay} placeholder={this.state.eachPlan.dpday}></input>
              <input onChange={this.handleChangeLeavingMonth} placeholder={this.state.eachPlan.dpmonth}></input>
              <input onChange={this.handleChangeLeavingYear} placeholder={this.state.eachPlan.doyear}></input>
            </div>
            </div>

            <div className="innerWrapper">
              <div>Where are you Leaving From?</div>
              <div className="innerInput">
                <input onChange={this.handleChangeLVCity} placeholder={this.state.eachPlan.lvcity}></input>
                <input onChange={this.handleChangeLVState} placeholder={this.state.eachPlan.lvstate}></input>
                <input onChange={this.handleChangeLVCountry} placeholder={this.state.eachPlan.lvcountry}></input>
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
            <button onClick={() => {this.props.EditTripPlanReset()}}>Cancel</button>
          </div>
      </div>
    )
  }
}
