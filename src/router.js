import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import CreateSquad from './components/CreateSquad';
import CreateTripPlan from './components/CreateTripPlan';
import SearchresultCountry from './components/SearchresultCountry';
import SearchResult from './components/SearchResult';


export default function(){
  return (
  <div>
  <Switch>
    <Route path="/logged/dashboard" component={ Dashboard } />
    <Route component={ Profile } path="/logged/profile" />
    <Route component={ EditProfile } path="/logged/editProfile" />
    <Route component={ CreateSquad } path="/logged/createsquad" />
    <Route component={ CreateTripPlan } path="/logged/createtrip" />
    <Route component={ SearchresultCountry } path="/logged/searchresultCT" />
    <Route component={ SearchResult } path='/logged/searchresult' />
  </Switch>
  </div>
)}
