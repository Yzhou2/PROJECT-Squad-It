import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';


export default class SearchresultCountry extends Component {
    constructor() {
      super();

      this.state = {
        events: null,
        city: 'provo',
        bannerPic: ['https://i.imgur.com/oIwuby5.png', 'https://i.imgur.com/KE8Jjx7.png']
      }
    }


// handleChange(event) {
//   this.setState({
//     search: event.target.value
//   })
// }
//
//
//
componentDidMount() {
  console.log('mounted')
  axios.get(`http://localhost:3001/api/getEvent/${this.state.city}`, {withCredentials:true}).then( response => {
    console.log(response, 'this is the event res')
    this.setState({
      events: response.data.events.event
    })
 });
 // setTimeout(
 //       () => { console.log('I do not leak!'); },
 //       500
 //     );
}

  render() {

  return (
    <div>


        <div className="ProfileContainer searchOverwrite">
          <div className="searchTopBar">
            <img src={this.state.bannerPic} />
            <div className="searchTitle">Cape Town, South Africa</div>
          </div>

          <div className="searchBodyContainer">
            <div className="searchBodyLeft">
              <div className="CirclesContainer">
                <div className="circle">
                  <div className="circleImg"><img src='https://i.imgur.com/6mvqxs1.png' /></div>
                  <div className="circleTitle"> Find Squad </div>
                </div>

                <div className="circle">
                  <div className="circleImg"><img src='https://i.imgur.com/iofL0bm.png' /></div>
                  <div className="circleTitle"> Find Squad Member</div>
                </div>

                <div className="circle">
                  <div className="circleImg"><img src='https://i.imgur.com/5QnPJfj.png' /></div>
                  <div className="circleTitle"> Eat With Local</div>
                </div>
              </div>

              <div className="countryInfo">


              </div>
            </div>


            <div className="searchBodyRight">
              <div className="rightBarTitle">Local Events</div>

              <div className="singleEvent">
                <div className="eventPic"></div>
                <div className="eventDetail">
                  <div>2017, sep 15th, 18:00pm</div>
                  <div className="eventTitle">Meeting up and Chat With Me</div>
                  <div className="eventFooter">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <div className="eventAds"> 279 n 400 e, Provo, UT, USA</div>
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
