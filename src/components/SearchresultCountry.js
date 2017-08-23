import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchResult from './SearchResult';
import keys from './keys';
import { Link } from 'react-router-dom';



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
<<<<<<< HEAD
        trails: null,
        attractions:[]
=======
        trails: [],
        attractions: [],
>>>>>>> master
      }

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
<<<<<<< HEAD
//
 axios.get(`https://developers.zomato.com/api/v2.1/locations?query=%${this.state.city}`, {
   headers: {"user-key":keys.zomatoAPI}
 }).then( response => {
console.log(response.data.location_suggestions[0], 'this is city code')
axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${response.data.location_suggestions[0].entity_id}&entity_type=${response.data.location_suggestions[0].entity_type}`, {
  headers: {"user-key":keys.zomatoAPI}
}).then( response => {
  console.log(response.data.best_rated_restaurant, 'this is the info for dinning')
  this.setState({
    topDinning: response.data.best_rated_restaurant.splice(0,5)
  })
});
});


axios.get(`https://developers.zomato.com/api/v2.1/locations?query=%${this.state.city}`, {
  headers: {"user-key":keys.zomatoAPI}
}).then( response => {
console.log(response.data.location_suggestions[0], 'this is city code')
  axios.get(`https://fizplaces-fiz-places-v1.p.mashape.com/content/api/v2/places/?lat=${response.data.location_suggestions[0].latitude}&lon=${response.data.location_suggestions[0].longitude}`, {
    headers: {"FIZAPIKEY":keys.fIZAPIKEY, "X-Mashape-Key":keys.xMashapeKey}
  }).then( response => {
    console.log(response.data, 'this is the data came back from interests')
    var newResponse = response.data.results.filter(res => res.pictures && res.description)
    this.setState({
      attractions: newResponse
    })
  });

});




=======
//
//  axios.get(`https://developers.zomato.com/api/v2.1/locations?query=%${this.state.city}`, {
//    headers: {"user-key":keys.zomatoAPI}
//  }).then( response => {
// // console.log(response.data.location_suggestions[0], 'this is city code')
// axios.get(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${response.data.location_suggestions[0].entity_id}&entity_type=${response.data.location_suggestions[0].entity_type}`, {
//   headers: {"user-key":keys.zomatoAPI}
// }).then( response => {
//   this.setState({
//     topDinning: response.data.best_rated_restaurant
//   })
// });
//
// axios.get(`https://fizplaces-fiz-places-v1.p.mashape.com/content/api/v2/places/?lat=${response.data.location_suggestions[0].latitude}&lon=${response.data.location_suggestions[0].longitude}`, {
//   headers: {"FIZAPIKEY":keys.fIZAPIKEY, "X-Mashape-Key":keys.xMashapeKey }
// }).then(res => {
//   // console.log(res.data.results, 'whats the results?????')
//   this.setState({
//     attractions: res.data.results
//   })
// })
//
//  });
// //
// // console.log(this.state.city, 'whats the city on state ')
// axios.get(`https://trailapi-trailapi.p.mashape.com/?q[city_cont]=${this.state.city}`, {
//    headers: {"X-Mashape-Key":keys.trialAPI}
//  }).then(res => {
//   //  console.log(res.data.places, 'this is the places')
//    var newRes = res.data.places.filter( placeObj => placeObj.pictures !== null)
//    console.log(newRes, 'return list of places with pic')
//    this.setState({
//      trails: newRes
//    })
//
//
//  })
>>>>>>> master




}
componentWillReceiveProps(props){
  // console.log(props,'props props')
  this.setState({
    city: props.match.params.search,
    // searchMember: false
  })

}

  render() {
    // console.log(this.props, 'this is from trailsApi')
<<<<<<< HEAD
    console.log(this.state.topDinning, 'whats dinning ')
    console.log(this.state.attractions,'whats acctraction')
=======
    // console.log(this.state.attractions, 'whats my attractions!!!! ')
>>>>>>> master
 var hidden={
   display:"none"
 }
  return (
    <div>


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

                <Link to={`/logged/searchresult/member/${this.state.city}`}><div className="circle">
                  <div className="circleImg"><img src='https://i.imgur.com/iofL0bm.png' /></div>
                  <div className="circleTitle"> Find Squad Member</div>
                </div></Link>

                <Link to={`/logged/searchresult/host/${this.state.city}`}><div className="circle">
                  <div className="circleImg"><img src='https://i.imgur.com/5QnPJfj.png' /></div>
                  <div className="circleTitle"> Eat With Local</div>
                </div></Link>
              </div>


              <div className="trailContainer">
                  <div className="trailHeader">Top Hiking Trails</div>
                  <div className="trailmain">
                    {this.state.trails.map(trail=>{
                        // console.log(trail.activities, 'i need the thumbnail')
                      return(
                        trail.activities?
                        <div className="trail">

                            <div className="trailTitle">{trail.name}</div>
                            <div className="trailtype"></div>
                            <div className="trailText">
                              <i className="fa fa-map-marker" aria-hidden="true"></i>
                              <div className="trailLocation">{trail.city + ', ' + trail.state + ', ' + trail.country}</div>
                            </div>
                        </div>
                        :
                        ""
                      )
                    })}

                  </div>
              </div>

<<<<<<< HEAD
              <div className="attractionContainer">
                  <div className="attractionHeader">Highest Ranked Attractions</div>
                  {
                    this.state.attractions.splice(0,5).map((attraction,idx) => {
                      return(
                        <div className="attractionBlock" key={idx}>
                          <div className="attractionPic">
                            <img src={attraction.pictures.url?attraction.pictures.url:attraction.pictures.image} alt="No img shown"/>
                          </div>
                          <div className="attractionText">
                            <div className="attractionTitle">{attraction.name}</div>
                            <div className="attractionDesc">{attraction.description}</div>
                          </div>
                        </div>
                      )
                    })
                  }
=======
              <div className="trailContainer attractionsContainer">
                  <div className="trailHeader">Highest Rated Attractions</div>
                  <div className="trailmain topPlace">
                    {this.state.attractions.map( place => {
                      return (
                        place.pictures.image?
                        <div className="attraction">
                          <div className="attract_pic">
                            <img src={place.pictures.image} />
                          </div>
                          <div className="attract_rightbox">
                            <div className="attract_name">{place.name}</div>
                            <div className="attract_Desc">{place.description}</div>
                          </div>
                        </div>
                        :
                        ""
                      )
                    } )}
                  </div>
>>>>>>> master
              </div>


            </div>


            <div className="searchBodyRight">
              <div className="rightBarTitle">Top Restaurants</div>
              {this.state.topDinning?
                this.state.topDinning.splice(0,3).map((restaurant, idx) => {
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
