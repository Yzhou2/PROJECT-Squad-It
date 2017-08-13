import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';


export default class SearchresultCountry extends Component {
    constructor() {
      super();

      this.state = {
        events: null,
        destination: null,
        users: null,
        bannerPic: ['https://i.imgur.com/oIwuby5.png', 'https://i.imgur.com/KE8Jjx7.png']
      }
      this.update_destination = this.update_destination.bind(this);
    }


// handleChange(event) {
//   this.setState({
//     search: event.target.value
//   })
// }
//
//


update_destination(val){
  this.setState({
    destination: val
  })
}

// componentDidMount(){
//   axios.get(`http://localhost:3001/api/getUserByDest/${this.state.destination}`, {withCredentials: true}).then(
//     res => {
//       this.setState({
//         users: res.data
//       })
//     }
//   )
// }

// <div className="searchBar">
//     <div className="searchBarInner">
//       <div className="searchBarInnerBox">
//           <div className="searchIndie">
//               <div>Gender</div>
//               <input></input>
//           </div>
//
//           <div className="searchIndie">
//               <div>Age</div>
//               <div className="ageInput">
//                   <input></input>
//                   <div>To</div>
//                   <input></input>
//               </div>
//           </div>
//
//           <div className="searchIndie">
//               <div>Country</div>
//               <input></input>
//           </div>
//       </div>
//
//
//
//     <div className="searchBarInnerBox">
//         <div className="searchIndie">
//             <div>Language Spoken</div>
//             <input></input>
//         </div>
//
//         <div className="searchIndie">
//             <div>Arrive Before</div>
//             <input></input>
//
//             <div>Depart After</div>
//             <input></input>
//
//         </div>
//
//
//         <div className="searchIndie">
//             <button>Search</button>
//         </div>
//     </div>
// </div>
// </div>

  render() {
 console.log(this.state.events, 'this is the state of search result')
  return (
    <div>

        <div className="ProfileContainer searchOverwrite">
          <div className="searchTopBar">
            <img src={this.state.bannerPic} />
            <div className="searchTitle">name</div>
          </div>

          <div className="searchBodyBox">



              <div className="searchBodyInner">
                <div className="searchCard">
                  <div className="profilePic"></div>
                    <div className="cardRight">

                      <div className="InnerCard">
                          <div className="profileName">Jessica Heathcote</div>
                          <div className="MoreDetail">
                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                            <div>Speaks English</div>
                          </div>

                          <div className="MoreDetail">
                            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                            <div>Avaliable To Join Squad</div>
                          </div>
                    </div>

                      <div className="btnContainer">
                          <button>View Profile</button>
                          <button>+ To Your Squad</button>
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
