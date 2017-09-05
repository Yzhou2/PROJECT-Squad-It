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
import UserProfile from './components/UserProfile';
import axios from 'axios';


export default class Router extends Component{
  constructor(){
    super();

    this.state={
      blur: null,
      profilePic: 'https://i.imgur.com/rbClaeN.png'
    }
this.blur = this.blur.bind(this);
this.unblur = this.unblur.bind(this);
this.updateProfile = this.updateProfile.bind(this);
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

  updateProfile(){
     this.Header.updateProfile();
  }


  render(){
    var blur = {
        filter: 'blur(5px)'
    }
    console.log(this.state.blur, 'blur is turned on or not')
  return (
  <div>
    <div style={this.state.blur?blur:{}}>
        <Header ref={instance => { this.Header = instance; }}/>
        <div className="headerPH"></div>
        <Sidebar profilePic={this.state.profilePic}/>
        <div className="sidebarPH"></div>
    </div>

  <Switch>
    <Route path="/logged/dashboard" render={props => <Dashboard blur = {this.blur} unblur = {this.unblur}/>}/>
    <Route path="/logged/profile/me" render={props => <Profile blur = {this.blur}
                                                               unblur = {this.unblur}
                                                               updateProfile={this.updateProfile}/>}/>
    <Route component={ UserProfile } path="/logged/profile/:userid" />
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
