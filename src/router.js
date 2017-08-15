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


export default class Router extends Component{
  constructor(){
    super();

    this.state={
      search: null,
      flag: null,
    }
  this.updateSearch = this.updateSearch.bind(this);
  this.updateFlag = this.updateFlag.bind(this);
  }

  updateSearch(val){
   this.setState({
     search: val,
   })
  }

  updateFlag(bool){
    this.setState({
      flag: bool
    })
  }

  render(){
    console.log(this.state.flag, 'checkkkkkkk')
  return (
  <div>
  <Header history={this.props.history} updateSearch={this.updateSearch}/>
  <Sidebar updateFlag={this.updateFlag}/>

  <Switch>
    <Route path="/logged/dashboard" component={ Dashboard } />
    <Route component={ Profile } path="/logged/profile" />
    <Route component={ EditProfile } path="/logged/editProfile" />
    <Route component={ CreateSquad } path="/logged/createsquad" />
    <Route component={ CreateTripPlan } path="/logged/createtrip" />
    <Route component={ SearchresultCountry } path="/logged/searchresultCT/:search" updateFlag={this.updateFlag}/>
    <Route component={ SearchResult } path='/logged/searchresult' />
    <Route component={ SelectSquad } path='/logged/selectsquad' />
    <Route component={ Chat_room } path="/logged/chat" />

  </Switch>
  </div>
)}
}
