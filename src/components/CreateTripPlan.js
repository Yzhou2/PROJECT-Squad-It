import React, { Component } from 'react';


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
          TripAvaliable: null
      }

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


  render() {
    return (
      <div>
        <div className="TripContainer">
          <div>Where are You Going?</div>
          <div>City</div>
          <input></input>

          <div>State</div>
          <input></input>

          <div>Country</div>
          <input></input>
        </div>

        <div className="TripContainer">
          <div>When are You going?</div>
          <div>day</div>
          <input></input>

          <div>month</div>
          <input></input>

          <div>year</div>
          <input></input>
        </div>

        <div className="TripContainer">
          <div>When are You leaving?</div>
          <div>day</div>
          <input></input>

          <div>month</div>
          <input></input>

          <div>year</div>
          <input></input>
        </div>

        <div className="TripContainer">
          <div>Avaliable to Join Squad There?</div>
          <select>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
    )
  }
}
