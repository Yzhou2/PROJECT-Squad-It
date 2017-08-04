import React, { Component } from 'react';
import axios from 'axios';

export default class EditProfile extends Component {
  constructor() {
    super();

    this.state = {
      Gender: null,
      Squad_Status: null,
      City: null,
      Country: null,
      Birthday: null,
      Smoker: null,
      Drinker: null,
      DSTolerance: null,
      AvaliableForHostDinner: null,
      TypeOfTraveller: null,
      Occupation: null,
      Tags: null,
      visited_countries: null,
      Fluent_Languages: null,
      Description: null

    }
  this.handleChangeGender = this.handleChangeGender.bind(this);
  this.handleChangeSquadStatus = this.handleChangeSquadStatus.bind(this);
  this.handleChangeCity = this.handleChangeCity.bind(this);
  this.handleChangeCountry = this.handleChangeCountry.bind(this);
  this.handleChangeSmoker = this.handleChangeSmoker.bind(this);
  this.handleChangeDrinker = this.handleChangeDrinker.bind(this);
  this.handleChangeDSTolerance = this.handleChangeDSTolerance.bind(this);
  this.handleChangeHostDinner = this.handleChangeHostDinner.bind(this);
  this.handleChangeTypeOfTraveller = this.handleChangeTypeOfTraveller.bind(this);
  this.handleChangeVisitedCountries = this.handleChangeVisitedCountries.bind(this);
  this.handleChangeFluentLanguages = this.handleChangeFluentLanguages.bind(this);
  this.handleChangeDescription = this.handleChangeDescription.bind(this);
  this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
  this.handleChangeTags = this.handleChangeTags.bind(this);
  }


  componentDidMount(){
    axios.post('http://localhost:3001/api/editprofile'/*, {this.state.Gender}*/).then(res => res)

  }


  handleChangeGender(event) {
    this.setState({
      Gender: event.target.value
    })
  }

  handleChangeSquadStatus(event) {
    this.setState({
      Squad_Status: event.target.value
    })
  }

  handleChangeCity(event) {
    this.setState({
      City: event.target.value
    })
  }

  handleChangeCountry(event) {
    this.setState({
      Country: event.target.value
    })
  }

  handleChangeSmoker(event) {
    this.setState({
      Smoker: event.target.value
    })
  }

  handleChangeDrinker(event) {
    this.setState({
      Drinker: event.target.value
    })
  }

  handleChangeDSTolerance(event) {
    this.setState({
      DSTolerance: event.target.value
    })
  }

  handleChangeHostDinner(event) {
    this.setState({
      AvaliableForHostDinner: event.target.value
    })
  }

  handleChangeTypeOfTraveller(event) {
    this.setState({
      TypeOfTraveller: event.target.value
    })
  }

  handleChangeVisitedCountries(event) {
    this.setState({
      visited_countries: event.target.value
    })
  }

  handleChangeFluentLanguages(event) {
    this.setState({
      Fluent_Languages: event.target.value
    })
  }

  handleChangeDescription(event) {
    this.setState({
      Description: event.target.value
    })
  }

  handleChangeOccupation(event) {
    this.setState({
      Occupation: event.target.value
    })
  }

  handleChangeTags(event) {
    this.setState({
      Tags: event.target.value
    })
  }


  render() {
    console.log(this.state)
      return (
        <div className="editProfile">
          <div>profile img</div>

          <div className="editForm">
            <div className="edirFormSection">
              <div>Ready To Join Squads?</div>
              <select onChange={this.handleChangeSquadStatus}>
                <option>yes</option>
                <option>maybe</option>
                <option>no</option>
              </select>
            </div>


            <div className="edirFormSection">
              <div>Avaliable To host Squads for dinner?</div>
              <select onChange={this.handleChangeHostDinner}>
                <option>yes</option>
                <option>no</option>
              </select>
            </div>


            <div className="edirFormSection">
              <div>Gender</div>
              <select onChange={this.handleChangeGender}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="edirFormSection">
              <p>Where I live</p>
              <input placeholder="city" onChange={this.handleChangeCity}></input>
              <input placeholder="country" onChange={this.handleChangeCountry}></input>
            </div>

            <div className="edirFormSection">
              <p>Countries Visited</p>
              <input onChange={this.handleChangeVisitedCountries}></input>
            </div>

            <div className="edirFormSection">
              <p>Language Spoken</p>
              <input onChange={this.handleChangeFluentLanguages}></input>
            </div>

            <div className="edirFormSection">
              <p>Birthday</p>
              <input placeholder="day"></input>
              <input placeholder="month"></input>
              <input placeholder="year"></input>
            </div>

            <div className="edirFormSection">
              <p>Occupation</p>
              <input onChange={this.handleChangeOccupation}></input>
            </div>

            <div className="edirFormSection">
              <p>My Interests</p>
              <input onChange={this.handleChangeTags}></input>
            </div>

            <div className="edirFormSection">
              <p>Do You Smoke?</p>
              <select onChange={this.handleChangeSmoker}>
                <option>yes</option>
                <option>no</option>
              </select>
            </div>

            <div className="edirFormSection">
              <p>Do You Drink?</p>
              <select onChange={this.handleChangeDrinker}>
                <option>yes</option>
                <option>maybe</option>
                <option>no</option>
              </select>
            </div>

            <div className="edirFormSection">
              <p>Do You Mind Hanging Out with People who Smoke/Drink?</p>
              <select onChange={this.handleChangeDSTolerance}>
                <option>yes</option>
                <option>maybe</option>
                <option>preferablely not</option>
                <option>I dont mind drinking but I do mind smoking</option>
                <option>I dont mind smoking but I do mind drinking</option>
              </select>
            </div>

            <div className="edirFormSection">
            <p>What Type Of Traveller Are You?</p>
            <select onChange={this.handleChangeTypeOfTraveller}>
              <option>budget</option>
              <option>adventure</option>
              <option>luxuryvocation</option>
            </select>
            </div>

            <div className="edirFormSection">
              <p>About Me</p>
              <input onChange={this.handleChangeDescription}></input>
            </div>

          </div>

          <button>save</button>

        </div>

      )
    }
}
