import React, { Component } from 'react';


export default class Header extends Component {
    constructor() {
      super();

      this.state = {
          search:null
      }
      this.handleChange = this.handleChange.bind(this);
    }


handleChange(event) {
  this.setState({
    search: event.target.value
  })
}


  render() {
  return (
    <div className="header">
      <div className="headerInner">
        <div className="leftMargin headerlogo"><img src='https://i.imgur.com/E7Zuby6.png' /></div>

        <div>
        <input onChange={this.handleChange} />
        <button type="submit" className="search"><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>

      </div>

    <div className="headerInner">
      <div className="leftMargin">notification</div>
      <div className="leftMargin">name</div>
      <div className="leftMargin">profile_pic</div>
    </div>

    </div>
  )
  }
}
