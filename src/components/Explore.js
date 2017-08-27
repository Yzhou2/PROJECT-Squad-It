import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Explore extends Component{
  constructor() {
    super();

    this.state = {
      search: null
    }
this.handleChange = this.handleChange.bind(this);
  }

handleChange(event){
  this.setState({
    search: event.target.value
  })
}

  render() {

    return (


      <div className="ProfileContainer exploreContainer">
        <div className="explore">
          <div className="exploreTitle">Tell Us Where You Want To Go</div>
          <input className="exploreInput" onChange={this.handleChange}/>
          <Link to={`/logged/searchresultCT/${this.state.search}`}><button>Explore</button></Link>
        </div>
      </div>
    )
  }
}
