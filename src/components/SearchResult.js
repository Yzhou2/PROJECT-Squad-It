import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import SelectSquad from './SelectSquad';


export default class SearchresultCountry extends Component {
    constructor(props) {
      super(props);

      this.state = {
        events: null,
        city: this.props.city,
        users: null,
        bannerPic: ['https://i.imgur.com/oIwuby5.png', 'https://i.imgur.com/KE8Jjx7.png'],
        SelectSquad: false,
        selectUserId: null,
      }
      this.handleClick = this.handleClick.bind(this);
    }


// handleChange(event) {
//   this.setState({
//     search: event.target.value
//   })
// }
//
//

handleClick(val){
  console.log(val)
this.setState({
  selectUserId: val,
  SelectSquad: true
})
}




componentDidMount(){
  axios.get(`http://localhost:3001/api/getUserByDest/${this.state.city}`, {withCredentials: true}).then(
    res => {
      this.setState({
        users: res.data
      })
    });

}

componentWillReceiveProps(props){
  console.log(props,'props props')
  this.setState({
    city: props.city
  });

  axios.get(`http://localhost:3001/api/getUserByDest/${this.state.city}`, {withCredentials: true}).then(
    res => {
      this.setState({
        users: res.data
      })
    });
}


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
 console.log(this.state.selectUserId, 'this is the userid on state')
  return (
    <div>
      <SelectSquad userid={this.state.selectUserId}/>
        <div className="ProfileContainer searchOverwrite">
          <div className="searchTopBar">
            <img src={this.state.bannerPic} />
            <div className="searchTitle">{this.state.city}</div>
          </div>

          <div className="searchBodyBox">
            {this.state.users?  this.state.users.map(
              (user, idx) => {
               return (
                 <div className="searchBodyInner" key={idx}>
                   <div className="searchCard">
                     <div className="profilePic"></div>
                       <div className="cardRight">

                         <div className="InnerCard">
                             <div className="profileName">{user.firstname + " " + user.lastname}</div>
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
                             <button><Link to={{pathname:'/logged/profile', query:{flag:false}}}>View Profile</Link></button>
                             {console.log(user.userid, 'hey yo this is the userid')}
                             <button onClick={()=>{this.handleClick(user.userid)}}>+ To Your Squad</button>
                         </div>
                       </div>
                   </div>
                 </div>
               )
              }
            )
            :
            "There's No User Ready For Squad"
          }
            </div>

            </div>


    </div>
  )
  }
}
