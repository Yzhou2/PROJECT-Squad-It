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
        EndDate: null,
      }

      this.handlechangeName = this.handlechangeName.bind(this);
      this.handlechangeDescription = this.handlechangeDescription.bind(this);
      this.handlechangeAddress = this.handlechangeAddress.bind(this);
      this.handlechangeCity = this.handlechangeCity.bind(this);
      this.handlechangeCountry = this.handlechangeCountry.bind(this);
      this.handlechangeStartDate = this.handlechangeStartDate.bind(this);
      this.handlechangeEndDate = this.handlechangeEndDate.bind(this);
      this.handleClick = this.handleClick.bind(this);
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

    handlechangeStartDate(event) {
      this.setState({
        StartDate: event.target.value
      })
    }

    handlechangeEndDate(event) {
      this.setState({
        EndDate: event.target.value
      })
    }

    handleClick() {
      console.log('clicked save')
    axios.post( 'http://localhost:3001/api/squad', this.state ).then( response => response)
  }


    render(){
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
            <input placeholder="date"></input>
            <input placeholder="month"></input>
            <input placeholder="year"></input>
          </div>

          <div>
            <div>to</div>
            <input placeholder="date"></input>
            <input placeholder="month"></input>
            <input placeholder="year"></input>
          </div>


          <div>Description</div>
          <input onChange={this.handlechangeDescription}></input>

          <button onClick={this.handleClick}>save</button>
        </div>
      )
    }
}
