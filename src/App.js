import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import './App.css';
import MainRoute from './components/MainRoute';
import Dashboard from './components/Dashboard'
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import CreateSquad from './components/CreateSquad';
import CreateTripPlan from './components/CreateTripPlan';
import SearchresultCountry from './components/SearchresultCountry';
import SearchResult from './components/SearchResult';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import Router from './router';



class App extends Component {
  render() {
    return (
      <div className="body">

      <Switch>
        <Route exact path="/" component={ Landing } />
        <Route path="/logged" component={ Router } />
      </Switch>
      </div>
    );
  }
}

export default App;
