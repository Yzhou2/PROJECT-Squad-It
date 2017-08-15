import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchResult from './SearchResult';
import keys from './keys';



export default class SearchresultCountry extends Component {
    constructor(props) {
      super(props);

      this.state = {
        events: [],
        city: this.props.match.params.search,
        bannerPic: ['https://i.imgur.com/oIwuby5.png', 'https://i.imgur.com/KE8Jjx7.png'],
        searchMember: false,
        PlaceCode: null,
        topDinning: null,
        trails: null,
      }
      this.OpenSqdMember = this.OpenSqdMember.bind(this);
    }


OpenSqdMember(){
  // console.log('clicked');
  this.setState({
    searchMember: true
  })
}

// handleChange(event) {
//   this.setState({
//     search: event.target.value
//   })
// }
//
//

componentDidMount() {
  // console.log('mounted')

//  axios.get(`https://developers.zomato.com/api/v2.1/locations?query=%${this.state.city}`, {
//    headers: {"user-key":keys.zomatoAPI}
//  }).then( response => {
// console.log(response.data.location_suggestions[0], 'this is city code')
// axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${response.data.location_suggestions[0].entity_id}&entity_type=${response.data.location_suggestions[0].entity_type}`, {
//   headers: {"user-key":keys.zomatoAPI}
// }).then( response => {
//   this.setState({
//     topDinning: response.data.best_rated_restaurant
//   })
// });
//
//  });
// 
// axios.get('https://trailapi-trailapi.p.mashape.com/?q[city_cont]=Denver', {
//    headers: {"X-Mashape-Key":keys.trialAPI}
//  }).then(res => {
//    this.setState({
//      trails: res.data.places
//    })
//  })


}
componentWillReceiveProps(props){
  // console.log(props,'props props')
  this.setState({
    city: props.match.params.search,
    searchMember: false
  })

}

  render() {
    // console.log(this.props, 'this is from trailsApi')
    console.log(this.state.trails, 'whats my trails ')
 var hidden={
   display:"none"
 }
  return (
    <div>
        {this.state.searchMember? <SearchResult city={this.state.city}/>: ""}

        <div className="ProfileContainer searchOverwrite" style={this.state.searchMember?hidden:{}}>
          <div className="searchTopBar">
            <img src={this.state.bannerPic} />
            <div className="searchTitle">{this.state.city}</div>
          </div>


          <div className="searchBodyContainer">
            <div className="searchBodyLeft">
              <div className="CirclesContainer">
                <div className="circle">
                  <div className="circleImg"><img src='https://i.imgur.com/6mvqxs1.png' /></div>
                  <div className="circleTitle"> Find Squad </div>
                </div>

                <div className="circle" onClick={this.OpenSqdMember}>
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
              <div className="rightBarTitle">Top Restaurants</div>
              {this.state.topDinning?
                this.state.topDinning.splice(0,4).map((restaurant, idx) => {
                  return (
                    restaurant.restaurant.thumb?
                    <div className="singleEvent" key={idx}>
                      <div className="eventPic"><img src={restaurant.restaurant.thumb} /></div>
                      <div className="eventDetail">
                        <div></div>
                        <div className="eventTitle">{restaurant.restaurant.name}</div>
                        <div className="eventFooter">
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <div className="eventAds"> {restaurant.restaurant.location.address + ", " + restaurant.restaurant.location.city}</div>
                        </div>
                      </div>
                    </div>
                    :
                    ""
                  )
                })
                :
                ""
              }

            </div>
          </div>
        </div>


    </div>
  )
  }
}
