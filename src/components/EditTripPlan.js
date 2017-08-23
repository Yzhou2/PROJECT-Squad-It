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
      this.handleClick = this.handleClick.bind(this);
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
    eachPlan: Object.assign(this.state.eachPlan, {State: event.target.value})
  })
}

handleChangeCountry(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {Country: event.target.value})
  })
}

handleChangeGoingDay(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {arday: event.target.value})
  })
}

handleChangeGoingMonth(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {armonth: event.target.value})
  })
}

handleChangeGoingYear(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {aryear: event.target.value})
  })
}

handleChangeLeavingDay(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {dpday: event.target.value})
  })
}

handleChangeLeavingMonth(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {dpmonth: event.target.value})
  })
}

handleChangeLeavingYear(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {dpyear: event.target.value})
  })
}

handleChangeSquad(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {TripAvaliable: event.target.value})
  })
}

handleChangeLVCity(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {lvcity: event.target.value})
  })
}

handleChangeLVState(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {lvstate: event.target.value})
  })
}

handleChangeLVCountry(event) {
  this.setState({
    eachPlan: Object.assign(this.state.eachPlan, {lvcountry: event.target.value})
  })
}



handleClick(){

  var Arrival = this.state.eachPlan.aryear + "-" + this.state.eachPlan.armonth + "-" + this.state.eachPlan.arday;
  var Depart = this.state.eachPlan.dpyear + "-" + this.state.eachPlan.dpmonth + "-" + this.state.eachPlan.dpday;
  this.setState({
   eachPlan: Object.assign(this.state.eachPlan, {arrival: Arrival}, {depart: Depart})
   })

  axios.put('http://localhost:3001/api/editTrip', this.state, {withCredentials:true}).then(res => {
    axios.get('http://localhost:3001/api/viewTrip', {withCredentials:true}).then( response =>
      this.props.updateTravelPlan(response.data)
     );
  });

this.props.EditTripPlanReset();
}


  render() {
    console.log('props for edittrip', this.props)
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
                  <input onChange={this.handleChangeState} defaultValue={this.state.eachPlan.state}></input>
                  <input onChange={this.handleChangeCountry} defaultValue={this.state.eachPlan.country}></input>
                </div>
              </div>


            <div className="innerWrapper">
              <div>When are You Arriving?</div>
            <div className="innerInput">
              <input onChange={this.handleChangeGoingDay} defaultValue={this.state.eachPlan.arday}></input>
              <input onChange={this.handleChangeGoingMonth} defaultValue={this.state.eachPlan.armonth}></input>
              <input onChange={this.handleChangeGoingYear} defaultValue={this.state.eachPlan.aryear}></input>
            </div>
          </div>


            <div className="innerWrapper">
              <div>When are You leaving?</div>
            <div className="innerInput">
              <input onChange={this.handleChangeLeavingDay} defaultValue={this.state.eachPlan.dpday}></input>
              <input onChange={this.handleChangeLeavingMonth} defaultValue={this.state.eachPlan.dpmonth}></input>
              <input onChange={this.handleChangeLeavingYear} defaultValue={this.state.eachPlan.doyear}></input>
            </div>
            </div>

            <div className="innerWrapper">
              <div>Where are you Leaving From?</div>
              <div className="innerInput">
                <input onChange={this.handleChangeLVCity} defaultValue={this.state.eachPlan.lvcity}></input>
                <input onChange={this.handleChangeLVState} defaultValue={this.state.eachPlan.lvstate}></input>
                <input onChange={this.handleChangeLVCountry} defaultValue={this.state.eachPlan.lvcountry}></input>
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
            <button onClick={() => this.props.EditTripPlanReset()}>Cancel</button>
          </div>
      </div>
    )
  }
}
