import React, { Component } from 'react';
import axios from 'axios';


export default class CreateSquad extends Component {
  constructor(){
    super()

      this.state={
        name: null,
        Description: null,
        Address: null,
        City: null,
        Country: null,
        StartDate: null,
        StartDay: null,
        StartMonth: null,
        StartYear: null,
        EndDate: null,
        EndDay: null,
        EndMonth: null,
        EndYear: null,
      }

      this.handlechangeName = this.handlechangeName.bind(this);
      this.handlechangeDescription = this.handlechangeDescription.bind(this);
      this.handlechangeAddress = this.handlechangeAddress.bind(this);
      this.handlechangeCity = this.handlechangeCity.bind(this);
      this.handlechangeCountry = this.handlechangeCountry.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.handlechangeStartDay = this.handlechangeStartDay.bind(this);
      this.handlechangeStartMonth = this.handlechangeStartMonth.bind(this);
      this.handlechangeStartYear =  this.handlechangeStartYear.bind(this);
      this.handlechangeEndDay = this.handlechangeEndDay.bind(this);
      this.handlechangeEndMonth = this.handlechangeEndMonth.bind(this);
      this.handlechangeEndYear =  this.handlechangeEndYear.bind(this);
    }


    handlechangeName(event) {
      this.setState({
        name: event.target.value
      })
    }

    handlechangeDescription(event) {
      this.setState({
        Description: event.target.value
      })
    }

    handlechangeAddress(event) {
      this.setState({
        Address: event.target.value
      })
    }

    handlechangeCity(event) {
      this.setState({
        City: event.target.value
      })
    }

    handlechangeCountry(event) {
      this.setState({
        Country: event.target.value
      })
    }

    handlechangeStartDay(event) {
      this.setState({
        StartDay: event.target.value,
        StartDate: event.target.value,
      })
    }

    handlechangeStartMonth(event) {
      this.setState({
        StartMonth: event.target.value,
        StartDate: event.target.value +"-"+this.state.StartDay
      })
    }

    handlechangeStartYear(event) {
      this.setState({
        StartYear: event.target.value,
        StartDate: event.target.value+"-"+this.state.StartMonth+"-"+this.state.StartDay
      })
    }

    handlechangeEndDay(event) {
      this.setState({
        EndDay: event.target.value,
        EndDate: event.target.value,
      })
    }

    handlechangeEndMonth(event) {
      this.setState({
        EndMonth: event.target.value,
        EndDate: event.target.value +"-"+this.state.EndDay
      })
    }

    handlechangeEndYear(event) {
      this.setState({
        EndYear: event.target.value,
        EndDate: event.target.value+"-"+this.state.EndMonth+"-"+this.state.EndDay
      })
    }

    handleClick() {
      console.log('clicked save')
    axios.post( 'http://localhost:3001/api/squad', this.state ).then( response => response)
  }


    render(){
      console.log(this.state, 'state status')
      return (
        <div>
          <div className="createSquadTop">
            <div>Create a Squad</div>
            <div>exit</div>
          </div>

          <hr/>

          <div>Squad Name</div>
          <input onChange={this.handlechangeName}></input>

          <div>Location</div>
          <input placeholder="address" onChange={this.handlechangeAddress}></input>
          <input placeholder="city" onChange={this.handlechangeCity}></input>
          <input placeholder="country" onChange={this.handlechangeCountry}></input>

          <div>time</div>
          <div>
            <div>from</div>
            <input placeholder="date" onChange={this.handlechangeStartDay}></input>
            <input placeholder="month" onChange={this.handlechangeStartMonth}></input>
            <input placeholder="year" onChange={this.handlechangeStartYear}></input>
          </div>

          <div>
            <div>to</div>
            <input placeholder="date" onChange={this.handlechangeEndDay}></input>
            <input placeholder="month" onChange={this.handlechangeEndMonth}></input>
            <input placeholder="year" onChange={this.handlechangeEndYear}></input>
          </div>


          <div>Description</div>
          <input onChange={this.handlechangeDescription}></input>

          <button onClick={this.handleClick}>save</button>
        </div>
      )
    }
}
