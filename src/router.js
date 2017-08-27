import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import CreateSquad from './components/CreateSquad';
import CreateTripPlan from './components/CreateTripPlan';
import SearchresultCountry from './components/SearchresultCountry';
import SearchResult from './components/SearchResult';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SelectSquad from './components/SelectSquad';
import Chat_room from './components/ChatRoom/Chat_room';
import Safety from './components/Safety';
import Explore from './components/Explore';


export default class Router extends Component{
  constructor(){
    super();

    this.state={
      blur: null,
    }
this.blur = this.blur.bind(this);
this.unblur = this.unblur.bind(this);
  }

  blur(){
    this.setState({
      blur: true
    })
  }

  unblur(){
    console.log('clicked unblur')
    this.setState({
      blur: false
    })
  }

  render(){
    var blur = {
        filter: 'blur(5px)'
    }
    console.log(this.state.blur, 'blur is turned on or not')
  return (
  <div>
    <div style={this.state.blur?blur:{}}>
        <Header history={this.props.history} />
        <div className="headerPH"></div>
        <Sidebar/>
        <div className="sidebarPH"></div>
    </div>

  <Switch>
    <Route path="/logged/dashboard" render={props => <Dashboard blur = {this.blur} unblur = {this.unblur}/>}/>
    <Route component={ Profile } path="/logged/profile" />
    <Route component={ EditProfile } path="/logged/editProfile" />
    <Route component={ CreateSquad } path="/logged/createsquad" />
    <Route component={ CreateTripPlan } path="/logged/createtrip" />
    <Route component={ SearchresultCountry } path="/logged/searchresultCT/:search" />
    <Route component={ SearchResult } path='/logged/searchresult/:category/:dest' />
    <Route component={ SelectSquad } path='/logged/selectsquad' />
    <Route component={ Chat_room } path="/logged/chat" />
    <Route component={ Safety } path="/logged/safety" />
    <Route component={ Explore } path="/logged/explore" />

  </Switch>
  </div>
)}
}
