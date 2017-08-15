import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    constructor(props) {
      super(props);

      this.state = {
          firstname:null,
          profile_img_url: null,
          search: null,
          searchresult:null
      }
      this.handleChange = this.handleChange.bind(this);
      // this.handleClick = this.handleClick.bind(this);
    }


handleChange(event) {
  this.setState({
    search: event.target.value
  })
}

// handleClick(){
//
//   this.props.history.push(`/logged/searchresultCT/${this.state.search}`)
// }


componentDidMount() {
  console.log('mounted', this.props)
  axios.get( 'http://localhost:3001/api/user', {withCredentials:true} ).then( response => {
  console.log('response!!!!!!!',response.data)//empty
  this.setState({
    firstname: response.data[0].firstname,
    profile_img_url: response.data[0].profile_img_url

  });
});
}

  render() {
    console.log(this.state.search)
  return (
    <div className="header">
      <div className="headerInner">
        <div className="leftMargin headerlogo"><img src='https://i.imgur.com/E7Zuby6.png' alt="fixed"/></div>

        <div>
        <input onChange={this.handleChange} />
        <Link to={`/logged/searchresultCT/${this.state.search}`}><button className="search"><i className="fa fa-search" aria-hidden="true"></i></button></Link>
        </div>

      </div>

    <div className="headerInner">
      <div className="notification"><i className="fa fa-bell" aria-hidden="true"></i></div>
      <div className="headerNav">{this.state.firstname}</div>
      <div className="headerNav headerimg"><img src={this.state.profile_img_url} alt="fixed"/></div>
    </div>

    </div>
  )
  }
}
